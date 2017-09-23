$(document).ready(function(){

$("#menu_type").live("change",function(event) {
var meny_type = $("#menu_type").val();

if(meny_type==1)
{
$('#menu_parent').attr('disabled', false);

}
if(meny_type==0)
{
$('#menu_parent').attr('disabled', true);
$('#menu_parent').val('0').attr('selected',true);
}
});

$("#menu_update_name").live("change",function(event) {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var menu_id = $("#menu_update_name option:selected").val();
	
 

				
		var datString = 'menu_id=' + menu_id;
		//alert (dataString);return false;
		



$.ajax({
      type: "POST",
      url: "menu_update_onchange_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut(100);


		
		
	var x = eval('(' + data + ')'); ////////////////decode json data
		

		$("#menu_type").val(x.MENU_TYPE).attr('selected',true);
		$("#menu_link").val(x.MENU_LINK);
		$("#menu_order").val(x.MENU_ORDER);
		$("#menu_parent").val(x.MENU_PARENT);
		$("#menu_up_name").val(x.MENU_UP_NAME );
		if(x.MENU_TYPE==1){
		$('#menu_parent').attr('disabled', false);
		}
		else{
		$('#menu_parent').attr('disabled', true);
		}
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
		
 
	 


$("#login_sbutton").live("click",function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "menu_fetch_create.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide	

		
	$("#menu_name").focus();
		 
		
		
		
		$("#login_show").hide("");
		
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
		



$.ajax({
      type: "POST",
      url: "menu_create.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide		


		
		
		alert(data);
		
		
		
		$("#login_sbutton").click();
		
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

 $("#login_ubutton").live("click",function(){


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "menu_update_fetch.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide	

		
	$("#menu_name").focus();
		 
		
		
		
		$("#login_show").hide("");
		
		$("#login_fhide").show("slide", { direction: "up" }, 100);
		
		
		
		
		
		
		
		////////////////////////////////////////////////////send data
		
		
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var menu_id = $("#menu_update_name option:selected").val();
	
 

				
		var datString = 'menu_id=' + menu_id;
		//alert (dataString);return false;
		



$.ajax({
      type: "POST",
      url: "menu_update_onchange_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut(100);


		
		
	var x = eval('(' + data + ')'); ////////////////decode json data
		

		$("#menu_type").val(x.MENU_TYPE ).attr('selected',true);
		$("#menu_link").val(x.MENU_LINK );
		$("#menu_order").val(x.MENU_ORDER );
		$("#menu_parent").val(x.MENU_PARENT );
		$("#menu_up_name").val(x.MENU_UP_NAME );
		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
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


$("#update_button").live("click",function(event) {



/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var menu_id = $("#menu_update_name").val();

 var menu_up_name = $("#menu_up_name").val();

 var menu_parent = $("#menu_parent").val();
 
 var menu_link = $("#menu_link").val();

 var menu_type = $("#menu_type").val();
		
 var menu_order = $("#menu_order").val();

 
				
		var datString = 'menu_id=' + menu_id +'&menu_parent='+ menu_parent +'&menu_up_name='+menu_up_name+ '&menu_link=' + menu_link + '&menu_type=' + menu_type + '&menu_order=' + menu_order;
		//alert (dataString);return false;
		



$.ajax({
      type: "POST",
      url: "menu_update.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut(100);


		
		alert(data);
		
		
		$("#login_ubutton").click();
		
		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});
	
	
///////////////////////////////delete	
	
	
 $("#login_dbutton").live("click",function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "menu_fetch_delete.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut(100);

		/////////create div forajax hide	

		
	$("#menu_name").focus();
		 
		
		
		
		$("#login_show").hide("");
		
		$("#login_fhide").show("slide", { direction: "up" }, 100);
		
		
		

		
		
		
		////////////////////////////////////////////////////send data



		
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
	
	
	
	//delete submit
	
$("#del_button").live("click",function(event) {

if(confirm('Are you sure you want to delete?')){

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


 var menu_id = $("#menu_delete_name").val();

		var datString = 'menu_id=' + menu_id ;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "menu_delete.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut("fast");
		
		alert(data);
		
		$("#login_dbutton").click();
		 		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
	 }
    return false;
	});
	