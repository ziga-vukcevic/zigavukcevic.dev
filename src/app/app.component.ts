import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zigavukcevic.dev';
  codeSample = {
    cli: `npx ng generate component stats`,
    template:
`<div *ngIf="numberOfCups > 0">
  <p>{{ numberOfCups }}</p>
  <p *ngIf="numberOfCups === 1">cup</p>
  <p *ngIf="numberOfCups > 1">cups</p>
  <p>of coffee drank today</p>
</div>

<!--
  TODO: check if Angular has anything for singular, plural
  https://angular.io/api/common/I18nPluralPipe
-->`,
    script:
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
  }
}
