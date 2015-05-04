/**
 * Created by daniel on 04/05/15.
 */
angular.module('starter')

    .controller('AppCtrl', function($scope, ChatSrv, $ionicScrollDelegate) {
        'use strict';


        $scope.messages = ChatSrv.getMessages();

        $scope.messages.$watch(function() {
            //GO AT THE END OF SCROLL
            $ionicScrollDelegate.scrollBottom("true");
        });

        $scope.sendMessage = function(){
            var message = {
                user: {
                    avatar: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/t31.0-1/p960x960/10981079_10205861576955866_5665945341985129249_o.jpg",
                    name: 'Daniel'
                },
                content: $scope.message
            };
            ChatSrv.sendMessage($scope.messages, message);
            $scope.message = '';
        };

    });