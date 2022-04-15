import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { RoadmapService } from '../roadmap.service';
import { RoadmapItemInterface } from '../roadmap-item.interface';

@Component({
  selector: 'app-roadmap-item',
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent implements OnInit {
  @Input() level!: RoadmapItemInterface['level'];
  @Input() status!: RoadmapItemInterface['status'];
  @Input() depthMeter!: RoadmapItemInterface['depthMeter'];
  @Input() ga?: RoadmapItemInterface['ga'];
  @Input() gaEvent?: RoadmapItemInterface['gaEvent'];
  @Input() hrefTitle?: RoadmapItemInterface['hrefTitle'];
  @Input() href?: RoadmapItemInterface['href'];
  @Input() version?: RoadmapItemInterface['version'];
  @Input() child?: RoadmapItemInterface['child'] | null;

  itemList: any;
  itemListCount: { all: number, visible: number };

  constructor(
    private roadmapService: RoadmapService,
  ) {
    this.itemList = [];
    this.itemListCount = { all: 0, visible: 0 };
  }

  ngOnInit(): void {
    // this.roadmapService.toggleChildVisibility();

    // this.roadmapDepthMeterService.getItemListObs()
    //   // .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((itemList) => {
    //     this.itemList = itemList;
    //     console.log(itemList);
    //   });
  }

  ngOnDestroy() {
    // this.unsubscribe$.next(true);
    // this.unsubscribe$.complete();
  }

  toggleChildVisibility(id: string) {
    console.log(id);
    this.roadmapService.toggleChildVisibility();
    if (this.child) {
      this.child.isVisible = !this.child.isVisible;
    }
  }
}
