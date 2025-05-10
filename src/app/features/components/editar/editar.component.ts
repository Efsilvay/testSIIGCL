import { Component, Inject, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CharacterComponent } from "../character-card/character.component";
import { LocalService } from '../../services/local.service';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { Character } from '../../models/character';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditarComponent } from '../../../shared/modal-editar/modal-editar.component';
import { ModalEliminarComponent } from '../../../shared/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-editar',
  imports: [MatButtonModule, CommonModule, CharacterComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent implements OnInit, OnDestroy{
characters: any[] = [];
  prev: boolean = true;
  dataPrev: any;
  next: boolean = false;
  dataNext: any;
  anime: any = inject(CharactersService);
  info: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private CharServ: CharactersService, private localStore: LocalService, private modalServ: ModalService, public dialog: MatDialog) {
  }
  


  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
       this.localStore.clearData();
      }
    this.getAllChars();
  }

  ngOnDestroy(): void {
    if(isPlatformBrowser(this.platformId)){
       this.localStore.clearData();
      }
  
  }

  getAllChars() {
    this.CharServ.getPage('1').subscribe((data) => {
      console.log(data);
      console.log(data.results);
      this.characters = data.results;
      if(isPlatformBrowser(this.platformId)){
      this.localStore.saveData('personajes', JSON.stringify(this.characters));
      console.log(this.localStore.getData('personajes'));
      }
    });;
  }
  
editarPersonaje(id: any) {
    let tmpChar: Character = this.characters.find(item => item.id === id);
    const dialogRef = this.dialog.open(ModalEditarComponent, {
      width: '400px',
      data: tmpChar // Pasamos una copia del objeto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         console.log('resultado',result)
          const index = this.characters.findIndex(i => i.id === result.id);
          this.characters[index].name = result.name;
          this.characters[index].gender = result.gender;
          this.characters[index].species = result.species;
          this.characters[index].image = result.image;
          this.localStore.saveData('personajes', JSON.stringify(this.characters));
      }
      let tmpData = this.localStore.getData('personajes');
      if(tmpData){
        this.characters = JSON.parse(tmpData);
      }
      return this.characters;
    });
  }

  eliminarPersonaje(id: any): void {
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '400px',
      data: { ...id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Eliminar el elemento de la lista
        this.characters =  this.characters.filter(item => item.id !== id);
        this.localStore.saveData('personajes', JSON.stringify(this.characters));
      }
      let tmpData = this.localStore.getData('personajes');
      if(tmpData){
        this.characters = JSON.parse(tmpData);
      }
      return this.characters;
    });
  }
}



