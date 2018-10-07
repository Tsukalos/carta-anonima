import { Component, OnInit, Input } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
export interface Post {
  author: string;
  text: string;
  date: firebase.firestore.Timestamp;
  title: string;
}
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  info: Observable<Post>;
  collection: AngularFirestoreCollection<Post>;
  constructor(private postService: PostServiceService, private route: ActivatedRoute, db: AngularFirestore) {
    this.collection = db.collection<Post>("posts");

  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.info = this.collection.doc<Post>("/"+id).valueChanges();
  }

}
