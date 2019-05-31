import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = '/rappi-test/data/';

  constructor(private http: HttpClient) {}


  get(url) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const  endpoint = this.apiURL + url;
    return this.http.get(endpoint, {observe: 'response', headers: headers})
    .toPromise()
    .then( data => {
      return data['body'];
    })
    .catch(err => {
        return Promise.reject(err.error || 'Server error');
    });
  }
}
