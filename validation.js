$(document).ready(function(){
    $("#claim-trial").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:9
            },
            lname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true
            }
          

        },
        messages:{
            fname:"First Name cannot be empty",
            lname:"Second Name cannot be empty",
            email:{
                required: "Email connot be empty",
                email:"Looks like this is not an email"
            },
            password:"Password connot be empty"

        }
    })
  $(".button").click(function(){
    $("#expand").css({"height":"120%"})
  })
  $(".button").click(function(){
    $("#text").css({"margin-top":".5rem"})
  })
  $(".button").click(function(){
    $(".input").css({"border-color":"hsl(0, 100%, 74%) "})
  })
  $(".button").click(function(){
    $(".input").css({"background": "url(./images/icon-error.svg) no-repeat scroll 22.3rem"})
  })
  $(".button").click(function(){
    $(".input").css({"color":"hsl(0, 100%, 74%)"})
  })
})