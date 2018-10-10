$(document).ready(function(){
  console.log('pros ready');

  var projectName = $('.work-name');
  projectName.on('click', function(e){
    e.preventDefault();
    var opened = $(this).siblings('.work-description').hasClass('expanded');
    var description = $(this).siblings('.work-description');

    var $container = $("html,body");


    if(opened){
      description.removeClass('expanded').slideToggle(300, function(){
          $(this).find('.project-links').toggleClass('showLinks');
      });
    } else {
      closeOthers(this);
      $(this).siblings('.work-description').toggleClass('expanded').slideToggle(300, function(){
          $(this).find('.project-links').toggleClass('showLinks');
      });
      // $container.animate({scrollTop: $(this).offset().top  - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300);
      $(this).get(0).scrollIntoView(true);
      var name = $(this).find('h1').html();
      gtag('event', 'click', { 'event_category': 'project Name', 'event_label': name });
    }

  })

  var link = $('.project-links a');
  link.on('click', function(e){
    e.preventDefault();
    var href = this.href;
    gtag('event', 'click', { 'event_category': 'project дштл', 'event_label': href });
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