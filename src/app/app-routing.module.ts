import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'
import { DayOneComponent } from './day-one/day-one.component'
import { DayTwoComponent } from './day-two/day-two.component'
import { DayThreeComponent } from './day-three/day-three.component'
import { DayFourComponent} from './day-four/day-four.component'
import { DayFiveComponent } from './day-five/day-five.component'
import { CongratsComponent } from './congrats/congrats.component'
import { GameOverComponent } from './game-over/game-over.component'


const routes: Routes = [
  {path: "", component: WelcomeComponent}, 
  {path: "dayone", component: DayOneComponent}, 
  {path: "daytwo", component: DayTwoComponent}, 
  {path: "daythree", component: DayThreeComponent}, 
  {path: "dayfour", component: DayFourComponent}, 
  {path: "dayfive", component: DayFiveComponent}, 
  {path: "congrats", component: CongratsComponent}, 
  {path: "gameover", component: GameOverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }