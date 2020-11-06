import { Question } from './../models/Question';
import { Observable } from 'rxjs';

export interface IQuestionService {
    cadastrar(question : Question): Observable <Question>;
    atualizar(question : Question): Observable <Question>;
    excluir(question : Question): void;
}