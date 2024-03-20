import { Component } from '@angular/core';
import { ICardProps } from './card/card.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  mobileApps: ICardProps[] = [
    {
      name: 'Banana Republic',
      description:
        'A E-commerce app developed in <br>  <small>(react-native · postgresQl · nestjs · graphQl · stripe · PayPal · Azure) <small>',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.gap.mobile.bananarepublic&hl=en&gl=US',
      ratings: 4.8,
      imageUrl:
        'https://www.revu.com.ph/wp-content/uploads/2017/05/Apple-iOS-vs-Android-on-Revu-Philippines.jpg',
    },
    {
      name: 'Text Vault - Texting App',
      description:
        'A chating app developed in <br>  <small>(react-native · MySql · lavavel · AWS) <small>',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.appsverse.textvault',
      ratings: 3.6,
      imageUrl:
        'https://www.revu.com.ph/wp-content/uploads/2017/05/Apple-iOS-vs-Android-on-Revu-Philippines.jpg',
    },
    {
      name: 'Chair Exercises',
      description:
        'A home exercise app developed in <br>  <small>(react-native · nestjs · firebase · MySql) <small>',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.samantharoobol.chair',
      ratings: 2.4,
      imageUrl:
        'https://www.revu.com.ph/wp-content/uploads/2017/05/Apple-iOS-vs-Android-on-Revu-Philippines.jpg',
    },
    {
      name: 'Servr GuestX -Guest Experience',
      description:
        'App provides hospitality services developed in <br>  <small>(react-native · Nodejs · MySql · stripe) <small>',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.servr',
      ratings: 5.0,
      imageUrl:
        'https://www.revu.com.ph/wp-content/uploads/2017/05/Apple-iOS-vs-Android-on-Revu-Philippines.jpg',
    },
    {
      name: 'Croatia bank app',
      description:
        'A Saudi bank application developed in <br>  <small>(react-native · Stringboot · Microservices · Oracle) <small>',
      playStoreLink: 'false',
      ratings: 0.0,
      imageUrl:
        'https://www.revu.com.ph/wp-content/uploads/2017/05/Apple-iOS-vs-Android-on-Revu-Philippines.jpg',
    },
    {
      name: 'Abhi - Your Salary Now!',
      description:
        'App to get salary in advance - developed in <br>  <small>(IONIC · angular · nestjs · MySql) <small>',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.abhifinance&hl=en&gl=US',
      ratings: 4.1,
      imageUrl:
        'https://www.revu.com.ph/wp-content/uploads/2017/05/Apple-iOS-vs-Android-on-Revu-Philippines.jpg',
    },
    // {
    //   title: 'No name (web & admin)',
    //   subtitle: 'An e-commerce website developing in (Reactjs · NestJS · PostgreSQL · Microsoft Azure · supabase · Firebase · Microservices)',
    //   imageUrl: 'https://nestjs.com/img/nest-og.png',
    //   webLink: 'https://coruscating-cat-13eb68.netlify.app/'
    // },
    // {
    //   title: 'Zgaya Hub (web & admin)',
    //   subtitle: 'A movie website my own project developing in (nestjs, microservices, postgresQl, reactjs, admin, angular, AWS, firebase)',
    //   imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png',
    //   webLink: false
    // }
  ];

  websites: ICardProps[] = [
    {
      name: 'Banana republic',
      webLink: 'https://bananarepublic.gap.com/',
      description:
        'E commerce platform with admin dashboard developed in <br> <small>(reactjs · postgresQl · nestjs · graphQl · stripe · PayPal · Azure)</small>',
      imageUrl:
        'https://moaapi.net/sites/default/files/2023-03/banana-republic-hero-image.jpg',
    },
    {
      name: 'Hands FZC',
      webLink: 'https://volkafood.com/',
      description:
        'Volka food web developed in <br> <small>(reactjs · firebase · GCP (google cloud platform))</small>',
      imageUrl:
        'https://i.ytimg.com/vi/cNHQTSgi1Pk/maxresdefault.jpg',
    },
    {
      name: 'Abhi - Your Salary Now!',
      webLink: 'https://abhi.com.pk/',
      description:
        'Website (Same as app) to get salary in advance - developed in <br>  <small>(angular · nestjs · MySql) <small>',
      imageUrl:
        'https://i.brecorder.com/primary/2021/06/60be0a51c2229.jpg',
    },
    {
      name: 'Muslim kids TV',
      webLink: 'https://muslimkids.tv/new/',
      description:
        'A website for kids activities developed in <br>  <small>(reactjs · MySql · nestjs · microservices ) <small>',
      imageUrl:
        'https://play-lh.googleusercontent.com/Qh5GMCQ6ije-20k_sWaSqhrg6uoWIE_3D_VPDVX3GCZXEp0N7Y0eSPlTnbvejLBcCsRD=w1052-h592-rw',
    },
    {
      name: 'Zgaya.hub',
      webLink: 'false',
      description:
        'A movie website and admin dashbord developing in <br> <small>(reactjs · angular · MySql · nestjs · microservices · AWS) <small>',
      imageUrl:
        'https://res.cloudinary.com/rangle/image/upload/v1659119469/rangle.io/blogs/migrating-an-angular-1-application-to-react/feature-photo.gif',
    },
  ];
}
