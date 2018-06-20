import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  authSubscription$: Subscription;
  @Output() closeSideNav = new EventEmitter<void>();
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
