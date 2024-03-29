import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-cards',
  templateUrl: './catalog-cards.component.html',
  styleUrl: './catalog-cards.component.scss'
})
export class CatalogCardsComponent {


  @Input() items:Card = {
    title: '',
    subTitle: 'string',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: 'red',
    icon: 'red'
  }
}

interface Card {
  title: string,
  subTitle: string,
  description: string
  color: string,
  icon: string
}