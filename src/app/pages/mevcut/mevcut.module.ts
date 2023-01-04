import { HotToastModule } from '@ngneat/hot-toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MevcutPageRoutingModule } from './mevcut-routing.module';

import { MevcutPage } from './mevcut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MevcutPageRoutingModule,
    ReactiveFormsModule,
   [HotToastModule.forRoot()],
  ],
  declarations: [MevcutPage]
})
export class MevcutPageModule {}
