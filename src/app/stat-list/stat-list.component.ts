import { Component, OnInit } from '@angular/core';
import { IsUnitTestDescriptionVisibleInterface } from './interface/is-unit-test-description-visible.interface';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
})
export class StatListComponent implements OnInit {
  periodWeb!: string;
  periodProgramming!: string;
  numberOfCups!: number;
  isUnitTestDescriptionVisible!: IsUnitTestDescriptionVisibleInterface;

  constructor() {}

  ngOnInit(): void {
    const today: string = dayjs().format();
    const currentLocalHour = dayjs().hour();

    this.periodWeb = this.calculatePeriod('2007-06-01', today);
    this.periodProgramming = this.calculatePeriod('2012-01-01', today);
    this.numberOfCups = 0;

    this.isUnitTestDescriptionVisible = {
      periodWeb: false,
      periodProgramming: false,
      numberOfCups: false,
    };

    this.calculateCupsDrank(currentLocalHour);
  }

  calculatePeriod(startDate: string, endDate: string): string {
    const numberOfYears = dayjs(endDate).diff(startDate, 'year');
    const suffixSign = '+';

    return `${String(numberOfYears)}${suffixSign}`;
  }

  calculateCupsDrank(currentLocalHour: number): void {
    switch (true) {
      // From 8:00 to 10:59
      case this.isValueInRange(currentLocalHour, 8, 10):
        this.numberOfCups = 1;
        break;
      // From 11:00 to 15:59
      case this.isValueInRange(currentLocalHour, 11, 15):
        this.numberOfCups = 2;
        break;
      // From 16:00 to 23:59
      case this.isValueInRange(currentLocalHour, 16, 23):
        this.numberOfCups = 3;
        break;
      // Any other time (covers cases from 0:00 to 7:59)
      default:
        this.numberOfCups = 0;
    }
  }

  showUnitTestDescription(name: string): void {
    this.hideAllUnitTestDescription();
    this.isUnitTestDescriptionVisible[
      name as keyof IsUnitTestDescriptionVisibleInterface
    ] = true;
  }

  hideAllUnitTestDescription(): void {
    Object.keys(this.isUnitTestDescriptionVisible).forEach(name => {
      this.isUnitTestDescriptionVisible[
        name as keyof IsUnitTestDescriptionVisibleInterface
      ] = false;
    });
  }

  private isValueInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }
}
