import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private user: any;
  authChange$ = new Subject<boolean>();
  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private snackBar: MatSnackBar) {}

  signup(data: any) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => console.log(result))
      .catch((error: any) => this.openSnackBar(error.mesaage, null));
  }

  signin(data: any) {
    this.afAuth.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(result => console.log(result))
      .catch((error: any) => this.openSnackBar(error.message, null));
  }

  signout() {
    this.afAuth.auth.signOut();
    this.loggedIn = false;
    // this.redirectAfterSignOut();
  }

  getUser() {
    return this.user;
  }

  initAuthListener() {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        console.log('auth', auth);
        this.user = auth;
        this.redirectAfterSignIn();
      } else {
        this.redirectAfterSignOut();
      }
    });
  }

  isAuthenticated() {
    return this.loggedIn;
  }

  redirectAfterSignIn() {
    this.loggedIn = true;
    this.authChange$.next(true);
    this.router.navigate(['/training']);
  }

  redirectAfterSignOut() {
    this.loggedIn = false;
    this.authChange$.next(false);
    this.router.navigate(['/sign-in']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
