import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCervejaPageRoutingModule } from './cadastro-cerveja-routing.module';

import { CadastroCervejaPage } from './cadastro-cerveja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCervejaPageRoutingModule
  ],
  declarations: [CadastroCervejaPage]
})
export class CadastroCervejaPageModule {}
