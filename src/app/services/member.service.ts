import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const membersUrl = "http://localhost:3000/membres";
@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(private http: HttpClient) {}

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(membersUrl);
  }
}
