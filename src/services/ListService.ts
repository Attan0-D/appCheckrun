import { Observable } from 'rxjs';
import { List } from 'src/models/List';
import { IListService } from './../interfaces/IListService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/shared/Global';
import { User } from 'src/models/User';
import { UserService } from './UserServices';

@Injectable({ 
    'providedIn': 'root'
})

export class ListService implements IListService{

    public apiUrl: string = Global.ApiUrl+"list";

    private _userLogado: User = new User()

    constructor ( 
        private _http : HttpClient,
        private _userService: UserService
        ){
            this._userLogado = this._userService.retornarUsuarioLogado()
        }

    cadastrar(dados: List): Observable<List> {

        if( !dados.name ) throw new Error('Preencha o nome da lista');
        if( !dados.days ) throw new Error('Preencha os dias da lista');
        if( !dados.hour ) throw new Error('Preencha o horário da lista');
        if( !dados.questions.length) throw new Error('Preencha as questões');

        dados.user_id = this._userLogado.id
        console.log(dados)   
        // throw new Error('Precisa ser implementada')
        
        return this._http.post<List>(this.apiUrl,dados) 
    }

    atualizar(list : List): Observable<List>{
        throw new Error('Precisa ser implementada')
        // return this._http.post<List>(this.apiUrl,{name})  
    }  

    excluir(list : List): void{
        throw new Error('Precisa ser implementada')
    }

    retornarIdLista():void{
        throw new Error('Precisa ser implementada')
        /* return this._http.get(this.apiUrl, ) */
    }

}