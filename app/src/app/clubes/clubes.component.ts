import { Component, OnInit } from '@angular/core';
import { ClubesService } from '../clubes.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css'],
  providers: [ ClubesService ]
})
export class ClubesComponent implements OnInit {

  constructor(private _service: ClubesService) {
  }

  clubes = [];
  partidas = [];
  todosOsClubes = [];
  fimRodada;
  tempoRestante;

  clubCarregado = false;

  public filtro: string = "";
  public ordenador : string;

  setOrdenador(valor) {
    this.ordenador = valor;
  }

  listarClubes() {

    if(Date.now() < this.fimRodada) {
      this.clubes = [];
      this.ordenador = undefined;
  
      this._service.clubes().subscribe(
        (clubes) => {
          clubes.json().forEach(clube => {
            if(clube.posicao) this.clubes.push(clube);
          });
        },
        (erro) => console.log(erro),
        () => this.clubCarregado = true
      );
    }
  }

  exibirRelogioRodada() {
    this._service.partidas().subscribe(
      (resposta) => {
        let rodadas = [];

        resposta.json().partidas.forEach(partida => {
          rodadas.push(new Date(partida.partida_data).getTime())
        });

        console.log(resposta.json().partidas[0]);
        rodadas.sort((a, b) => b - a);
        this.fimRodada = new Date(rodadas[0]);
        this.tempoRestante ="Encerra no dia: " +  this.fimRodada.getDate() + "  " + this.fimRodada.getHours() + "h " + this.fimRodada.getMinutes() + "m "+ this.fimRodada.getSeconds() + "s";
      },
      (erro) => console.log(erro),
      () => {
        let cont = 1000;
        setInterval(() => {
          let hora = new Date(this.fimRodada - cont);
          this.tempoRestante = "Encerra no dia: " + hora.getDate()+ "  "+  hora.getHours() + "h " + hora.getMinutes() + "m "+ hora.getSeconds() + "s";
          cont += 1000;
        }, 1000)
      }
    );
  }

  ngOnInit() {
    this.exibirRelogioRodada();
  }

}
