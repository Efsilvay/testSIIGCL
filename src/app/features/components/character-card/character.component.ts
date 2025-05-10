import {ChangeDetectionStrategy, Component, inject, Input, output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Character } from '../../models/character';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-character',
  imports: [MatCardModule,MatButtonModule, CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {

   @Input() char!: Character;
   @Input() edit!: boolean;
   edicion = output<any>();
   elim = output<any>();

   edita(id: number){
      console.log('childEdit',id);
      this.edicion.emit(id);
   }

   eliminar(id: number){
      console.log('childElim',id);
      this.elim.emit(id);
   }


}


