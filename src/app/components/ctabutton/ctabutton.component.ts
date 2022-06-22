import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-ctabutton",
  templateUrl: "./ctabutton.component.html",
  styleUrls: ["./ctabutton.component.scss"],
})
export class CtabuttonComponent implements OnInit {
  @Input() innerText: string = "Meu texto";
  @Input() ctaButtonBold = false;
  @Input() ctaButtonBranco = false;
  @Input() iconArrowRight = false;

  constructor() {}

  ngOnInit(): void {}
}
