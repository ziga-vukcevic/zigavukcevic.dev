import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() title: string | null;
  @Input() isActive: boolean;

  constructor() {
    this.title = null;
    this.isActive = false;
  }

  ngOnInit(): void {}
}
