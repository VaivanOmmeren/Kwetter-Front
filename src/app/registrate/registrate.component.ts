import { Component, OnInit } from '@angular/core';
import {User} from '../classes/User';
import {RegistrateService} from '../service/registrate/registrate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent implements OnInit {

  user: User = new User();
  constructor(private registrateService: RegistrateService, private router: Router) { }

  ngOnInit() {
  }

  register(): void {
    this.registrateService.registrate(this.user);
    this.router.navigateByUrl('/');
  }
}
