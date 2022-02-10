import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { code, HeroIconModule } from 'ng-heroicon';

import { StatListComponent } from './stat-list/stat-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabComponent } from './tab/tab.component';
import { RoadmapItemComponent } from './roadmap/roadmap-item/roadmap-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StatListComponent,
    TabListComponent,
    TabComponent,
    RoadmapItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    HeroIconModule.forRoot(
      { code },
      {
        defaultHostDisplay: 'inlineBlock',
        attachDefaultDimensionsIfNoneFound: true,
      },
    ),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          shell: () => import('highlight.js/lib/languages/shell'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
        // themePath: 'assets/styles/solarized-dark.css',
      },
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
