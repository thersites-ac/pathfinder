import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StatsComponent } from './stats/stats.component';
import { OverviewComponent } from './overview/overview.component';
import { SavesComponent } from './saves/saves.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StatsComponent,
    OverviewComponent,
    SavesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
