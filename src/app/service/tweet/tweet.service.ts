import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tweet} from '../../classes/Tweet';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  baseUrl = 'http://localhost:8080/api/tweets';

  constructor(private http: HttpClient) {
  }

  getTweetsByUser(username): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseUrl + '/' + username);
  }

  placeTweet(t): void {
    this.http.post(this.baseUrl, t).subscribe();
  }

}
