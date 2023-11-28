import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  @Input() faqs:any[] = [];

}
