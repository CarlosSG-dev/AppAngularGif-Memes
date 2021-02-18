import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultados(){
    return this.GifsServiceService.resultados;
  }

  constructor(private GifsServiceService: GifsServiceService) { }
    
  
}
