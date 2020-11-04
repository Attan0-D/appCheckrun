import { Question } from './../models/Question';
import { IQuestionService } from './../interfaces/IQuestion';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/shared/Global';

@Injectable({ 
    'providedIn': 'root'
})

export class QuestionService implements IQuestionService{

    public apiUrl: string = Global.ApiUrl+"question";

    constructor ( private _http : HttpClient){}

    cadastrar(question : Question): Observable<Question>{
        if( !question.description ) throw new Error('Preencha a descrição da pergunta');
        
        return this._http.post<Question>(this.apiUrl, question)  
    }

    atualizar(question : Question): Observable<Question>{
        return this._http.post<Question>(this.apiUrl,{question})  
    }  

    excluir(question : Question): void{}

}