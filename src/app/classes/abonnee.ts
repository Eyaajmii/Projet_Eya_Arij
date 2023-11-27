export class Abonnee {
  id:number;
    nom: string;
    prenom: string;
    age: number;
    sexe: string;
    etat: string;
    formation: string;
    lieu: string;
    email: string;
    usernames: string;
    password: string;
  
    constructor(id:number,nom: string, prenom: string, age: number, sexe: string, etat: string, formation: string, lieu: string, email: string, username: string, password: string) {
      this.id=id;
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.sexe = sexe;
      this.etat = etat;
      this.formation = formation;
      this.lieu = lieu;
      this.email = email;
      this.usernames = username;
      this.password = password;
    }
  }
