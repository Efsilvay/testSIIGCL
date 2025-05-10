import { ComponentType } from '@angular/cdk/overlay';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly _dialog = inject(MatDialog);

  openModal<CT, T>(componentRef: ComponentType<CT>, data?: T, isEditing = false){
    const config = { data, isEditing};
    this._dialog.open(componentRef, {
      data: config,
      width: '600px'
    })
    return data;
  }

  closeModal(): void{
    this._dialog.closeAll();
  }

  constructor() { }
}
