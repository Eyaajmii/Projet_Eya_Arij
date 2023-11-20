import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-fonctionnalites',
  templateUrl: './fonctionnalites.component.html',
  styleUrls: ['./fonctionnalites.component.css']
})
export class FonctionnalitesComponent {
 constructor(private router:Router){}
  consulter(){
    this.router.navigate(['/consulter']);
    return;
  }
  ajouter(){
    this.router.navigate(['/ajouter']);
    return;
  }
}