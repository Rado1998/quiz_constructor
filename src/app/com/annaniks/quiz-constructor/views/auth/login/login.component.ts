import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginResponseModel, LoginRequestModel } from '../auth.models';

@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._formBuilder();
  }

  private _formBuilder(): void {
    this._loginForm = this._fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  public login(): void {
    if (this._loginForm.valid) {
      let sendingData: LoginRequestModel = {
        username: this._loginForm.get('username').value,
        password: this._loginForm.get('password').value
      }
      this._authService.login(sendingData).subscribe((data: LoginResponseModel) => {
        console.log(data);
      })
    }
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

}
