export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('about', {
      url: '/sobre',
      component: 'about'
    })
    .state('operation', {
      url: '/como-funciona',
      component: 'operation'
    })
    .state('contact', {
      url: '/contato',
      component: 'contact'
    })
    .state('notFound', {
      url: '/404',
      component: 'notFound'
    });
}
