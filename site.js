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
});
