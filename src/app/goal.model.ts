export class Goal {
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
