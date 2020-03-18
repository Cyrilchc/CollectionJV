import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoleserviceService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
  
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }
  
  createConsole(console){
    return this.request('POST', `${environment.serverUrl}/addconsole`, console);
  }
}
