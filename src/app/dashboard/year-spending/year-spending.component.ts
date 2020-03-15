import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-year-spending',
  templateUrl: './year-spending.component.html',
  styleUrls: ['./year-spending.component.scss']
})
export class YearSpendingComponent implements OnInit {

  @Input()
  year: number;

  total_spent: number; 
  project_totals: number = 29000;
  projects_remaing: number = 20897;

  constructor() {
  }

  ngOnInit() {
    this.total_spent = (this.year == 2020)? 8102.32 : 1000;
    this.project_totals = (this.year == 2020)? 29000 : 20000;
    this.projects_remaing = (this.year == 2020)? 20897 : 19000;
  }

}
