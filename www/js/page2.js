angular.module('starter.UserList',['ionic'])

.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('UserList',{
		url:"/UserList",
		templateUrl:"template/UserList.html",
		controller:"UserListCtrl"
	})
})
.factory('userService', function($http){
	var users=[];
	return{
		getUsers:function(){
			return $http.get('https://randomuser.me/api/?results=10').then(function(response){
				users = response.data.results;
				return users;
				});
		},
		getUsers: function(index){
			return users[index];
		}
	}
})

.controller("UserListCtrl",function($scope, userService){
	userService.getUsers().then(function(users){
				$scope.users = users;
	});
});