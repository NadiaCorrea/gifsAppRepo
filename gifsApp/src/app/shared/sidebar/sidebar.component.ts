import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: []
})
export class SidebarComponent implements OnInit {

  // historyList : string [] = [];  

  constructor(private gifsService : GifsService) { 
    // this.historyList = gifsService.getHistory();
    // console.log(this.historyList);
  }

  ngOnInit(): void {
  }

  get history():string[]{
    console.log(this.gifsService.history);
    return this.gifsService.history; 
  }

  showSearch(query:string){
    this.gifsService.buscarGifs(query);
  }

}
