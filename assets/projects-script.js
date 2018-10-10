$(document).ready(function(){
  console.log('Proj ready! Hey There!');

  var projectName = $('.work-name');
  projectName.on('click', function(e){
    e.preventDefault();
    var opened = $(this).siblings('.work-description').hasClass('expanded');
    var description = $(this).siblings('.work-description');

    var $container = $("html,body");


      if (!opened) {
          closeOthers(this);
          $(this).siblings('.work-description').toggleClass('expanded').slideToggle(300, function () {
              $(this).find('.project-links').toggleClass('showLinks');
          });
          $(this).get(0).scrollIntoView(true);
          var name = $(this).find('h3').html();
          gtag('event', 'click', {'event_category': 'project Name', 'event_label': name});
      } else {
          description.removeClass('expanded').slideToggle(300, function () {
              $(this).find('.project-links').toggleClass('showLinks');
          });
      }

  })

  var link = $('.project-links a');
  link.on('click', function(e){
    e.preventDefault();
    var href = this.href;
    gtag('event', 'click', { 'event_category': 'project href', 'event_label': href });
  })

  closeOthers = function(link){
      var arg = link;
    $('.work-description.expanded').each(function(){
        $(this).removeClass('expanded').slideToggle(300, function(){
          $(this).find('.project-links').toggleClass('showLinks');
      })
    });
  }


})