import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthentificationService, private router: Router) {}

  public connecter(username: string, password: string): void {
    const valid = this.authService.login(username, password);

    if (!valid) {
      alert('Login ou mot de passe erronés');
    }

    /*if (this.authService.isEtudiant()) {
      this.router.navigate(['/etud']); 
      return;
    }*/

    if (this.authService.isadminstrateur()) {
      this.router.navigate(['/adminstrateur']);
      return;
    }
  }
}
