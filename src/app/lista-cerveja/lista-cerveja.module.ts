import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCervejaPageRoutingModule } from './lista-cerveja-routing.module';

import { ListaCervejaPage } from './lista-cerveja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCervejaPageRoutingModule
  ],
  declarations: [ListaCervejaPage]
})
export class ListaCervejaPageModule {}
