import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OceneService {
  public API = '//localhost:8080/dnevnik';
  
  constructor(private http: HttpClient) { }
  
  getUcenikoveOcene(idUcenik: string): Observable<any> {
    let params = new HttpParams()
                .set('idUcenik', idUcenik);
   
    console.log(params.toString());
    return this.http.get(this.API + '/ocene/pregledUcenikovih', {
      params: params
    });
  }
}
