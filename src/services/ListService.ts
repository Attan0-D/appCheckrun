import { Observable } from 'rxjs';
import { List } from 'src/models/List';
import { IListService } from './../interfaces/IListService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/shared/Global';

@Injectable({ 
    'providedIn': 'root'
})

export class ListService implements IListService{

    public apiUrl: string = Global.ApiUrl+"list";

    constructor ( private _http : HttpClient){}

    cadastrar(list : List): Observable<List>{
        if( !list.name ) throw new Error('Preencha o nome da lista');
        if( !list.frequency) throw new Error('Preencha a frequência da lista');
        if( !list.days ) throw new Error('Preencha os dias da lista');
        if( !list.hour ) throw new Error('Preencha o horário da lista');

        return this._http.post<List>(this.apiUrl, list)  
    }

    atualizar(list : List): Observable<List>{
        return this._http.post<List>(this.apiUrl,{name})  
    }  

    excluir(list : List): void{}

    retornarIdLista():void{
        /* return this._http.get(this.apiUrl, ) */
    }

}