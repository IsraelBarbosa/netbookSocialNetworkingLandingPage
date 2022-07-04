import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeroComponent } from './components/hero/hero.component';
import { CtabuttonComponent } from './components/ctabutton/ctabutton.component';
import { WhatsnetboksComponent } from './components/whatsnetboks/whatsnetboks.component';
import { OurachievementComponent } from './components/ourachievement/ourachievement.component';
import { OurcommunityComponent } from './components/ourcommunity/ourcommunity.component';
import { ValuableteamComponent } from './components/valuableteam/valuableteam.component';
import { GetouraplicationComponent } from './components/getouraplication/getouraplication.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, HeaderComponent, HeroComponent, CtabuttonComponent, WhatsnetboksComponent, OurachievementComponent, OurcommunityComponent, ValuableteamComponent, GetouraplicationComponent, LatestnewsComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [IndexComponent],
})
export class AppModule {}
