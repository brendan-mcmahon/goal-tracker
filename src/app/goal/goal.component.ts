import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  @Input() goal: Goal;
  @Output() triggerUpdate = new EventEmitter();
  count: boolean[];
  numberToAdd: number;
  readableDate: Date;
  daysRemaining: number;
  editDialog = false;
  editModalId: string;
  deleteModalId: string;
  showMore = false;

  constructor(public ngxSmartModalService: NgxSmartModalService, private db: DbService) { }

  ngOnInit() {
    this.fillBoxes();
    this.readableDate = new Date(parseInt(this.goal.dueDate));
    this.editModalId = `editModal:${this.goal.id}`;
    this.deleteModalId = `deleteModal:${this.goal.id}`;
    this.daysRemaining = this.convertMiliseconds(((new Date(parseInt(this.goal.dueDate))).getTime() - (new Date()).getTime()));
  }

  private fillBoxes() {
    this.count = new Array(this.goal.target >= this.goal.current ? this.goal.target : this.goal.current);
    this.count.fill(false, 0, this.goal.target);
    this.count.fill(true, 0, this.goal.current);
  }

  getClasses(box: boolean, i: number): string {
    let classes = 'box';
    if (box) {
      classes += ' fill';
      if (i >= this.goal.target) {
        classes += ' extra';
      }
    } else {
      classes += ' empty';
    }

    return classes;
  }

  addCount() {
    this.goal.current += this.numberToAdd;
    this.numberToAdd = null;
    this.update();
  }

  setCount(i: number) {
    this.goal.current = i + 1;
    this.update();
  }

  add(number: number) {
    this.goal.current += number;
    this.update();
  }

  update() {
    this.db.updateGoal(this.goal);
    this.triggerUpdate.emit();
  }

  confirmDelete() {
    console.log('...deleting');
    this.db.deleteGoal(this.goal.id);
    this.triggerUpdate.emit();
  }

  cancelDelete() {
    this.ngxSmartModalService.getModal(this.deleteModalId).close();
  }

  openEditDialog() {
    this.ngxSmartModalService.getModal(this.editModalId).open();
  }

  openDeleteDialog() {
    console.log('open delete dialog...');
    this.ngxSmartModalService.getModal(this.deleteModalId).open();
  }

  private convertMiliseconds(miliseconds: number) {
    const total_seconds = Math.floor(miliseconds / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    return Math.floor(total_hours / 24);
  }

}
