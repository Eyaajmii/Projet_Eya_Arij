import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Password } from '../classes/password';
const urlLogin="  http://localhost:3000/loginAdmin"
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private auth = false;
  constructor(private http: HttpClient){ }
getData(username: string,password: string): Observable<Password[]> {
    return this.http.get<Password[]>(`${urlLogin}/?username=${username}&&password=${password}`);
}
public isadminstrateur(): boolean {
  return this.auth=true;
}
updatePassword(id: number, oldUsername: string, newPassword: string): Observable<Password> {
  return this.http.put<Password>(`${urlLogin}/${id}`, { username: oldUsername, password: newPassword });
}

  /*public changePassword(newPassword: string): void {
    if (this.auth) {
      this.adminstrateur.pwd = newPassword;
    }
  }
  public login(username: string, pwd: string): boolean {
 
    if (username === this.adminstrateur.username && pwd === this.adminstrateur.pwd) {
      this.auth = true;
      return true;
    }
    return false;
  }*/




}
