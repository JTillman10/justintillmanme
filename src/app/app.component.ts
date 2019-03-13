import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // highestElement: HTMLElement;

  ngOnInit() {
    // this.highestElement = document.getElementById('hello');
    // window.addEventListener(
    //   'scroll',
    //   event => {
    //     // GOAL => get elements in the viewport
    //     //         get lowest top
    //     const elementsInViewport = ['hello', 'about', 'projects']
    //       .map(id => {
    //         return document.getElementById(id);
    //       })
    //       .filter(element => this.checkVisible(element));
    //     const highestElement = elementsInViewport.reduce((max, element) => {
    //       return max.offsetTop < element.offsetTop ? max : element;
    //     });
    //     this.highestElement = highestElement;
    //   },
    //   true
    // );
  }

  checkVisible(el) {
    // const rect = el.getBoundingClientRect();
    // const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    // return !(rect.bottom < 52 || rect.top - viewHeight >= 52);
  }
}
