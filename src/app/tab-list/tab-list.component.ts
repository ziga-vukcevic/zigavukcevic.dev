import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss'],
})
export class TabListComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabList!: QueryList<TabComponent>;

  ngAfterContentInit() {
    if (this.tabList.some(tab => !tab.isActive)) {
      this.selectTab(this.tabList.first);
    }
  }

  selectTab(tab: TabComponent){
    this.tabList.forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }
}
