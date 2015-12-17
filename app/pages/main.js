/**
 * Created by dascruel on 12/14/2015.
 */
(function() {
        angular.module('app')
            .controller('mainController', ['$http', mainController])
            .config(config);

        function config($routeProvider) {
            $routeProvider.when('/main',
                {
                    templateUrl: 'pages/main.html',
                    controller: 'mainController',
                    controllerAs: 'vm'
                });
        }

        function mainController($http) {
            var vm = this;

           function getAccounts() {
                var url = "http://localhost:3000/getMintInfo?";
                $http.get(url).then(function(response){
                    vm.accountInfo = response;
                });
            };

            getAccounts();
        }


    }
)();