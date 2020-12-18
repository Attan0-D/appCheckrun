import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/models/User';
import { UserService } from 'src/services/UserServices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: User = new User();

  constructor(
    private _userService: UserService,
    private _alertController: AlertController,
    private _route: Router
  ) { }

  ionViewDidEnter(){
    this.user = this._userService.retornarUsuarioLogado()
  }

  ngOnInit() {
  }

  async atualizado() {
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Campos Atualizados',
      message: 'Campos editados com sucesso :)',
      buttons: ['OK']
    });

    await alert.present();
  }

  // atualizarUsuario(){
  //   this._route.navigate(['/show-list']);
  //   this._userService.atualizar(this.user);
  //   this.atualizado()
  
  // } 

  atualizarUsuario(){
    this._userService.atualizar(this.user).subscribe(res=>{
      // this._userService.logar(res)
      this.atualizado();
      this._route.navigate(['/show-list']);

    })
    this.atualizado()
  
  }

}
