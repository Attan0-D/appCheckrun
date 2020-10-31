import { Observable } from 'rxjs';
import { Global } from 'src/shared/Global';
import { ICategory } from 'src/interfaces/ICategory';
import { Category } from 'src/models/Category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ 
    'providedIn': 'root'
})

export class CategoryService implements ICategory{

    public apiUrl: string = Global.ApiUrl+"category"

    constructor ( private _http : HttpClient){}


    cadastrar({ name }: Category): Observable<Category> {
        if( !name  ) throw new Error('Preencha o campo Categoria');
       
        console.log(name)
        return this._http.post<Category>(this.apiUrl,{name})
    }
    
}