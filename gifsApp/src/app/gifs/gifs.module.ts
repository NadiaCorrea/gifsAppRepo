import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';
import { GifsService } from './services/gifs.service';

@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule //hay que importarlo para que funcione lo del ngModule
  ],
  providers:[
    GifsService
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
