import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import roadmapItemList from './roadmap/roadmap-item-list';
import { RoadmapItemInterface } from './roadmap/roadmap-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  origin: string;
  title: string;
  themeList: { name: string, background: string }[];
  currentTheme: { name: string, background: string };
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
    private route: ActivatedRoute,
    protected googleAnalyticsService: GoogleAnalyticsService,
  ) {
    this.origin = '';
    this.title = 'zigavukcevic.dev';
    this.themeList = [
      { name: 'sky-neutral', background: 'bg-gray-300' },
      { name: 'post-office', background: 'bg-yellow-400' },
    ];
    this.currentTheme = this.themeList[0];
    this.roadmapItemList = roadmapItemList;
  }

  ngOnInit() {
    if (location.hostname !== 'localhost' && !this.origin) {
      this.googleAnalyticsService.pageView('/', 'Home');
    } else {
      this.route.queryParams
      .subscribe(params => {
        this.origin = params['origin'];
        if (this.origin === 'my-iphone') {
          this.googleAnalyticsService.pageView('/', 'Home, origin: my-iphone');
        }
      });
    };

    // TODO: refactor to recursive function
    // roadmapItemList.forEach((roadmapItem) => {
    //   this.roadmapItemList.push(roadmapItem);

    //   if (roadmapItem.childList) {
    //     roadmapItem.childList.forEach((roadmapItem) => {
    //       this.roadmapItemList.push(roadmapItem);

    //       if (roadmapItem.childList) {
    //         roadmapItem.childList.forEach((roadmapItem) => {
    //           this.roadmapItemList.push(roadmapItem);

    //           if (roadmapItem.childList) {
    //             roadmapItem.childList.forEach((roadmapItem) => {
    //               this.roadmapItemList.push(roadmapItem);
    //             });
    //           }
    //         });
    //       }
    //     });
    //   }
    // });
  }

  setTheme(theme: { name: string, background: string }) {
    this.currentTheme = theme;
  }

  getTheme = () => (this.currentTheme);
}
