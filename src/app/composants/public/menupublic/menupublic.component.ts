import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-menupublic',
  templateUrl: './menupublic.component.html',
  styleUrls: ['./menupublic.component.css'],
})
export class MenupublicComponent {
  lesFormations: Formation[] = [];
  searchQuery: string = '';
  constructor(private router: Router,private formationService: FormationService) {}

  public LogIn() {
    this.router.navigate(['extranet']);
  }

 
  
searchFormation(): void {
    if (this.isSearchQueryValid()) {
      this.performSearch();
    }else{
      this.getAllFormations();
    }
  }

  private isSearchQueryValid(): boolean {
    return this.searchQuery.trim()!== '';
  }

  private performSearch(): void {
    this.formationService.rechercherFormation(this.searchQuery).subscribe(
      data => this.lesFormations = data
    );
  }

  private getAllFormations(): void {
    this.formationService.getFormation().subscribe(
      data => this.lesFormations = data
    );
  }
   go(){
    this.router.navigate(['formation']);
  }
}
