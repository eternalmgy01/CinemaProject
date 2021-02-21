import {Component, OnInit, ViewChild} from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  @ViewChild(ComentsComponent) viewChild: ComentsComponent;
  items: any[];
  names: any[];
  comments: any[];
  info: {
    movie: any,
    desc: any
  };

  constructor() { }

  ngOnInit(): void {
    this.items = ['Твоё имя', 'Джокер', 'Сад изящных слов', 'Принцесса Мононоке', 'Форма голоса', 'Карты деньги два ствола'];
    this.names = ['Samad'];
    this.comments = [];
    this.info = {
      movie: ['Kak dela', 'kak ty', 'tema'],
      desc: ['sadasda', 'wqeqewqeqw']
    };
  }
  addComment(comment){
    this.comments.unshift(comment);
    return false;
  }
}
