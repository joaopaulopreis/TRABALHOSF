import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCervejaPage } from './lista-cerveja.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCervejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCervejaPageRoutingModule {}
