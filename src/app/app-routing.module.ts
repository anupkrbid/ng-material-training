import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'sign-in', loadChildren: './auth/sign-in/sign-in.module#SignInModule' },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
  { path: 'training', loadChildren: './training/training.module#TrainingModule' },
  { path: '**', redirectTo: 'sign-in'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, errorHandler: (e) => console.log('e', e) })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
