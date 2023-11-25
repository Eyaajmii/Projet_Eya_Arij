import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnee } from '../classes/abonnee';
import { Observable } from 'rxjs';
const url='http://localhost:3000/Abonnee';
@Injectable({
  providedIn: 'root'
})
export class AbonneService {

  constructor(private http: HttpClient) {}
  enregistrerAbonne(ab: Abonnee): Observable<Abonnee> {
    return this.http.post<Abonnee>(url, ab);
  }
}
