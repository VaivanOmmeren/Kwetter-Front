import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {Tweet} from '../classes/Tweet';
import {UserService} from '../service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {TweetService} from '../service/tweet/tweet.service';
import {LoginService} from '../service/login/login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string;
  userProfile: User;
  Tweets: Tweet[];
  followers: User[];
  following: User[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private tweetService: TweetService,
              private loginS: LoginService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.username = params['username'];
        this.getUser();
      }
    );
    console.log(this.loginS.following);
  }

  getUser(): void {
    this.userService.getUser(this.username)
      .subscribe((user) => {
        this.userProfile = user;
        this.getKweets();
        this.getFollowers();
        this.getFollowing();
      });
  }

  getFollowing() {
    this.userService.getFollowing(this.username)
      .subscribe((users) => this.following = users);
  }

  getFollowers() {
    this.userService.getFollowers(this.username)
      .subscribe((users) => this.followers = users);
  }

  editUser(): void {
    this.userService.editUser(this.userProfile)
      .subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.loginS.user = user;
      });
  }

  getKweets(): void {
    this.tweetService.getTweetsByUser(this.userProfile.id)
      .subscribe((tweets) => this.Tweets = tweets);
  }


  isCurrentUser(): boolean {
    if (localStorage.getItem('user')) {
      const u = JSON.parse(localStorage.getItem('user'));
      return u.id === this.userProfile.id;
    }
    return false;
  }

  follow(): void {
    this.userService.followUser(this.loginS.user.name, this.username).subscribe(reply => {
      this.userService.getFollowing(this.loginS.user.name).subscribe( res => {
        this.loginS.following = res;
      })
      console.log('follow success');
    });
  }
}


