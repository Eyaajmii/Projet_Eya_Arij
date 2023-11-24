import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginForum!: FormGroup;

  constructor(private authService: AuthentificationService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.LoginForum = this.fb.group({
      username: [''],
      password: ['']
    });
  }


  Connecter() {
    const { username, password } = this.LoginForum.value;
  
    this.authService.getData(username, password).subscribe((response) => {
        if (response.length > 0) {
          this.router.navigate(['/adminstrateur']);
        } else {
          // Invalid credentials
          alert('Invalid username or password');
        }
      })
    }  
}
