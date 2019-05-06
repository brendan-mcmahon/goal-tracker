import { Injectable } from '@angular/core';
import { Goal } from './goal.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  goals: Observable<Goal[]>;

  constructor(private db: AngularFireDatabase) { }

  addGoal(goal: Goal) {
    this.db.list<Goal>('goals').push(goal);
  }

  getAllGoals():  Goal[] {
    const goals: Goal[] = [];
    this.db.list<Goal>('goals').snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          const g = action.payload.val();
          goals.push(new Goal(action.key, g.name, g.dueDate, g.target, g.current));
        });
      });
    return goals;
  }

  updateGoal(goal: Goal): void {
    this.db.object(`/goals/${goal.id}`).update(goal);
  }

  deleteGoal(goalId: string) {
    this.db.object(`/goals/${goalId}`).remove();
  }

}
