import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trend} from '../../classes/Trend';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {


  trendingUrl = 'https://europe-west1-kwetter-e5499.cloudfunctions.net/';


  constructor(private http: HttpClient) {
  }

  getTrending(): Observable<Trend[]> {
    return this.http.get<Trend[]>(this.trendingUrl + 'getTrending');
  }

  checkTrending(t: string): void {
    const tweet = t.split(' ');
    const trends: Trend[] = [];


    tweet.forEach(x => {
      if (x.charAt(0) === '#') {
        trends.push(new Trend(x));
      }
    });

    if (trends.length > 0) {
      this.http.put(this.trendingUrl + 'updateTrending', trends).subscribe();
    }
  }
}
