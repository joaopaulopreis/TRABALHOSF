import { Injectable } from '@angular/core';
import { cerveja } from './cerveja';
import { Estilo } from './estilo.enum';

@Injectable({
    providedIn: 'root'
  })

export class CervejaService {

    private cerveja: cerveja[];

    constructor(){

        this.cerveja = [
            {
                codigo: 1,
                nome: 'Saint Bier Pilsen',
                foto_cerveja: 'http://www.saintbier.com/slir/w344-h866/upload/product_image/pilsen-5c3dd75e16ca4.png',
                descricao: 'A Saint Bier Pilsen é uma cerveja de baixa fermentação, com coloração dourada, límpida e espuma cremosa.',
                marca: 'Saint Bier',
                coloracao: '10 EBC',
                amargor:'12 lBU',
                alcolico: '5,0%',
                cervejaria: 'Santa Catarina',
                data_lancamento: new Date(2019,1,21),
                estilo: Estilo.PILSEN
            },
            {
                codigo: 2,
                nome: 'Saint Bier Belgian',
                foto_cerveja: 'http://www.saintbier.com/slir/w344-h866/upload/product_image/belgian-golden-ale-5c3dd7f6ec99b.png',
                descricao: 'São maltadas, com aroma frutado, de amargor leve e sabor picante, com cor variando do âmbar ao cobre.',
                marca: 'Saint Bier',
                coloracao: '20 EBC',
                amargor:'14 lBU',
                alcolico: '5,2%',
                cervejaria: 'Santa Catarina',
                data_lancamento: new Date(2013,6,14),
                estilo: Estilo.BELGIAN_DUBBEL
            },
            {
                codigo: 3,
                nome: 'San Diego',
                foto_cerveja: 'https://d2o1s8t60x9u9v.cloudfront.net/Custom/Content/Products/98/56/985690_cerveja-barco-san-diego-apa-600ml_m1_636686321331493250.jpg',
                descricao: 'Elaborada no estilo American Pale Ale, possui 5.4% de teor alcoólico, com um bom amargor',
                marca: 'Barco Brewers',
                coloracao: '9 EBC',
                amargor:'36 lBU',
                alcolico: '5,4%',
                cervejaria: 'Santa Catarina',
                data_lancamento: new Date(2011),
                estilo: Estilo.AMERICAN_PALE_ALE
            },
            {
                codigo: 4,
                nome: 'Coruja Weizen',
                foto_cerveja: 'https://clubedomalte.fbitsstatic.net/img/p/coruja-weizen-garrafa-500ml-90641/257825.jpg?w=422&h=422&v=202010231028',
                descricao: 'Clássica como uma cerveja de trigo, mas com um toque de criatividade, a Coruja Weizen traz as típicas notas de cravo e banana das weizenbier, acompanhadas de um toque de personalidade do malte levemente defumado.',
                marca: 'Coruja',
                coloracao: '15 EBC',
                amargor:'18 lBU',
                alcolico: '5,5%',
                cervejaria: 'Santa Catarina',
                data_lancamento: new Date(2007),
                estilo: Estilo.WEIZENBIER
            }
     
        ];
    }

    getCervejas() {
        return this.cerveja;
    }

    excluir(cerveja: cerveja) {
      this.cerveja = this.cerveja.filter(l => l.codigo !== cerveja.codigo);
    }

    salvar(cerveja: cerveja) {
        const indice = this.cerveja.findIndex(l => l.codigo === cerveja.codigo);
        if(indice === -1) {
          this.cerveja = [...this.cerveja, cerveja];
        } else {
          this.cerveja[indice] = {...cerveja};
        }
        console.log(this.cerveja);
    }
    
    getCodigo() {
      return this.cerveja.length + 1;
    }
      
    getCerveja(codigo: number): cerveja {
      return this.cerveja.find(l => l.codigo === codigo);
    }
}

