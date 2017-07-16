var jsbin = {
  'root': 'http://jsbin.com',
  'shareRoot': 'http://jsbin.com',
  'runner': 'http://null.jsbin.com/runner',
  'static': 'http://static.jsbin.com',
  'version': '4.0.4',
  user: {},
};

(function () {
  if (jsbin.user && jsbin.user.name) {
    if (window.FS) {
      FS.identify(jsbin.user.name, {
        displayName: jsbin.user.name,
        reviewsWritten_int: 14,
      });
    }
    $('.loggedout').hide();
    var menu = $('.loggedin').show();
    var html = $('#profile-template').text();
    var $html = $(html.replace(/({.*?})/g, function (all, match) {
      var key = match.slice(1, -1).trim(); // ditch the wrappers
      return jsbin.user[key] || '';
    }));
    if (jsbin.user.pro) {
      document.documentElement.className += ' pro';
      $html.find('.gopro').remove();
    } else {
      $html.find('.pro').remove();
    }
    $('#control .loggedin').append($html);
  } else {
    $('.loggedin').hide();
    $('.loggedout').show();
  }
})();