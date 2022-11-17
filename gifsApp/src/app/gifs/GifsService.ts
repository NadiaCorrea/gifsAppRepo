import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private history : String [] = [];

  constructor() { }

  getHistory (){
    return this.history;
  }

  buscarGifs(query:String){
    this.history.unshift(query);
  }

}
