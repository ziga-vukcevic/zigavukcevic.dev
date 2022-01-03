import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() title: string;
  @Input() isActive: boolean;

  constructor() {
    this.title = '';
    this.isActive = false;
  }

  ngOnInit(): void {}
}
