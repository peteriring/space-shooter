# SpaceShooter

_This is a solution to the task given by Play'n GO team_

---

**NOTE:**

Please take into consideration that the project was built under Windows OS, it might not contain full solution for other systems.

---

The application was written with a variety of features and use-cases in mind, such as being extendable in the future.
The framework chosen for the task was [angular](https://angular.io/docs/), and [bootstrap](https://getbootstrap.com/), with the appropriate adapter package [ng-bootstrap](https://ng-bootstrap.github.io/#/home). It uses the recommended uikit [pixi.js](https://www.pixijs.com/).

The build was tested on the following browsers:
- Chrome v89.0.4389.82
- Firefox v86.0.1
- Edge v89.0.774.54


## Demo

The live application is reachable on git pages.

[https://peteriring.github.io/space-shooter/](https://peteriring.github.io/space-shooter/)

## Installation

The application was written on Windows 10 (64bit), with VisualStudioCode 1.46.1 IDE, using Prettier extension v5.1.3 and ESLint extension v2.1.6.

The versions of global dependencies were:

```
node: v14.0.0
npm: 6.14.4
typescript: 3.8.3
@angular/cli: 9.1.15
pixi.js: 6.0.0
```

to install local dependencies:

```
npm install
```

## Getting started

To start the application
```
npm run start
```

The application should be reachable under: [http://localhost:4200/](http://localhost:4200/)


## Creating builds

To create a development build, run:
```
npm run build
```

To create a production build, run:
```
npm run build:prod
```
