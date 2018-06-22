import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private user: any;
  isLoading$ = new BehaviorSubject<boolean>(false);
  authChange$ = new Subject<boolean>();
  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private snackBar: MatSnackBar) {}

  signup(data: any) {
    this.isLoading$.next(true);
    this.afAuth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => console.log(result))
      .catch((error: any) => {
        this.isLoading$.next(false);
        this.openSnackBar(error.mesaage, null);
      });
  }

  signin(data: any) {
    this.isLoading$.next(true);
    this.afAuth.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(result => console.log(result))
      .catch((error: any) => {
        this.isLoading$.next(false);
        this.openSnackBar(error.mesaage, null);
      });
  }

  signout() {
    this.afAuth.auth.signOut();
    this.loggedIn = false;
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
    this.isLoading$.next(false);
    this.authChange$.next(true);
    this.router.navigate(['/training']);
  }

  redirectAfterSignOut() {
    this.loggedIn = false;
    this.isLoading$.next(false);
    this.authChange$.next(false);
    this.router.navigate(['/sign-in']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
