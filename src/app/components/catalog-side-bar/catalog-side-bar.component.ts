import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-side-bar',
  templateUrl: './catalog-side-bar.component.html',
  styleUrl: './catalog-side-bar.component.scss'
})
export class CatalogSideBarComponent {
  services = [
    {
      title: 'Service Categories',
      items: ['IT & computer', 'Sales & Marketing']
    },
    {
      title: 'Service Type',
      items: ['Business Banking', 'Business Support']
    }
  ]
}
