import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  reviews: any[] = [
    {
      id: 1,
      title: "Benzama",
      description: "With an expert level of professionalism, the MediaPeachy team is always willing to lend ahelping hand and complete tasks in record time. Special thanks  in her work and providing outstanding support!",
    },
    {
      id: 2,
      title: "Finn allen",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    {
      id: 3,
      title: "steve david",
      description: "and complete tasks in record time. Special thanks to Lena, she is an invaluable asset to any team,",
    },
    {
      id: 4,
      title: "Aria tanna",
      description: "striving for excellence in her work and providing outstanding support!",
    },
    {
      id: 5,
      title: "Shaun tat",
      description: "There need to be build on the card title and make up the bulk of the card's content.",
    }
  ]

  faqs: any[] = [
    {
      id: 1,
      question: "What is ur requirement?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est sapiente minus delectus ipsam illum harum cupiditate nihil magni animi. Iusto accusantium rem distinctio laboriosam vero! Card subtitle"
    },
    {
      id: 2,
      question: "It is trustable?",
      answer: "lor sit amet consectetur, adipisicing elit. Esse est sapiente minus delectus ipsam illum harum cupiditate nihil magni animi. Iusto accusantium rem distinctio laboriosam vero! Card "
    },
    {
      id: 3,

      question: "Why it is important?",
      answer: "fgt hfbu jnduv jvhfb Card subtitle"
    },
    {
      id: 4,
      question: "How much does digital cost ?",
      answer: "Card subtitle"
    },
    {
      id: 5,
      question: "what is the purpose of it?",
      answer: "illum harum cupiditate nihil magni animi. Iusto accusantium rem distinctio laboriosam vero!"
    },
  ]

  services: any[] = [
    {
      id: 1,
      title: "ReactJs",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Node Js",
      subtitle: "25Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    {
      id: 3,
      title: "Angular Js",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Html",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      title: "Javascript",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      title: "Mysql",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 7,
      title: "Ajax",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 8,
      title: "Mongodb",
      subtitle: "Card subtitle",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ]

}
