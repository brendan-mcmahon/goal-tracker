export class Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  dueDate: string;

  constructor(id: string, name: string, dueDate: string, target: number, current: number = 0) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.target = target;
    this.current = current;
  }
}

export class NewGoal {
  name: string;
  target: number;
  current: number;
  dueDate: Date;

  constructor(name: string, dueDate: Date, target: number, current: number = 0) {
    this.name = name;
    this.dueDate = dueDate;
    this.target = target;
    this.current = current;
  }
}

export class Timestamp {
  seconds: number;
  nanoseconds: number;
}
