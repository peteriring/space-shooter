# SpaceShooter

_This is the solution to the task given by Play'n GO team_

---

**NOTE:**

Please take into consideration that the project was built under Windows OS, it might not contain full solution for other systems

---

The application was written with a variety of features and usecases in mind, and to be extendable in the future.
The framework chosen for the task was [angular](https://angular.io/docs/), with the recommended uikit [pixi.js](https://www.pixijs.com/).

Testing is not yet implemented.

The application is currently not handling any configuration options well. It would be a nice addition to parse the environment variables to modify them.

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

To start the application with browser rendering, run: `npm run start`
