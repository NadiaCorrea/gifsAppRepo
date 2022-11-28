import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/searchResponse.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  providers:[]
})
export class ResultadosComponent implements OnInit {

  constructor(private gisfService :GifsService) { }

  ngOnInit(): void {
  }

  get results():Gif []{
    return this.gisfService.results;
  }

}
