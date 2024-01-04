import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = ""
  private pokeData: PokemonData | any

  constructor(private http: HttpClient) {
    this.baseUrl = enviroment.pokeApi
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`)
    console.log(this.pokeData)
    return this.pokeData
  }
}
