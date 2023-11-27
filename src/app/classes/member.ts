export class Member {
    id:number;
    nom:string;
    prenom: string;
    age: number;
    gender: string;
    email: string;
    role: string;
    image: string;
  
    constructor(id:number, nom: string, prenom: string, age: number, gender: string, email: string, role: string, image:string) {
      this.id=id;
      this.nom = nom;
      this.prenom=prenom;
      this.age = age;
      this.gender = gender;
      this.email = email;
      this.role = role;
      this.image=image;
    }
}
