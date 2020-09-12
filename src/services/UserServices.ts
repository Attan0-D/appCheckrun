import { Observable } from 'rxjs';
import { IUser } from 'src/interfaces/IUserService';
import { User } from 'src/models/User';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

/* 
    SEMPRE IR PRO APP.MODULES DENTRO DO PROVIDER PRA COLOCAR NOSSO SERVICE
    CRIAR AS REGRAS DE NEGÓCIOS
*/

//VINCULANDO O PROVIDER(APP.MODULES) A NOSSA APLICAÇÃO
@Injectable({ 
    'providedIn': 'root'
})

export class UserService implements IUser {

    constructor(private _httpClient: HttpClient){
    }

    //Desestruturação das variveis
    cadastrar({name, email, password, confirmedPassword}: User): Observable<User> {
        
        if(!name || !email || !password ) throw new Error("Preencha todos os campos!.");
        if(password != confirmedPassword) throw new Error("As senhas não coincidem!.");
        
        //Cadastro User
        const user = {
            name,
            email,
            password,
            confirmedPassword
        }

        console.log(user) 
    
        throw new Error("Usúario cadastrado com sucesso!.");
    
    }
    atualizar(user: User): Observable<User> {
        throw new Error('Method not implemented.');
    }
    logar(user: User): void {
        throw new Error('Method not implemented.');
    }
    retornarUsuarioLogado(): User {
        throw new Error('Method not implemented.');
    }
    
}