import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  birthBox: boolean = false;
  movieBox: boolean = false;
  speciesBox: boolean = false;
  vehicleBox: boolean = false;
  starBox: boolean = false;
  movies: any = [];
  character: any;
  films: any[string] = [];
  species: any[string] = [];
  specimen: any[string] = [];
  vehicles: any[string] = [];
  starships: any[string] = [];
  birthYears: any[] = [];
  loading: boolean = true;
  filters: any = {
    'films': [],
    'species': [],
    'vehicles': [],
    'starships': [],
    'birth_year': []
  };
  pages: number = 1;
  page: number = 0;
  displayMovies: any = [];
  currentNumber: any = [];
  birthClick() {
    this.birthBox = !this.birthBox
  }
  movieClick() {
    this.movieBox = !this.movieBox
  }
  speciesClick() {
    this.speciesBox = !this.speciesBox
  }
  vehiclesClick() {
    this.vehicleBox = !this.vehicleBox
  }
  starClick() {
    this.starBox = !this.starBox
  }

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getPeople();
    this.getFilms();
    this.getSpecies();
    this.getVehicles();
    this.getstarships();
  }


  getPeople() {
    this.movieService.getPeopleList().subscribe(response => {
      this.movies = response.results;
      console.log(this.movies)

      this.movieService.callAPI(2).subscribe(response => {
        this.movies = [...this.movies, ...response.results]
        console.log(this.movies)

        this.movieService.callAPI(3).subscribe(response => {
          this.movies = [...this.movies, ...response.results]
          console.log(this.movies)

          this.movieService.callAPI(4).subscribe(response => {
            this.movies = [...this.movies, ...response.results]
            console.log(this.movies)

            this.movieService.callAPI(5).subscribe(response => {
              this.movies = [...this.movies, ...response.results]
              console.log(this.movies)

              this.movieService.callAPI(6).subscribe(response => {
                this.movies = [...this.movies, ...response.results]
                console.log(this.movies)

                this.movieService.callAPI(7).subscribe(response => {
                  this.movies = [...this.movies, ...response.results]
                  console.log(this.movies)
                  this.movieService.callAPI(8).subscribe(response => {
                    this.movies = [...this.movies, ...response.results]
                    console.log(this.movies)
                    this.movieService.callAPI(9).subscribe(response => {
                      this.movies = [...this.movies, ...response.results]
                      console.log(this.movies)

                      this.character = this.movies;
                      this.getBirthYear();
                      this.currentNumber=[]
                      this.paginate(1);
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  }

  getFilms() {
    this.movieService.getFilms().subscribe(response => {
      response.results.forEach((element: { url: string | number; title: any; }) => {
        this.films.push({ name: element.title, value: element.url })
      });
    })
    console.log(this.films)
  }

  getSpecies() {
    this.movieService.getSpecies().subscribe(response => {
      response.results.forEach((element: {
        name: any; url: string | number;
      }) => {
        this.species.push({ name: element.name, value: element.url })
        this.specimen[element.url] = element.name
      });
    })
    this.movieService.callPages(2, 'species').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.species.push({ name: element.name, value: element.url })
        this.specimen[element.url] = element.name
      });
    })
    this.movieService.callPages(3, 'species').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.species.push({ name: element.name, value: element.url })
        this.specimen[element.url] = element.name
      });
    })
    this.movieService.callPages(4, 'species').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.species.push({ name: element.name, value: element.url })
        this.specimen[element.url] = element.name
      });
    })
    this.species[''] = 'Human'
    this.specimen[''] = 'Human'
    console.log(this.species)
  }

  getVehicles() {
    this.movieService.getVehicles().subscribe(response => {
      response.results.forEach((element: {
        name: any; url: string | number;
      }) => {
        this.vehicles.push({ name: element.name, value: element.url })
      });
    })
    this.movieService.callPages(2, 'vehicles').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.vehicles.push({ name: element.name, value: element.url })
      });
    })
    this.movieService.callPages(3, 'vehicles').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.vehicles.push({ name: element.name, value: element.url })
      });
    })
    this.movieService.callPages(4, 'vehicles').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.vehicles.push({ name: element.name, value: element.url })
      });
    })
    console.log(this.vehicles)
  }

  getstarships() {
    this.movieService.getStarShips().subscribe(response => {
      response.results.forEach((element: {
        name: any; url: string | number;
      }) => {
        this.starships.push({ name: element.name, value: element.url })
      });
    })
    this.movieService.callPages(2, 'starships').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.starships.push({ name: element.name, value: element.url })
      });
    })
    this.movieService.callPages(3, 'starships').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.starships.push({ name: element.name, value: element.url })
      });
    })
    this.movieService.callPages(4, 'starships').subscribe(response => {
      response.results.forEach((element: { url: string | number; name: any; }) => {
        this.starships.push({ name: element.name, value: element.url })
      });
    })
    console.log(this.starships)
  }

  getBirthYear() {
    this.character.forEach((element: { id: any; url: any; birth_year: any; }) => {
      this.birthYears.push(element.birth_year);
      var mySubString = element.url.substring(element.url.length - 3)
      mySubString = mySubString.replace(/[^0-9]/g, "");
      element.id = mySubString
      console.log(mySubString)
    })
    this.birthYears = this.removeDuplicates(this.birthYears);
    console.log(this.birthYears)
  }

  removeDuplicates(array: any[]): any[] {
    return array = array.filter((element, i) => i === array.indexOf(element));
  }

  movieChange(event: any) {
    console.log(event.target.value);
    if (this.filters.films.some((e: any) => e === event.target.value)) {
      console.log("Hi")
      this.filters.films = this.filters.films.filter((filter: { value: any; }) => filter !== event.target.value);
    } else {
      this.filters.films.push(event.target.value)
    }
    this.filterCharacters();
  }

  speciesChange(event: any) {
    console.log(event.target.value);
    if (this.filters.species.some((e: any) => e === event.target.value)) {
      console.log("Hi")
      this.filters.species = this.filters.species.filter((filter: { value: any; }) => filter !== event.target.value);
    } else {
      this.filters.species.push(event.target.value)
    }
    this.filterCharacters();
  }

  vehicleChange(event: any) {
    console.log(event.target.value);
    if (this.filters.vehicles.some((e: any) => e === event.target.value)) {
      console.log("Hi")
      this.filters.vehicles = this.filters.vehicles.filter((filter: { value: any; }) => filter !== event.target.value);
    } else {
      this.filters.vehicles.push(event.target.value)
    }
    this.filterCharacters();
  }

  starShipChange(event: any) {
    console.log(event.target.value);
    if (this.filters.starships.some((e: any) => e === event.target.value)) {
      console.log("Hi")
      this.filters.starships = this.filters.starships.filter((filter: { value: any; }) => filter !== event.target.value);
    } else {
      this.filters.starships.push(event.target.value)
    }
    this.filterCharacters();
  }

  yearChange(event: any) {
    console.log(event.target.value);
    if (this.filters.birth_year.some((e: any) => e === event.target.value)) {
      console.log("Hi")
      this.filters.birth_year = this.filters.birth_year.filter((filter: { value: any; }) => filter !== event.target.value);
    } else {
      this.filters.birth_year.push(event.target.value)
    }
    this.filterCharacters();
  }
  filterCharacters() {
    console.log(this.filters)
    this.movies = [];
    this.character.forEach((element: any) => {
      if (element['species'].length == 0) element['species'].push('https://swapi.dev/api/species/1/')
      var isOk = true;
      for (var key in this.filters) {
        this.filters[key].forEach((e: any) => {
          console.log(e)
          console.log(element[key])
          console.log(element[key].includes(e))
          if (!element[key].includes(e))
            isOk = false
        });
      }
      if (isOk)
        this.movies.push(element)
      console.log(this.movies)
      this.currentNumber=[]
    this.paginate(1);
    });
    // this.movies = this.character.filter((item: { [x: string]: any; }) =>{
    //   for(var key in this.filters){
    //    if (item[key] === undefined) return false;
    //     for (var k in this.filters[key]){
    //       console.log(item[key]) 
    //       // console.log(itemsFilter[key][k])
    //       // console.log(item[key].includes(itemsFilter[key][k]))
    //       if (item[key].includes(this.filters[key][k])) {
    //         this.movies.push(item);
    //         return true;
    //       }
    //     }
    //   };
    //   return false;
    // })
    
  }

  paginate(pageNumber: number) {
    this.page = pageNumber,
    this.pages = Math.floor(this.movies.length % 5 == 0 ? this.movies.length / 5 : (this.movies.length / 5) + 1)
    console.log(this.pages)
    if(!this.currentNumber.includes(this.pages) || pageNumber<=this.pages-5){
      this.currentNumber = [];
      for(let i=pageNumber;i<pageNumber+5 && i<=this.pages;i++){
        this.currentNumber.push(i);
      }
    }
    this.displayMovies = this.movies.slice((this.page - 1) * 5, ((this.page - 1) * 5) + 5)
    this.loading=false
  }

  clear(){
    this.filters = {
      'films': [],
      'species': [],
      'vehicles': [],
      'starships': [],
      'birth_year': []
    };
    this.movies = this.character
    this.currentNumber = []
    this.paginate(1);
  }
}
