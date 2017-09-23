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
return false;
});
 
$("#menu_update_name").live('change', function(event) {
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

 var menu_id = $("#menu_update_name option:selected").val();
				
		var datString = 'menu_id=' + menu_id;
		
		//return false;
$.ajax({
      type: "POST",
      url: "menu_update_onchange_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();		
		
	var x = eval('(' + data + ')'); ////////////////decode json data		

		$("#menu_type").val(x.MENU_TYPE).attr('selected',true);
		$("#menu_link").val(x.MENU_LINK);
		$("#menu_order").val(x.MENU_ORDER);
		$("#menu_parent").val(x.MENU_PARENT);
		$("#menu_name").val(x.MENU_NAME );
		$("#menu_enable").val(x.MENU_ENABLE );
		if(x.MENU_TYPE==1){
		$('#menu_parent').attr('disabled', false);
		}
		else{
		$('#menu_parent').attr('disabled', true);
		}
 } /////////imp succsess
     });
    //return false;
	});
		
	

$("#savetab").live("click",function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


var datString;
$.ajax({
      type: "GET",
      url: "menu_create_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide	

		
	$("#menu_name").focus();
		 ////////////////////////////////////////////////////send data
		
		

$("#submit_button").click(function() {


/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
 
 var menu_name = $("#menu_name").val();
	if(menu_name=='')
	{
		alert("Please Enter Menu Name !");
		$("#menu_name").focus();
		return false;
	}
	var menu_type = $("#menu_type").val();
	
 var menu_parent = $("#menu_parent").val();
 
 var menu_link = $("#menu_link").val();
	if(menu_link=='')
	{
		alert("Please Enter Menu Link !");
		$("#menu_link").focus();
		return false;
	}	
 var menu_order = $("#menu_order").val();
 if(menu_order=='')
	{
		alert("Please Enter Menu Order !");
		$("#menu_order").focus();
		return false;
	}	
 var menu_enable = $("#menu_enable").val();
 
				
		var datString = 'menu_name=' + menu_name +'&menu_parent='+ menu_parent + '&menu_link=' + menu_link + '&menu_type=' + menu_type + '&menu_order=' + menu_order+'&menu_enable='+menu_enable;
		
$.ajax({
      type: "POST",
      url: "menu_create.php",
      data: datString,
      success: function(data) {
        
		
		$('#load').fadeOut();  $('#load').remove();

	$("#menu_name").val('');	
	$("#menu_parent").val('0').attr('disabled',true); 
  $("#menu_link").val('');		
  $("#menu_type").val('selected');
  $("#menu_order").val('');
  $("#menu_enable").val('selected');
 
alert(data);
		
		
 } /////////imp succsess
     });
    return false;
	});
		
		///////////////////////////////////
		
 } /////////imp succsess
     });
    return false;
	});
	
$("#savetab").click();

$("#resettab").live("click",function(){

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$('#content').empty();

var datString;
$.ajax({
      type: "GET",
      url: "menu_update_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide	
		
	$("#menu_name").focus();		
		////////////////////////////////////////////////////send data
			
 var menu_id = $("#menu_update_name option:selected").val();
			
		var datString = 'menu_id=' + menu_id;
		
$.ajax({
      type: "POST",
      url: "menu_update_onchange_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();		
		
	var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#menu_type").val(x.MENU_TYPE).attr('selected',true);
		$("#menu_link").val(x.MENU_LINK);
		$("#menu_order").val(x.MENU_ORDER);
		$("#menu_parent").val(x.MENU_PARENT);
		$("#menu_name").val(x.MENU_NAME );
		$("#menu_enable").val(x.MENU_ENABLE );
		
 } /////////imp succsess
     });


			///////////////////////////////////
		
		
 } /////////imp succsess
     });
	 
	
	
    return false;
	}); 
 //////////////////////////////////////////////////////////////////////////
});
 $("#saverow").live("click",function(event) {

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
 
 var menu_id = $("#menu_update_name").val();

 var menu_name = $("#menu_name").val();
	if(menu_name=='')
	{
		alert("Please Enter Menu Name !");
		$("#menu_name").focus();
		return false;
	}
	var menu_type = $("#menu_type").val();
	
 var menu_parent = $("#menu_parent").val();
 
 var menu_link = $("#menu_link").val();
	if(menu_link=='')
	{
		alert("Please Enter Menu Link !");
		$("#menu_link").focus();
		return false;
	}	
 var menu_order = $("#menu_order").val();
 if(menu_order=='')
	{
		alert("Please Enter Menu Order !");
		$("#menu_order").focus();
		return false;
	}	
 var menu_enable = $("#menu_enable").val();
 
				
		var datString = 'menu_name=' + menu_name +'&menu_parent='+ menu_parent + '&menu_link=' + menu_link + '&menu_type=' + menu_type + '&menu_order=' + menu_order+'&menu_enable='+menu_enable+'&menu_id='+menu_id;
		//alert (datString);return false;
		
$.ajax({
      type: "POST",
      url: "menu_update.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		//$('#load').fadeOut();  $('#load').remove();
		
		alert(data);	
		
$("#resettab").click();
		
		
 } /////////imp succsess
     });
    return false;
	});	
	

 
///////////////////////////////delete	
	
	
 $("#deltab").live("click",function() {

$('#content').empty();

var datString;
$.ajax({
      type: "GET",
      url: "menu_delete_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		//$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide	

		
		//$("#login_fhide").show("slide", { direction: "up" }, 100);
		
		////////////////////////////////////////////////////send data
		
		///////////////////////////////////
		
 } /////////imp succsess
     });
    return false;
	}); 
	
	
	
	//delete submit
	
$("#delrow").live("click",function(event) {

if(confirm('Are you sure you want to delete ?')){

var menu_id = $("#menu_delete_name").val();

		var datString = 'menu_id=' + menu_id ;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "menu_delete.php",
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
	
	//});
	