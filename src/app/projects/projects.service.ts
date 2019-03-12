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
        url: 'https://tv-data-40d21.firebaseapp.com'
      },
      {
        name: 'App Organizer',
        image: 'apporganizer.png',
        repository: 'app-organizer',
        url: 'https://tv-data-40d21.firebaseapp.com'
      }
    ];
  }
}
