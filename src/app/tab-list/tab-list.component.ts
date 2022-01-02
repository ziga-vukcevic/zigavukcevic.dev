import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabList!: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabList
    let activetabList = this.tabList.filter((tab)=>tab.isActive);

    // if there is no active tab set, activate the first
    if(activetabList.length === 0) {
      this.selectTab(this.tabList.first);
    }
  }

  selectTab(tab: any){
    // deactivate all tabList
    this.tabList.toArray().forEach(tab => tab.isActive = false);

    // activate the tab the user has clicked on.
    tab.isActive = true;
  }
}
