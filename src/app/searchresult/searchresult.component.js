import { isNil } from 'lodash';
import './searchresult.component.css';

export const searchDirective = () => {
  return {
    template: require('./searchresult.component.html'),
    controller: SearchCtrl,
    controllerAs: 'vm'
  }
};

export class SearchCtrl {
  /**
   * 
   * @param {TMDBService} tmdb TMDB Service
   */
  constructor(tmdb) {
    this.$inject = ['tmdb'];
    this.tmdb = tmdb;
  }

  $onInit() {
    console.log(this.movieData)
  }
}