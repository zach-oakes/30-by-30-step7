import { Injectable } from '@angular/core';
import {CheckIn} from "./check-in";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {v4} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  checkIns: CheckIn[] = [];
  selectedCheckIn: CheckIn = {} as CheckIn;

  private url = 'https://mock-json-server-five.vercel.app/checkIns';

  constructor(private http: HttpClient) {}

  getCheckIns() {
    this.http.get<CheckIn[]>(this.url)
        .pipe(
            // return an empty array here if there was an error on the request
            catchError(this.handleError<CheckIn[]>([]))
        ).subscribe(resp => this.checkIns = resp);
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

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
