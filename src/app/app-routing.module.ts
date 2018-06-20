import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { NotAuthGuard } from './auth/not-auth.guard';

const routes: Routes = [
  { path: '', canActivate: [NotAuthGuard], loadChildren: './home/home.module#HomeModule' },
  { path: 'sign-in', canActivate: [NotAuthGuard], loadChildren: './auth/sign-in/sign-in.module#SignInModule' },
  { path: 'sign-up', canActivate: [NotAuthGuard], loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
  { path: 'training', canActivate: [AuthGuard], loadChildren: './training/training.module#TrainingModule' },
  { path: '**', redirectTo: 'sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { preloadingStrategy: PreloadAllModules }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
