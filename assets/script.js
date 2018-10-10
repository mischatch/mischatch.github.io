$(document).ready(function(){
    console.log('Doc ready!')

    const hello = document.getElementById('hello');
    const img = document.getElementById('photo');
    // img.style.display = 'none';

    //
    // hello.addEventListener('mouseover', (e) => {
    //   // img.style.removeProperty('display');
    //   e.target.style.color = 'white';
    // });
    //
    // hello.addEventListener('mouseout', (e) => {
    //   // img.style.display = 'none';
    //   e.target.style.color = 'black';
    // });

    if (document.location.href === "http://www.mischatch.me/index.html") {
        document.location.href = "http://www.mischatch.me/";
    }

    // var width = img.outerHeight();
    // img.width(width);
    $(document).resize(function(){
        var width = img.outerHeight();
        img.width(width);
    })

    var link = $('.links span a');
    var worksLink = $('.works-link a');
    link.on('click', function(e){
        var name = $(this).html();
        gtag('event', 'click', { 'event_category': 'link', 'event_label': name });
    })

    worksLink.on('click', function(e){
        gtag('event', 'click', { 'event_category': 'link', 'event_label': 'go to works page' });
    })

})
