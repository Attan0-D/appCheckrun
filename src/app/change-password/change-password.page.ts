import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(
    private _menu: MenuController,
    private _router: Router, 
    ) {this._menu.enable(false);
  }

  ngOnInit() {
  }

  paginaInicial(){
    this._router.navigate(['/login'])
  }
}
