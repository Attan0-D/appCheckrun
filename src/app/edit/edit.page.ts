import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { List } from 'src/models/List';
import { Question } from 'src/models/Question';
import { ListService } from 'src/services/ListService';
import { QuestionService } from 'src/services/QuestionService';
import { UserService } from 'src/services/UserServices';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public minhasListas:List[] = new Array<List>();
  public lista:List = new List();
  public questaoLista;


  public listq:List = new List(); 
  public days:Array<string> = ['D','S','T','Q','Q','S','S'];
  public _htmlLoading: HTMLIonLoadingElement;
  public id_list: number;


  update = false;
  dados = {
    name: '',
    //category: '',
    hour: '',
    days: '',
    questions: []
  }

  constructor(
    private _router: Router,
    private _listService: ListService,
    private _userService: UserService,
    private _alertController:AlertController,
    private _loading: LoadingController,
    private _actRouter: ActivatedRoute,
    private _questionService: QuestionService

  )
  {
    this.minhasListas = this._listService.list;
    console.log(this.minhasListas);


    this._actRouter.params.subscribe((params) => {
      this.id_list = parseInt(params.id);
      console.log('ID PARAMS ->', this.id_list);
    });   

  }

  ngOnInit() {
    this.obterLista();
    // console.log(this.obterLista());

    // console.log('HERE!!!->', this.obterLista());
    this.lista
    if(this.lista){
      this.update = true;
      this.dados = this.lista;
      console.log(this.dados);
    }
  }

  async loading(){
    this._htmlLoading = await this._loading.create({
    cssClass: 'my-custom-class',
    message: 'Aguarde...',
    
  });
  await this._htmlLoading.present();
}

  async addQuestao(){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Criar Tarefas!',
      inputs: [
        {
          name: 'question',
          type: 'text',
          placeholder: 'Nome da Tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: ({question}) => {
            // console.log(question);
            if(!question) throw new Error('Tarefa não informada');
            const q: Question = new Question();
            q.description = question;
            q.yes = 0;
            q.no = 0;

            this.lista.questions.push(q);
            //this.lista.questions;
            console.log('QUESTIONS AFTER PUSH ->', this.lista.questions);
          }
        }
      ]
    });

    await alert.present();
  }

  removerQuestao(index){
     this._questionService.excluir(index);
    // this.lista.questions.splice(index,1);
  }

  atualizarQuestao(){
    this.lista.questions.forEach(question => {
      // console.log('Aqui!!! ->', question);
         this._questionService.atualizar(question).subscribe(res=>{
           console.log('HERE ->', question);
       })
     });
  }

  async saveLista(){
    // await this.loading();
    console.log(this._htmlLoading);

      this._listService.editar(this.lista).subscribe(response => {
        console.log(response);
      
        // this._htmlLoading.dismiss();
        this._router.navigate(['/show-list']);
      }) 
        console.log('lista -> ', this.lista);
    } 
  
  setDays(day:number){
   
    const diasMarcados:Array<number> = this.listq.days ? JSON.parse(this.listq.days): [];
    if (diasMarcados.includes(day)){

      const indexDiasMarcados = diasMarcados.findIndex(d => d == day)
      diasMarcados.splice(indexDiasMarcados,1)    
    
    }else{  
      diasMarcados.push(day); 
    }

    this.listq.days = JSON.stringify(diasMarcados);   
    console.log(day);
  }

  verificarDiaMarcado(day:number){
    const diasMarcados:Array<number> = this.listq.days ? JSON.parse(this.listq.days): [];
    return diasMarcados.includes(day)
    }

  obterLista(){
      const listaEncontrada = this.minhasListas.find(c => c.id === this.id_list);
    
      if (listaEncontrada) {
     
        this.lista = listaEncontrada;
        // console.log(' lista -> ', this.lista);

       
        // QUESTÕES DA LISTA
        this._questionService.listar(this.id_list).subscribe(res=>{
          this.questaoLista = res;
          this.lista.questions = this.questaoLista;
          // console.log('Questçao da lista -> ', this.questaoLista);

        })
     
      } else {
        this._router.navigate(['/show-list']);
      }
  }

  async deleteQuestion(question: Question){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tem certeza que deseja APAGAR esta tarefa?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sim, apagar tarefa!',
          handler: () => {
            this._questionService.excluir(question.id);
          }
        }
      ]
    });

    await alert.present();
  
  }

  async editQuestion(question_p: Question){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar Tarefas!',
      inputs: [
        {
          name: 'question',
          type: 'text',
          placeholder: 'Nome da Tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: ({question_p}) => {
            // console.log(question);
            this._questionService.atualizar(question_p);
          }
        }
      ]
    });

    await alert.present();
  }
}    