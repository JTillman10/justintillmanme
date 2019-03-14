import { Component } from '@angular/core';

import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuIsActive = false;

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  constructor() {}

  scroll(target) {
    const element = document.querySelector(`#${target}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
