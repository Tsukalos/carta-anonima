import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export interface Post {
  id: string;
  title: string;
  author: string;
  date: firebase.firestore.Timestamp;
  text: string;
}

@Injectable({
  providedIn: 'root'
})

export class Pagination2Service {

  private _data: BehaviorSubject<Post[]>;
  public data: Observable<Post[]>;
  latestEntry: any;

constructor(private afs: AngularFirestore) {}

// You need to return the doc to get the current cursor.
  getCollection(ref, queryFn?): Observable<any[]> {
    return this.afs.collection(ref, queryFn).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const doc = a.payload.doc;
        return { id, ...data, doc };
      });
    }));
  }
// In your first query you subscribe to the collection and save the latest entry
 first() {
  this._data = new BehaviorSubject([]);
  this.data = this._data.asObservable();

  const scoresRef = this.getCollection('posts', ref => ref
    .orderBy('date', 'desc')
    .limit(6))
    .subscribe(data => {
      this.latestEntry = data[data.length - 1].doc;
      this._data.next(data);
    });
  }

  next() {
    const scoresRef = this.getCollection('posts', ref => ref
      .orderBy('date', 'desc')
       // Now you can use the latestEntry to query with startAfter
      .startAfter(this.latestEntry)
      .limit(6))
      .subscribe(data => {
        if (data.length) {
          // And save it again for more queries
          this.latestEntry = data[data.length - 1].doc;
          this._data.next(data);
        }
      });
  }
}
