import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() playStoreLink!: string;
  @Input() appStoreLink!: string;
  @Input() webLink?: string; // Make codeLink optional
}
