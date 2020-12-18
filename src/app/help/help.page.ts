import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this._router.navigate(['/home']);
  }

}

