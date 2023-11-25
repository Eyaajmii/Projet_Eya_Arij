import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Password } from 'src/app/classes/password';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
  updatePass!: FormGroup;

  constructor(private authService: AuthentificationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updatePass = this.fb.group({
      password: [''],
    });
  }

  get Passwords() {
    return this.updatePass.get('password');
  }

  resetPass() {
    const pass: Password = {
      id: 1,
      username: 'admin',
      password: this.Passwords?.value
    };
    
    if (pass.password) {
      this.authService.updatePassword(pass.id,pass.username ,pass.password).subscribe(() => {
        alert('Password updated successfully');
      });
    }
  }
}
