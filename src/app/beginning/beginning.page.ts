import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.page.html',
  styleUrls: ['./beginning.page.scss'],
})
export class BeginningPage implements OnInit {
 

  constructor(
    private _router: Router,
    private _menu: MenuController,
    ) {this._menu.enable(false);
  }

  ngOnInit() {
  }

  toHome(){
    this._router.navigate(['/home']);
  }
}
