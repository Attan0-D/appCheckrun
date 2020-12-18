import { Question } from './../models/Question';
import { Observable } from 'rxjs';

export interface IQuestionService {
    cadastrar(question : Question): Observable <Question>;
    atualizar(question : Question): Observable <Question>;
    excluir(id: number): Observable <Question>;
    listar(id:number): Observable <Question>;
}