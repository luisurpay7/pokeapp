import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  year: number = 0;

  ngOnInit() {
    this.year = (new Date()).getFullYear();
  }

}
