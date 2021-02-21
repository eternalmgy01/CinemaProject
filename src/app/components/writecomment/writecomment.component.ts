import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writecomment',
  templateUrl: './writecomment.component.html',
  styleUrls: ['./writecomment.component.css']
})
export class WritecommentComponent implements OnInit {
  comments: any[];

  constructor() { }

  ngOnInit(): void {
    this.comments = ['Good Job']
  }

}
