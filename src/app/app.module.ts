import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
// TODO:
// import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { StatListComponent } from './stat-list/stat-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabComponent } from './tab/tab.component';
import { RoadmapItemComponent } from './roadmap/roadmap-item/roadmap-item.component';
import { RoadmapItemListComponent } from './roadmap/roadmap-item-list/roadmap-item-list.component';
import { RoadmapService } from './roadmap/roadmap.service';
import { HighlightSkillComponent } from './highlight-skill/highlight-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    StatListComponent,
    TabListComponent,
    TabComponent,
    RoadmapItemComponent,
    RoadmapItemListComponent,
    HighlightSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-Y934WGEX9C'),
    NgxGoogleAnalyticsRouterModule,
    // TODO:
    // HighlightModule,
  ],
  providers: [
    // TODO:
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     coreLibraryLoader: () => import('highlight.js/lib/core'),
    //     // lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
    //     languages: {
    //       typescript: () => import('highlight.js/lib/languages/typescript'),
    //       shell: () => import('highlight.js/lib/languages/shell'),
    //       xml: () => import('highlight.js/lib/languages/xml'),
    //     },
    //     // themePath: 'assets/styles/solarized-dark.css',
    //   },
    // },
    RoadmapService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
