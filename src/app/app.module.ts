import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [IndexComponent],
})
export class AppModule {}