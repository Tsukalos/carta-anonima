import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Post {
  id: string;
  author: string;
  text: string;
  date: firebase.firestore.Timestamp;
  title: string;
}
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Post>;
  items: Observable<Post[]>;
  constructor(db: AngularFirestore) {
    this.itemsCollection = db.collection<Post>('posts');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
    })));
  }


  ngOnInit() {
  }

}
