import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrateService {

  private userUrl = 'http://localhost:8080/api/users';
  constructor(
    private http: HttpClient) { }
  registrate(user): void {
    console.log(user);
    this.http.post(this.userUrl, user).subscribe();
  }
}
