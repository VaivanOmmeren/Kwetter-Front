import {Component, OnInit} from '@angular/core';
import {LoginService} from './service/login/login.service';
import {User} from './classes/User';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TweetdialogComponent} from './tweetdialog/tweetdialog.component';
import {Tweet} from './classes/Tweet';
import {TweetService} from './service/tweet/tweet.service';
import {DataService} from './service/data/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router, public dialog: MatDialog,
              private tweetService: TweetService, private dataService: DataService) {
  }

  title = 'Kwetter';

  ngOnInit(): void {
    this.loginService.isLoggedIn();
  }

  logout(): void {
    this.loginService.user = new User();
    localStorage.clear();
    window.location.reload();
  }

  placeTweet(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(TweetdialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe((data) => {
        if (data) {
          const t = new Tweet(data['tweetText'], this.loginService.user.id, new Date());
          this.tweetService.placeTweet(t);
          this.dataService.websocket.send(' a tweet was placed');
        }
      });
  }
}
