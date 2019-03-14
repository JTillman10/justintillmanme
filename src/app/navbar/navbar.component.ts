import { Component } from '@angular/core';

import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faInfo, faWrench, faFilePdf, faUser } from '@fortawesome/free-solid-svg-icons';

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
  faInfo = faInfo;
  faWrench = faWrench;
  faFilePdf = faFilePdf;
  faUser = faUser;

  constructor() {}

  scroll(target) {
    const element = document.querySelector(`#${target}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
