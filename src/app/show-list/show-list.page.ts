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

  ionViewDidEnter() {
    this.obterListas();
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

  verLista(list_id: number){
    this._router.navigate([`/list/${list_id}`])
  }

  editarLista(id:number){
    console.log(id)
    this._router.navigate([`edit/${id}`]);
  }

  // TENTATIVA DAVID
   // this._router.navigateByUrl('/show-list', {skipLocationChange: true}).then(() => {
    //   this._router.navigate(["/show-list"]);
    // });
  
}
 