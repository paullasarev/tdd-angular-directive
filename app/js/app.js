console.log('init');
var app = angular.module('myApp', []);


app.controller('mainController', ['$scope', function($scope) {
  $scope.images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
}]);

