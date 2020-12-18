import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/models/List';
import { Question } from 'src/models/Question';
import { ListService } from 'src/services/ListService';
import { QuestionService } from 'src/services/QuestionService';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public lists: List[] = new Array<List>();
  public questaoLista;
  public list_id:number;
  public yes: false;
  public no: false;

  limiter_no = 0;
  limiter_yes = 0;
  dados = {
    description: '',
    yes: '',
    no: ''
  }
  


  constructor(
    private _route: Router,
    private _actRouter: ActivatedRoute,
    private _questionService: QuestionService,
  ) 
  {
    this._actRouter.params.subscribe((params) => {
      this.list_id = parseInt(params.id);

      this.obterQuestão()
    });
  } 

  ngOnInit() {
  }

  obterQuestão(){
    this._questionService.listar(this.list_id).subscribe(res=>{
      this.questaoLista = res
      console.log(this.questaoLista)
    })
  }

  putYes(id){
    
    const questaoUnica = this.questaoLista.find(c => c.id === id);      
  
      if(questaoUnica.yes >= 0){
        questaoUnica.yes++;
    }

  }

  putNo(id){
    console.log('No');
    const questaoUnica = this.questaoLista.find(c => c.id === id);

    if(questaoUnica.no >= 0){
      questaoUnica.no++;
    }

  }
 
  atualizar(){
    
    this.questaoLista.forEach(question => {
        this._questionService.atualizar(question)
    });
    
    this._route.navigate(['/show-list']);
  }

}