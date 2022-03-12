import { Component, Input, OnInit } from '@angular/core';
import { RoadmapItemInterface } from '../roadmap-item.interface';

@Component({
  selector: 'app-roadmap-item-list',
  templateUrl: './roadmap-item-list.component.html',
  styleUrls: ['./roadmap-item-list.component.scss'],
})
export class RoadmapItemListComponent implements OnInit {
  @Input() itemList!: RoadmapItemInterface[];

  constructor() {}

  ngOnInit(): void {}
}
