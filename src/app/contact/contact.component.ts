import { Component } from '@angular/core';

import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faInfo, faWrench, faFilePdf, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faInfo = faInfo;
  faWrench = faWrench;
  faFilePdf = faFilePdf;
  faUser = faUser;

  constructor() {}
}
