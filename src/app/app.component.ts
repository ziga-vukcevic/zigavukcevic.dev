import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ThemeInterface } from './theme.interface';
import { RoadmapService } from './roadmap/roadmap.service';
import { RoadmapItemInterface } from './roadmap/roadmap-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  themeList: ThemeInterface[];
  currentTheme: ThemeInterface;
  audioNamePronunciation: HTMLAudioElement;
  roadmapItemList: RoadmapItemInterface[];

  constructor(
    protected roadmapService: RoadmapService,
    protected googleAnalyticsService: GoogleAnalyticsService,
  ) {
    const consoleGreeting = {
      text: 'Hey! The time is now, lets do some inspection! 👍',
      styles: [
        'padding: 7px 9px 6px 2px',
        'background-color: #DC2625',
        'color: white',
        'border: 5px solid yellow',
        'font-size: 14px',
        'font-family: monospace',
      ],
    };

    console.info(
      `%c ${consoleGreeting.text}`,
      consoleGreeting.styles.join(';'),
    );

    this.themeList = [
      { name: 'skyNeutral', background: 'bg-gray-300' },
      { name: 'postOffice', background: 'bg-yellow-300' },
    ];
    this.currentTheme = this.themeList[0];
    this.audioNamePronunciation = new Audio(
      'assets/audio/name-pronunciation.mp3',
    );
    this.roadmapItemList = [];
  }

  ngOnInit(): void {
    this.roadmapService.getItemList().subscribe(itemList => {
      this.roadmapItemList = itemList;
    });
  }

  getTheme(): ThemeInterface {
    return this.currentTheme;
  }

  setTheme(theme: ThemeInterface): void {
    this.currentTheme = theme;
  }

  playNamePronunciation(): void {
    this.audioNamePronunciation.play();
  }

  expandAll(): void {
    this.roadmapService.expandAll(this.roadmapItemList);
  }

  collapseAll(): void {
    this.roadmapService.collapseAll(this.roadmapItemList);
  }

  convertFromCamelToKebabCase(string: string): string {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
