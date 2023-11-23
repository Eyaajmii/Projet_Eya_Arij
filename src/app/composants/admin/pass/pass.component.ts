import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent {
  constructor(private authService: AuthentificationService){}
  changePass(p:string){
    this.authService.changePassword(p);
  }
}
