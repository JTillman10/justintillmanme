import { Component } from '@angular/core';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faHeart = faHeart;

  constructor() {}
}
