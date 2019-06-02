import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tweet} from '../../classes/Tweet';
import {Observable} from 'rxjs';
import {User} from '../../classes/User';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) {

  }

  private baseUrl = 'http://localhost:8080/api/tweets/users?';


  getTimeline(following: User[]): Observable<Tweet[]> {

    following.forEach(x => {
      this.baseUrl += `&users=${x.id}`;
    });
    return this.http.get<Tweet[]>(this.baseUrl);
  }
}
