import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusquedaGifsRespuesta, Gif } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apiKey: string = '5kN0QJuDExNtNq8YbJdIJo5grULETUjm'
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial(){
   
    return [...this._historial];
  }

  constructor( private http: HttpClient){
    
  }

  buscarGifs( query: string = ''){

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
    }
    

    this.http.get<BusquedaGifsRespuesta>(`https://api.giphy.com/v1/gifs/search?api_key=5kN0QJuDExNtNq8YbJdIJo5grULETUjm&q=${query}&limit=10`)
        .subscribe((resp) =>{
          console.log(resp.data)
          this.resultados = resp.data;
          
        })


  }

  
}
