import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockyService {

  constructor(private _http: HttpClient) { }



  public getJsonData(): Observable<any>{
    return this._http.get("https://run.mocky.io/v3/97b4a742-f660-45ca-ad16-227b1e10e520")
  }
}
