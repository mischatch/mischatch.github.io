$(document).ready(function(){
    console.log('Doc ready! Hey There!')

    const hello = document.getElementById('hello');
    const img = document.getElementById('photo');

    if (document.location.href === "http://www.mischatch.me/index.html") {
        document.location.href = "http://www.mischatch.me/";
    }

    $(document).resize(function(){
        var width = img.outerHeight();
        img.width(width);
    })

    var link = $('.links span a');
    var worksLink = $('.works-link a');
    link.on('click', function(e){
        var name = $(this).html();
        gtag('event', 'click', { 'event_category': 'link', 'event_label': name });
    });

    worksLink.on('click', function(e){
        gtag('event', 'click', { 'event_category': 'link', 'event_label': 'go to works page' });
    });

    // color selection

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    $('.info-box .info-button').click(function(e){
      $('.info-box .box').toggleClass('open')
    })

    $(document).mouseup(function(e){
          var container = $('.info-box .box');
          if (!container.is(e.target) && container.has(e.target).length === 0){
              container.removeClass('open');
          }
      });

    var bg = getCookie('background');

    if(bg !== ''){
      // $('input#background').val(bg);
      $('body').css("background-color", bg);
    }
    //
    // $('input#background').change(function(e){
    //   $('body').css("background-color", this.value);
    //
    //   console.log('new background', this.value)
    //   setCookie('background', this.value, 30);
    // });

    // var colorPicker = new iro.ColorPicker('#picker');

    var colorPicker = new iro.ColorPicker("#picker", {
      // Set the size of the color picker
      width: 150,
      // Set the initial color to pure red
      color: bg !== '' ? bg : '#55ffbd'
    });

    colorPicker.on(['color:change'], function(color) {
        $('body').css("background-color", color.hexString);

        console.log('new background', color.hexString)
        setCookie('background', color.hexString, 30);
    });


})
