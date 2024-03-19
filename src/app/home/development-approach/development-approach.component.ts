import { Component } from '@angular/core';

@Component({
  selector: 'app-development-approach',
  templateUrl: './development-approach.component.html',
  styleUrls: ['./development-approach.component.scss'],
})
export class DevelopmentApproachComponent {
  approaches = [
    {
      title: 'UX Driven Engineering',
      description: 'We prioritize user experience, ensuring visually appealing designs and intuitive interfaces for better interaction.',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3254516-2725079.png',
    },

    {
      title: 'Developing Shared Understanding',
      description: 'Foster collaboration for clear project goals and requirements among stakeholders including designers, developers, and clients.',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/code-issue-8583651-6786063.png?f=webp',
    },

    {
      title: 'Proven Experience and Expertise',
      description: 'Years of UX-focused development experience, delivering high-quality solutions exceeding client expectations leveraging best practices.',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/heart-rate-8355807-6629683.png?f=webp',
    },

    {
      title: 'Security & Intellectual Property (IP)',
      description: 'Prioritize client data and IP security, following stringent measures for confidentiality ensuring peace of mind for clients.',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/shield-3783763-3162225.png?f=webp',
    },

    {
      title: 'Code Reviews',
      description: 'Thorough code reviews ensure quality, consistency, and adherence to best practices providing robust and maintainable code.',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/check-4564125-3793514.png?f=webp',
    },

    {
      title: 'Quality Assurance & Testing',
      description: 'Rigorous QA and testing methodologies ensure reliability, performance, and functionality of solutions meeting high-quality standards.',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/lock-3711729-3105451.png?f=webp',
    },
  ];
}
