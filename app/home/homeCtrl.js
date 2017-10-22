angular.module('CFMApp').controller('HomeCtrl', HomeCtrl);

function HomeCtrl(){
    var vm = this;
    vm.message = "What would you like to do today?";
}