import { Component, Input, OnInit } from '@angular/core';
import { RoadmapItemStatusEnum } from './roadmap-item-status.enum';

@Component({
  selector: 'app-roadmap-item',
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent implements OnInit {
  @Input() title: string | null;
  @Input() href: string | null;
  @Input() status: RoadmapItemStatusEnum | null;
  @Input() level: number;

  constructor() {
    this.title = null;
    this.href = null;
    this.status = null;
    this.level = 1;
  }

  ngOnInit(): void {}
}
