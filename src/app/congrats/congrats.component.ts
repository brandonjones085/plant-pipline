import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { GameService } from 'src/app/game.service'

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {

  constructor(private router: Router, public gameService: GameService) { }

  ngOnInit(): void {
    if(this.gameService.plant.height < 10){
      this.router.navigate(['/gameover'], {skipLocationChange: true})
    }
  }

  onSubmit(){
    this.router.navigate(['/'], {skipLocationChange: true})
  }

}
