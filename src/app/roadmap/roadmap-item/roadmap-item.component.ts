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

  constructor() {}

  ngOnInit(): void {}

  toggleChild() {
    if (this.child) {
      this.child.isVisible = !this.child.isVisible;
    }
  }
}
