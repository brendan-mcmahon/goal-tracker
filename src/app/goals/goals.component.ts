import { Component, OnInit, Output } from '@angular/core';
import { Goal, NewGoal } from '../goal.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: Goal[];

  constructor(public ngxSmartModalService: NgxSmartModalService, private db: DbService) { }

  private getGoals() {
    this.goals = this.db.getAllGoals();
  }

  ngOnInit() {
    this.getGoals();
  }

  openModal() {
    this.ngxSmartModalService.getModal('myModal').open();
  }

  newGoalCreated($event: NewGoal) {
    console.log('y');
    const newGoal: Goal = new Goal(null, $event.name, $event.dueDate.getTime().toString(), $event.target);
    this.db.addGoal(newGoal);
    this.getGoals();
    this.ngxSmartModalService.getModal('myModal').close();
  }

  refresh() {
    this.getGoals();
  }
}
