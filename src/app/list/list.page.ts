import { Component, OnInit } from '@angular/core';
import { List } from 'src/models/List';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public listq = new List();

  constructor() { }

  ngOnInit() {
  }

    


}
