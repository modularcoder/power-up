/* global TrelloPowerUp */

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var boardButtonCallback = function(t) {
  isAuthenticated = true;

  if (isAuthenticated) {
    return boardButtonCallbackAuthenticated();
  }
  else {
    return boardButtonCallbackUnauthenticated();
  }
};

var boardButtonCallbackAuthenticated = function() {

  // @ToDo
  // Even if user is authenticated, we should know if he has created
  // a slideshow for current viewed trello board.
  // If there is no slideshow for this board, 
  // we should show suggestion to create a slideshow

  return t.popup({
    title: 'Screenful',
    items: [
      {
        text: 'Lead Time',
        callback: function(t){
          return t.overlay({
            url: 'https://app.screenful.me/slideshow/demo?screens=lead-time',
            width: 960,
            height: 540
          })
          .then(function(){
            return t.closePopup();
          });
        }
      },
      {
        text: 'Sprint Burndown',
        callback: function(t){
          return t.overlay({
            url: 'https://app.screenful.me/slideshow/demo?screens=current-sprint',
            width: 960,
            height: 540
          })
          .then(function(){
            return t.closePopup();
          });
        }
      },
      {
        text: 'Release Forecast',
        callback: function(t){
          return t.overlay({
            url: 'https://app.screenful.me/slideshow/demo?screens=release-forecast',
            width: 960,
            height: 540
          })
          .then(function(){
            return t.closePopup();
          });
        }
      },
      {
        text: 'Cumulative Flow',
        callback: function(t){
          return t.overlay({
            url: 'https://app.screenful.me/slideshow/demo?screens=cumulative-flow',
            width: 960,
            height: 540
          })
          .then(function(){
            return t.closePopup();
          });
        }
      },
      {
        text: 'Completed Tasks',
        callback: function(t){
          return t.overlay({
            url: 'https://app.screenful.me/slideshow/demo?screens=task-breakdown',
            width: 960,
            height: 540
          })
          .then(function(){
            return t.closePopup();
          });
        }
      },
      {
        text: 'Go to Screenful.me',
        callback: function(t) {
          window.open("http://screenful.me", "_blank");
          return t.closePopup();
        }
      },
    ]
  });
};


var boardButtonCallbackUnauthenticated = function() {
  return t.popup({
    title: "Screenful Authorize",
    url: './card-button-popup.html'
  });
};


TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: WHITE_ICON,
      text: 'Screenful',
      callback: boardButtonCallback
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
