import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confimation-dialog',
  templateUrl: './confimation-dialog.component.html',
  styleUrls: ['./confimation-dialog.component.css']
})
export class ConfimationDialogComponent {
  modalTitle: string;
  modalText: string;
  constructor(public dialogRef: MatDialogRef<ConfimationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalText = data.text;
   }

}
