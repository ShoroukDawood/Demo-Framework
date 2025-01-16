import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageHome: string = '/images/avataaars.svg'
  imageAlt:string='Avatar Image'
}
