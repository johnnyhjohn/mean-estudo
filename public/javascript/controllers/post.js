var mainapp = angular.module("mainapp", []);

mainapp.controller("PostCtrl", function($scope, $http){
  var posts = [];

  var carregarPosts = function(){
    $http.get("http://localhost:8080/posts-data").success(function(data,status){
        $scope.posts = data;
    });
  };
  carregarPosts();
  //$scope.posts = posts;

  $scope.addLike = function(post){
    post.likes += 1;
  };

  $scope.removeLike = function(post){
    post.likes -= 1;
  };

  $scope.ordernar = function(campo){
    $scope.criterioDeOrdem = campo;
    $scope.reverterOrdem = !$scope.reverterOrdem;
  }


});
//
// var str = function (s){
//   if( typeof s !== 'string'){
//     throw new TypeError('Expected a String');
//   }
//   else{
//     return s;
//   }
// }
//
// console.log(str(2));
