import { Injectable } from '@angular/core';
import { Plant } from 'src/app/plant.model'
import { FormControl, FormGroup, FormArray } from '@angular/forms'; 


@Injectable({
  providedIn: 'root'
})
export class GameService {


  //form group used in every component to send checkbox form data
  variableForm: FormGroup; 

  //object used in every component to send form data
  myVariables: Array<any> = [
    {name: 'Water', value:"water"}, 
    {name: 'Light', value:"light"},
    {name: 'Nutrients', value:"nutrients"}
  ]

  constructor() {

   }

   //new plant object
  plant = new Plant


  //used in welcome component to create a new plant object
  start(){
    this.plant.alive = true; 
    this.plant.height = 0; 
    this.plant.light = null; 
    this.plant.lightNum = 0
    this.plant.nutrients = null; 
    this.plant.nutrientNum = 0; 
    this.plant.water = null; 
    this.plant.waterNum = 0; 
  }

  //Function used in every object to create array with checkbox form data. 
  //controls are pushed to array with box is checked and removed by index if box is unchecked
  onCheckboxChange(e){
    const checkArray: FormArray = this.variableForm.get('checkArray') as FormArray; 
    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value))
    }else{
      let i: number = 0; 
      checkArray.controls.forEach((item: FormControl)=>{
        if(item.value === e.target.value){
          checkArray.removeAt(i); 
          return; 
        }
        i++
      })
    }
  }


//Primary function where all game logic is contained. It runs in every component upon form submission. 
//Takes in array containing checkbox form data 
//Data is used to determine how logic is run
  runGame(varArr){

    //variables initially set to false
    let w = false; 
    let l = false; 
    let n = false; 

    //checks array passed from each component
    //sets variable to true if clicked
    //If found, sets to true
    varArr.checkArray.forEach((d)=>{
 
      if (d === "water"){
        w = true
      }

      if(d === "light"){
        l = true; 
      }

      if(d === "nutrients"){
        n = true; 
      }

    })//end loop

 
    //Plant can only miss water once, 
    //If variable is set to false twice, the plant dies and game is over
    if(w){
      this.plant.water = w
    }else{
      this.plant.waterNum += 1; 
      this.plant.water = false; 
      if(this.plant.waterNum >= 2){
        this.plant.alive = false; 
      }
    }

    

    //Similar to water
    //If set to false twice, plant dies and game ends
    if(l){
      this.plant.light = l
    }else{
      this.plant.lightNum += 1; 
      this.plant.light = false; 
      if(this.plant.lightNum >= 2){
        this.plant.alive = false; 
      }
    }
    
    //Used to calculate plant height. 
    //Checks whether w and l are set to true
    //Each will have diff
    if(w && l){
      this.plant.height += 1.5
    }else if(w && l === false || l && w === false){
      this.plant.height += 1
    }



    //plants can only get nutrients once, if nutrients more than once, then plant dies and game ends
    if(!n){
      this.plant.nutrients = n
    }else{
      this.plant.nutrientNum += 1; 
      this.plant.height += 2.5
      this.plant.nutrients = false; 
      if(this.plant.nutrientNum >= 2){
        this.plant.alive = false; 
      }
    }
  }
}
