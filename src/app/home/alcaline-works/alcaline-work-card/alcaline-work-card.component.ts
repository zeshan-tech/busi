import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alcaline-work-card',
  templateUrl: './alcaline-work-card.component.html',
  styleUrl: './alcaline-work-card.component.scss'
})
export class AlcalineWorkCardComponent {
  @Input() description!: string;
  @Input() title!: string;
  @Input() serial!: string;
}
