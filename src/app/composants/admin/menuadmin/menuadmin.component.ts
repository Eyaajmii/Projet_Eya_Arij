import { Component } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent {
  lesFormations: Formation[] = [];
  searchQuery: any;
  constructor(private formationService:FormationService ){}
  searchFormation(): void {
    if (this.searchQuery.trim() !== '') {
      this.formationService.rechercheFormation(this.searchQuery).subscribe(
        data => this.lesFormations = data
      );
    } else {
      this.formationService.getFormation().subscribe(
        data => this.lesFormations = data
      );
    }
  }
}
