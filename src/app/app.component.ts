import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UserService } from 'src/services/UserServices';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Perfil',
      url: 'profile',
      icon: 'person-circle'
    },  
    {
      title: 'Cadastrar Lista',
      url: 'register-list',
      icon: 'add'
    },
    {
      title: 'Mostrar Lista',
      url: 'show-list',
      icon: 'list-circle'
    },
    {
      title: 'Meu Desempenho',
      url: 'my-performance',
      icon: 'stats-chart'
    },
    {
      title: 'Ajuda',
      url: 'help',
      icon: 'help-circle'
    },
    // {
    //   title: 'Sair',
    //   url: 'login',
    //   icon: 'close'
    // },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: Router,
    private _menu: MenuController,
    private _userService : UserService,



  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout(){
    //chamada do metodo
    this._userService.logout();
    
    //bloqueio do menu
    this._menu.swipeGesture(false);
    
    //redirecionamento
    this._router.navigate(['/login']);
      
  }

}
