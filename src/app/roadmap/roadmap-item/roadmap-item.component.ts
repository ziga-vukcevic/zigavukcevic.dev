import { Component, Input, OnInit } from '@angular/core';
import { RoadmapItemInterface } from '../roadmap-item.interface';

@Component({
  selector: 'app-roadmap-item',
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent implements OnInit {
  @Input() level!: RoadmapItemInterface['level'];
  @Input() status!: RoadmapItemInterface['status'];
  @Input() ga?: RoadmapItemInterface['ga'];
  @Input() gaEvent?: RoadmapItemInterface['gaEvent'];
  @Input() hrefTitle?: RoadmapItemInterface['hrefTitle'];
  @Input() href?: RoadmapItemInterface['href'];
  @Input() version?: RoadmapItemInterface['version'];
  @Input() child?: RoadmapItemInterface['child'] | null;

  itemListCount: { all: number, visible: number };

  constructor() {
    this.itemListCount = { all: 0, visible: 0 };
  }

  ngOnInit(): void {}

  toggleChildVisibility() {
    if (this.child) {
      this.child.isVisible = !this.child.isVisible;
      this.calculateDepth();
    }
  }

  countAllItems(itemList: any) {
    console.log('countAllItems');

    itemList.forEach((item: any) => {
      // Counts
      this.itemListCount.all = this.itemListCount.all + 1;

      // Go deeper
      item.child && this.countAllItems(item.child.itemList);
    });

    return this.itemListCount.all;
  }

  countVisibleItems(child: any) {
    console.log('countVisibleItems');

    if (child && child.itemList && child.isVisible) {
      child.itemList.forEach((item: any) => {
        // Counts
        this.itemListCount.visible = this.itemListCount.visible + 1;

        if (item.child && item.child.isVisible) {
          // Go deeper
          this.itemListCount.visible = this.itemListCount.visible + item.child.itemList.length;
          this.countVisibleItems(item.child.itemList);
        }
      });
    }

    return this.itemListCount.visible;
  }

  calculateDepth(): string {
    if (this.child) { // && this.child?.itemList.length === 8
      this.itemListCount = { all: 0, visible: 0 };
      if (this.child) {
        this.countAllItems(this.child.itemList);
        this.countVisibleItems(this.child);
        // FIXME: still something not working, it gets stuck at visible 13 (no matter if all are open)
        console.log(this.itemListCount);
      }
    }

    const percentage = this.itemListCount.all
      ? Math.round(this.itemListCount.visible / this.itemListCount.all * 100)
      : 0;

    return `${percentage}%`;
  }
}
