import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-selectedformation',
  templateUrl: './selectedformation.component.html',
  styleUrls: ['./selectedformation.component.css']
})
export class SelectedformationComponent implements OnInit {
  public formation!: Formation | undefined;
  constructor(private activatedRoute:ActivatedRoute,private formationService:FormationService){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['idf'];
    this.formationService.getFormationById(id).subscribe((formation)=>(this.formation=formation));
  }
  
}
