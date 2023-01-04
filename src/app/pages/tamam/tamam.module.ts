import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamamPageRoutingModule } from './tamam-routing.module';

import { TamamPage } from './tamam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamamPageRoutingModule
  ],
  declarations: [TamamPage]
})
export class TamamPageModule {}
