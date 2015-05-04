/**
 * Created by daniel on 04/05/15.
 */
angular.module('starter')

    .controller('AppCtrl', function($scope, ChatSrv, $ionicScrollDelegate) {
        'use strict';
        $scope.userName = "Anonymous";

        $scope.messages = ChatSrv.getMessages();

        $scope.messages.$watch(function() {
            //GO AT THE END OF SCROLL
            $ionicScrollDelegate.scrollBottom("true");
        });

        $scope.sendMessage = function(){
            var message = {
                user: {
                    name: $scope.userName
                },
                content: $scope.message
            };
            ChatSrv.sendMessage($scope.messages, message);
            $scope.message = '';
        };

        $scope.changeUserName = function(){
            ChatSrv.changeName($scope.userName).then(function(newName){
                if(newName){
                    $scope.userName = newName;
                }
            });
        };

        $scope.messageActions = function(message){
            ChatSrv.messageActions(message).then(function(action){
                if(action === 'delete'){
                    ChatSrv.deleteMessage($scope.messages, message);
                }
            });
        };

    });