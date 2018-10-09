import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  fields: {author: string, text: string, date: Date, title: string};
  colleciton: AngularFirestoreCollection;
  constructor(db: AngularFirestore, private route: Router) {
    this.fields = {author: '', text: '', date: null, title: ''};
    this.colleciton = db.collection('posts');
  }

  ngOnInit() {}

  enableButton(): boolean {
    return this.fields.author !== '' && this.fields.text !== '' && this.fields.title !== '';
  }

  send(): void {
    this.fields.date = new Date();
    this.colleciton.add(this.fields);
    this.route.navigate(['/all']);
  }

}
