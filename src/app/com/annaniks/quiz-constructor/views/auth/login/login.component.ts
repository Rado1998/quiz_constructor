import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginResponseModel, LoginRequestModel } from '../auth.models';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private _loginForm: FormGroup;
  private _unsubscribe$: Subject<void> = new Subject<void>();
  
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _cookieService: CookieService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._formBuilder();
  }

  private _formBuilder(): void {
    this._loginForm = this._fb.group({
      username: ['annaniks', Validators.required],
      password: ['annaniks', Validators.required]
    })
  }

  public login(): void {
    if (this._loginForm.valid) {
      let sendingData: LoginRequestModel = {
        username: this._loginForm.get('username').value,
        password: this._loginForm.get('password').value
      }
      this._authService.login(sendingData)
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe((data: LoginResponseModel) => {
          this._cookieService.put('accessToken', data.token);
          this._router.navigate(['/questions']);
        })
    }
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }


}
