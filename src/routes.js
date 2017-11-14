export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('building', {
      url: '/',
      component: 'building'
    });
    // .state('home', {
    //   url: '/',
    //   component: 'home'
    // })
    // .state('about', {
    //   url: '/sobre',
    //   component: 'about'
    // })
    // .state('operation', {
    //   url: '/como-funciona',
    //   component: 'operation'
    // })
    // .state('contact', {
    //   url: '/contato',
    //   component: 'contact'
    // });
}
