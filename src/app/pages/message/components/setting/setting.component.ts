import { Component, ViewEncapsulation } from '@angular/core';
import { SettingService } from './setting.service';


@Component({
  selector: 'app-setting',
  styleUrls: ['./setting.scss'],
  templateUrl: './setting.html',
})
export class SettingComponent {

  public tabIndex = 0;

  constructor(protected service: SettingService) {

  }


}
