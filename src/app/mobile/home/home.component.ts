import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'zo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: Array<string> = [
    'https://yanxuan.nosdn.127.net/08c22f34ed0445208c8bbf80cb769d06.jpg?imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/8271dce9c32d58eb8598c1408acf6132.jpg?imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/3693d1b5948a2072fdf3524668e11993.jpg?imageView&quality=75&thumbnail=750x0'
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.interval = 2000;
  }

  ngOnInit() {
  }

}
