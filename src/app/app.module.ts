import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StatsComponent } from './stats/stats.component';
import { TabComponent } from './tab/tab.component';
import { TabListComponent } from './tab-list/tab-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    TabComponent,
    TabListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
