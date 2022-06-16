import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor() {}

  eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string|null = null,
    eventValue: number|null = null
  ){
    console.log('gtag fired');
    gtag('event', eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    })
  }
}
