import {Component, EventEmitter, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
@Input() comment: string;
@Input() comments: string;
  constructor() { }

  ngOnInit(): void {
  }

}
