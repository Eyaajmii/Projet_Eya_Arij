import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder, FormGroup } from '@angular/forms';
import { ValueFromArray } from 'rxjs';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajoutant',
  templateUrl: './ajoutant.component.html',
  styleUrls: ['./ajoutant.component.css']
})
export class AjoutantComponent implements OnInit {
FormationForum!:FormGroup;
lesFormations:Formation[]=[];
constructor(private fb:FormBuilder,private formationService:FormationService){}
  ngOnInit(): void {
    this.FormationForum=this.fb.nonNullable.group({
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
  public get lescontenus(){
    return this.FormationForum.get('contenu') as FormArray;
  }
  ajoutcontenu(){
    this.lescontenus.push(this.fb.control(''));
  }
  onSubmitForm(){
    this.formationService.addFormation(this.FormationForum.value).subscribe(data=>this.lesFormations.push(data))
  }
  onresetForm(){
    this.FormationForum.reset();
  }
}
