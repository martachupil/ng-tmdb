import angular from 'angular';

import { TMDBService } from './tmdb.service';

/**
 * Fast way to add services to app
 * @param {string} appName 
 */
export const setupServices = (appName) => {
    angular.module(appName)
        .service('tmdb', TMDBService);
};