import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimelineService} from '../service/timeline/timeline.service';
import {Tweet} from '../classes/Tweet';
import {LoginService} from '../service/login/login.service';
import {User} from '../classes/User';
import {UserService} from '../service/user/user.service';
import {DataService} from '../service/data/data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit, OnDestroy {

  tweets: Tweet[] = [];
  following: User[];

  constructor(private timelineS: TimelineService,
              private loginS: LoginService,
              private userS: UserService,
              private dataS: DataService) {
  }

  ngOnInit() {

    this.userS.getFollowing(this.loginS.user.name).subscribe(res => {
      this.following = res;
      this.following.push(this.loginS.user);
      this.timelineS.getTimeline(this.following).subscribe(tweet => {
        this.tweets = tweet;
      });
    });

    this.dataS.connect(this.loginS.user.id);
    this.handleMessage();
  }


  handleMessage() {
    this.dataS.websocket.onmessage = evt => {
      console.log(`message received ${evt.data}`);
      const t = JSON.parse(evt.data);
      console.log(this.tweets);
      this.tweets.push(t);
      console.log(this.tweets);

    };
  }

  ngOnDestroy(): void {
    console.log('diconnected');
    this.dataS.disconnect();
  }

}
