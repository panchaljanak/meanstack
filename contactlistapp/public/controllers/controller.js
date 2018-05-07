var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',['$scope','$http', function($scope,$http){
    
    $scope.refresh1 = function () { 
        $http.get('/contactlist').then(function(response){
            $scope.contactlist = response.data;

            
        });
    };
    $scope.refresh1();
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).then(function(response){
            console.log(response.data);
            $scope.refresh1();
            
        });
    };

    $scope.removeD = function(id){
        $http.delete('/contactlist/'+ id).then(function(response){
            $scope.refresh1();
        });
    };

    $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/'+ id).then(function(response){
            $scope.contact = response.data;
        });
    };

    $scope.update = function(){
        $http.put('/contactlist/'+ $scope.contact._id,$scope.contact).then(function(response){
            $scope.refresh1();
        });
    };

    $scope.deselect = function() {
        $scope.contactlist = [];
    }
}]);