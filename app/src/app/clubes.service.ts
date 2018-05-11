import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request } from "@angular/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ClubesService {

  constructor(private _http: Http) { }

  public clubes() {
    return this._http.get("http://localhost:3000/clubes");
  }

  public partidas(){
    return this._http.get("http://localhost:3000/partidas");
  }
}
