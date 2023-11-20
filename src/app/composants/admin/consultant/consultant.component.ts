import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit{
  lesFormations: Formation[] = [];

  constructor(private formationService: FormationService) {}

 ngOnInit(): void {
    this.formationService.getFormation().subscribe(
      data => this.lesFormations = data
    );
  }
}
