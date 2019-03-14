import { Component, OnInit } from '@angular/core';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  faArrowUp = faArrowUp;
  showButton = false;

  constructor() {}

  ngOnInit() {
    window.addEventListener(
      'scroll',
      event => {
        this.showButton = document.documentElement.scrollTop !== 0;
      },
      true
    );
  }

  scrollToTop() {
    const element = document.querySelector('#hello');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
