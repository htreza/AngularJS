import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClubesComponent } from './clubes/clubes.component';

import { HttpModule} from '@angular/http';
import { ProximaRodadaComponent } from './proxima-rodada/proxima-rodada.component';
import { OrdenarClubesPipe } from './ordenar-clubes.pipe';
import { FiltrarClubesPipe } from './filtrar-clubes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClubesComponent,
    ProximaRodadaComponent,
    OrdenarClubesPipe,
    FiltrarClubesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
