import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatButtonModule } from '@angular/material/button';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OurTeamComponent } from '../shared/our-team/our-team.component';

@NgModule({
  declarations: [
    AboutComponent,
    HeroComponent,
    CardComponent,
    HeroSectionComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
    OurTeamComponent,
  ],
})
export class AboutModule {}
