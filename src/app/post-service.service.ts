import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Post } from './post-list/post-list.component';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this.db = db;
  }
  getPost(id: string) : AngularFirestoreDocument<Post> {
    return this.db.collection("posts").doc(id);
  }
}
