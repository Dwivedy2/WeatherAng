import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  router = inject(Router);

  // or
  // constructor(private router: Router) {}

  search(cityRef: HTMLInputElement) {
    if(cityRef.value.trim().length <= 0) return;

    this.router.navigate(['/weather', cityRef.value.toLowerCase()]);

    cityRef.value = '';
  }
}
