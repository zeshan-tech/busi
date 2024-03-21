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
    {name: "Zohaib Shahid", role: "Founder", imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocKrJ0B9b6Uv9jSlIxKFz6YEVTGrJH92zsO_PRZPew-A-Q=s576-c-no" },
    {name: "Noman Ijaz", role: "Senior software engineer", imageUrl: "https://res.cloudinary.com/djvfnekle/image/upload/v1711006055/njpndvbvkt9wt46xz6c3.jpg" },
    {name: "Zeshan shakeel", role: "Senior Software engineer", imageUrl: "https://storage.googleapis.com/pai-images/b9ea8a000966407cbdf8a8f41dc4d826.jpeg" },
    {name: "Muhammad Daniyal", role: "Software engineer", imageUrl: "https://res.cloudinary.com/djvfnekle/image/upload/v1711008947/sd99etim4ng9j7j20s8o.jpg" },
    {name: "Hamza Ameen", role: "Software engineer", imageUrl: "https://s.france24.com/media/display/2fad343e-b841-11ec-b46e-005056bfb2b6/w:1280/p:1x1/000_9UX7ZX.jpg" },
    {name: "Muhammad Tariq Ramzan", role: "DevOps Engineer", imageUrl: "https://res.cloudinary.com/djvfnekle/image/upload/v1711006370/o4jarcebuj2nxleruyqv.jpg" },
    {name: "Syeda Zaira Khan", role: "UX/UI Designer", imageUrl: "https://res.cloudinary.com/djvfnekle/image/upload/v1711006190/jxbymrgpjewawa7sxjcl.jpg" },
  ]
}
