$(document).ready(function(){

$("#group_update_name").live("change",function(event) {

 var group_id = $("#group_update_name option:selected").val();
				
		var datString = 'group_id=' + group_id;
		//alert (dataString);return false;
		
$.ajax({
      type: "POST",
      url: "group_update_onchange.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#group_name").val(x.GROUP_NAME);
		$("#group_enable").val(x.GROUP_ENABLE);
		 } /////////imp succsess
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
      url: "group_create_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hid	
		////////////////////////////////////////////////////send data
		
		


				
 } /////////imp succsess
     });
    return false;
	});
$("#savetab").click();	

 $("#resettab").live("click",function(){

var datString;
$.ajax({
      type: "GET",
      url: "group_update_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
		var group_id = $("#group_update_name option:selected").val();
				
		var datString = 'group_id=' + group_id;
		//alert (dataString);return false;
		
$.ajax({
      type: "POST",
      url: "group_update_onchange.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#group_name").val(x.GROUP_NAME);
		$("#group_enable").val(x.GROUP_ENABLE);
		 } /////////imp succsess
     });	
		
 } /////////imp succsess
     });
    return false;
	}); 
 //////////////////////////////////////////////////////////////////////////

 });

$("#submit_button").live("click",function(event) {


/////////create div forajax loading	

/////////create div forajax loading	
 
 var group_name = $("#group_name").val();
	if(group_name=='')
	{
		alert("Please Enter Group Name !");
		$("#group_name").focus();
		return false;
	}	
	var group_enable = $("#group_enable").val();
 				
		var datString = 'group_name=' + group_name+'&group_enable='+group_enable;
		
$.ajax({
      type: "POST",
      url: "group_create.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		
		/////////create div forajax hide		
		$("#group_name").val('');
		alert(data);
		$("#savetab").click();
			
		
 } /////////imp succsess
     });
    return false;
	});
	
 
$("#saverow").live("click",function(event) {

 
 var group_id = $("#group_update_name").val();

 var group_name = $("#group_name").val();
	if(group_name=='')
	{
		alert("Please Enter Group Name !");
		$("#group_name").focus();
		return false;
	}	
	var group_enable = $("#group_enable").val();
 				
		var datString = 'group_name=' + group_name+'&group_id='+group_id+'&group_enable='+group_enable;

 	
	$.ajax({
      type: "POST",
      url: "group_update.php",
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
      url: "group_delete_html.php",
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


 var group_id = $("#group_delete_name").val();

		var datString = 'group_id=' + group_id ;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "group_delete.php",
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
	