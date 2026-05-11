import { Component, OnInit } from '@angular/core';

@Component({
  // ... selector, template, etc.
})
export class DailyFoodLogComponent implements OnInit {
  goal: string = '';
  // Initialize with empty array or existing data
  goalData: { goal: string }[] = [];

  ngOnInit() {
    // 1. Load data when the component starts
    const savedData = localStorage.getItem('evolve_food_log');
    if (savedData) {
      this.goalData = JSON.parse(savedData);
    }
  }

  handleGoalClick() {
    if (this.goal.trim()) {
      // 2. Add the new entry to your array
      const newEntry = { goal: this.goal };
      this.goalData.push(newEntry);

      // 3. Save the updated array to localStorage
      localStorage.setItem('evolve_food_log', JSON.stringify(this.goalData));

      // Clear the input field
      this.goal = '';
    }
  }
}
