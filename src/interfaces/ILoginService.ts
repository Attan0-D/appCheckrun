import { Observable } from 'rxjs';
import { Login } from 'src/models/Login';
import { User } from 'src/models/User';

export interface ILoginService {
    login(dados: Login) : Observable<User>
}