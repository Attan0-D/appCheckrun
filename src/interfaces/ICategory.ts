import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';

export interface ICategory {
    cadastrar(category: Category): Observable<Category>
}