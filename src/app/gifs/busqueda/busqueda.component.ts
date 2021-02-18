import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  

  constructor(private GifsServiceService: GifsServiceService){

  }
    buscar(){
      console.log(this.txtBuscar)

     let valor=this.txtBuscar.nativeElement.value;

     if(valor.trim().length==0){
       return
     }
     this.GifsServiceService.buscarGifs(valor);
     this.txtBuscar.nativeElement.value = '';
    }
  

}
