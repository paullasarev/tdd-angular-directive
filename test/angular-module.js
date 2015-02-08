describe('angular module', function() {
  var $compile, $rootScope, $scope;

  beforeEach(function() {
    angular.mock.module('myApp');
  });

  beforeEach(function() {
    angular.mock.inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
    });
  });

  it('should compile directive', function() {
    $scope.images = ["img1.jpg", "img2.jpg", "img3.jpg"];

    var element = $compile('<div ng-slider="images"></div>')($scope);
    $scope.$digest();

    expect(element('img').length).toBe(3);
  })
});