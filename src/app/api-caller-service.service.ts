import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, filter, retry, catchError } from 'rxjs/operators';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiCallerServiceService {
  url:any = environment.getUrl;
  constructor(private httpClient: HttpClient) { }
 
  get(): Observable<Object> {
    return this.httpClient.get(this.url)
      .pipe(
        tap( 
          data => console.log(data),
          error =>  console.log(error)
        )
      );
  }
  delete(obj) {
    return this.httpClient.delete(this.url +'/'+ obj.id)
      .pipe(
        tap( 
          data => console.log(data),
          error =>  console.log(error)
        )
      );
  }
}
