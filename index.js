// outTheList

    $(".open-list").click(function () {
        $(".menu").addClass("list-menu-show");
        $(".bg").addClass("bg-show");
        $(".menu").removeClass("list-menu-hide");
         $(".bg").removeClass("bg-hide");
     
     });
     
     $(".close-list").click(function () {
         $(".menu").addClass("list-menu-hide");
         $(".bg").addClass("bg-hide");
         $(".menu").removeClass("list-menu-show");
         $(".bg").removeClass("bg-show");
         $(".company").removeClass("list-clicked");
         $(".features").removeClass("list-clicked");
         $(".mini-list-2").addClass("mini-list-hide");
         $(".mini-list-1").addClass("mini-list-hide");
         $(".arrow-2").removeClass("arrow-clicked");
         $(".arrow-1").removeClass("arrow-clicked");
         
      });
     
     // insideTheList
     
     $(".features").click(function() {   
         $(this).toggleClass("list-clicked");
         $(".company").removeClass("list-clicked");
         $(".carees").removeClass("list-clicked");
         $(".about").removeClass("list-clicked");
         $(".arrow-1").toggleClass("arrow-clicked");
         $(".arrow-2").removeClass("arrow-clicked");
         $(".mini-list-1").toggleClass("mini-list-hide");
         $(".mini-list-2").addClass("mini-list-hide");
     });
     
     $(".company").click(function() {   
         $(this).toggleClass("list-clicked");
         $(".features").removeClass("list-clicked");
         $(".carees").removeClass("list-clicked");
         $(".about").removeClass("list-clicked");
         $(".arrow-2").toggleClass("arrow-clicked");
         $(".arrow-1").removeClass("arrow-clicked");
         $(".mini-list-2").toggleClass("mini-list-hide");
         $(".mini-list-1").addClass("mini-list-hide");
     });

    //  $(".middel-section").click(function()) {
    //     $(".mini-list-2").addClass("mini-list-hide");
    //     $(".mini-list-1").addClass("mini-list-hide");
    //  }
