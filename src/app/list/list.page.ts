import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from 'src/models/List';
import { Question } from 'src/models/Question';
import { ListService } from 'src/services/ListService';
import { QuestionService } from 'src/services/QuestionService';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public listaQuestoes: Question[] = new Array<Question>();

  public list_id:number;
  public lista:List = new List();
  public minhasListas:List[] = new Array<List>();

  public questaoLista;
  
  
  public questions: Question[] = new Array<Question>();

  constructor(
    private _alertController:AlertController,
    private _router: Router,
    private _actRouter: ActivatedRoute,
    private _questionService: QuestionService,
    private _listService: ListService
  ) 
  {
    this.minhasListas = this._listService.list

    this._actRouter.params.subscribe((params) => {
      this.list_id = parseInt(params.id);

      this.obterListas()
    });

  }

  ngOnInit() {
  }
  cadastrarLista(){
    
    this._router.navigate(['/register-list']) 
  } 

  obterListas(){
    const listaEncontrada = this.minhasListas.find(c => c.id === this.list_id);
  
    if (listaEncontrada) {
   
      this.lista = listaEncontrada;
     
      // QUESTÕES DA LISTA
      this._questionService.listar(this.list_id).subscribe(res=>{
        this.questaoLista = res
        console.log(this.questaoLista)
      })
      
   
    } else {
      this._router.navigate(['/show-list']);
    }
    console.log(this.lista);
  }
  
  editList(id:number){
    this._router.navigate([`edit/${this.list_id}`]);
  }


 

  async deleteList(){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deseja APAGAR lista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sim, apagar!',
          handler: () => {
            this._listService.excluir(this.list_id).subscribe(res=>{
              this._router.navigate(['show-list']);
            })
          }
        }
      ]
    });

    await alert.present();
  }

  
  
  

}

