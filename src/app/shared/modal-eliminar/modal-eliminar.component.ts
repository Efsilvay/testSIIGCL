import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-eliminar',
  imports: [MatDialogActions,MatDialogContent],
  templateUrl: './modal-eliminar.component.html',
  styleUrl: './modal-eliminar.component.scss'
})
export class ModalEliminarComponent {
constructor(
    public dialogRef: MatDialogRef<ModalEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
