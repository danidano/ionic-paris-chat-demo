/**
 * Created by daniel on 04/05/15.
 */
angular.module('starter')

    .controller('AppCtrl', function($scope) {
        'use strict';

        $scope.messages = [
            {user: {avatar: 'http://ionicframework.com/img/docs/venkman.jpg', name: 'Venkman'}, content: 'Back off, man. I\'m a scientist.'},
            {user: {avatar: 'http://ionicframework.com/img/docs/spengler.jpg', name: 'Egon'}, content: 'We\'re gonna go full stream.'},
            {user: {avatar: 'http://ionicframework.com/img/docs/stantz.jpg', name: 'Ray'}, content: 'Ugly little spud, isn\'t he?'},
            {user: {avatar: 'http://ionicframework.com/img/docs/winston.jpg', name: 'Winston'}, content: 'That\'s a big Twinkie.'},
            {user: {avatar: 'http://ionicframework.com/img/docs/tully.jpg', name: 'Tully'}, content: 'Okay, who brought the dog?'},
            {user: {avatar: 'http://ionicframework.com/img/docs/barrett.jpg', name: 'Dana'}, content: 'I am The Gatekeeper!'},
            {user: {avatar: 'http://ionicframework.com/img/docs/slimer.jpg', name: 'Slimer'}, content: 'Boo!'}
        ];

        $scope.sendMessage = function(){
            $scope.messages.push({
                user: {
                    avatar: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/t31.0-1/p960x960/10981079_10205861576955866_5665945341985129249_o.jpg",
                    name: 'Daniel'
                },
                content: $scope.message
            });
            $scope.message = '';
        };

    });