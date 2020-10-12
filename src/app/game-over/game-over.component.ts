import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { GameService } from 'src/app/game.service'

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private router: Router, public gameService: GameService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/'], {skipLocationChange: true})
  }

}
