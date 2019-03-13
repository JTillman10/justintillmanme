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
        summary: 'Organization web application use to plan out features for a project',
        tags: ['TypeScript', 'Angular', 'Firebase', 'Database', 'Material Design', 'HTML', 'SASS']
      }
    ];
  }
}
