/**
 * Created by daniel on 04/05/15.
 */
angular.module('starter')

.factory('ChatSrv', function($firebaseArray, $rootScope, $ionicPopup, $q, $ionicActionSheet){
    'use strict';
    var firebaseUrl = 'https://ionicchatdemo.firebaseio.com';
    var firebaseRef = new Firebase(firebaseUrl);
    var service = {
        sendMessage: sendMessage,
        getMessages: getMessages,
        deleteMessage: deleteMessage,
        changeName: changeName,
        messageActions: messageActions
    };

    function sendMessage(messages, message){
        messages.$add(message);
    }

    function getMessages(){
        return $firebaseArray(firebaseRef);
    }

    function deleteMessage(messages, message){
        messages.$remove(message);
    }

    function messageActions(message){
        var defer = $q.defer();
        var hideSheet = $ionicActionSheet.show({
            titleText: 'Message de '+message.user.name+' :',
            destructiveText: 'Supprimer',
            destructiveButtonClicked: function(){
                defer.resolve('delete');
                hideSheet();
            },
            cancelText: 'Annuler',
            cancel: function(){
                defer.resolve('cancel');
                hideSheet();
            }
        });
        return defer.promise;
    }


    function changeName(currentName){
        var popupScope = $rootScope.$new(true);
        popupScope.data = {
            userName: currentName
        };
        return $ionicPopup.show({
            template: '<input type="text" ng-model="data.userName" autofocus>',
            title: 'Votre nom :',
            scope: popupScope,
            buttons: [
                { text: 'Annuler' },
                {
                    text: '<b>Modifier</b>',
                    type: 'button-positive',
                    onTap: function(e){
                        return popupScope.data.userName;
                    }
                }
            ]
        });
    }
    return service;
});