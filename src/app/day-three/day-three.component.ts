import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { GameService } from 'src/app/game.service'
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.css']
})
export class DayThreeComponent implements OnInit {

  constructor(private router: Router, public gameService: GameService, private fb: FormBuilder) { 
    //creates array for checkbox form data
    this.gameService.variableForm = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  ngOnInit(): void {
    console.log(this.gameService.plant)
    //checks if plant is alive, if dead routes to game over
    if(this.gameService.plant.alive === false){
      this.router.navigate(['/gameover'], {skipLocationChange: true})
    }
  }

  onSubmit(){
    this.gameService.runGame(this.gameService.variableForm.value);
    this.router.navigate(['/dayfour'], {skipLocationChange: true})
  }

}
