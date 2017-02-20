app = angular.module('myApp', []);


app.controller('costCtrl', [
    '$scope',
    function ($scope) {
        $scope.price = 40;
    }
]);

app.controller('personCtrl', [
    '$scope',
    function ($scope) {
        $scope.firstName = "John";
    }
]);

app.controller('namesCtrl', [
    '$scope',
    function ($scope) {
        $scope.names = [
       'Jani',
       'Carl',
       'Margareth',
       'Hege',
       'Joe',
       'Gustav',
       'Birgit',
       'Mary',
       'Kai'
      ];
    }
]);

app.controller('gradesCtrl', [
    '$scope',
    function ($scope) {
        $scope.results = {
            year: 2013,
            subjects: [
              { title: 'English', grade: 'A' },
              { title: 'Maths', grade: 'A' },
              { title: 'Science', grade: 'B' },
              { title: 'Geography', grade: 'C' }
            ]
        }
    }
]);

