import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {Tweet} from '../classes/Tweet';
import {UserService} from '../service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {TweetService} from '../service/tweet/tweet.service';


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

  constructor(private userService: UserService, private route: ActivatedRoute,
              private tweetService: TweetService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.username = params['username'];
        this.getUser();
      }
    );
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
      .subscribe((user) => localStorage.setItem('user', JSON.stringify(user)));
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
}


