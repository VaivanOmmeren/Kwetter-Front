import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:8080/api/tweets';

  constructor(private http: HttpClient) {
  }

  removeTweet(id) {
    return this.http.delete(this.baseUrl + '?id=' + id);
  }
}
