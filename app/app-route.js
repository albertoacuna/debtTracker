/**
 * Created by dascruel on 12/14/2015.
 */
(function(){
    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('#',
            {templateUrl: 'pages/main.html',
                controller: 'mainController'
            })
    }]);
})();