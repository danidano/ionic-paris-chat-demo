/**
 * Created by daniel on 04/05/15.
 */
angular.module('starter')

.factory('ChatSrv', function($firebaseArray){
    'use strict';
    var firebaseUrl = 'https://ionicchatdemo.firebaseio.com';
    var firebaseRef = new Firebase(firebaseUrl);
    var service = {
        sendMessage: sendMessage,
        getMessages: getMessages
    };

    function sendMessage(messages, message){
        messages.$add(message);
    }

    function getMessages(){
        return $firebaseArray(firebaseRef);
    }
    return service;
});