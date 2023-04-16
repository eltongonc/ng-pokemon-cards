import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Card } from 'src/types/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {}
  title = 'Pokemon Cards';

  cards: Card[] = [];

  getCards() {
    this.appService.getCards().subscribe((cards) => {
      this.cards = cards.data;
    });
  }

  ngOnInit() {
    this.getCards();
  }
}
