import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  providers: []
})
export class BusquedaComponent implements OnInit {
  //creamos la propiedad para poder usar el ngModel
  query:string ='';

  // se inyecta el servicio declarandolo en el constructor
  constructor(private gifsService : GifsService) { } // nombre del servicio para dar nombre a la variable: tipo de variable

  ngOnInit(): void {
  }
  // search(event:any){
  //   let inputValue = event.target.value; // obtengo valor del input 
  //   if (inputValue != null && inputValue != ''){
  //       this.gifsService.buscarGifs(inputValue);
  //   }
  //   console.log(this.gifsService.getHistory());
  //   //console.log(event.target.value);
  // }

  search(){
    this.gifsService.buscarGifs(this.query);
    this.query ='';
  }

}
