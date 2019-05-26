import {Injectable} from '@angular/core';
import {User} from '../../classes/User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userUrl = 'http://localhost:8080/api/users/login';
  user: User;

  constructor(
    private http: HttpClient) {
  }

  login(u): Observable<User> {
    return this.http.post<User>(this.userUrl, u);
  }

  isLoggedIn(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  setLoggedIn(user): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.token);
  }
}
