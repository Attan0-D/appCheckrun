import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/models/List';
import { Question } from 'src/models/Question';
import { User } from 'src/models/User';
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

  constructor(
    private _router: Router,
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

 


}
