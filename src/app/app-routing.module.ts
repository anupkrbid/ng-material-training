import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'sign-in', loadChildren: './auth/sign-in/sign-in.module#SignInModule' },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
  { path: 'training', loadChildren: './training/training.module#TrainingModule' },
  { path: '**', redirectTo: 'sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { preloadingStrategy: PreloadAllModules }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
