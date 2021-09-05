import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockyService {

  constructor(private _http: HttpClient) { }



  public getJsonData(): Observable<any>{
    return this._http.get("https://run.mocky.io/v3/d0845788-bdbc-466e-a830-4b85a27a6ac9")
  }
}
