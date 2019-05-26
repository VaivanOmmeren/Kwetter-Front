import {Injectable} from '@angular/core';
import {User} from '../../classes/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Tweet} from '../../classes/Tweet';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/users';
  constructor(
    private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  editUser(user): Observable<User> {
    return this.http.put<User>(this.userUrl + '/' + user.name, user)
      .pipe(
        catchError(this.handleError<User>('editUser', user)));
  }

  getUser(username): Observable<User> {
    return this.http.get<User>(this.userUrl + '?username=' + username)
      .pipe(
        catchError(this.handleError<User>('getUser', username)));
  }
  getFollowers(username): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/' + username + '/' + 'followers')
      .pipe(
        catchError(this.handleError<User[]>('getFollowers', [])));
  }

  getFollowing(username): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/' + username + '/' + 'following')
      .pipe(
        catchError(this.handleError<User[]>('getFollowing', [])));
  }
}
