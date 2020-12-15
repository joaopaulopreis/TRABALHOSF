import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCervejaPage } from './cadastro-cerveja.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCervejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCervejaPageRoutingModule {}
