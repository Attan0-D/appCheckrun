import { List } from './../models/List';
import { Observable } from 'rxjs';

export interface IListService {
    cadastrar(dados: List, loading: HTMLIonLoadingElement): Observable<List>;
    editar(list : List): Observable<List>;
    excluir(id: number): Observable<List>;
    retornarIdLista(list : List): void;
    retornarListas(): Promise<List[]>;
}