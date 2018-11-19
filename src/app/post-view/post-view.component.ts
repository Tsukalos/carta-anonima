import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
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
  constructor(private route: ActivatedRoute, db: AngularFirestore) {
    this.collection = db.collection<Post>('posts');

  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.currentId = id;
    this.info = this.collection.doc<Post>('/' + id).valueChanges();
  }

  reportButton(): void {
    const d = this.collection.doc<Post>('/' + this.currentId).snapshotChanges().pipe(map(arr => {
    })).subscribe();
  }

}
