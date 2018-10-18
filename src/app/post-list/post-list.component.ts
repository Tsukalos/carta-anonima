import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit {
  constructor(public page: PaginationService) {

  }


  ngOnInit() {
    this.page.init('posts', 'date', { reverse: true, prepend: false})
  }

  scrollHandler(e) {
    console.log(e);
    if (e === 'bottom') {
      this.page.more()
    }
  }

}
