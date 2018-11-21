import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggler') toggle:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  collapseNavbar() {
    if(this.toggle.nativeElement.offsetParent !== null){
      this.toggle.nativeElement.click();
    }
  }

}
