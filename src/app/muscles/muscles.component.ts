import { Muscle } from './../muscle';
import { Component, OnInit } from '@angular/core';
import { MUSCLES } from './../mock-muscles';

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.component.html',
  styleUrls: ['./muscles.component.scss']
})
export class MusclesComponent implements OnInit {
  muscles = MUSCLES;
  selectedMuscle: Muscle;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(muscle: Muscle){
    this.selectedMuscle = muscle;
    console.log(this.selectedMuscle);
  }

}
