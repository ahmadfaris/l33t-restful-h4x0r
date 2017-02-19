  $(document).ready(function(){
    // Hide default ID section
    $("#menu-toggle-collapse").hide();
    $("#resume").hide();
    $("#pixl8").hide();
    $("#contact").hide();

    // Toggle menu
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle-collapse").show();
    });
    $("#menu-toggle-collapse").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle-collapse").hide();
    });

    // About
    $("#about-tab").click(function() {
      $("#about").show();
      $("#resume").hide();
      $("#pixl8").hide();
      $("#contact").hide();
    })

    // Resume
    $("#resume-tab").click(function() {
      $("#resume").show();
      $("#about").hide();
      $("#pixl8").hide();
      $("#contact").hide();
    })

    // Pixl8 Form
    $("#pixl8-tab").click(function() {
      $("#pixl8").show();
      $("#about").hide();
      $("#resume").hide();
      $("#contact").hide();
    })

    // Contact
    $("#contact-tab").click(function() {
      $("#contact").show();
      $("#about").hide();
      $("#resume").hide();
      $("#pixl8").hide();
    })
  })