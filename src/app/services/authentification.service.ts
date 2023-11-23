import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  private adminstrateur = { username: 'admin', pwd: 'admin123' };
  private etudiant = { username: 'etudiant', pwd: 'etud456' };
  private auth = false;

  constructor() { }
  public changePassword(newPassword: string): void {
    if (this.auth) {
      this.adminstrateur.pwd = newPassword;
    }
  }
  public login(username: string, pwd: string): boolean {
    if (username === this.etudiant.username && pwd === this.etudiant.pwd) {
      this.auth = true;
      return true;
    }
    if (username === this.adminstrateur.username && pwd === this.adminstrateur.pwd) {
      this.auth = true;
      return true;
    }
    return false;
  }

  public isEtudiant(): boolean {
    return !this.auth;
  }

  public isadminstrateur(): boolean {
    return this.auth;
  }

  public logout(): void {
    this.auth = false;
  }


}
