import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Password } from 'src/app/classes/password';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit{
  updatePass!: FormGroup;

  constructor(private authService: AuthentificationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updatePass = this.fb.group({
      password: [''],
    });
  }

  resetPass() {
    const updatedPass: Password = this.updatePass.value;
    this.authService.updatePassword(updatedPass.id, updatedPass).subscribe(() => {
      console.log("Mot de passe mis à jour avec succès :", updatedPass);
    });
  }
}
