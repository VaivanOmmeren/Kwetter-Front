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
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {

  tweets: Tweet[] = [];

  constructor(private timelineS: TimelineService,
              private loginS: LoginService,
              private userS: UserService,
              private dataS: DataService) {
  }

  ngOnInit() {


    this.loginS.following.push(this.loginS.user);
    this.timelineS.getTimeline(this.loginS.following).subscribe(tweet => {
      this.tweets = tweet;
      this.tweets.reverse();
      console.log(this.tweets);
    });

    this.dataS.connect(this.loginS.user.id);
    this.handleMessage();
  }


  handleMessage() {
    this.dataS.websocket.onmessage = evt => {
      console.log(`message received ${evt.data}`);
      const t = JSON.parse(evt.data);
      this.tweets.unshift(t);

    };
  }

  ngOnDestroy(): void {
    console.log('diconnected');
    this.dataS.disconnect();
  }

}
