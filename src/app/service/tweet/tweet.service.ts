import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tweet} from '../../classes/Tweet';
import {Observable} from 'rxjs';
import {Trend} from '../../classes/Trend';
import {TrendingService} from '../trending/trending.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  baseUrl = 'http://localhost:8080/api/tweets';


  constructor(private http: HttpClient, private tService: TrendingService) {
  }

  getTweetsByUser(username): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseUrl + '/' + username);
  }

  placeTweet(t: Tweet): void {
    this.tService.checkTrending(t.text);
    this.http.post(this.baseUrl, t).subscribe();
  }


}
