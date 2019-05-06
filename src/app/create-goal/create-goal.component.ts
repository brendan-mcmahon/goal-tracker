import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewGoal } from '../goal.model';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent implements OnInit {
  @Output() newGoalCreated = new EventEmitter<NewGoal>();
  model = new NewGoal('', null, 0, 0);

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.newGoalCreated.emit(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
