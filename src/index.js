import angular from 'angular';

import {HomeContainer} from './app/containers/Home';
import {NavBarComponent} from './app/components/NavBar';

import 'angular-ui-router';
import 'angular-material';
import 'angular-messages';

import routesConfig from './routes';

import 'angular-material/angular-material.css';
import './app/styles/index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngMaterial', 'ngMessages'])
  .config(routesConfig)
  .component('home', HomeContainer)
  .component('navBar', NavBarComponent);
