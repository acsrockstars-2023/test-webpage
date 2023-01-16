
        $("#navbar-scroll-acs").on('click', function(event){
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 750, function(){
              window.location.hash = hash;
            });
          }
        });
