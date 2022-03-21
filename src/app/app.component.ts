import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { first, last, pluck, skip, take, takeLast, takeWhile, tap } from 'rxjs';
import roadmapItemList from './roadmap/roadmap-item-list';
import { RoadmapItemInterface } from './roadmap/roadmap-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  origin: string | null;
  title: string;
  themeList: { name: string, background: string }[];
  currentTheme: { name: string, background: string };
  audioNamePronunciation: HTMLAudioElement;
  roadmapItemList: RoadmapItemInterface[];
  codeSample = {
    cli:
`
npx ng generate component stats --style none

.
└── src
    └── app
        └── stats
            ├── stats.component.html
            ├── stats.component.ts
            └── stats.component.spec.ts
`,
    template:
`
<div *ngIf="numberOfCups > 0">
  <p>{{ numberOfCups }}</p>
  <p *ngIf="numberOfCups === 1">cup</p>
  <p *ngIf="numberOfCups > 1">cups</p>
  <p>of coffee drank today</p>
</div>

<!--
  TODO: check if Angular has anything for singular, plural
  https://angular.io/api/common/I18nPluralPipe
-->
`,
    component:
`calculateCupsDrank() {
  const currentLocalHour = new Date().getHours();

  switch(true) {
    // From 8:00 to 10:59
    case (currentLocalHour >= 8 && currentLocalHour <= 10): // TODO: any cleaner way to write this?
      this.numberOfCups = 1;
      break;
    // From 11:00 to 16:59
    case (currentLocalHour >= 11 && currentLocalHour <= 16):
      this.numberOfCups = 2;
      break;
    // From 17:00 to 23:59
    case (currentLocalHour >= 17 && currentLocalHour <= 23):
      this.numberOfCups = 3;
      break;
    // Any other time (covers cases from 0:00 to 7:59 - usually sleeping at that time)
    default:
      this.numberOfCups = 0;
  }
}`,
unitTest: `code for unit test goes here`,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    protected googleAnalyticsService: GoogleAnalyticsService,
  ) {
    this.origin = null;
    this.title = 'zigavukcevic.dev';
    this.themeList = [
      { name: 'sky-neutral', background: 'bg-gray-300' },
      { name: 'post-office', background: 'bg-yellow-400' },
    ];
    this.currentTheme = this.themeList[0];
    this.audioNamePronunciation = new Audio('assets/audio/name-pronunciation.mp3');
    this.roadmapItemList = roadmapItemList;
  }

  ngOnInit() {
    // if (location.hostname === 'localhost') {
    //   const queryParams = this.activatedRoute.snapshot.queryParamMap;
    //   const routeParams = this.activatedRoute.snapshot.params;
    //   console.log(queryParams, routeParams);

      // const origin = this.route.snapshot.queryParamMap.get('origin');
      // console.log(origin);

      // let emitCount = 0;

      // this.route.queryParams
      // .pipe(
      //   takeWhile(val => val === undefined, true), // or maybe !Boolean(val)
      //   takeLast(1),
      // )
      // .subscribe(params => {
      //   const origin = params['origin'];
      //   console.log('origin', origin);

      //   if (origin === 'my-iphone') {
      //     console.log('GA origin');
      //     this.googleAnalyticsService.pageView('/', 'Home, origin: my-iphone');
      //   } else {
      //     console.log('GA normal');
      //     this.googleAnalyticsService.pageView('/', 'Home');
      //   }
      // });
    // }
  }

  // ngAfterViewChecked() {
  //   console.log('>>>');
  //   console.log(this.activatedRoute.snapshot.queryParamMap.get('origin'));
  // }

  setTheme(theme: { name: string, background: string }) {
    this.currentTheme = theme;
  }

  getTheme = () => (this.currentTheme);

  playNamePronunciation = () => {
    this.audioNamePronunciation.play();
  };
}
