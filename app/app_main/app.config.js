infoGies.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl : "app/views/home.html",
    })
    .otherwise({
        templateUrl : "app/views/home.html",
    })
}])