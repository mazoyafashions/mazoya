import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isShown: boolean = false; // hidden by default
  toggleShow() {

    this.isShown = !this.isShown;
  }

  isShowDivIf = true;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
