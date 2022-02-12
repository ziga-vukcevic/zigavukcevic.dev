import { Component, OnInit } from '@angular/core';
import { IsUnitTestListVisibleInterface } from './interface/is-unit-test-list-visible.interface';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
})
export class StatListComponent implements OnInit {
  periodWeb: string;
  periodProgramming: string;
  numberOfCups: number;
  isUnitTestListVisible: {
    periodWeb: boolean,
    periodProgramming: boolean,
    numberOfCups: boolean,
  };

  constructor() {
    const today: Date = new Date();
    // TODO: rather format? dayjs, or? not having leading zeros, a mess
    const todayParsed: string = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    this.periodWeb = this.calculatePeriod('2007-06-01', todayParsed);
    this.periodProgramming = this.calculatePeriod('2012-01-01', todayParsed);

    this.numberOfCups = 0;
    this.isUnitTestListVisible = {
      periodWeb: false,
      periodProgramming: false,
      numberOfCups: false,
    };
  }

  ngOnInit(): void {
    // TODO: here? or in constructor? or move things from constructor to here?
    const currentLocalHour = new Date().getHours();
    this.calculateCupsDrank(currentLocalHour);
  }

  calculatePeriod(startDate: string, endDate: string): string {
    // TODO: fix NaN on iPhone Chrome - perhaps just use dayjs lib
    const numberOfYears = Math.round(
      (new Date(endDate).valueOf() - new Date(startDate).valueOf())
      / 1000 / 60 / 60 / 24 / 365);
    const suffixSign = '+';

    return `${String(numberOfYears)}${suffixSign}`;
  }

  calculateCupsDrank(currentLocalHour: number): void {
    switch(true) {
      // From 8:00 to 10:59
      case (this.isValueInRange(currentLocalHour, 8, 10)):
        this.numberOfCups = 1;
        break;
      // From 11:00 to 15:59
      case (this.isValueInRange(currentLocalHour, 11, 15)):
        this.numberOfCups = 2;
        break;
      // From 16:00 to 23:59
      case (this.isValueInRange(currentLocalHour, 16, 23)):
        this.numberOfCups = 3;
        break;
      // Any other time (covers cases from 0:00 to 7:59)
      default:
        this.numberOfCups = 0;
    }
  }

  showUnitTestList(listName: string): void {
    this.isUnitTestListVisible[listName as keyof IsUnitTestListVisibleInterface] = true;
  }

  private isValueInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }
}
