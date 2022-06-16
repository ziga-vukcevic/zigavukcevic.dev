import { Component, Input, OnInit } from '@angular/core';
import { RoadmapItemInterface } from '../roadmap-item/roadmap-item.interface';
import { RoadmapService } from '../roadmap.service';

@Component({
  selector: 'app-roadmap-item-list',
  templateUrl: './roadmap-item-list.component.html',
  styleUrls: ['./roadmap-item-list.component.scss'],
})
export class RoadmapItemListComponent implements OnInit {
  @Input() itemList!: RoadmapItemInterface[];

  constructor(
    private roadmapService: RoadmapService,
  ) {}

  ngOnInit(): void {
    this.roadmapService.setDepthMeter(this.itemList);
  }
}
