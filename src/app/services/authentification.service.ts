import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private adminstrateur = { username: 'admin', pwd: 'admin123' };
  private etudiant = { username: 'etudiant', pwd: 'etud456' };
  auth=false;
  constructor() { }

  public login(username: string, pwd: string): boolean {
    if (username === this.etudiant.username && pwd === this.etudiant.pwd) {
      return this.auth=true;
    }
    if (username === this.adminstrateur.username && pwd === this.adminstrateur.pwd) { // Correction ici
      return this.auth=true;
    }
    return false;
  }

  public isEtudiant(): boolean {
    return this.auth; 
  }

  public isadminstrateur(): boolean {
    return this.auth 
  }

  public logout(): boolean {
    return this.auth=false;
  }
}
