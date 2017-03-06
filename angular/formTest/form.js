app.controller('sign_up', function ($scope, $http) {
/*
* This method will be called on click event of button.
* Here we will read the email and password value and call our PHP file.
*/
$scope.check_credentials = function () {

document.getElementById("message").textContent = "";

var request = $http({
    method: "post",
    url: window.location.href + "login.php",
    data: {
        email: $scope.email,
        pass: $scope.password
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

/* Check whether the HTTP Request is successful or not. */
request.success(function (data) {
    document.getElementById("message").textContent = "You have login successfully with email "+data;
});
}
});