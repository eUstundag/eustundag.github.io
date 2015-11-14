function toggleVisibility(target){
  if ($(target).css('visibility') === 'hidden'){
      $(target).css('visibility', 'visible');
    } else {
      $(target).css('visibility', 'hidden');
    }
}

$(function(){
  $('#blog_header').click(function(){
    toggleVisibility('#blog_links');
  });
  $('#contact_header').click(function(){
    toggleVisibility('#contact_links');
  });
  $('#project_header').click(function(){
    toggleVisibility('#project_links');
  });

  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };
  if(isMobile.any()) {
    } else {
            var sources = document.querySelectorAll('video#vid-div source');
            var video = document.querySelector('video#vid-div');
            for(var i = 0; i<sources.length;i++) { sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
        }
    video.load();
  }
  $('video').click(function(){
    $('video').prop('muted', false); //mute
  });
});
