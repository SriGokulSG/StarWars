import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  details: any;
  films: any = [];
  vehicles: any = [];
  spaceships: any = [];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    // console.log(this.courseDetailObj.angularTreeGridObj.configs)
    this.activatedRoute.params.subscribe((params: any) => {
      if (params && params.id) {
        this.getCharacterDetails(params.id);
      }
    });
  }

  getCharacterDetails(characterId: number) {
    this.movieService.getCharacterDetails(characterId).subscribe(response => {
      this.details = response;
      // console.log(this.details)
      if (this.details.species.length == 0) {
        this.details.species = "Human"
      } else {
        this.movieService.fetchAPI(this.details.species[0]).subscribe(response => {
          this.details.species = response.name;
          // console.log(this.details)
        })
      }
      this.movieService.fetchAPI(this.details.homeworld).subscribe(response => {
        this.details.homeworld = response.name;
        // console.log(this.details)
      })
      this.details.films.forEach((element: string) => {
        this.movieService.fetchAPI(element).subscribe(response => {
          this.films.push(response);
          // console.log(this.films)
        })
      });
      this.details.vehicles.forEach((element: string) => {
        this.movieService.fetchAPI(element).subscribe(response => {
          this.vehicles.push(response);
          // console.log(this.vehicles)
        })
      });
      this.details.starships.forEach((element: string) => {
        this.movieService.fetchAPI(element).subscribe(response => {
          this.spaceships.push(response);
          // console.log(this.spaceships)
        })
      });
    })
  }

}
