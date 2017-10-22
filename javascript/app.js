(function(){
    angular.module('CFMApp', ['UsersModule', 'ui.router']);
    angular.module('CFMApp').config(config);
    
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state('home', {
            url : '/home',
            templateUrl : 'app/home/home.html',
            controller : 'HomeCtrl as homeCtrl'
        }).state('adduser', {
            url : '/adduser',
            templateUrl : 'app/users/addUsers.html',
            controller : 'AddUsersCtrl'
        }).state('finduser', {
            url : '/finduser',
            templateUrl : 'app/users/findUsers.html',
            controller : 'FindUsersCtrl'
        })
    }
})();