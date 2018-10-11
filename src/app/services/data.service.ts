import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }
getres
  getAll(extUrl: string) {
    let options = this.makeTokenHeader();
    return this.http.get(this.url + extUrl, options)
    .pipe(map(this.extractedData),
    catchError(this.handleError));

    
  }

  getAllById(extUrl: [string, string], id) {
    let options = this.makeTokenHeader();
    const newUrl = this.url + extUrl[0] + '/' + id + '' + extUrl[1];
    // console.log(newUrl)
    return this.http.get(newUrl, options)
      .pipe(map(this.extractedData),
      catchError(this.handleError)
      );
  }
  getById(extUrl: String, id) {
    let options = this.makeTokenHeader();
    const newUrl = this.url + extUrl + '/' + id;
    console.log(newUrl);
    return this.http.get(newUrl, options)
      .map(this.extractedData)
      .catch(this.handleError);
  }

  createWithoutID(resource, exURL: string) {
    let options = this.makeTokenHeader();
    return this.http.post(this.url + exURL, resource,options)
    .pipe(
      map(this.extractedData),
      catchError(this.handleError)
    );
      
  }

  create(resource, extURL: [string, string], id) {
    let options = this.makeTokenHeader();
    const newUrl = this.url + extURL[0] + '/' + id + '' + extURL[1];
    return this.http.post(newUrl, resource,options)
    .pipe(
      map(this.extractedData),
      catchError(this.handleError)
    );
      
  }

  createWithDateString(resource, extURL: string, time: string) {
    let options = this.makeTokenHeader();
    const newUrl = this.url + extURL + '/' + time;
    console.log(newUrl);
    return this.http.post(newUrl, resource, options)
    .pipe(
      map(this.extractedData),
      catchError(this.handleError)
    );
     
  }

  update(resource, extURl: string) {
    let options = this.makeTokenHeader();
    const newUrl = this.url + extURl;
    console.log(newUrl);
    return this.http.patch(newUrl, resource, options)
    .pipe(
      map(this.extractedData),
      catchError(this.handleError)
    );
  }

  delete(extUrl: string, id) {
    let options = this.makeTokenHeader();
    return this.http.delete(this.url + extUrl + '/' + id, options)
      .map(this.extractedData)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
  private extractedData(res: Response) {
    return res.text() ? res.json() : {};
  }

  private makeTokenHeader() {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}

