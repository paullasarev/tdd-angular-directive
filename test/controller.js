describe('controllers', function() {
  var $controller;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should init images in scope', function() {

    var $scope = {};
    var controller = $controller('mainController', { $scope: $scope });

    expect($scope.images.length).toBe(3);
    expect($scope.images[0]).toBe("img1.jpg");
  });

  it('should init product', function() {

    var $scope = {};
    var controller = $controller('mainController', { $scope: $scope });

    expect($scope.products.length).toEqual(3);
    expect($scope.product).toEqual($scope.products[0]);
  });

  it('setProduct by id should change product', function() {

    var $scope = {};
    var controller = $controller('mainController', { $scope: $scope });

    $scope.setProduct('car2');
    expect($scope.product).toEqual($scope.products[1]);

    // expect($scope.images.length).toEqual(2);
  });

  it('setProduct by id should change images', function() {

    var $scope = {};
    var controller = $controller('mainController', { $scope: $scope });

    $scope.setProduct('car2');
    expect($scope.images.length).toEqual(2);
  });

  // it('should change images when change product', function() {

  //   var $scope = {};
  //   var controller = $controller('mainController', { $scope: $scope });

  //   $scope.product = $scope.products[1];

  //   // $scope.$digest();

  //   expect($scope.images.length).toEqual(2);
  // });


  
});