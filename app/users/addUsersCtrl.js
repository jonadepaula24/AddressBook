angular.module('UsersModule', []);
angular.module('UsersModule').controller('AddUsersCtrl', AddUsersCtrl);

AddUsersCtrl.$inject = ["$http"];

function AddUsersCtrl($http) {
    var vm = this;
    vm.message = "Add a User";
    vm.addUser = addUser;
    vm.success = "User added successfully!";
    vm.error = "Error: The user wasn't added :("

    function addUser() {
        var payload = {
            operation: "addUser",
            FirstName: vm.firstName,
            LastName: vm.lastName,
            Address: vm.address,
            City: vm.city,
            State: vm.state,
            Email: vm.email
        }

        $http.post("https://fxyecjtr43.execute-api.us-east-1.amazonaws.com/dev/adduser", payload).then(function (response) {
            console.log(response)
            alert('User added successfully!')
        }, function (error) {
            console.log(error)
            alert('Error: The user was not added :(')
        })
    }
}
