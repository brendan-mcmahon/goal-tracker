import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Goal } from '../goal.model';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit, AfterViewInit {

  goals: Goal[];

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.goals = [
      new Goal('Goal 1', new Date(2019, 5, 1), 10, 5),
      new Goal('Goal 2', new Date(2019, 5, 1), 28, 3),
      new Goal('Goal 3', new Date(2020, 1, 1), 99, 18),
      new Goal('Goal 4', new Date(2020, 1, 1), 25, 25),
      new Goal('Goal 5', new Date(2020, 1, 1), 10, 12),
    ];
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

  newGoalCreated($event: Goal) {
    this.goals.push($event);
    this.ngxSmartModalService.getModal('myModal').close();
  }

}
