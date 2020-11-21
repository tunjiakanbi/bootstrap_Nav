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


        let winH = $(window).height();
        console.log(winH)
        let header = $("header.fixed-top.bg-dark");
        let header_Height = header.height();
        let showH = winH - header_Height;
        let showElem = $("#nav-contain-links.show")
        console.log(showH);
        // console.log(header_Height);
        $('button.navbar-toggler').on("click", ()=>{
            $("section#nav-contain-links").toggleClass('show');
            // $('.show').height(winH - header_Height);
            // show.height(winH - header_Height);
            $("#nav-contain-links.show").height(showH);
            $("#nav-contain-links.show").css('margin-top',header_Height);
            // $(showElem).height(showH);
        })
    });

