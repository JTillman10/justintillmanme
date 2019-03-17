import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    return [
      {
        name: 'TV Data',
        image: 'tvdata.png',
        repository: 'tv-data',
        url: 'https://tv-data-40d21.firebaseapp.com',
        summary: 'Web application used for television episode ratings and information',
        tags: ['JavaScript', 'React', 'Redux', 'Firebase', 'Jest', 'Enzyme', 'HTML/SASS', 'BULMA']
      },
      {
        name: 'App Organizer',
        image: 'apporganizer.png',
        repository: 'app-organizer',
        url: 'https://tv-data-40d21.firebaseapp.com',
        summary: 'Organization tool used to plan out features for a project',
        tags: ['TypeScript', 'Angular', 'Firebase', 'Database', 'Angular Material', 'HTML', 'SASS']
      },
      {
        name: 'My Portfolio',
        image: 'justintillmanme.png',
        repository: 'justintillmanme',
        url: '',
        summary: 'My portfolio',
        tags: ['TypeScript', 'Angular', 'Firebase', 'Bulma', 'HTML', 'SASS']
      },
      {
        name: 'Nationwide Meeting Calculator',
        image: 'nationwide-meeting-calculator.png',
        repository: 'nw-meeting-calculator',
        url: 'https://nw-meeting-calculator.herokuapp.com/',
        summary: 'Provides the ability to determine how much meetings cost',
        tags: ['TypeScript', 'Angular', 'Herkou', 'Angular Material', 'HTML', 'SASS']
      }
    ];
  }
}
