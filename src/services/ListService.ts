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

    retornarListas(): Promise<List[]> {
        const promise = new Promise<List[]>(async (resolve, reject) => {
            try{
                const user = await this._userService.buscarUsuario().toPromise();
                console.warn(user.listqs);
                //user.lists = user.listqs;
                console.warn(user.listqs);
                resolve(user.listqs);

            }catch(e){
                reject(e);
            }        
        });
        return promise;
    }

    cadastrar(dados: List, loading: HTMLIonLoadingElement): Observable<List> {
        
        if( !dados.name ){ 
            loading.dismiss();
            throw new Error('Preencha o nome da lista');
        }

        if( !dados.days ) throw new Error('Preencha os dias da lista');
        if( !dados.hour ) throw new Error('Preencha o horário da lista');
        if( !dados.category_id ) throw new Error('Preencha a categoria da lista');
        if( !dados.questions.length) throw new Error('Preencha as questões');

        dados.days = JSON.stringify(dados.days);
        dados.user_id = this._userLogado.id
        console.log(dados);   
        
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