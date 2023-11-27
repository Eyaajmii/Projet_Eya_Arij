import { Component, OnInit } from '@angular/core';
import { Abonnee } from 'src/app/classes/abonnee';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-consult-abonne',
  templateUrl: './consult-abonne.component.html',
  styleUrls: ['./consult-abonne.component.css']
})
export class ConsultAbonneComponent implements OnInit{
  lesAbonne:Abonnee[]=[];
  constructor(private Abonneservice:AbonneService){}
  ngOnInit(): void {
    this.Abonneservice.getAbonne().subscribe(
      data => this.lesAbonne = data
    );
  }
  //supprimerAbonne
  SupprimerAbonne(id: number): void {
    this.Abonneservice.deleteAbonne(id).subscribe();
    alert("Abonné Supprimé")
  }
}
