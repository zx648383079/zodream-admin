import { Component, OnInit } from '@angular/core';
import { DiskService } from '../disk.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public isList = false;

  public crumb: Array<any> = [
    {id: 0, name: '全部文件'}
  ];

  public checkCount = 0;

  public isAllChecked = false;

  public sort: string;

  public order: string;

  public files: Array<any> = [];

  public isLoading = true;

  public mode = 1;

  public uploadTitle = '上传';

  public uploadFiles: Array<any> = [];

  constructor(
      private service: DiskService
  ) { }

  ngOnInit() {
  }

  /**
   * getParentCrumb
   */
  public getParentCrumb(): any {
    return this.crumb[this.crumb.length - 1];
  }

  /**
   * getParentCrumbId
   */
  public getParentCrumbId(): number {
      return this.getParentCrumb().id;
  }

  /**
   * getList
   */
  public getList() {
    this.checkCount = 0;
    this.isAllChecked = false;
    const parent = this.getParentCrumbId();
    if (this.service.hasCache(parent)) {
        this.addData(this.service.getCache(parent));
        return;
    }
    this.isLoading = true;
    this.service.getList({
        id: parent
    }).subscribe(data => {
        if (data.code !== 200) {
            return;
        }
        this.service.setCache(parent, data.data);
        this.addData(data.data);
        this.isLoading = false;
    });
  }

  /**
   * addData
   */
  public addData(data: Array<any>) {
    this.files.splice(0);
    data.forEach(item => {
        item.checked = false;
        this.files.push(item);
    });
  }

  /**
   * setOrder
   */
  public setOrder(sort: string) {
    if (sort !== this.sort) {
        this.sort = sort;
        this.order = 'asc';
        return;
    }
    this.order = this.order === 'desc' ? 'asc' : 'desc';
  }

  /**
   * shareAll
   */
  public shareAll() {
    //
  }

  /**
   * downloadAll
   */
  public downloadAll() {
    //
  }

  /**
   * deleteAll
   */
  public deleteAll() {
    const ids: Array<number> = [];
    for (let i = this.files.length - 1; i >= 0; i --) {
        if (this.files[i].checked) {
            ids.push(this.files[i].id);
            this.files.splice(i, 1);
        }
    }
    this.checkCount = 0;
    if (this.isAllChecked) {
        this.isAllChecked = false;
    }
    this.service.deleteFile({
        id: ids
    }).subscribe(res => {
        if (res.code !== 200) {
            return;
        }
        this.service.deleteCache(this.getParentCrumbId(), ids);
    });
  }

  /**
   * moveAll
   */
  public moveAll() {
    //
  }

  /**
   * copyAll
   */
  public copyAll() {
    //
  }

  /**
   * rename
   */
  public rename() {
    //
  }

  /**
   * checkAll
   */
  public checkAll() {
    const length = this.files.length;
    if (this.isAllChecked) {
        this.isAllChecked = false;
        this.checkCount = 0;
    } else {
        this.isAllChecked = true;
        this.checkCount = length;
    }
    for (let i = 0; i < length; i++) {
        this.files[i].checked = this.isAllChecked;
    }
  }

  /**
   * check
   */
  public check(item: any) {
    item.checked = !item.checked;
    if (!item.checked) {
        this.isAllChecked = false;
        this.checkCount --;
        return;
    }
    this.checkCount ++;
    for (let i = 0, length = this.files.length; i < length; i++) {
        if (!this.files[i].checked) {
            return;
        }
    }
    this.isAllChecked = true;
  }

  /**
   * goBack
   */
  public goBack() {
    this.crumb.pop();
    this.getList();
  }

  /**
   * goLevel
   */
  public goLevel(item: any) {
    if (item.id === 0) {
        this.crumb.splice(1);
    } else {
        for (let i = 1, length = this.crumb.length; i < length; i ++) {
            if (item.id === this.crumb[i].id) {
                this.crumb.splice(i + 1);
                break;
            }
        }
    }
    this.getList();
  }

  /**
   * enter
   */
  public enter(item: any) {
    if (item.is_dir !== 1) {
        this.check(item);
        return;
    }
    this.crumb.push(item);
    this.getList();
  }

  /**
   * refresh
   */
  public refresh() {
    this.service.deleteCache(this.getParentCrumbId());
    this.getList();
  }

  /**
   * addFile
   */
  public addFile(item: any) {
    if (typeof item !== 'object') {
        return;
    }
    this.files.push(item);
    this.service.addCache(this.getParentCrumbId(), item);
  }

  /**
   * deleteUpload
   */
  public deleteUpload(index: number) {
    //
  }
}
