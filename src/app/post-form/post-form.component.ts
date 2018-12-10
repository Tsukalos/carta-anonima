import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  fields: { author: string, text: string, date: Date, title: string, reports: number };
  colleciton: AngularFirestoreCollection;
  constructor(public db: AngularFirestore, private route: Router) {
    this.fields = { author: '', text: '', date: null, title: '', reports: 0 };
    this.colleciton = db.collection('posts');
  }

  ngOnInit() {

  }

  enableButton(): boolean {
    return this.fields.author !== '' && this.fields.text !== '' && this.fields.title !== '';
  }

  send(): void {
    this.fields.date = new Date();
    // this.fields.text = this.fields.text.replace(/\r?\n/g, '<br>');
    const doc = this.colleciton.doc(this.db.createId());
    const d = doc.set(this.fields);
    this.route.navigate(['/r/' + doc.ref.id]);
  }

}
