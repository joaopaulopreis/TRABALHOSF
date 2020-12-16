import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-cerveja',
    pathMatch: 'full'
  },
  {
    path: 'lista-cerveja',
    loadChildren: () => import('./lista-cerveja/lista-cerveja.module').then( m => m.ListaCervejaPageModule)
  },
  {
    path: 'cadastro-cerveja',
    loadChildren: () => import('./cadastro-cerveja/cadastro-cerveja.module').then( m => m.CadastroCervejaPageModule)
  },
  {
    path: 'cadastro-cerveja/:codigo',
    loadChildren: () => import('./cadastro-cerveja/cadastro-cerveja.module').then( m => m.CadastroCervejaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
