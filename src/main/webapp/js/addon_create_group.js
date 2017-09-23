$(document).ready(function(){

$("#group_sbutton").click(function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "fetch_create_group.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide	

		
	$("#group_name").focus();
		 
		
		
		
		$("#group_show").hide("");
		
		$("#login_fhide").show("slide", { direction: "up" }, 100);
		
		
		
		
		
		
		
		////////////////////////////////////////////////////send data
		
		

$("#submit_button").click(function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var menu_name = $("#menu_name").val();
	
 var menu_parent = $("#menu_parent").val();
 
 var menu_link = $("#menu_link").val();
		
 var menu_type = $("#menu_type").val();

 var menu_order = $("#menu_order").val();
 
 
				
		var datString = 'menu_name=' + menu_name +'&menu_parent='+ menu_parent + '&menu_link=' + menu_link + '&menu_type=' + menu_type + '&menu_order=' + menu_order;
		//alert (dataString);return false;
		
var datString;


$.ajax({
      type: "POST",
      url: "create_menu.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide		

				/*//////reset inputs except button reset submit etc

$(':input','#form1')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
///////reset inputs		*/
		
		
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


