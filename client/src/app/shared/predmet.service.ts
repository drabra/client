import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PredmetService {
  public API = '//localhost:8080/dnevnik';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/predmeti');
  }

  save(predmet: any): Observable<any> {
    let result: Observable<Object>;
    if (predmet['href']) {
      result = this.http.put(predmet.href, predmet);
    } else {
      result = this.http.post(this.API + '/predmeti/dodaj-predmet', predmet);
    }
    return result;
  }

  get(id: string): Observable<any> {
    return this.http.get(this.API + '/predmeti/predmet/' + id);
  }

  delete(href: string) {
    return this.http.delete(href);
  }

}
