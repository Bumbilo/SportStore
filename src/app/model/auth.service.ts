import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestDataSource } from './rest.datasource';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private _dataSource: RestDataSource) {
  }

  authenticate(userName: string, password: string) {
    return this._dataSource.authenticate(userName, password);
  }

  get authenticated(): boolean {
    return this._dataSource.auth_token !== null;
  }

  clear() {
    this._dataSource.auth_token = null;
  }
}
