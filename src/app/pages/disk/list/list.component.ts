import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public isList = false;

  public crumb: Array<any> = [];

  public checkCount = 0;

  public sort: string;

  public order: number;

  public files: Array<any> = [];

  public mode = 1;

  public uploadTitle = '上传';

  public uploadFiles: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * setOrder
   */
  public setOrder(sort: string) {
    
  }

  /**
   * shareAll
   */
  public shareAll() {
    
  }

  /**
   * downloadAll
   */
  public downloadAll() {
    
  }

  /**
   * deleteAll
   */
  public deleteAll() {
    
  }

  /**
   * moveAll
   */
  public moveAll() {
    
  }

  /**
   * copyAll
   */
  public copyAll() {
    
  }

  /**
   * rename
   */
  public rename() {
    
  }

  /**
   * checkAll
   */
  public checkAll() {
    
  }

  /**
   * check
   */
  public check(item: any) {
    
  }

  /**
   * goBack
   */
  public goBack() {
    
  }

  /**
   * goLevel
   */
  public goLevel(index: number) {
    
  }

  /**
   * refresh
   */
  public refresh() {
    
  }

  /**
   * deleteUpload
   */
  public deleteUpload(index: number) {
    
  }
}
