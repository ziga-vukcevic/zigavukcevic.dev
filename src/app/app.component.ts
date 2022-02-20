import { Component } from '@angular/core';
import roadmapItemList from './roadmap/roadmap-item-list';
import { RoadmapItemInterface } from './roadmap/roadmap-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zigavukcevic.dev';
  currentTheme: string;
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

  constructor() {
    this.currentTheme = 'sky-neutral'; // 'post-office';
    this.roadmapItemList = [];

    // TODO: refactor to recursive function
    roadmapItemList.forEach((roadmapItem) => {
      this.roadmapItemList.push(roadmapItem);

      if (roadmapItem.childList) {
        roadmapItem.childList.forEach((roadmapItem) => {
          this.roadmapItemList.push(roadmapItem);

          if (roadmapItem.childList) {
            roadmapItem.childList.forEach((roadmapItem) => {
              this.roadmapItemList.push(roadmapItem);
            });
          }
        });
      }
    });
  }

  setTheme(name: string) {
    this.currentTheme = name;
  }
}
