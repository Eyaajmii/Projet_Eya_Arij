import { Component } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent {
  members: any[] = [];

  constructor(private membresService:MemberService) {}

  ngOnInit() {
    this.membresService.getMembers().subscribe((data: any[]) => {
      this.members = data;
    });
  }
}
