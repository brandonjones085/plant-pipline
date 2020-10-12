import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DayOneComponent } from './day-one/day-one.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { DayThreeComponent } from './day-three/day-three.component';

import { DayFourComponent } from './day-four/day-four.component';
import { DayFiveComponent } from './day-five/day-five.component';
import { GameOverComponent } from './game-over/game-over.component';
import { CongratsComponent } from './congrats/congrats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    DayFourComponent,
    DayFiveComponent,
    GameOverComponent,
    CongratsComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatCheckboxModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
