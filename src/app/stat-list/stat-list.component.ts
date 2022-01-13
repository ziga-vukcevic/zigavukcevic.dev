import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
})
export class StatListComponent implements OnInit {
  numberOfCups: number;

  constructor() {
    this.numberOfCups = 0;
  }

  ngOnInit(): void {
    this.calculateCupsDrank();
  }

  calculateExperiencePeriod(startDate: string) {
    const numberOfYears = Math.round(
      (new Date().valueOf() - new Date(startDate).valueOf())
      / 1000 / 60 / 60 / 24 / 365);
    const suffixSign = '+';

    return `${numberOfYears}${suffixSign}`;
  }

  calculateCupsDrank() {
    const currentLocalHour = new Date().getHours();

    switch(true) {
      // From 8:00 to 10:59
      case (currentLocalHour >= 8 && currentLocalHour <= 10): // TODO: any cleaner way to write this?
        this.numberOfCups = 1;
        break;
      // From 11:00 to 15:59
      case (currentLocalHour >= 11 && currentLocalHour <= 15):
        this.numberOfCups = 2;
        break;
      // From 16:00 to 23:59
      case (currentLocalHour >= 16 && currentLocalHour <= 23):
        this.numberOfCups = 3;
        break;
      // Any other time (covers cases from 0:00 to 7:59)
      default:
        this.numberOfCups = 0;
    }
  }
}
