import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'auth.component.html'
})
export class AuthComponent {
  public userName: string;
  public password: string;
  public errorMessage: string;

  constructor(private _router: Router, private _auth: AuthService) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this._auth.authenticate(this.userName, this.password)
        .subscribe(response => {
          if (response) {
            this._router.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'Authentication Failed !!!';
        });
    } else {
      this.errorMessage = 'Form data invalid !!!';
    }
  }
}
