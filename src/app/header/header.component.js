import { isNil } from 'lodash';
import './header.component.css';

export const headerDirective = () => {
  return {
    template: require('./header.component.html'),
    controller: HeaderCtrl,
    controllerAs: 'vm'
  }
};

export class HeaderCtrl {
  /**
   * 
   * @param {TMDBService} tmdb TMDB Service
   */
  constructor(tmdb) {
    this.$inject = ['tmdb'];
    this.tmdb = tmdb;

    this.movieData = null;
    this.movieName = null;
    this.errorInput = false;
  }


  getMovieData() {
    if (!isNil(this.movieName) && this.movieName.length !== 0) {
      this.errorInput = false;
      this.tmdb.getMovieByName(this.movieName)
      .then((r) => this.movieData = r.data)
      .catch((e) => console.error(e));
    }
    else {
      this.errorInput = true;
    }
  }

  $onInit() {
    console.log(this.movieData)
  }
}