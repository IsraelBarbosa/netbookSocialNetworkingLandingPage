import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourcommunity',
  templateUrl: './ourcommunity.component.html',
  styleUrls: ['./ourcommunity.component.scss'],
})
export class OurcommunityComponent implements OnInit {
  cards = [
    {
      imgSrc: '../../../assets/img/ourCommunity/members.png',
      titulo: 'Members, Friends',
      paragrafo:
        'Members, Friends Connection ( like followers ), Private Message',
    },
    {
      imgSrc: '../../../assets/img/ourCommunity/groups.png',
      titulo: 'Groups',
      paragrafo:
        'Your users can create groups to let other users to join and talk',
    },
    {
      imgSrc: '../../../assets/img/ourCommunity/forum.png',
      titulo: 'Forum',
      paragrafo:
        'Forum is ready by BBPress. Your users can make topics and talk.',
    },
    {
      imgSrc: '../../../assets/img/ourCommunity/custom.png',
      titulo: 'Custom Module',
      paragrafo:
        "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    },
    {
      imgSrc: '../../../assets/img/ourCommunity/listBuilder.png',
      titulo: 'List Builder',
      paragrafo:
        'Members, Groups list can be modified by drag & drop live builder.',
    },
    {
      imgSrc: '../../../assets/img/ourCommunity/list.png',
      titulo: 'List Scroll Effects',
      paragrafo:
        '8 different scroll effects are ready. You can always change by your tastes.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
