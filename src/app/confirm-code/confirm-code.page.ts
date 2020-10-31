import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.page.html',
  styleUrls: ['./confirm-code.page.scss'],
})
export class ConfirmCodePage implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  alterarSenha(){
    this._router.navigate(['/change-password'])
  }
}
