import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cerveja } from 'shared/cerveja';
import { Estilo } from 'shared/estilo.enum';
import {CervejaService} from 'shared/cerveja.service';

@Component({
  selector: 'app-cadastro-cerveja',
  templateUrl: './cadastro-cerveja.page.html',
  styleUrls: ['./cadastro-cerveja.page.scss'],
})
export class CadastroCervejaPage implements OnInit {

   
  cerveja: cerveja;
  estilo = Object.keys(Estilo).map((key) => ({ valor: key, descricao: Estilo[key]}));

  constructor(
    private CervejaService: CervejaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 

    this.cerveja = new cerveja();    
    
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
    if(codigo) {
      //this.cerveja = this.LivreService.getcervejas(codigo);
      if(this.cerveja.data_lancamento instanceof Date) {
        this.cerveja.data_lancamento = this.cerveja.data_lancamento.toISOString();
      }
    } else {
      this.cerveja.codigo = this.CervejaService.getCodigo();
    }
  }

  ngOnInit() {
  }

  salvar() {
    console.log(this.cerveja);
    this.cerveja.estilo = Estilo[this.cerveja.estilo];
    this.CervejaService.salvar(this.cerveja);    
    this.router.navigate(['lista-cerveja'])
  }

}
