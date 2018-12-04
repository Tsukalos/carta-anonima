import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfimationDialogComponent } from '../confimation-dialog/confimation-dialog.component';




@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  fields: { author: string, text: string, date: Date, title: string, reports: number };
  colleciton: AngularFirestoreCollection;
  constructor(public db: AngularFirestore, private route: Router, public dialog: MatDialog) {
    this.fields = { author: '', text: '', date: null, title: '', reports: 0 };
    this.colleciton = db.collection('posts');
  }

  ngOnInit() {

  }

  enableButton(): boolean {
    return this.fields.text !== '';
  }

  confirmationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.restoreFocus = false;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      id: 1,
      title: 'Confirmação',
      text: 'Deseja confirmar o envio?'
    };
    const dialogRef = this.dialog.open(ConfimationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.send();
      }
    });
  }

  send(): void {
    this.fields.date = new Date();
    // this.fields.text = this.fields.text.replace(/\r?\n/g, '<br>');
    const doc = this.colleciton.doc(this.db.createId());
    const d = doc.set(this.fields);
    this.route.navigate(['/r/' + doc.ref.id]);
  }

}
