import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from 'src/app/model/input';
import { Movement } from 'src/app/model/movement';
import { MovementService } from 'src/app/service/movement.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {
athlete_performance =[]

//for connecting the html form and ts we are using form group and form control
performance = new FormGroup({
  date : new FormControl(),
  name: new FormControl(),
  movement: new FormControl(),
  assessment: new FormControl(),
})
mov_name: string =''
movements: string[] =[]
ngOnInit(){
  this.getMovements();
}
constructor(private movementService: MovementService){}

//to get all the list of movements
getMovements(){
  this.movementService.getMovements().subscribe((data)=>{
    data.forEach((d)=>{
      this.mov_name =d.mov_name;
      this.movements.push(this.mov_name)
    })   
  })
}

//on submissison of the input form
onSubmit(){
  // this.athlete_performance[0] =this.performance.value
}

}

