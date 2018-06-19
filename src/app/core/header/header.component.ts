import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

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

  ngOnDestroy() {
    this.authSubscription$.unsubscribe();
  }
}
