import { Observable } from 'rxjs';
import { IUser } from 'src/interfaces/IUserService';
import { User } from 'src/models/User';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Global } from 'src/shared/Global';

/* 
    SEMPRE IR PRO APP.MODULES DENTRO DO PROVIDER PRA COLOCAR NOSSO SERVICE
    CRIAR AS REGRAS DE NEGÓCIOS
*/

//VINCULANDO O PROVIDER(APP.MODULES) A NOSSA APLICAÇÃO
@Injectable({ 
    'providedIn': 'root'
})

export class UserService implements IUser {

    public apiUrl: string = Global.ApiUrl+"user"
    // public idUser = localStorage.getItem('id')
    
    constructor ( private _httpClient : HttpClient){}

    buscarUsuario(): Observable<User> {
        const user: User = this.retornarUsuarioLogado();
        return this._httpClient.get<User>(`${this.apiUrl}/${user.id}`);
    }

    //método para cadastro do usuario
    cadastrar(user: User): Observable<User> {
        
        if(!user.name ) throw new Error("Preencha o campo nome.");
        if(!user.email) throw new Error("Preencha o campo email!.");
        if(!user.password ) throw new Error("Preencha o campo senha!.");
        if(user.password != user.confirmPassword) throw new Error("As senhas não coincidem!.");

        return this._httpClient.post<User>(this.apiUrl,user)
        
    }
    
    //método para atualizar o usuario
    atualizar(user: User): Observable<User> {
        throw new Error('Method not implemented.');
    }

    //método para logar o usuario (salva-lo no localStorage)
    logar(user: User): void {
        localStorage.setItem('userlogado',JSON.stringify(user))
    }

    //retornar usuario logado
    retornarUsuarioLogado(): User {
        const user: User = JSON.parse(localStorage.getItem('userlogado'))
        return user;
    }

    //método para logout do usuario
    logout(): void {
        localStorage.clear();
    }

    
    
}   
