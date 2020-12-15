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
                nome: 'D&D - Dungeons & Dragons e5',
                foto_cerveja: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                descricao: 'Manual - de como jogar Dungeons & Dragons um RPG muito famoso em sua modalidade.',
                marca: 'Wizards of the Coast, TSR, Inc., Kenzer & Company',
                cervejaria: 'Wizards of the Coast, TSR, Inc., Kenzer & Company',
                data_lancamento: new Date(2019,1,21),
                estilo: Estilo.ALTBIER
            },
            {
                codigo: 2,
                nome: 'Metamorphosis: Henshin',
                foto_cerveja: 'https://honeysanime.com/wp-content/uploads/2016/10/Henshin-manga-300x463.jpg',
                descricao: 'Saki Yoshida, é uma menina que ficou isolada pelo fato de ser introvertida, querendo mudar de ideia, ela muda de colégio e coemça a tentar subir sua escala social através da beleza, e acaba se drogando e isso acarretará em sua metamorfose.',
                marca: 'Wizards of the Coast, TSR, Inc., Kenzer & Company',
                cervejaria: 'Nenhuma',
                data_lancamento: new Date(2013,6,14),
                estilo: Estilo.BELGIAN_DUBBEL
            },
            {
                codigo: 3,
                nome: 'A maldição do tigre',
                foto_cerveja: 'https://images-na.ssl-images-amazon.com/images/I/91Iq1jyYlAL.jpg',
                descricao: 'Tigers Curse é um romance dos gêneros épico, aventura e mitologia hindu, escrito por Colleen Houck e é o primeiro livro de uma série. Publicado em mais 18 países, chegou a umas das melhores posições no The New York Times. Foi rejeitado por muitas',
                marca: 'Wizards of the Coast, TSR, Inc., Kenzer & Company',
                cervejaria: 'Arqueiro',
                data_lancamento: new Date(2011),
                estilo: Estilo.BOCK
            },
            {
                codigo: 4,
                nome: 'Naruto Shippuden',
                foto_cerveja: 'https://img.quizur.com/f/img5ee2777517b723.40460255.png?lastEdited=1591900059',
                descricao: 'Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila',
                marca: 'Wizards of the Coast, TSR, Inc., Kenzer & Company',
                cervejaria: 'Shueisha',
                data_lancamento: new Date(2007),
                estilo: Estilo.MUNICH_HELLES
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

