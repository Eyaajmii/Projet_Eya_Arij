import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../classes/formation';
import { Observable } from 'rxjs';
const url = "http://localhost:3000/formation";
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  constructor(private http: HttpClient) { }
  getFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(url);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${url}/${id}`);
  }
  addFormation(f:Formation):Observable<Formation>{
    return this.http.post<Formation>(url,f);
  }
  updateFormationbyId(id:number, f:Formation):Observable<Formation>{
    return this.http.put<Formation>(url+"/"+ id, f);
    }
    deleteProduit(id:number){
      return this.http.delete(url+"/"+ id);
    }
    rechercheFormation(query:any): Observable<Formation[]> {
      const searchUrl = `${url}/search?query=${query}`;
      return this.http.get<Formation[]>(searchUrl);
    }
}

