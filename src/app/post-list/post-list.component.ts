import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit {
  constructor(public page: PaginationService) {
  }


  ngOnInit() {
    this.page.init('posts', 'date', { reverse: true, prepend: false, limit: 6 });
  }

  buttonHandler() {
    this.page.more();
  }

}
