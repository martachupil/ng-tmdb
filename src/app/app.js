import angular from 'angular';

import js_angular_aria from 'angular-aria';
import js_angular_animate from 'angular-animate';
import js_angular_messages from 'angular-messages';

import uiBootstrap from 'angular-ui-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import js_angular_material from 'angular-material';

import '../style/app.css';
// import 'angular-material/angular-material.css';

import { headerDirective } from './header/header.component';
import { setupServices } from './services';

const APP_NAME = 'app';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor(tmdb) {
    this.$inject = ['tmdb'];
    this.tmdb = tmdb;
    this.latestMovies = null;

    this.url = 'https://github.com/martachupil';
    // console.log(this.tmdb.getNewMovieReleaseDates());

    if (this.latestMovies === null) {
    this.tmdb.getNewMovieReleaseDates()
      .then((r) => this.latestMovies = r.data)
      .catch((e) => console.error(e));
    } 
  }

  getMovieDetailesbyID (movieId) {
    console.log(movieId);
    this.tmdb.getMovieDetailes(movieId)
      .then((r) => console.log(r.data))
      .catch((e) => console.error(e));
  }

  getYearRelease(date) {
    let name = date.split('-');
    return name[0];
  }

}

angular.module(APP_NAME, ['ngMessages', 'ngAnimate', 'ngAria', 'ui.bootstrap'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .directive('appHeader', headerDirective)

// inject services to the app
setupServices(APP_NAME);


export default APP_NAME;