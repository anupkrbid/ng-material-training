import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
