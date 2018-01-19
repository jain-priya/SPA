app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        template: "<h1>Home</h1>"
    }).when("/about", {
        template: "<h1>About Us</h1>"
    }).when("/contact", {
        template: "<h1>Contact Us :</h1>"
    }).when("/shoes", {
        templateUrl: "shoes.html",
        controller: "shoesCtrl"
    }).when("/mobiles", {
        templateUrl: "mobiles.html",
        controller: "mobileCtrl"
    }).when("/clothes", {
        templateUrl: "clothes.html",
        controller: "clothCtrl"
    }).otherwise({
        redirectTo: "/"
    });
});
