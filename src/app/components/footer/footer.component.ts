import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  subscribeNewsletterForm = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  sendForm() {
    console.warn(this.subscribeNewsletterForm.value);
  }

  ngOnInit(): void {}
}
