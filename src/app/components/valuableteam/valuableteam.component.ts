import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuableteam',
  templateUrl: './valuableteam.component.html',
  styleUrls: ['./valuableteam.component.scss'],
})
export class ValuableteamComponent implements OnInit {
  members = [
    {
      imgSrcProfile: './../../assets/img/valuableTeam/profile1.png',
      titulo: 'Fahim Rahman',
      subTitulo: '@rahman',
    },
    {
      imgSrcProfile: './../../assets/img/valuableTeam/profile2.png',
      titulo: 'Kazi Rahman',
      subTitulo: '@Rahman',
    },
    {
      imgSrcProfile: './../../assets/img/valuableTeam/profile3.png',
      titulo: 'Masterero Ali',
      subTitulo: '@Master',
    },
    {
      imgSrcProfile: './../../assets/img/valuableTeam/profile4.png',
      titulo: 'Alia Karon',
      subTitulo: '@Alia',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
