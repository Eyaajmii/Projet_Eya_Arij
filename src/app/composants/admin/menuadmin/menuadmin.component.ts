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
  searchQuery: string = '';

  constructor(private formationService: FormationService) {}

  searchFormation(): void {
    if (this.isSearchQueryValid()) {
      this.performSearch();
    } else {
      this.getAllFormations();
    }
  }

  private isSearchQueryValid(): boolean {
    return this.searchQuery.trim()!== '';
  }

  private performSearch(): void {
    this.formationService.rechercheFormation(this.searchQuery).subscribe(
      data => this.lesFormations = data
    );
  }

  private getAllFormations(): void {
    this.formationService.getFormation().subscribe(
      data => this.lesFormations = data
    );
  }
}
