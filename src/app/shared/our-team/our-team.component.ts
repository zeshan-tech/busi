import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { OurTeamCardComponent } from './our-team-card/our-team-card.component';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  standalone: true,
  imports: [CommonModule, OurTeamCardComponent],
})
export class OurTeamComponent {
  teamMembers = [
    {name: "Zohaib Shahid", role: "Product Manager", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "System Architect 1", role: "System Architect", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "Zeshan shakeel", role: "Senior Software engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "Hamza Ameen", role: "Software engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "Software engineer 1", role: "Software engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "Devops 1", role: "DevOps Engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "Devops 2", role: "DevOps Engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "UX&UI designer", role: "UX/UI Designer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "QA Engineer 1", role: "Quality Assurance (QA) Engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
  ]
}
