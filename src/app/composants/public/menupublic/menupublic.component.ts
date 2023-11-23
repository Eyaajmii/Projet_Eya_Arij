import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menupublic',
  templateUrl: './menupublic.component.html',
  styleUrls: ['./menupublic.component.css'],
})
export class MenupublicComponent {
  constructor(private router: Router) {}

  public LogIn() {
    this.router.navigate(['extranet']);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollFunction();
  }

  private scrollFunction(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition > 20) {
      // Use Angular Renderer or ElementRef.nativeElement to access the DOM element
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.style.top = "0";
      }
    } else {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.style.top = "-50px";
      }
    }
  }
}
