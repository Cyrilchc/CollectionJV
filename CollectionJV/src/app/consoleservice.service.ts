import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoleserviceService {

  constructor(private http: HttpClient) { }

  /**
   * Méthode permettant de construire une requête Http
   * @param method La méthode à utiliser (GET, POST, PUT...)
   * @param url Le point de terminaison à atteindre
   * @param data Les données à transmettre. Facultatif
   */
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
  
  /**
   * Envoie une requête post pour créer une console
   * @param console Objet de type Console
   */
  async createConsole(console){
    return await this.request('POST', `${environment.serverUrl}/addconsole`, console);
  }

  /**
   * Envoie une requête get pour obtenir toutes les consoles
   */
  async getConsoles(){
    return await this.request('GET', `${environment.serverUrl}/getconsole`);
  }

  /**
   * Envoie une requête delete pour supprimer une console
   * @param id ID de la console à supprimer
   */
  async deleteConsole(id){
    return await this.request('DELETE', `${environment.serverUrl}/deleteconsole/${id}`)
  }
}
