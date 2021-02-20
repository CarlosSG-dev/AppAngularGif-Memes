import { HttpClient, HttpParams } from '@angular/common/http';
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
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    
  }

  buscarGifs( query: string = ''){

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);

      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }
    
    //const parametros = new HttpParams().set('apiKey', this.apiKey)
                            //.set('limit', '9')
                            //.set('q', query);

    this.http.get<BusquedaGifsRespuesta>(`https://api.giphy.com/v1/gifs/search?api_key=5kN0QJuDExNtNq8YbJdIJo5grULETUjm&q=${query}&limit=10`)
        .subscribe((resp) =>{
          console.log(resp.data)
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
          
        })


  }

  
}
