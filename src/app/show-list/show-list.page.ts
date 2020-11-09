 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/models/List';
import { ListService } from 'src/services/ListService';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.page.html',
  styleUrls: ['./show-list.page.scss'],
})
export class ShowListPage implements OnInit {

  public lists: List[] = new Array<List>();

  constructor(
    private _router: Router,
    private _listService: ListService) 
    {
      this.obterListas();
    }

  ngOnInit() {
  }

  async obterListas(){
    const AllList = await this._listService.retornarListas();
    this.lists = AllList;
  }

  registerList(){
    this._router.navigate(['/register-list']);
  }

  removeList(index){
    this.lists.splice(index,1);
  }
}
 