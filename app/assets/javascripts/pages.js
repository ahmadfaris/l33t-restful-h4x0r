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

    // Pixl8 Ajax Submit
    //Enable Disable Submit Button
    $("#ajax-form button").prop('disabled', true);

    $("#ajax-form input[name=fullName]").keyup(function() {
      if( !!$.trim($("#ajax-form input[name=fullName]").val()) && 
          !!$.trim($("#ajax-form input[name=email]").val()) && 
          !!$.trim($("#ajax-form input[name=message]").val())) {
            $("#ajax-form button").prop('disabled', false);
      } else {
        $("#ajax-form button").prop('disabled', true);
      }
    });
    $("#ajax-form input[name=email]").keyup(function() {
      if( !!$.trim($("#ajax-form input[name=fullName]").val()) && 
          !!$.trim($("#ajax-form input[name=email]").val()) && 
          !!$.trim($("#ajax-form input[name=message]").val())) {
            $("#ajax-form button").prop('disabled', false);
      } else {
        $("#ajax-form button").prop('disabled', true);
      }
    });
    $("#ajax-form input[name=message]").keyup(function() {
      if( !!$.trim($("#ajax-form input[name=fullName]").val()) && 
          !!$.trim($("#ajax-form input[name=email]").val()) && 
          !!$.trim($("#ajax-form input[name=message]").val())) {
            $("#ajax-form button").prop('disabled', false);
      } else {
        $("#ajax-form button").prop('disabled', true);
      }
    });

    // Submit Form
    $("#ajax-form button").click(function(){
      var fullName = $("#ajax-form input[name=fullName]").val();
      var email = $("#ajax-form input[name=email]").val();
      var message = $("#ajax-form input[name=message]").val();
      var website = $("#ajax-form input[name=website]").val();
      var github = $("#ajax-form input[name=github]").val();
      var linkedin = $("#ajax-form input[name=linkedin]").val();
      var testmode = $("#ajax-form input[type=checkbox]").is(":checked");
      var data = {fullName: fullName, email: email, message: message, website: website, github: github, linkedin: linkedin, testmode: testmode};
      console.log(data);

      $.post('/', data)
        .success(function(data, status) {
          console.log("Data");
          console.log(data);
          console.log("Status");
          console.log(status);
         $("#application-form").hide();
          $( "#display-message" ).append( "<p>Response Code : " + data.status + "</p>" );
          $( "#display-message" ).append( "<p>Response Message : " + data.message + "</p>" );
        })
        .fail(function(data, status){
          console.log("Data");
          console.log(data);
          console.log("Status");
          console.log(status);
          $( "#display-message" ).append( "<p>Response Code : " + data.status + "</p>" );
          $( "#display-message" ).append( "<p>Response Message : " + data.responseText + "</p>" );
        });
    })
  })