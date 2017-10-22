angular.module('UsersModule', []);
angular.module('UsersModule').controller('FindUsersCtrl', FindUsersCtrl);

FindUsersCtrl.$inject = ["$http"];

function FindUsersCtrl($http) {
    var vm = this;
    vm.message = "Find a User";
    vm.findUser = findUser;

    function findUser() {
        var payload = {
            operation: "findUser",
            Email: vm.email
        }

        $http.get("https://fxyecjtr43.execute-api.us-east-1.amazonaws.com/dev/getuser", payload).then(function (response) {
            console.log(response.data)
        }, function (error) {
            console.log(error)
        })
    }
}
