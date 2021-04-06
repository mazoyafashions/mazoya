import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hair-clips',
  templateUrl: './hair-clips.component.html',
  styleUrls: ['./hair-clips.component.scss']
})
export class HairClipsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
