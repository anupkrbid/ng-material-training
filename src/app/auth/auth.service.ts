import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  authChange$ = new Subject<boolean>();
  constructor(private router: Router) { }

  signup(data: any) {
    this.user = {
      name: data.name,
      date: data.dateOfBirth,
      email: data.email,
      password: data.password,
      userid: Math.round(Math.random() * 10000).toString()
    };
    this.redirectAfterSignIn();
  }

  signin(data: any) {
    this.user = {
      email: data.email,
      password: data.password
    };
    this.redirectAfterSignIn();
  }

  signout() {
    this.user = null;
    this.redirectAfterSignOut();
  }

  getUser() {
    return { ...this.user };
  }

  isAuthenticated() {
    return !!this.user;
  }

  redirectAfterSignIn() {
    this.authChange$.next(true);
    this.router.navigate(['/training']);
  }

  redirectAfterSignOut() {
    this.authChange$.next(false);
    this.router.navigate(['/sign-in']);
  }
}
