import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.scss'],
})
export class LatestnewsComponent implements OnInit {
  latestNewsCards = [
    {
      imgSrc: '../../../assets/img/latestNews/computer.png',
      titulo: 'It Does Not Matter Hows Slowly go as Long',
    },
    {
      imgSrc: '../../../assets/img/latestNews/people.png',
      titulo: 'Netbook Network Added New Photo Filter',
    },
    {
      imgSrc: '../../../assets/img/latestNews/map.png',
      titulo: 'We Optimised Netbooks Better Navigation',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
