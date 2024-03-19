import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-our-team-card',
  templateUrl: './our-team-card.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule]
})
export class OurTeamCardComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() role!: string;
}
