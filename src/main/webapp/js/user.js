$(document).ready(function(){


 
$("#user_update_name").live('change', function(event) {
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

 var user_id = $("#user_update_name option:selected").val();
			
		var datString = 'user_id=' + user_id;
		
$.ajax({
      type: "POST",
      url: "user_update_onchange_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();		
		
	var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#user_fst_name").val(x.USER_FIRST_NAME);
		$("#user_snd_name").val(x.USER_SECOND_NAME);
		$("#username").val(x.USER_LOGIN_NAME).attr('disabled',true);
		$("#email").val(x.USER_EMAIL);
		$("#user_enable").val(x.USER_ENABLE );
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
      url: "user_create_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide	

		
	$("#user_fst_name").focus();
		 ////////////////////////////////////////////////////send data
		
		

	
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
      url: "user_update_html.php",
      data: datString,
      success: function(data) {
        
		document.getElementById("content").innerHTML = data;
		
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();

		/////////create div forajax hide	
		
	$("#menu_name").focus();		
		////////////////////////////////////////////////////send data
			
 var user_id = $("#user_update_name option:selected").val();
			
		var datString = 'user_id=' + user_id;
		
$.ajax({
      type: "POST",
      url: "user_update_onchange_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();		
		
	var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#user_fst_name").val(x.USER_FIRST_NAME);
		$("#user_snd_name").val(x.USER_SECOND_NAME);
		$("#username").val(x.USER_LOGIN_NAME).attr('disabled',true);
		$("#email").val(x.USER_EMAIL);
		$("#user_enable").val(x.USER_ENABLE );
		
		
 } /////////imp succsess
     });


			///////////////////////////////////
		
		
 } /////////imp succsess
     });
	 
	
	
    return false;
	}); 
 //////////////////////////////////////////////////////////////////////////
});
$("#submit_button").live("click",function(event) {


/////////create div forajax loading	
/////////create div forajax loading	
 
 var user_fst_name = $("#user_fst_name").val();
	if(user_fst_name=='')
	{
		alert("Please Enter User First Name !");
		$("#user_fst_name").focus();
		return false;
	}
	var user_snd_name = $("#user_snd_name").val();
	if(user_snd_name=='')
	{
		alert("Please Enter User Second Name !");
		$("#user_snd_name").focus();
		return false;
	}
	
 var username = $("#username").val();
 if(username=='')
	{
		alert("Please Enter Username !");
		$("#username").focus();
		return false;
	}
 
 var password = $("#password").val();
	if(password=='')
	{
		alert("Please Enter Password !");
		$("#password").focus();
		return false;
	}	
 var cnf_password = $("#cnf_password").val();
 if(cnf_password=='')
	{
		alert("Please Enter Confirm Password !");
		$("#cnf_password").focus();
		return false;
	}
if(password!=cnf_password)
			{
			alert("Two Password Must be Same !");
			$('#password').val('');
			$('#cnf_password').val('');
			$("#password").focus();
			return false;
			}	
 var email = $("#email").val();
 var user_enable = $("#user_enable").val();
 
				
		var datString = 'user_fst_name=' + user_fst_name +'&user_snd_name='+ user_snd_name + '&username=' + username + '&password=' + password + '&cnf_password=' + cnf_password+'&email='+email+'&user_enable='+user_enable;
		
		
$.ajax({
      type: "POST",
      url: "user_create.php",
      data: datString,
      success: function(data) {
        	
 
	alert(data);
	
	$("#savetab").click();	
		
 } /////////imp succsess
     });
    return false;
	});
	
 $("#saverow").live("click",function(event) {

/////////create div forajax loading	

/////////create div forajax loading	
 
 var user_id = $("#user_update_name").val();

var user_fst_name = $("#user_fst_name").val();
	if(user_fst_name=='')
	{
		alert("Please Enter User First Name !");
		$("#user_fst_name").focus();
		return false;
	}
	var user_snd_name = $("#user_snd_name").val();
	if(user_snd_name=='')
	{
		alert("Please Enter User Second Name !");
		$("#user_snd_name").focus();
		return false;
	}
	 
 var password = $("#password").val();
	if(password=='')
	{
		alert("Please Enter Password !");
		$("#password").focus();
		return false;
	}	
 var cnf_password = $("#cnf_password").val();
 if(cnf_password=='')
	{
		alert("Please Enter Confirm Password !");
		$("#cnf_password").focus();
		return false;
	}
if(password!=cnf_password)
			{
			alert("Two Password Must be Same !");
			$('#password').val('');
			$('#cnf_password').val('');
			$("#password").focus();
			return false;
			}	
 var email = $("#email").val();
 var user_enable = $("#user_enable").val();
 var username = $("#username").val();
				
		var datString = 'user_fst_name=' + user_fst_name +'&user_snd_name='+ user_snd_name + '&user_id=' + user_id + '&password=' + password + '&cnf_password=' + cnf_password+'&email='+email+'&user_enable='+user_enable+'&username='+username;
		
		
$.ajax({
      type: "POST",
      url: "user_update.php",
      data: datString,
      success: function(data) {
        
			
		
		alert(data);	
		
$("#resettab").click();
		
		
 } /////////imp succsess
     });
    return false;
	});	
	

 

	
	
 