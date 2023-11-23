import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit{
  updatePass!: FormGroup;
  constructor(private authService: AuthentificationService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.updatePass=this.fb.nonNullable.group({
      pass:[''],
      username:['']
    })
  }
  changePass(p:string){
    this.authService.changePassword(p);
  }
}
