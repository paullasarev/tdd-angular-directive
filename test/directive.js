describe('directives', function() {
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
    $scope.images = ["img1.jpg", "img2.jpg"];

    var element = $compile('<div ng-slider="images"></div>')($scope);

    expect(element.find('img').length).toBe(2);
    expect(element.find('img').first().attr('src')).toBe('images/img1.jpg');
    expect(element.find('img').first().next().attr('src')).toBe('images/img2.jpg');
  })
});