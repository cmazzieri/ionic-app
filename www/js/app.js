// Ionic Starter App
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function( $stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.resorts', {
      url: '/resorts',
      views: {
        'tab-resorts': {
          templateUrl: 'templates/resorts.html',
          controller: 'ResortsCtrl'
        }
      }
    })
    .state('tab.detalle', {
      url: '/resorts/:id',
      views: {
        'tab-resorts': {
          templateUrl: 'templates/detalle.html',
          controller: 'DetalleCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise('/tab/resorts');

})
