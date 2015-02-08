var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope) {
  $scope.images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
}]);


app.directive('ngSlider', function () {

     return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var prop = attrs['ngSlider'];
            var values = scope[prop];

            values.forEach(function(val) {
              elem.append('<img src="images/' + val + '"></img>');
            });
        }
    };

});

