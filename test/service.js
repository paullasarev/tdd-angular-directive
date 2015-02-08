describe('services', function() {
  var $httpBackend;
  var ProductService;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function(_$http_, _$httpBackend_, _ProductService_){
    $httpBackend = _$httpBackend_;
    ProductService = _ProductService_;
  }));

  it('should use get to retrieve products', function(done) {
    var products = [
        {id:'car1', name:'car 1', images:['img1.jpg', 'img2.jpg', 'img3.jpg']},
        {id:'car2', name:'car 2', images:['img1.jpg', 'img2.jpg']},
    ]

    $httpBackend.whenGET('/api/products').respond(products);

    var promise = ProductService.getProducts();

    promise.then(function(request) {
      expect(request.data).toEqual(products);
      done();
    });

    $httpBackend.flush();

  });

});
