import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { GameService } from 'src/app/game.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.gameService.start() //creates plant object
    this.router.navigate(['/dayone'], {skipLocationChange: true})
  }

}
