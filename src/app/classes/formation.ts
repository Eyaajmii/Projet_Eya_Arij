import { Contenu } from "./contenu";

export class Formation {
    id: number;
    nom: string;
    photo: string;
    contenu: Contenu[];
    datefinInscri: string;
    dateCommence: string;
    duree: string;
    horraire: string;
    lieu: string;
    paye: boolean;
    nblikes: number;
  
    constructor(
      id: number,
      nom: string,
      photo: string,
      contenu: Contenu[],
      datefinInscri: string,
      dateCommence: string,
      duree: string,
      horraire: string,
      lieu: string,
      paye: boolean,
      nblikes: number
    ) {
      this.id = id;
      this.nom = nom;
      this.photo = photo;
      this.contenu = contenu;
      this.datefinInscri = datefinInscri;
      this.dateCommence = dateCommence;
      this.duree = duree;
      this.horraire = horraire;
      this.lieu = lieu;
      this.paye = paye;
      this.nblikes=nblikes;
    }
  }