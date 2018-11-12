import { Component, OnInit } from '@angular/core';
import { Pagination2Service } from '../pagination2.service';
import { Observable } from 'rxjs';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit {
  constructor(public pagination: Pagination2Service, public page: PaginationService) {
    console.log('constructor');
  }


  ngOnInit() {
   // this.pagination.first();
   this.page.init('posts' , 'date', {reverse: true, prepend: false, limit: 6});
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      
    }
  }

  buttonHandler() {
    console.log('more');
    //this.pagination.next();
    this.page.more();
  }

}
