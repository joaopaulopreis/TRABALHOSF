import { Component, OnInit } from '@angular/core';
import { cerveja } from 'shared/cerveja';
import { CervejaService } from 'shared/cerveja.service';
import { ViewWillEnter } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cerveja',
  templateUrl: './lista-cerveja.page.html',
  styleUrls: ['./lista-cerveja.page.scss'],
})
export class ListaCervejaPage implements OnInit, ViewWillEnter {

  listaCerveja: cerveja[];

  constructor( 
    private listaService: CervejaService, 
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.listar();
  }

  listar() {  
    this.listaCerveja = this.listaService.getCervejas();
  }

  editar(cerveja: cerveja) {
    this.router.navigate(['cadastro-cerveja', cerveja.codigo]);
  }


  excluir(cerveja:cerveja) {
    this.listaService.excluir(cerveja);
    this.listar();
  }

}
