import { Injectable } from '@angular/core';
import {CheckIn} from "./check-in";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  private url = 'https://mock-json-server-five.vercel.app/checkIns';

  constructor(private http: HttpClient) {}

  getCheckIns(): Observable<CheckIn[]> {
    return this.http.get<CheckIn[]>(this.url)
        .pipe(
            // return an empty array here if there was an error on the request
            catchError(this.handleError<CheckIn[]>([]))
        );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
