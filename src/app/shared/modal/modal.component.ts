import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ModalService } from '../../features/services/modal.service';
import { MatButton } from '@angular/material/button';

const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput, MatDialogModule, MatButton]
@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule,MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
  
  contactForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);
  private readonly _modalSrv = inject(ModalService);

  ngOnInit(): void {
    this._buildForm();

    if(this._matDialog.isEditing){
      this.contactForm.patchValue(this._matDialog.data);
      this.disabledForm();
    }
  }

  async onSubmit(){

  }

  private disabledForm(): void{
    return this.contactForm.disable();
  }

  private _buildForm(): void {
    this.contactForm = this._fb.nonNullable.group({
      name: ['', Validators.required],
      especie: ['', Validators.required],
      genero:['', Validators.required],
      imagen:['', Validators.required]
    })
  }
}
