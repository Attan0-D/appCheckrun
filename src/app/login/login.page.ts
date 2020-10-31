import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/models/Login';
import { LoginServices } from 'src/services/LoginServices';
import { UserService } from 'src/services/UserServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login: Login = new Login()

  constructor(
    private _menu: MenuController,
    private _router: Router, 
    private _loginService: LoginServices,
    private _usuerService: UserService,

    ) {this._menu.enable(false);
  }

  ngOnInit() {
  }

  fazerCadastro(){
    this._router.navigate(['/created-user'])
  }

  fazerLogin(){
    console.log(this.login)
    this._loginService.login(this.login).subscribe(response=>{
      this._usuerService.logar(response)
      this._router.navigate(['/home'])
      console.log(response)
    })
  }

  esqueciSenha(){
    this._router.navigate(['/forgotten-password'])
  }

}
