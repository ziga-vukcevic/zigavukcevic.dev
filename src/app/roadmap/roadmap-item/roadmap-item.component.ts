import { Component, Input, OnInit } from '@angular/core';
import { RoadmapService } from '../roadmap.service';
import { RoadmapItemInterface } from './roadmap-item.interface';

@Component({
  selector: 'app-roadmap-item',
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent implements OnInit {
  @Input() level!: RoadmapItemInterface['level'];
  @Input() status!: RoadmapItemInterface['status'];
  @Input() text!: RoadmapItemInterface['text'];
  @Input() textVersion?: RoadmapItemInterface['textVersion'];
  @Input() textNote?: RoadmapItemInterface['textNote'];
  @Input() hrefTitle?: RoadmapItemInterface['hrefTitle'];
  @Input() href?: RoadmapItemInterface['href'];
  @Input() depthMeter!: RoadmapItemInterface['depthMeter'];
  @Input() isVisible!: RoadmapItemInterface['isVisible'];
  @Input() ga?: RoadmapItemInterface['ga'];
  @Input() gaEvent?: RoadmapItemInterface['gaEvent'];
  @Input() child?: RoadmapItemInterface['child'] | null;

  itemList: RoadmapItemInterface[];
  itemListCount: { all: number; visible: number };

  constructor(private roadmapService: RoadmapService) {
    this.itemList = [];
    this.itemListCount = { all: 0, visible: 0 };
  }

  ngOnInit(): void {}

  updateVisibility(child: any): void {
    this.roadmapService.updateVisibility(child);
  }
}
