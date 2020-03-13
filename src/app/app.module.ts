import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer.component';
import { SkillComponent } from './components/skill.component';
import { FeatureComponent } from './components/feature.component';
import { MemberComponent } from './components/member.component';
import { InterestComponent } from './components/interest.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    SkillComponent,
    FeatureComponent,
    MemberComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      "backgroundPadding": 7,
      "radius": 60,
      "space": -4,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#00a99d",
      "innerStrokeColor": "#ebebeb",
      "innerStrokeWidth": 4,
      "titleFontSize": '24',
      "titleColor": '#e4e4e4',
      "unitsFontSize": '15',
      "unitsColor": '#e4e4e4',
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "clockwise": true,
      "showSubtitle": false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
