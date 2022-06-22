import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  formSearch = new FormGroup({
    search: new FormControl(""),
  });

  sendForm() {
    console.log(this.formSearch.value);
  }

  mostrarNavFixed(): void {
    const navFixed = <HTMLDivElement>(
      document.getElementsByClassName("header__container-nav-fixed")[0]
    );

    if (navFixed.style.left === "-35rem" || navFixed.style.left === "") {
      navFixed.style.left = "0rem";
    } else {
      navFixed.style.left = "-35rem";
    }
  }

  ngOnInit(): void {}
}
