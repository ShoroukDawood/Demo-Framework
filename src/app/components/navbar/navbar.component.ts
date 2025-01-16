import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
      this.navbarScrolled = true; 
      if (navbar) {
        navbar.classList.add('scrolled');
      }
    } else {
      this.navbarScrolled = false;
      if (navbar) {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
