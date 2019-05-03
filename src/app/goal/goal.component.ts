import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  @Input() goal: Goal;
  count: boolean[];
  numberToAdd: number;
  readableDate: Date;

  constructor() { }

  ngOnInit() {
    console.log(typeof this.goal.dueDate);
    this.readableDate = new Date(parseInt(this.goal.dueDate));
    this.fillBoxes();
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
    this.fillBoxes();
  }

  setCount(i: number) {
    this.goal.current = i + 1;
    this.fillBoxes();
  }

  add(number: number) {
    this.goal.current += number;
    this.fillBoxes();
  }

  toggle(box: boolean, i: number) {
    if (box && i === (this.goal.current - 1 )) {
      this.goal.current --;
    } else if (!box && i === this.goal.current) {
      this.goal.current++;
    }
    this.fillBoxes();
  }

}
