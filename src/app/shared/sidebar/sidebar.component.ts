import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsServiceService) { }

 

}
