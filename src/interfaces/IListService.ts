import { List } from './../models/List';
import { Observable } from 'rxjs';

export interface IListService {
    cadastrar(list : List): Observable<List>;
    atualizar(list : List): Observable<List>;
    excluir(list : List): void;
    retornarIdLista(list : List): void;
}