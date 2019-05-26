import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../service/login/login.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }
  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe((user) => { this.loginService.setLoggedIn(user);
    this.router.navigateByUrl('/'); },
      (error) => this.snackBar.open('Onjuist gebruikersnaam of wachtwoord', 'dismiss', {duration: 2000}));

  }
}
