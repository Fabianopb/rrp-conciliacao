import angular from 'angular';

import {HomeContainer} from './app/containers/Home';
import 'angular-ui-router';
import routesConfig from './routes';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('home', HomeContainer);
