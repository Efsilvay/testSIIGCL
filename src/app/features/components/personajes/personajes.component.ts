import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from "../character-card/character.component";

@Component({
  selector: 'app-personajes',
  imports: [MatButtonModule, CommonModule, CharacterComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent implements OnInit {

  characters: any[] = [];
  prev: boolean = true;
  dataPrev: any;
  next: boolean = false;
  dataNext: any;
  anime: any = inject(CharactersService);
  info: any;
  constructor(private CharServ: CharactersService) {

  }


  ngOnInit(): void {
    this.getAllChars();
  }

  getAllChars() {
    this.CharServ.getPage('1').subscribe((data) => {
      console.log(data);
      console.log(data.results);
      if (!data.info.prev) {
        this.prev = false;
      }
      else {
        this.prev = true;
      }
      if (!data.info.next) {
        this.next = false;
      }
      else {
        this.next = true;
      }
      this.characters = data.results;
      this.info = data.info;
    });;
  }

  

  changePage(page: string) {
    let pagina = page.split('=')
    this.CharServ.getPage(pagina[1]).subscribe((data) => {
      console.log(data.results);
      if (!data.info.prev) {
        this.prev = false;
      }
      else {
        this.prev = true;
        
      }
      if (!data.info.next) {
        this.next = false;
      }
      else {
        this.next = true;
      }
      this.characters = data.results;
      this.info = data.info;
    });;
  }

}
