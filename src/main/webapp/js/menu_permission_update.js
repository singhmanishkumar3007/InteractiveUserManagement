$(document).ready(function(){

 
 var group_id = $("#group_update_name option:selected").val();
	
 

				
		var datString = 'group_id=' + group_id;
		//alert (dataString);return false;
		



$.ajax({
      type: "POST",
      url: "menu_permission_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();


		
		
	document.getElementById("login_show").innerHTML = data;
		

		$('#user_update_name').multiSelect({keepOrder: true, selectableHeader: "<div class='custom-header'>Selectable item</div>", selectedHeader: "<div class='custom-header'>Selected items</div>"
});
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });



$("#group_update_name").live("change",function(event) {
 var group_id = $("#group_update_name option:selected").val();




/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var group_id = $("#group_update_name option:selected").val();
	
 

				
		var datString = 'group_id=' + group_id;
		//alert (dataString);return false;
		



$.ajax({
      type: "POST",
      url: "menu_permission_fetch.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();


		
		
	document.getElementById("login_show").innerHTML = data;
		

		$('#user_update_name').multiSelect({keepOrder: true, selectableHeader: "<div class='custom-header'>Selectable item</div>", selectedHeader: "<div class='custom-header'>Selected items</div>"
});
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
		
 
$('#sel_all_button').live("click",function(){
  $('#user_update_name').multiSelect('select_all');
  return false;
});

$('#de_sel_button').live("click",function(){
  $('#user_update_name').multiSelect('deselect_all');
  return false;
});


$('#update_button').live("click",function(){
  
 var user_sel = $("#user_update_name option:selected").map(function(){ return this.value }).get().join(", ");
 var group_id = $("#group_update_name option:selected").val();
  
 var datString = 'group_id=' + group_id + '&user_sel=' +user_sel ;
		



$.ajax({
      type: "POST",
      url: "menu_permission_create.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

		$('#load').fadeOut();  $('#load').remove();
		
		alert(data);

		/////////create div forajax hide		


		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
  return false;
});



    return false;
	});
	