infoGies.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl : "app/views/home.html",
    })
    .when("/aboutUs",{
        templateUrl : "app/views/aboutUs.html",
    })
    .when("/contactUs",{
        templateUrl : "app/views/contactUs.html",
    })
    .otherwise({
        templateUrl : "app/views/home.html",
    })
}])