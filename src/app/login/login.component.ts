import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-zA-Z0-9]{3,8}$')]),
  })
  constructor(private _authService: AuthService, private router: Router) {



  }
  submintloginForm(loginForm: FormGroup) {
    if (this._authService.login(loginForm.value))
      this.router.navigate(['/todos']);
    else
      alert("user is not found");
  }
}
