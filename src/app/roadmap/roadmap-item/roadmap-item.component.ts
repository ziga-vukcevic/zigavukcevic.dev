import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-item',
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent implements OnInit {
  @Input() title?: string | null;
  @Input() href?: string | null;
  @Input() status?: 'absorbed' | 'needToLearn';
  @Input() level!: number;

  constructor() {}

  ngOnInit(): void {
    // this.href = null;
    // this.status = null;
    // this.level = 1;
  }
}
