import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-item',
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent implements OnInit {
  @Input() status!: 'absorbed' | 'needToLearn';
  @Input() level!: number;
  @Input() title?: string | null;
  @Input() href?: string | null;

  constructor() {}

  ngOnInit(): void {}
}
