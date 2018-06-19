import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  authChange$ = new Subject<boolean>();
  constructor() { }

  signup(data: any) {
    this.user = {
      name: data.name,
      date: data.dateOfBirth,
      email: data.email,
      password: data.password,
      userid: Math.round(Math.random() * 10000).toString()
    };
    this.authChange$.next(true);
  }

  signin(data: any) {
    this.user = {
      email: data.email,
      password: data.password
    };
    this.authChange$.next(true);
  }

  signout() {
    this.user = null;
    this.authChange$.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuthenticated() {
    return !!this.user;
  }
}
