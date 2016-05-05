angular.module('starter.Main',['ionic'])
.config(function($stateProvider,$urlRouterProvide){
$stateProvider
.state('main',{
	url:"/main",
	templateUrl:"template/main.html",
	controller:"MainCtrl"
});
	})

.controller('MainCtrl',function(){
	console.log("Main controller says: Hello Team");
});