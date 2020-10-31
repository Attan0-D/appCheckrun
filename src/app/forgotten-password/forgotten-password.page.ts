import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/models/Login';
import { LoginServices } from 'src/services/LoginServices';


@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.page.html',
  styleUrls: ['./forgotten-password.page.scss'],
})
export class ForgottenPasswordPage implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  confirmarCodigo(){
    this._router.navigate(['/confirm-code'])
  }
}
