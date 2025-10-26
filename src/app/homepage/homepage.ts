import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

  private router = inject(Router)

  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

}
