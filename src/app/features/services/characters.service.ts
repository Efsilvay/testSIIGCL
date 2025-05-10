import { inject, Injectable } from '@angular/core';
import { Character, CharData } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private http = inject(HttpClient);
  constructor(
  ) {
  }

  url = 'https://rickandmortyapi.com/api/character';

  getCharacters(){
    return this.http.get<CharData>(this.url+'s');
  }

  getChar(charNumber: string){
    return this.http.get<Character>(this.url+'/'+charNumber);
  }

  getPage(pageNumber: string){
    return this.http.get<CharData>(this.url+'/?page='+pageNumber);
  }

 
}
