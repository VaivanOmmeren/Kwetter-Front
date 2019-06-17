import {Component, OnInit} from '@angular/core';
import {AdminService} from '../src/app/service/admin/admin.service';
import {User} from '../classes/User';
import {Tweet} from '../classes/Tweet';
import {UserService} from '../service/user/user.service';
import {TweetService} from '../service/tweet/tweet.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserRole} from '../classes/UserRole';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  selectedUser: User;
  selectedUserKweets: Tweet[];
  availableRoles: UserRole[];

  constructor(private adminS: AdminService,
              private userS: UserService,
              private tweetS: TweetService) {
  }

  ngOnInit() {

  }

  search(data) {
    this.userS.getUser(data.name).subscribe((res) => {
      this.selectedUser = res;

      this.tweetS.getTweetsByUser(this.selectedUser.id).subscribe((tweets) => {
        this.selectedUserKweets = tweets;
      });
    });
  }

  removeTweet(tweet: Tweet) {
    this.adminS.removeTweet(tweet.id).subscribe((res) => {
      const index = this.selectedUserKweets.indexOf(tweet);
      this.selectedUserKweets.splice(index, 1);
    });
  }
}
