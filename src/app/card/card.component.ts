import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() imgUrl!: string;
  @Input() name!: string;
  @Input() rarity?: string;
  @Input() pkmnNr!: number;
  @Input() artist?: string;
  @Input() price?: number;
}
