import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckIn} from "../check-in";

@Component({
  selector: 'app-check-in-detail-view',
  templateUrl: './check-in-detail-view.component.html',
  styleUrl: './check-in-detail-view.component.css'
})
export class CheckInDetailViewComponent {
  @Input() selectedCheckIn!: CheckIn;
  @Input() beerTypes!: string[];
  @Input() servingStyles!: string[];
  @Input() ratings!: number[];
  @Output() editCheckIn: EventEmitter<CheckIn> = new EventEmitter<CheckIn>();
  @Output() addCheckIn: EventEmitter<CheckIn> = new EventEmitter<CheckIn>();

  isSameBeerType(str1: string, str2: string): boolean {
    return str1 === str2;
  }

  get isButtonDisabled(): boolean {
    const checkIn = this.selectedCheckIn;

    return this.isEmpty(checkIn.brewery) ||
        this.isEmpty(checkIn.beerName) ||
        this.isEmpty(checkIn.servingStyle) ||
        this.isEmpty(checkIn.beerType) ||
        checkIn.rating === undefined;
  }

  private isEmpty(str: string): boolean {
    return str === '' || str === undefined;
  }
}
