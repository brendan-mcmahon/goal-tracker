import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Goal } from '../goal.model';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.scss']
})
export class EditGoalComponent implements OnInit {

  @Output() newGoalCreated = new EventEmitter<Goal>();
  @Input() goal: Goal;

  constructor(private dbService: DbService) { }

  ngOnInit() {}

  submit() {
    console.log(`submitting edit for ${this.goal.id}`);
    this.dbService.updateGoal(this.goal);
  }

  get diagnostic() { return JSON.stringify(this.goal); }

}
