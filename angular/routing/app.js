var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "main.htm"
    })
    .when("/about", {
        templateUrl: "about.htm"
    })
    .when("/contact", {
        templateUrl: "contact.htm"
    })
    .when("/terms", {
        templateUrl: "terms.htm"
    });
});