/**
 * Created by dascruel on 12/14/2015.
 */
(function(){
    angular.module('app')
        .controller('mainController', [mainController])
        .config(config);

    function config($routeProvider){
      $routeProvider.when('/main',
          {
             templateUrl: 'pages/main.html',
              controller: 'mainController',
              controllerAs: 'vm'
          });
    }

    function mainController(){
        var vm = this;

        vm.test = 'Test';
    }
})();