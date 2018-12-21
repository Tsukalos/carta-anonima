import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { ConfimationDialogComponent } from '../confimation-dialog/confimation-dialog.component';
export interface Post {
  author: string;
  text: string;
  date: firebase.firestore.Timestamp;
  title: string;
  reports: string;
}
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  currentId: string;
  info: Observable<Post>;
  collection: AngularFirestoreCollection<Post>;
  constructor(private route: ActivatedRoute, db: AngularFirestore, public dialog: MatDialog, public routing: Router) {
    this.collection = db.collection<Post>('posts');

  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.currentId = id;
    this.info = this.collection.doc<Post>('/' + id).valueChanges();
  }

  reportDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.restoreFocus = false;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      id: 2,
      title: 'Confirmação',
      text: 'Deseja reportar esse relato?'
    };
    const dialogRef = this.dialog.open(ConfimationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.reportButton();
      }
    });
  }

  reportButton(): void {
    const d = this.collection.doc<Post>('/' + this.currentId).snapshotChanges().pipe(map(arr => {
      this.collection.doc<Post>('/' + this.currentId).update({ reports: arr.payload.data().reports + 1 });
    }), take(1)).toPromise();
    this.routing.navigate(['/home']);
  }
}
