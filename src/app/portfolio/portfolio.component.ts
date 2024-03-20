import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {

  mobileApps = [
    {
      name: "Banana Republic",
      description: "A E-commerce app developed in (react-native · postgresQl · nestjs · graphQl · stripe · PayPal · Azure)",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.gap.mobile.bananarepublic&hl=en&gl=US",
      ratings: 4.8,
      imageUrl: ''
    },
    {
      name: "Text Vault - Texting App",
      description: "A chating app developed in (react-native · MySql · lavavel · AWS)",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.appsverse.textvault",
      ratings: 3.6,
      imageUrl: ''
    },
    {
      name: "Servr GuestX -Guest Experience",
      description: "App provides hospitality services developed in (react-native · Nodejs · MySql · stripe)",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.servr",
      ratings: 5.0,
      imageUrl: ''
    },
    {
      name: "Croatia bank app",
      description: "A Saudi bank application developed in (react-native · Stringboot · Microservices · Oracle)",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.servr",
      ratings: 0.0,
      imageUrl: ''
    },
    {
      name: "Abhi - Your Salary Now!",
      description: "App to get salary in advance - developed in (IONIC · angular · nestjs · MySql)",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.abhifinance&hl=en&gl=US",
      ratings: 4.1,
      imageUrl: ''
    },
    {
      title: 'No name (web & admin)',
      subtitle: 'An e-commerce website developing in (Reactjs · NestJS · PostgreSQL · Microsoft Azure · supabase · Firebase · Microservices)',
      imageUrl: 'https://nestjs.com/img/nest-og.png',
      webLink: 'https://coruscating-cat-13eb68.netlify.app/'
    },
    {
      title: 'Zgaya Hub (web & admin)',
      subtitle: 'A movie website my own project developing in (nestjs, microservices, postgresQl, reactjs, admin, angular, AWS, firebase)',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png',
      webLink: false
    }
  ];
}
