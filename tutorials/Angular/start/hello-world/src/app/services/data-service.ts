import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  create(resource) {
    // return Observable.throw(new AppError());
    return this.http.post<any>(this.url, JSON.stringify(resource)).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http
      .patch<any>(
        this.url + '/' + resource.id,
        JSON.stringify({ isRead: true })
      )
      .pipe(
        map((response: any) => response),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http.delete<any>(this.url + '/' + id).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status == 400) return throwError(new BadInput(error));
    if (error.status === 404) return throwError(new NotFoundError());

    return throwError(new AppError());
  }
}
