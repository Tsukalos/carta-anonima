import { Component, Inject, AfterViewInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
@Component({
  selector: 'app-confimation-dialog',
  templateUrl: './confimation-dialog.component.html',
  styleUrls: ['./confimation-dialog.component.css']
})
export class ConfimationDialogComponent implements AfterViewInit {
  modalTitle: string;
  modalText: string;
  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<ConfimationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _focusMonitor: FocusMonitor) {
    this.modalTitle = data.title;
    this.modalText = data.text;
   }

  ngAfterViewInit() {
    this._focusMonitor.stopMonitoring(document.getElementById('back'));
  }
}
