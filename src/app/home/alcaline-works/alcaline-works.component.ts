import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alcaline-works',
  templateUrl: './alcaline-works.component.html',
  styleUrls: ['./alcaline-works.component.scss'],
})
export class AlcalineWorksComponent {
  @ViewChild('container') container!: ElementRef;

  timelineItems = [
    {
      serial: '#1',
      title: 'Assemble the right team',
      description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      serial: '#2',
      title: 'Sprint planning',
      description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
    },
    {
      serial: '#3',
      title: 'Tech architecture',
      description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
    },
    {
      serial: '#4',
      title: 'Standups & weekly demos',
      description: 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.',
    },
    {
      serial: '#5',
      title: 'Code reviews',
      description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells',
    },
    {
      serial: '#6',
      title: 'Iterative delivery',
      description: 'We divide the implementation process into several checkpoints rather than a single deadline.',
    },
  ];

  ngAfterViewInit() {
    this.container.nativeElement.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    this.container.nativeElement.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    const container = this.container.nativeElement;
    const scrollLeft = container.scrollLeft;
    const totalWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
    const scrollRight = totalWidth - scrollLeft - containerWidth;

    // If scrolled to the right edge, reset scroll to the left
    if (scrollRight === 0) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };
}
