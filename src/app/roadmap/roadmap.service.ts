import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { roadmapItemList } from 'src/app/roadmap/roadmap-item-list/roadmap-item-list';
import { RoadmapItemInterface } from './roadmap-item/roadmap-item.interface';

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
    return this.itemListBehaviorSubject.asObservable();
  }

  setItemList(itemList: RoadmapItemInterface[]): void {
    this.itemListBehaviorSubject.next(itemList);
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

  updateVisibility(child: any) {
    child.isVisible = !child.isVisible;
    console.log('updated visibility','child', child.isVisible);

    child.itemList.forEach((item: any) => {
      item.isVisible = child.isVisible;
      console.log('updated visibility', item.text, item.isVisible);
    });

    // console.log('behavour', this.itemListBehaviorSubject.value);
    this.setDepthMeter(this.itemListBehaviorSubject.value);
  }

  setDepthMeter(itemList: any): void {
    // console.log(itemList);

    itemList.forEach((item: any) => {
      // console.log(item);

      if (item.child) {
        if (item.child.isVisible) {
          // Counts
          this.itemListCount = { all: 0, visible: 0 };
          const countVisibleItems = this.countVisibleItems(item.child.itemList);
          const countAllItems = this.countAllItems(item.child.itemList);

          item.depthMeter = Math.round(countVisibleItems / countAllItems * 100);

          console.log(
            '--- setDepthMeter',
            item.text,
            'countVisibleItems', countVisibleItems,
            'countAllItems', countAllItems,
            'depthMeter', Math.round(countVisibleItems / countAllItems * 100)
          );

          // Recursively go deeper
          item.child && this.setDepthMeter(item.child.itemList);
        }
      } else {
        item.depthMeter = item.isVisible ? 100 : 0;
      }
    });


    // const itemListCountVisible = this.countVisibleItems(itemList);
    // const itemListCountAll = this.countAllItems(itemList);

    // console.log('itemListCountVisible', itemListCountVisible);
    // console.log('itemListCountAll', itemListCountAll);

    // return Math.round(itemListCountVisible / itemListCountAll * 100);
  }

  private countAllItems(itemList: any): number {
    itemList.forEach((item: any) => {
      // Counts
      this.itemListCount.all = this.itemListCount.all + 1;
      // Recursively go deeper
      item.child && this.countAllItems(item.child.itemList);
    });

    return this.itemListCount.all;
  }

  private countVisibleItems(itemList: any): number {
    itemList.forEach((item: any) => {
      if (item.isVisible) {
        this.itemListCount.visible = this.itemListCount.visible + 1;
      }

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
