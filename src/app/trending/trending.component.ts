import {Component, OnInit} from '@angular/core';
import {TrendingService} from '../service/trending/trending.service';
import {Trend} from '../classes/Trend';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  trends: Trend[];

  constructor(tService: TrendingService) {
    tService.getTrending().subscribe((res) => {
      if (res.length > 0) {
        this.trends = res;
        this.sortByCount();
      }
    });
  }

  ngOnInit() {
  }

  sortByCount(): void {
    this.trends.sort((a, b) => {
      return a.count - b.count;
    });
    this.trends.reverse();
  }
}
