
function FormController($scope) {


    $scope.saveContact = function () {

        if ($scope.newcontact.id == null) {
            //if this is new contact, add it in contacts array
            $scope.newcontact.id = uid++;
            $scope.contacts.push($scope.newcontact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in $scope.contacts) {
                if ($scope.contacts[i].id == $scope.newcontact.id) {
                    $scope.contacts[i] = $scope.newcontact;
                }
            }
        }

        //clear the add contact form
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        //search contact with given id and delete it
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.contacts.splice(i, 1);
                $scope.newcontact = {};
            }
        }

    }


    $scope.edit = function (id) {
        //search contact with given id and update it
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                //we use angular.copy() method to create 
                //copy of original object
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
    }
}