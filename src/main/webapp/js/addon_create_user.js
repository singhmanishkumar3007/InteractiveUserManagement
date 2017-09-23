$(document).ready(function(){

$("#login_sbutton").click(function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "fetch_create_user.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide	
		
		
	$("#user_first").focus();
		 
		
		
		
		$("#login_show").hide("");
		
		$("#login_fhide").show("slide", { direction: "up" }, 100);
		
		
		
		
		
		
		
		////////////////////////////////////////////////////send data
		
		

$("#submit_button").click(function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var user_first = $("#user_first").val();
	
 var user_last = $("#user_last").val();
 
 var login_pass = $("#login_pass").val();
		
 var email = $("#email").val();		
				
		var datString = 'user_first='+ user_first + '&user_last=' + user_last + '&login_pass=' + login_pass + '&email=' + email;
		//alert (dataString);return false;
		
var datString;


$.ajax({
      type: "POST",
      url: "create_user.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide		

				///////reset inputs except button reset submit etc

$(':input','#form1')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
///////reset inputs		
		
		
		document.getElementById("return_msg").innerHTML = data;
		
		
		
		
		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});
		
		///////////////////////////////////
		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});

  
 //////////////////////////////////////////////////////////////////////////

 });


