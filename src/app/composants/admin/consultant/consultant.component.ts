import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  lesFormations: Formation[] = [];
  updateForm!: FormGroup;
  constructor(private formationService: FormationService,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formationService.getFormation().subscribe(
      data => this.lesFormations = data
    );
    this.updateForm=this.fb.nonNullable.group({
      id:[],
      nom:[''],
      photo: [''],
      contenu:this.fb.array([]),
      datefinInscri:[''],
      dateCommence:[''],
      duree:[''],
      horraire:[''],
      lieu:[],
      paye:[]
    })
  }
  //modification
  afficherFormulaireMiseAJour(formation: Formation): void {
    this.updateForm.patchValue(formation);
    this.ajoutcontenu(); 
    let d = document.getElementById('modifyDiv');
    if (d) {
      d?.classList.add('c2');
      let btn = document.getElementById('btnenregistre');
      if (btn) {
        btn.addEventListener('click', () => {
          d?.classList.toggle('c1');
        });
      }
    }
  }
  

  updateFormation(): void {
    const updatedFormation: Formation = this.updateForm.value;

    this.formationService.updateFormationbyId(updatedFormation.id, updatedFormation)
      .subscribe(() => {
        console.log("Formation mise à jour avec succès :", updatedFormation);
      });
  }
  public get lescontenus(){
    return this.updateForm.get('contenu') as FormArray;
  }
  ajoutcontenu(){
    this.lescontenus.push(this.fb.control(''));
  }
 //supprimer
  Supprimer(id: number): void {
    this.formationService.deleteProduit(id)
      .subscribe();
      alert("formation supprime");
  }
 }
