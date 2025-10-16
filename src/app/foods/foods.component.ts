import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-foods',
  standalone: false,
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.less']
})
export class FoodsComponent implements OnInit {

  goal : string = "";
  goalData: Array<Goal> = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addGoal(goal: string): void {
    this.goalData.push({
      goal: goal
    })
  }

  handleGoalClick() {
    this.addGoal(this.goal);
    this.goal = '';
}
}
