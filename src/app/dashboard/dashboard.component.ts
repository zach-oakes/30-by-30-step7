import {Component, OnInit} from '@angular/core';
import {CheckIn} from "../check-in";
import {CheckInService} from "../check-in.service";
import {v4} from 'uuid';
import {BeerType} from "../beer-type";
import {ServingStyle} from "../serving-style";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  beerTypes: string[] = Object.values(BeerType);
  servingStyles: string[] = Object.values(ServingStyle);
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor(public checkInService: CheckInService) {}

  ngOnInit() {
    this.checkInService.getCheckIns();
  }

}
