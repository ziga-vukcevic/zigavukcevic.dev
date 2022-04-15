import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { roadmapItemList } from 'src/app/roadmap/roadmap-item-list';
import { RoadmapItemInterface } from './roadmap-item.interface';

@Injectable({
  providedIn: 'root',
})
export class RoadmapService {
  private itemListBehaviorSubject: BehaviorSubject<RoadmapItemInterface[]>;
  private itemListCount: { all: number; visible: number };

  constructor() {
    this.itemListBehaviorSubject = new BehaviorSubject(roadmapItemList);
    this.itemListCount = { all: 0, visible: 0 };
  }

  getItemList(): Observable<RoadmapItemInterface[]> {
    console.log(this.countAllItems(this.itemListBehaviorSubject.value));
    console.log(this.countVisibleItems(this.itemListBehaviorSubject.value));
    return this.itemListBehaviorSubject.asObservable();
  }

  setItemList(itemList: RoadmapItemInterface[]): void {
    this.itemListBehaviorSubject.next(itemList);
  }

  toggleChildVisibility(): void {
    console.log('toggleChildVisibility');
  }

  expandAll(itemList: any): void {
    itemList.forEach((item: any) => {
      if (item.child) {
        item.child.isVisible = true;
        // Recursively go deeper
        this.expandAll(item.child.itemList);
      }
    });
  }

  collapseAll(itemList: any): void {
    itemList.forEach((item: any) => {
      if (item.child) {
        item.child.isVisible = false;
        // Recursively go deeper
        this.collapseAll(item.child.itemList);
      }
    });
  }

  private countAllItems(itemList: any): number {
    console.log('countAllItems');
    itemList.forEach((item: any) => {
      // Counts
      this.itemListCount.all = this.itemListCount.all + 1;

      // Recursively go deeper
      item.child && this.countAllItems(item.child.itemList);
    });

    return this.itemListCount.all;
  }

  private countVisibleItems(itemList: any): number {
    console.log('countVisibleItems');

    itemList.forEach((item: any) => {
      if (item.child && item.child.itemList && item.child.isVisible) {
        item.child.itemList.forEach((item: any) => {
          // Counts
          this.itemListCount.visible = this.itemListCount.visible + 1;

          if (item.child && item.child.isVisible) {
            this.itemListCount.visible =
              this.itemListCount.visible + item.child.itemList.length;
            // Recursively go deeper
            this.countVisibleItems(item.child.itemList);
          }
        });
      }
    });

    return this.itemListCount.visible;
  }
}
