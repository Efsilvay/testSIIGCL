import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ModalService } from '../../features/services/modal.service';
import { MatButton } from '@angular/material/button';

const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput, MatButton]

@Component({
  selector: 'app-modal-editar',
  imports: [MATERIAL_MODULES, MatDialogModule, FormsModule],
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.scss'
})
export class ModalEditarComponent {
constructor(
    public dialogRef: MatDialogRef<ModalEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
