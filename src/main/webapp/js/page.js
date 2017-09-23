$(document).ready(function(){

$("#page_update_name").live("change",function(event) {

 var page_id = $("#page_update_name option:selected").val();
				
		var datString = 'page_id=' + page_id;
		//alert (dataString);return false;
		
$.ajax({
      type: "POST",
      url: "page_update_onchange.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$("#page_name").val(data);
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
      url: "page_create_html.php",
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
 
 var page_name = $("#page_name").val();
	if(page_name=='')
	{
		alert("Please Enter Page Name !");
		$("#page_name").focus();
		return false;
	}	
 				
		var datString = 'page_name=' + page_name;
		
$.ajax({
      type: "POST",
      url: "page_create.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide		
		$("#page_name").val('');
		alert(data);
		
		
		
		//$("#login_sbutton").click();
		
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
      url: "page_update_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
		var page_id = $("#page_update_name option:selected").val();
				
		var datString = 'page_id=' + page_id;
		//alert (dataString);return false;
		
$.ajax({
      type: "POST",
      url: "page_update_onchange.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$("#page_name").val(data);
 } /////////imp succsess
     });	
		
 } /////////imp succsess
     });
    return false;
	}); 
 //////////////////////////////////////////////////////////////////////////

 });


$("#saverow").live("click",function(event) {



 
 var page_id = $("#page_update_name").val();

 var page_name = $("#page_name").val();
	if(page_name=='')
	{
		alert("Please Enter Page Name !");
		$("#page_name").focus();
		return false;
	}	
 				
		var datString = 'page_name=' + page_name+'&page_id='+page_id;

 	//alert (dataString);return false;
	$.ajax({
      type: "POST",
      url: "page_update.php",
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
      url: "page_delete_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide	

	
		///////////////////////////////////
		
 } /////////imp succsess
     });
    return false;
	}); 
	
	
	
	//delete submit
	
$("#delrow").live("click",function(event) {

if(confirm('Are you sure you want to delete?')){

/////////create div forajax loading	

/////////create div forajax loading	


 var page_id = $("#page_delete_name").val();

		var datString = 'page_id=' + page_id ;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "page_delete.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

				
		alert(data);
		
		$("#deltab").click();
		 		
 } /////////imp succsess
     });
	 }
    return false;
	});
	