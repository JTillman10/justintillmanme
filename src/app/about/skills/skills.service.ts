import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor() {}

  getSkillAreas() {
    return [
      {
        name: 'Languages',
        skills: [
          {
            names: ['Java'],
            level: 70,
            imagePaths: ['java.png']
          },
          {
            names: ['JavaScript'],
            level: 90,
            imagePaths: ['javascript.png']
          },
          {
            names: ['HTML', 'CSS'],
            level: 75,
            imagePaths: ['html.png', 'css.png']
          },
          {
            names: ['ruby'],
            level: 60,
            imagePaths: ['ruby.png']
          }
        ],
        visible: true
      },
      {
        name: 'Frameworks',
        skills: [
          {
            names: ['AngularJS'],
            level: 90,
            imagePaths: ['angularjs.png']
          },
          {
            names: ['Angular'],
            level: 80,
            imagePaths: ['angular.png']
          },
          {
            names: ['Aurelia'],
            level: 50,
            imagePaths: ['aurelia.png']
          },
          {
            names: ['NodeJS', 'npm'],
            level: 75,
            imagePaths: ['node.png', 'npm.png']
          },
          {
            names: ['React', 'Redux'],
            level: 50,
            imagePaths: ['react.png', 'redux.png']
          },
          {
            names: ['VueJS'],
            level: 40,
            imagePaths: ['vue.png']
          }
        ],
        visible: false
      },
      {
        name: 'Databases',
        skills: [
          {
            names: ['MongoDB'],
            level: 50,
            imagePaths: ['mongodb.png']
          },
          {
            names: ['Oracle'],
            level: 50,
            imagePaths: ['oracle.png']
          }
        ],
        visible: false
      },
      {
        name: 'Cloud Providers',
        skills: [
          {
            names: ['AWS'],
            level: 25,
            imagePaths: ['aws.png']
          },
          {
            names: ['Firebase'],
            level: 55,
            imagePaths: ['firebase.png']
          },
          {
            names: ['Heroku'],
            level: 50,
            imagePaths: ['heroku.png']
          }
        ],
        visible: false
      },
      {
        name: 'CI Tools',
        skills: [
          {
            names: ['CircleCI'],
            level: 40,
            imagePaths: ['circleci.png']
          },
          {
            names: ['Jenkins'],
            level: 50,
            imagePaths: ['jenkins.png']
          }
        ],
        visible: false
      }
    ];
  }
}
