import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.page.html',
  styleUrls: ['./beginning.page.scss'],
})
export class BeginningPage implements OnInit {

  constructor(
    private _menu: MenuController,
    ) {this._menu.enable(false);
  }

  ngOnInit() {
  }

}
