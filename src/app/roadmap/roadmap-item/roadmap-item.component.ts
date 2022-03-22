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
  @Input() hrefTitle?: RoadmapItemInterface['hrefTitle'];
  @Input() href?: RoadmapItemInterface['href'];
  @Input() gaEvent?: RoadmapItemInterface['gaEvent'];
  @Input() gaCategory?: RoadmapItemInterface['gaCategory'];

  constructor() {}

  ngOnInit(): void {}
}
