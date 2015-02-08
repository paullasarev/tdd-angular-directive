describe('controllers', function() {
  var $controller;
  var $rootScope;
  var $scope;
  var controller;
  var $q;
  var $provide;

  var products = [
      {id:'car1', name:'car 1', images:['img1.jpg', 'img2.jpg', 'img3.jpg']},
      {id:'car2', name:'car 2', images:['img1.jpg', 'img2.jpg']},
  ];

  var fakeProductService =  {
    getProducts: function() {
      return $q(function(resolve,reject){
        resolve(products);
      });
    }
  };

  beforeEach(angular.mock.module('myApp', function(_$provide_){
    $provide = _$provide_;
  }));

  beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_, _$q_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    $provide.value('ProductService', fakeProductService);
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
