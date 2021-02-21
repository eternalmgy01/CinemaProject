import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  items: string[];

  constructor() { }

  ngOnInit(): void {
    this.items = ['News', 'News', 'News'];
  }

}
