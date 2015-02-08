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
    $scope.images = ["img1.png", "img2.png", "img3.png"];

    var element = $compile('<div ng-slider="images"></div>')($scope);
    $scope.$digest();

    expect(element('img').length).toBe(3);
    expect(element('img').first().attr('src')).toBe('img1.png');
    expect(element('img').first().next().attr('src')).toBe('img2.png');
  })
});