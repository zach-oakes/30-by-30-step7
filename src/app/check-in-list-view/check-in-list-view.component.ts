import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckIn} from "../check-in";
import {MatChipListboxChange} from "@angular/material/chips";

@Component({
  selector: 'app-check-in-list-view',
  templateUrl: './check-in-list-view.component.html',
  styleUrl: './check-in-list-view.component.css'
})
export class CheckInListViewComponent {
  @Input() checkIns!: CheckIn[];
  @Input() servingStyles!: string[];
  @Output() deleteCheckIn: EventEmitter<CheckIn> = new EventEmitter<CheckIn>();
  @Output() selectCheckIn: EventEmitter<CheckIn> = new EventEmitter<CheckIn>();
  @Output() removeAllCheckIns: EventEmitter<void> = new EventEmitter<void>();
  filteredCheckIns: CheckIn[] = [];

  get visibleCheckInList(): CheckIn[] {
    if (!this.checkIns.length) {
      return [];
    }

    const difference = this.checkIns.filter(c => this.filteredCheckIns.includes(c));

    /*
      Check to see if the check-in list is different then the current filtered list.
      If that is the case then we have deleted a check-in while we were filtered. Update the list accordingly.
     */
    if (difference.length !== this.filteredCheckIns.length) {
      this.filteredCheckIns = difference;
    }

    return this.filteredCheckIns.length ? this.filteredCheckIns : this.checkIns;
  }

  doFilter(changes: MatChipListboxChange): void {
    // If there is a value, a chip has been selected, so we need to filter. Otherwise, it is not selected, so we remove the filter.
    if (changes.value) {
      this.filteredCheckIns = this.checkIns.filter(c => c.servingStyle === changes.value);
    } else {
      this.filteredCheckIns = [];
    }
  }
}
