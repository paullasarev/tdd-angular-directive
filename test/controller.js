describe('controllers', function() {
  var $controller;
  var $rootScope;
  var $scope;
  var controller;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function() {
    $scope = $rootScope.$new();
    controller = $controller('mainController', { $scope: $scope });
  });

  it('should init images in scope', function() {
    expect($scope.images.length).toBe(3);
    expect($scope.images[0]).toBe("img1.jpg");
  });

  it('should init product', function() {
    expect($scope.products.length).toEqual(3);
    expect($scope.product).toEqual($scope.products[0]);
  });

  it('setProduct by id should change product', function() {
    $scope.setProduct('car2');
    expect($scope.product).toEqual($scope.products[1]);
  });

  it('setProduct by id should change images', function() {
    $scope.setProduct('car2');
    expect($scope.images.length).toEqual(2);
  });

  it('should change images when change product', function() {
    $scope.product = $scope.products[2];
    $scope.$apply();

    expect($scope.images.length).toEqual(1);
  });
  
});
