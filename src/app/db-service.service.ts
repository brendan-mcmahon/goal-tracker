import { Injectable } from '@angular/core';
import { Goal } from './goal.model';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  // goalDocRef: AngularFirestoreCollection<Goal>;
  goals: Observable<Goal[]>;

  constructor(private db: AngularFireDatabase) { }
  // create
  addGoal(goal: Goal) {
    console.log(`adding goal: ${JSON.stringify(goal)}`);
    this.db.list<Goal>('goals').push(goal);
    // this.db.collection<Goal>('goals').add({
    //   current: 0,
    //   dueDate: goal.dueDate,
    //   name: goal.name,
    //   target: goal.target
    // });
  }

  // read
  getAllGoals():  Observable<Goal[]> {
    return this.db.list<Goal>('goals').valueChanges();
  }

  updateGoal(goal: Goal) {
    this.db.list<Goal>('goals').update('key', goal);
  }

  //update
  // updateGoal(goal: Goal) {
  //   this.goalDocRef = this.db.collection<Goal>('goals');

  //   this.goals = this.goalDocRef.snapshotChanges().map( actions => {
  //     return actions.map(action => {
  //       const data = action.payload.doc.data() as Goal;
  //       const id = action.payload.doc.id;
  //       return { id, ...data };
  //     });
  //   })
  // }

  //delete

}
