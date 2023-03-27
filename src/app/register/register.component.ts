import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  error: string = '';
  registerForm = new FormGroup({

    userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-zA-Z0-9]{3,8}$')]),

  })


  constructor(private _authService: AuthService, private _router: Router) {
  }


  submintRegisterForm(registerForm: FormGroup) {

    if (this._authService.register(registerForm.value))
      this._router.navigate(['/login'])
    else
      this.error = "Email is already registered"


  }

}
