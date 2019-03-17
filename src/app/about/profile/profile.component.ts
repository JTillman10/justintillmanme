import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  currentlyLearning = [
    {
      name: 'VueJS',
      imagePath: 'vue.png'
    },
    {
      name: 'React Native',
      imagePath: 'react.png'
    }
  ];

  constructor() {}
}
