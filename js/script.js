    $(document).ready(function () {
        var $hamburger = $(".hamburger");
        $hamburger.on("click", function(e) {
          $hamburger.toggleClass("is-active");
          // Do something else, like open/close menu
        });
        //Init scrollspy
        $("body").scrollspy({
          target: "#navigation",
        });

        $("#navigation a").on("click", function (e) {
          if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
              },
              800,
              function () {
                window.location.hash = hash;
              });
          }
        });
        $('button.navbar-toggler').on("click", ()=>{
            $("section#nav-contain-links").toggleClass('show');
        })
    });