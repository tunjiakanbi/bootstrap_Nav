    $(document).ready(function () {
      var $hamburger = $(".hamburger");
      $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
         
        // Do something else, like open/close menu
    
      });

      if($hamburger.hasClass('is-active')) {
        $("body").addClass("no-scroll");
      }
      else{
        $("body").removeClass("no-scroll");
      }


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
      $('.nav-link').on('click', ()=> {
        $('.navbar-toggler').removeClass('is-active');//reversed hamburger js
        $('.navbar-toggler').addClass('collapsed');//reversed bootstrap js
        $('.navbar-collapse').removeClass('show');//reversed bootstrap js
      });

      // let winH = $(window).height();
      // let winW = $(window).width();
      // console.log(winW)
      // let header = $("header.fixed-top.bg-dark");
      // let header_Height = header.height();
      // let showH = winH - header_Height;
      // let showElem = $("#nav-contain-links.show")
      // console.log(showH);
      // if(winW < 992){
      // // console.log(header_Height);
      // $('button.navbar-toggler').on("click", ()=>{
      //     // $("section#nav-contain-links").toggleClass('show');
      //     // $('.show').height(winH - header_Height);
      //     showElem.height(winH - header_Height);
      //     // $("#nav-contain-links.show").height(showH);
      //     // $("#nav-contain-links.show").css('margin-top',header_Height);
      //     // $(showElem).height(showH);
      // })
    //}
  //document.ready ends here  
  });