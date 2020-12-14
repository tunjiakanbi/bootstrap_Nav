    $(document).ready(function () {
      var $hamburger = $(".hamburger");
      let $contaiN = $('#nav-contain-links');
      let circShow = $('#nav-contain-links.show');
      let circnav = new gsap.timeline();
      // let animAnchor =  $('navbar-nav a');
      // let growCirc = new gsap.timeline();
      $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        circShow.onload = circNav();
        // Do something else, like open/close menu
        // if($contaiN.hasClass('show')){
        //   console.log("yes");
        //   circnav.fromTo(circShow, 2,{clipPath: "circle(50vh at 110% 50%)"},{clipPath: "circle(120vh at 120% 50%)"});
        // }
       
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
    // let circShow = $('#nav-contain-links.show');
    function circNav(){
      let circnav = gsap.timeline({
        id: "circnav"});
      circnav.fromTo(circShow, 2,{clipPath: "circle(50vh at 110% 50%)"},{clipPath: "circle(120vh at 120% 50%)"});
      console.log("yes");
      // circnav.fromTo('#nav-contain-links.show', 2,{clipPath: "circle(50vh at 110% 50%)"},{clipPath: "circle(120vh at 120% 50%)"});
    }

    //   let master = gsap.timeline();
    //   master.add(circNav());
       // GSDevTools.create();


  //document.ready ends here  
  });