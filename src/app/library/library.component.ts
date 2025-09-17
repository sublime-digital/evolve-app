import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  standalone: false,
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less', './sidebars.css']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
