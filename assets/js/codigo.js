$("a").click( function() {

    if (this.hash !== "" ){
        event.preventDefault();
        var hash = this.hash;

    $('html,body').animate({
        scrollTop: $(hash).offset().top
    }, 3800, function() {
        windows.location.hash = hash;
    });

        
    }



    });