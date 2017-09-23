$(document).ready(function(){

$("#button_update_name").live("change",function(event) {

 var butt_id = $("#button_update_name option:selected").val();
				
		var datString = 'butt_id=' + butt_id;
				
$.ajax({
      type: "POST",
      url: "button_update_onchange.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$("#button_name").val(data);
 } 
     });
    return false;
	});
		

$("#savetab").live("click",function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "button_create_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hid	
		////////////////////////////////////////////////////send data
		
		

$("#submit_button").click(function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
 
 var button_name = $("#button_name").val();
	if(button_name=='')
	{
		alert("Please Enter Button Name !");
		$("#button_name").focus();
		return false;
	}	
 				
		var datString = 'button_name=' + button_name;
		
$.ajax({
      type: "POST",
      url: "button_create.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide		
		$("#button_name").val('');
		alert(data);
		
		
		
		$("#login_sbutton").click();
		
 } /////////imp succsess
     });
    return false;
	});
	
				
 } /////////imp succsess
     });
    return false;
	});
$("#savetab").click();	
 $("#resettab").live("click",function(){



var datString;
$.ajax({
      type: "GET",
      url: "button_update_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
		var butt_id = $("#button_update_name option:selected").val();
				
		var datString = 'butt_id=' + butt_id;
		//alert (dataString);return false;
		
$.ajax({
      type: "POST",
      url: "button_update_onchange.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$("#button_name").val(data);
 } /////////imp succsess
     });	
		
 } /////////imp succsess
     });
    return false;
	}); 
 //////////////////////////////////////////////////////////////////////////

 });


$("#saverow").live("click",function(event) {

 
 var butt_id = $("#button_update_name").val();

 var button_name = $("#button_name").val();
	if(button_name=='')
	{
		alert("Please Enter Button Name !");
		$("#button_name").focus();
		return false;
	}	
 				
		var datString = 'button_name=' + button_name+'&butt_id='+butt_id;

 	//alert (dataString);return false;
	$.ajax({
      type: "POST",
      url: "button_update.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

	
		
		alert(data);
		
		
		$("#resettab").click();
		
		
 } /////////imp succsess
     });
    return false;
	});
	
	
///////////////////////////////delete	
	
	
 $("#deltab").live("click",function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "button_delete_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		
		
 } /////////imp succsess
     });
    return false;
	}); 
	
	
	
	//delete submit
	
$("#delrow").live("click",function(event) {

if(confirm('Are you sure you want to delete?')){

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


 var butt_id = $("#button_delete_name").val();

		var datString = 'butt_id=' + butt_id ;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "button_delete.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();
		
		alert(data);
		
		$("#deltab").click();
		 		
 } /////////imp succsess
     });
	 }
    return false;
	});
	