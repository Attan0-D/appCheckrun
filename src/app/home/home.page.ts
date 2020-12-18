import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/models/List';
import { User } from 'src/models/User';
import { UserService } from 'src/services/UserServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public user:User = new User();
  public lists: List[] = new Array<List>();

  constructor(
    private _router: Router,
    private _userService:UserService

    ) { }


  ngOnInit() {
  }

  ionViewDidEnter(){
    this.user = this._userService.retornarUsuarioLogado()
  }

  registerList(){
    this._router.navigate(['/show-list']);
  }


}
