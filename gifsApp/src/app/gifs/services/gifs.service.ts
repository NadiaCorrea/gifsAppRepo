import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _history : string [] = [] //el nombre lleva _ por convenio se le pone el _ a la propiedad y el tipo string en minuscula
  private api_key: string = '23LD3YTvSUl4G4ePchkxdngCS1C9Ha3n';
  private url: string = 'https://api.giphy.com/v1/gifs/search';
  results: Gif[] = [];

  // solo se hace al iniciar el servcio
  constructor(private http:HttpClient){
    this._history = JSON.parse(localStorage.getItem('historial')!) || []; // para avisar que tu eres conciente que puede dar nulo ! y [] para indicar que hacer si en caso de nulo pues lo pone a vacío 
  } // para poder usar el servicio
  
  get history():string []{ // el método : lo que devuelve
    return [...this._history]; // devuelve un copia
  }

  buscarGifs(query:string):void {
    let clean = query.trim().toLocaleLowerCase();

    if(clean !== '' && !this._history.includes(clean)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._history));
    }

     // para hacer una peticion establecemos los paremetros que necesitaremos 
    const params = new HttpParams()// los params no se pueden modificar solo se indican al crearlo
    .set('api_key', this.api_key)
    .set('q', query)
    .set('limit', 10) // esto se puede hacer porque este paramatro es propio de la api (ver el api creado en giphy) 

    //el params.set() no estable los atributos ya que crean un nuevo objeto param con esos atributos x eso se lo incicamos cuando lo creamos 
    // params.set('atributo3', 3) 

    this.http.get<GifsSearchResponse>(this.url, {params}) // no importa el orden de los parametros 
    .subscribe((resp)=> {
      // console.log(resp)
      this.results = resp.data // data - elemento que obtiene el resultado
    })
     
    //this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=23LD3YTvSUl4G4ePchkxdngCS1C9Ha3n&q=${query}&limit=25&offset=0&rating=g&lang=en`).subscribe((resp)=>console.log(resp))
  }

  
 





}
