import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tweet} from '../classes/Tweet';
import {TweetService} from '../service/tweet/tweet.service';

@Component({
  selector: 'app-trendinglist',
  templateUrl: './trendinglist.component.html',
  styleUrls: ['./trendinglist.component.scss']
})
export class TrendinglistComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private tweetSer: TweetService) {
  }

  tag: string;
  tweets: Tweet[];

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tag = params['tag'];
        this.getTweets();
      }
    );
  }

  getTweets(): void {
    console.log("this works")
    const param = this.tag.replace('#', '')
    console.log(param)
    this.tweetSer.getTweetByTag(param).subscribe(
      res => {
        this.tweets = res;
      }
    );
  }

}
