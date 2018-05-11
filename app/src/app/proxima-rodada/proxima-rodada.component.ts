import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proxima-rodada',
  templateUrl: './proxima-rodada.component.html',
  styleUrls: ['./proxima-rodada.component.css']
})
export class ProximaRodadaComponent implements OnInit {

  constructor() { }

  public partidas = [];
  public clubes = [];
  public todosOsClubes = [];
  public rodada = 0;
  public partidaCarregada = false;
  public clubesCasa = [];
  public clubesVisita = [];

  listarPartidas() {
    
  }

  listar() {
    this.partidas.forEach((partida) => {
      this.todosOsClubes.forEach((clube) => {
        if(clube.id == partida.clube_casa_id) this.clubesCasa.push(clube);
        if(clube.id == partida.clube_visitante_id) this.clubesVisita.push(clube);
      }) 
    });
    this.partidaCarregada = !this.partidaCarregada;
  }

  listarPartidasServer() {
    let $this = this;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/partidas");
    xhr.addEventListener("load", function() {
      var response = JSON.parse(this.responseText);
      $this.partidas = response.partidas;
      $this.rodada = response.rodada;
      $this.todosOsClubes = response.clubes;
    });

    xhr.send();
  }

  ngOnInit() {
    this.listarPartidasServer();
  }

}
