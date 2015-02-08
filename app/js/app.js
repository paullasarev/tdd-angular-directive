var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope) {
  // $scope.images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  $scope.products = [
    {id:'car1', name:'car 1', images:['img1.jpg', 'img2.jpg', 'img3.jpg']},
    {id:'car2', name:'car 2', images:['img1.jpg', 'img2.jpg']},
    {id:'car3', name:'car 3', images:['img3.jpg']},
  ];
  // $scope.product = $scope.products[0];

  $scope.setProduct = function(id) {
    $scope.products.forEach(function(prod){
      if (prod.id == id) { 
        $scope.product = prod;
        $scope.images = prod.images;
      }
    });
  };

  $scope.setProduct('car1');
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

