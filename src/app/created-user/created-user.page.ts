import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from 'src/services/UserServices';

@Component({
  selector: 'app-created-user',
  templateUrl: './created-user.page.html',
  styleUrls: ['./created-user.page.scss'],
})
export class CreatedUserPage implements OnInit {

  public user: User = new User()

  constructor(private _userService: UserService ) { }

  ngOnInit() {
  }

  criarUsuario(){
    this._userService.cadastrar(this.user)
  }

}
