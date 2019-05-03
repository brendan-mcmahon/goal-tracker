import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Goal, NewGoal } from '../goal.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit, AfterViewInit {

  goals: Goal[];

  constructor(public ngxSmartModalService: NgxSmartModalService, private db: DbService) {
    this.getGoals();
  }

  private getGoals() {
    this.db.getAllGoals()
      .subscribe(goals => this.goals = goals);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const obj: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{a: 'a', b: 'b'}, {c: 'c', d: 'd'}],
      prop4: 327652175423
    };

    this.ngxSmartModalService.setModalData(obj, 'myModal');
  }

  openModal() {
    this.ngxSmartModalService.getModal('myModal').open();
  }

  newGoalCreated($event: NewGoal) {
    const newGoal: Goal = new Goal($event.name, $event.dueDate.getTime().toString(), $event.target);
    this.db.addGoal(newGoal);
    this.getGoals();
    this.ngxSmartModalService.getModal('myModal').close();
  }
}
