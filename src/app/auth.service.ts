import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject<any>(null);
  data: any = localStorage.getItem("users")
  users: any[] = JSON.parse(this.data) || [];

  constructor(private _router: Router) {

    if (localStorage.getItem('currentUser') !== null) {
      this.savecurrentuser()
    }

  }

  savecurrentuser() {
    const data: any = localStorage.getItem('currentUser');
    let c: any = JSON.parse(data);
    this.currentUser.next(c)

  }


  login(formdata: any): boolean {

    const found: number = this.users.findIndex((user) => user.email.toLowerCase() == formdata.email.toLowerCase() && user.password === formdata.password);

    if (found != -1) {

      this.currentUser.next(this.users[found]);
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser.getValue()));
      return true;
    }
    return false;


  }


  register(formdata: any): boolean {

    const found: number = this.users.findIndex((user) => user.email.toLowerCase() == formdata.email.toLowerCase());
    console.log(found);

    if (found != -1) {
      return false;
    }
    else {
      const user: object = {
        id: this.users.length === 0 ? 1 : this.users.length + 1,
        ...formdata,
      }

      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));

      return true;
    }
  }

  logout(): void {

    this.currentUser.next(null);
    localStorage.removeItem('currentUser');

    this._router.navigate(['/login'])
  }

}

