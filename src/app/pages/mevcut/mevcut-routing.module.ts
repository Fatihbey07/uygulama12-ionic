import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MevcutPage } from './mevcut.page';

const routes: Routes = [
  {
    path: '',
    component: MevcutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MevcutPageRoutingModule {}
