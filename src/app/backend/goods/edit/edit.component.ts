import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zo-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public tabItems = [
    '基本',
    '图片',
    '详情',
    '其他',
    '属性'
  ];

  public tabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
