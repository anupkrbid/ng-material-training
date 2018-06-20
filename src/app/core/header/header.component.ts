import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  authSubscription$: Subscription;
  @Output() toggleSideNav = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription$ =
      this.authService.authChange$
        .subscribe(status => this.isAuthenticated = status);
  }

  onSignOut() {
    this.authService.signout();
  }

  ngOnDestroy() {
    this.authSubscription$.unsubscribe();
  }
}
