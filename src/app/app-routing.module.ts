import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
  path: 'login',
  loadChildren: () =>
  import('./pages/login/login.module').then((m) => m.LoginPageModule),
      ...canActivate(redirectToHome),
  },
  {path:'home',
  loadChildren:() =>
  import('./pages/home/home.module').then((m)=>m.HomePageModule),
  ...canActivate(redirectToLogin),
  },
  {path:'signup',
  loadChildren:() =>
  import('./pages/signup/signup.module').then((m)=>m.SignupPageModule),
  ...canActivate(redirectToHome),
  },
  {path:'profil',
  loadChildren:() =>
  import('./pages/profil/profil.module').then((m)=>m.ProfilPageModule),
  ...canActivate(redirectToLogin),
  },
  {
    path: 'mevcut',
    loadChildren: () => import('./pages/mevcut/mevcut.module').then( m => m.MevcutPageModule)
  },
  {
    path: 'tamam',
    loadChildren: () => import('./pages/tamam/tamam.module').then( m => m.TamamPageModule)
  },
  {
    path: 'ekle',
    loadChildren: () => import('./pages/ekle/ekle.module').then( m => m.EklePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
