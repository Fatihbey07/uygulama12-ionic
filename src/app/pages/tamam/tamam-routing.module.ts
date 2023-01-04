import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamamPage } from './tamam.page';

const routes: Routes = [
  {
    path: '',
    component: TamamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamamPageRoutingModule {}
