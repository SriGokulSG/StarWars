import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL='https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<any> {
    return this.http.get<any>(BASE_URL+'people');
  }

  callAPI(page:number):Observable<any>{
    return this.http.get<any>(BASE_URL+'people/?page='+page);
  }

  getFilms(): Observable<any> {
    return this.http.get<any>(BASE_URL+'films');
  }

  getSpecies(): Observable<any> {
    return this.http.get<any>(BASE_URL+'species');
  }

  getVehicles(): Observable<any> {
    return this.http.get<any>(BASE_URL+'vehicles');
  }

  getStarShips(): Observable<any> {
    return this.http.get<any>(BASE_URL+'starships');
  }

  callPages(page:number,id:string):Observable<any>{
    return this.http.get<any>(BASE_URL+id+'/?page='+page);
  }

  fetchAPI(API:string):Observable<any>{
    return this.http.get<any>(API);
  }

  getCharacterDetails(characterId:number){
    return this.http.get<any>(BASE_URL+'people/'+characterId);    
  }
}
