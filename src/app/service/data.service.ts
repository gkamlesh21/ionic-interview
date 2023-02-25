import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
  Observable,
  of,
  throwError,
  BehaviorSubject,
  ReplaySubject,
} from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { DataModel } from "./dataModel";

@Injectable({
  providedIn: "root",
})
export class DataService {
  uri = "./../../assets/questions.json";
 
  constructor(private http: HttpClient) {}

  getFolderData(): Observable<DataModel[]> {
    return this.http.get<any[]>(this.uri).pipe(
      tap(() => {}),
      catchError(this.handleError("getProducts", []))
    );
  }

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getFolderDataPromise() {
    // sample 1
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(this.uri)
        .toPromise()
        .then((res) => {
          // console.log(res);
          resolve(res);
        })
        .catch((err) => {
          // Error
          // console.log(err);
          reject(err);
        });
    });
    return promise;

  }

  observerFactory(name: string) {
    return {
      next: (color:string) => console.log(`#${name}`, color),
    };
  }
}
