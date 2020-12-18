import { Question } from './../models/Question';
import { IQuestionService } from './../interfaces/IQuestion';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/shared/Global';
import { List } from 'src/models/List';
import { ListService } from './ListService';

@Injectable({ 
    'providedIn': 'root'
})

export class QuestionService implements IQuestionService{

    public apiUrl: string = Global.ApiUrl+"question";

    public list_id: number;

    constructor ( 
        
        private _http : HttpClient,
        private _listService: ListService

    ){
        this.list_id = this._listService.list_id
    }
    excluir(id: number):Observable<Question>{
        return this._http.delete<Question>(`${this.apiUrl}/${id}`);
    }

    cadastrar(question : Question): Observable<Question>{
        if( !question.description ) throw new Error('Preencha a descrição da pergunta');
        
        return this._http.post<Question>(this.apiUrl, question)  
    }

    atualizar(question : Question): Observable<Question>{
        if( !question.description ) throw new Error('Preencha a descrição da pergunta');

        return this._http.put<Question>(`${this.apiUrl}/${question.id}`,question)
    }  

    listar(id:number):  Observable<Question>{

        return this._http.get<Question>(`${this.apiUrl}/${id}`)
        
    }




}