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
  checkIns: CheckIn[] = [];
  beerTypes: string[] = Object.values(BeerType);
  servingStyles: string[] = Object.values(ServingStyle);
  ratings: number[] = [1, 2, 3, 4, 5];
  selectedCheckIn: CheckIn = {} as CheckIn;

  constructor(private checkInService: CheckInService) {}

  ngOnInit(): void {
    this.checkInService.getCheckIns()
        .subscribe(result => this.checkIns = result);
  }

  deleteCheckIn(checkIn: CheckIn): void {
    this.checkIns = this.checkIns.filter(c => c.id !== checkIn.id);
  }

  selectCheckIn(checkIn: CheckIn): void {
    // Select
    if (!this.selectedCheckIn || this.selectedCheckIn.id !== checkIn.id) {
      this.selectedCheckIn = {...checkIn};
    } else {
      // Unselect
      this.selectedCheckIn = {} as CheckIn;
    }
  }

  removeAllCheckIns(): void {
    this.checkIns = [];
    this.selectedCheckIn = {} as CheckIn;
  }

  editCheckIn(checkIn: CheckIn): void {
    const index = this.checkIns.findIndex(c => c.id === checkIn.id);

    // -1 is not found
    if (index !== -1) {
      this.checkIns[index] = checkIn;
    }

    this.selectedCheckIn = {} as CheckIn;
  }

  addCheckIn(checkIn: CheckIn): void {
    const toAdd: CheckIn = {...checkIn};
    toAdd.id = v4();

    this.checkIns.push(toAdd);
    this.selectedCheckIn = {} as CheckIn;
  }
}
