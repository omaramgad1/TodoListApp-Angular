import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isLoggedIn: boolean = false;
  constructor(private _authService: AuthService) {

    _authService.currentUser.subscribe(() => {
      if (_authService.currentUser.getValue() != null) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }



    })
  }


  isLogOut(): void {

    this._authService.logout()


  }

}
