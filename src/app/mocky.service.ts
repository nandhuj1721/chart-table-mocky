import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockyService {

  constructor(private _http: HttpClient) { }



  public getJsonData(): Observable<any>{
  //  return this._http.get("https://run.mocky.io/v3/d0845788-bdbc-466e-a830-4b85a27a6ac9")
  //return this._http.get("https://run.mocky.io/v3/9101a2ae-489a-40ca-b4d1-25fcaac905d1")
    return this._http.get("https://run.mocky.io/v3/d73f5572-030c-43b6-b92a-bc82777da2b6")
  }
}
