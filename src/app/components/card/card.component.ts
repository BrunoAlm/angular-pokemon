import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  pokemon: PokemonData

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: "",
      sprites: {
        front_default: ''
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon("squirtle")
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          }
          console.log(res)
          console.log(this.pokemon)
        },
        error: (err) => console.log(err)
      }
    )
  }

}
