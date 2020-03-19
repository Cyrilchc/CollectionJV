import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { JeuxComponent } from './jeux/jeux.component';
import { Jeu } from './jeu';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class JeuserviceService {

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
     * Envoie une requête put pour modifier un jeu
     * @param jeu Objet de type jeu à modifier
     * @param id ID du jeu à modifier
     */
  async updatejeu(jeu) {
    console.log(jeu);
    return await this.request('PUT', `${environment.serverUrl}/updatejeu/` + jeu.id, jeu);
  }

  /**
   * Envoie une requête post pour créer un jeu
   * @param jeu Objet de type jeu
   */
  async createJeu(jeu) {
    return await this.request('POST', `${environment.serverUrl}/addjeu`, jeu);
  }

  /**
   * Envoie une requête get pour obtenir tous les jeux
   */
  async getjeux() {
    return await this.request('GET', `${environment.serverUrl}/getjeux`);
  }

  /**
   * Envoie une requête delete pour supprimer un jeu
   * @param id ID du jeu à supprimer
   */
  async deletejeu(id) {
    return await this.request('DELETE', `${environment.serverUrl}/deletejeu/${id}`)
  }
}


