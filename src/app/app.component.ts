import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UserService } from 'src/services/UserServices';
 import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [OneSignal]
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
     },

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
      title: 'Minhas Listas',
      url: 'show-list',
      icon: 'list-circle'
    },
    // {
    //   title: 'Meu Desempenho',
    //   url: 'my-performance',
    //   icon: 'stats-chart'
    // },
    {
      title: 'Ajuda',
      url: 'help',
      icon: 'help-circle'
    },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: Router,
    private _menu: MenuController,
    private _userService : UserService,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      //ONESIGNAL APP ID - ID do remetente
      this.oneSignal.startInit('2e6459e7-27dd-4ff4-8b57-d5b8376c3b6d','415149111300');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });
      
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });
      console.log(this.oneSignal.getIds());

      this.oneSignal.endInit();
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

  termosCondicoes(){
    this._router.navigate(['/terms-and-conditions2']); 
  }

  

}
