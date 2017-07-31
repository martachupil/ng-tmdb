const API_KEY = '05f3ff0fe6228d1ca25ec5656dd9b6a0';
const BASE_URL = 'https://api.themoviedb.org';

export class TMDBService {
    /**
     * 
     * @param {*} $http $http Service  
     */
    constructor($http) {
        this.$http = $http;

        // Inject $http
        this.$inject = ['$http'];
    }

    /**
     * Get URL for API request to TMDB
     * @param {string} path 
     */
    getFullUrl(path) {
        return `${BASE_URL}/${path}?api_key=${API_KEY}`;
    }

    /**
     * Get movie by id
     * 
     * @param {string} movieId 
     * @returns {Promise} Request promise
     * @memberof TMDBService
     */
    getMovieById(movieId) {
        let url = this.getFullUrl(`3/movie/${movieId}`);
        return this.$http.get(url);
    }
    getMovieByName(name) {
        let url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${name}`
        return this.$http.get(url);
    }
    getNewMovieReleaseDates(movies) {
        let url = `${BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=uk-UA&page=1`
        return this.$http.get(url);
    }
}