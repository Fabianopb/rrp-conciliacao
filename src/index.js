import angular from 'angular';

import {HomeContainer} from './app/containers/Home';
import {AboutContainer} from './app/containers/About';
import {OperationContainer} from './app/containers/Operation';
import {ContactContainer} from './app/containers/Contact';
import {FlexLayoutComponent} from './app/components/FlexLayout';
import {NavBarComponent} from './app/components/NavBar';
import {RrpFooterComponent} from './app/components/RrpFooter';

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
  .component('about', AboutContainer)
  .component('operation', OperationContainer)
  .component('contact', ContactContainer)
  .component('flexLayout', FlexLayoutComponent)
  .component('navBar', NavBarComponent)
  .component('rrpFooter', RrpFooterComponent);
