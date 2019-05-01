import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from '../goal.model.ts';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent implements OnInit, AFterViewInit {
  @Output() newGoalCreated = new EventEmitter<Goal>();
  model = new Goal('', null, 0, 0);

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.newGoalCreated.emit(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
