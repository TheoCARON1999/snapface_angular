import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

  private router = inject(Router)

  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

  onAdd() {
    this.router.navigateByUrl('create')
  }
}
