import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/models/List';
import { Question } from 'src/models/Question';
import { QuestionService } from 'src/services/QuestionService';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public q: Question = new Question();
  public listq:List = new List();
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

  atualizarLista(){
    let novoCampo = []

    const valorAtualizado = this.listq.questions.values()
    
    console.log(valorAtualizado)
    // this._router.navigate(['/show-list'])
  }


  }   
