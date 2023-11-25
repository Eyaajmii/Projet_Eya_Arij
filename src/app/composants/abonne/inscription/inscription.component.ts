import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Abonnee } from 'src/app/classes/abonnee';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscriptionForm!: FormGroup;
  lesabonnees:Abonnee[]=[];
 

  constructor(private formBuilder: FormBuilder,private abonneService: AbonneService) { }

  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', [Validators.required,Validators.pattern('[A-Z][a-z]+$'), Validators.minLength(4)]],
      prenom: ['', [Validators.required,Validators.pattern('[A-Z][a-z]+$'), Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.min(18)]],
      sexe: ['', Validators.required],
      etat: ['', Validators.required],
      formation: ['', Validators.required],
      lieu: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[A-Za-z0-9][A-Za-z0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]      //Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
    });
  }

  

/*
  onSubmit() {
    if (this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
    }
  }
*/
  onResetForm(){
    this.inscriptionForm.reset();
  }


  onSubmit() {
    //this.abonneService.enregistrerAbonne(this.inscriptionForm.value).subscribe(data=>this.lesabonnees.push(data))


    if (this.inscriptionForm.valid) {
      this.abonneService.enregistrerAbonne(this.inscriptionForm.value).subscribe(data=>this.lesabonnees.push(data))

    }
 }



  public get nom(){
    return this.inscriptionForm.get('nom');
  }
  public get prenom(){
    return this.inscriptionForm.get('prenom');
  }
  public get age(){
    return this.inscriptionForm.get('age');
  }
  public get sexe(){
    return this.inscriptionForm.get('sexe');
  }
  public get etat(){
    return this.inscriptionForm.get('etat');
  }
  public get formation(){
    return this.inscriptionForm.get('formation');
  }
  public get lieu(){
    return this.inscriptionForm.get('lieu');
  }
  public get email(){
    return this.inscriptionForm.get('email');
  }
  public get username(){
    return this.inscriptionForm.get('username');
  }
  public get password(){
    return this.inscriptionForm.get('password');
  }
  public isValidnom(){
    return this.inscriptionForm.get('nom')?.errors?.['pattern']&& this.inscriptionForm.controls['nom'].dirty; 
  }
  public isValidprenom(){
    return this.inscriptionForm.get('prenom')?.errors?.['pattern']&& this.inscriptionForm.controls['prenom'].dirty; 
  }
  public isValidemail(){
    return this.inscriptionForm.get('email')?.errors?.['pattern']&& this.inscriptionForm.controls['email'].dirty; 
  }
  public isValidusername(){
    return this.inscriptionForm.get('username')?.errors?.['pattern']&& this.inscriptionForm.controls['username'].dirty; 
  }
  public isValidpassword(){
    return this.inscriptionForm.get('password')?.errors?.['pattern']&& this.inscriptionForm.controls['password'].dirty; 
  }


}
