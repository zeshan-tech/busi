import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  backendTechnologies = [
    { name: "JavaScript", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710757611/qcrj2jqbqdp0uduabrkd.png' },
    { name: "Python", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710758304/fehvkcaqverghy5o0iij.png' },
    { name: "Java", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710757613/cgqx1xesqsedapxbyrks.png' },
    { name: "Golang", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710758146/qlamaxt3fc1wdzr2tj2f.png' },
    { name: "TypeScript", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/f50e483d429c87613937436656b15a1a/detailed' },
    { name: "Nodejs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/61b1cfff6bab4a3c9b091fb7875233fb/detailed' },
    { name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' },
    { name: "Nestjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009756/ph8a6wv0nrrps778fcco.png' },
    { name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png' },
    { name: "Django", imageUrl: 'https://juststickers.in/wp-content/uploads/2016/05/django-badge.png' },
    { name: "Springboot", imageUrl: 'https://www.openxcell.com/wp-content/uploads/2021/10/springboot-inner.svg' },
    { name: "Microservices", imageUrl: 'https://media.licdn.com/dms/image/C5112AQEEcR2mak_D8Q/article-cover_image-shrink_720_1280/0/1563209644780?e=2147483647&v=beta&t=U76cYNVN1rJWoYx1fKFsMW9-3DbfyImlwWGFhLLc3qk' },
    { name: "Graphql", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png' },
    { name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png' },
    { name: "Numpy", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/83a0883f461ecf77193de89f4eac16a1/detailed' },
  ];
  
  frontendTechnologies = [
    { name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png' },
    { name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png' },
    { name: "Flutter", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710758313/x07vohhngvjaptmu5wjo.png' },
    { name: "Reactjs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/6d3026449b527993f9c56028323fb94c/detailed' },
    { name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' },
    { name: "Angular", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/5768ac798fd56dd06d26cdcf824cc1e7/detailed' },
    { name: "Svelte", imageUrl: 'https://cdn3d.iconscout.com/3d/free/thumb/free-svelte-5562376-4642721.png?f=webp' },
    { name: "Threejs", imageUrl: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png' },
    { name: "Tauri", imageUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png' },
  ]
  
  databases = [
    { name: "PostgresQl", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
    { name: "MySql", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/684aed5022e90c20167a19186a3766e9/detailed' },
    { name: "MsSql", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009760/opxv1rfzwswfovlt1i0n.png' },
    { name: "Sqlite", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/7f2b2a5a6dafd8f8d54e159d07886a98/detailed' },
    { name: "MongoDB", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/0b49d44f16b242edfe5fdf9433c0a505/detailed' },
    { name: "Redis", imageUrl: 'https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg' },
    { name: "DynamoDB", imageUrl: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_DynamoDB-512.png'},
    { name: "Firestore", imageUrl: 'https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png'}
  ]
  
  devopsTechnologies = [
    { name: "AWS", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/7cac7afc8db86166f6189ba7b366e7b8/detailed' },
    { name: "Azure", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png' },
    { name: "Docker", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/d6d2769939a6e0d40b1190b853c2a442/detailed' },
    { name: "Git", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/661160c1fccd1d8a37112f0406265331/detailed' },
    { name: "Github", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009751/drztbwozq90q6iwnxwu8.png' },
    { name: "Genkins", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' },
    { name: "prometheus", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png' },
    { name: "Terraform", imageUrl: 'https://img2.gratispng.com/20180407/bte/kisspng-terraform-hashicorp-infrastructure-as-code-puppet-infrastructure-5ac8a78e5ac2f1.8554680415230995343718.jpg' },
    { name: "System integration", imageUrl: 'https://cdn-icons-png.freepik.com/512/8020/8020444.png' },
  ]
}
