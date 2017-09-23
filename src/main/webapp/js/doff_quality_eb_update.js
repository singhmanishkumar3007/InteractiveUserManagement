$(document).ready(function(){
$("#doff_quality_date").datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
$('#frame_no').focus();

$(document).keypress(function(e) {
    if(e.which == 13) {
        $("#submit_button").click();
		return false;
    }
	
});

higlightRow = function(row) {
	$(row).css({'background-color':'#EBF8A4','font-weight': 'Bold'});
  setTimeout(function() {
    $(row).css({'background-color':'','font-weight': ''});
  }, 2000);

}

//////////////////////////data div////////////////////////
	$("#close_terms_div").draggable({ handle: "#close_terms_div_handle" });

 $("#close_terms").live("click",function() {
 $("#close_terms_div").hide();
     $("#viewdetails").html('');
   return false;
}); 
$("#po_search_button").bind("click",function() {
 $("#close_terms_div").show(50);

 var doff_quality_date=$('#doff_quality_date').val();
 var datString= 'doff_quality_date='+doff_quality_date;
 
 $.ajax({
      type: "POST",
      url: "doff_quality_eb_update_view.php",
      data: datString,
      success: function(data){

	  $("#viewdetails").html(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
 
 
 
 
 return false;
});  

////TD update podetails
$("#podetails td").live("click",function(e){
var selectedrec = $(this).closest('tr').find('td:eq(8)').text();
if(selectedrec ==''){
 return false;
}
$("#podetails td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
$('#submit_button').hide();
$('#resetform').show();
$('#update_button').show();

$('#hi_po_sele_no').val(selectedrec);
var frame_no = $(this).closest('tr').find('td:eq(3)').text();
var ebno_1 = $(this).closest('tr').find('td:eq(4)').text();
var quality_1 = $(this).closest('tr').find('td:eq(5)').text();
var ebno_2 = $(this).closest('tr').find('td:eq(6)').text();
var quality_2 = $(this).closest('tr').find('td:eq(7)').text();

$('#ebno_1').val(ebno_1);
$('#frame_no').val(frame_no);
$('#frame_no').attr('disabled',true);
$('#quality_1').val(quality_1);
$('#ebno_2').val(ebno_2);
$('#quality_2').val(quality_2);

	var ebno_1=$("#ebno_1").val();

var datString= 'eb_num='+ebno_1;
 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_emp_name.php",
      data: datString,
      success: function(data){

	  $("#eb_name_1").val(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
var ebno_2=$("#ebno_2").val();
		
var datString= 'eb_num='+ebno_2;
 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_emp_name.php",
      data: datString,
      success: function(data){

	  $("#eb_name_2").val(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  })
 return false;
});
////reset button


$("#resetform").bind("click",function(e){
$("#podetails td").css("background-color", "");
$('#submit_button').show();
$('#resetform').hide();
$('#update_button').hide();

$('#hi_po_sele_no').val('');
$("#quality_1").val('');
$("#quality_2").val('');
$("#eb_name_1").val('');
$("#eb_name_2").val('');
$("#frame_no").val('');
$("#ebno_1").val('');
$("#ebno_2").val('');

$('#frame_no').attr('disabled',false);
 return false;
});

////td update end

////fetch table for view
var doff_date=$("#doff_quality_date").val();
var doff_shift=$("#shift").val();


 var datString = 'doff_date='+ doff_date +'&doff_shift='+ doff_shift;

	 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_update.php",
      data: datString,
      success: function(data){
	  


$('#podetails').html(data);

	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
	  
	 /////////////////////////////////////////////////////////////////
	 
	  $('#doff_quality_date').bind("change",function(e){

var doff_date=$("#doff_quality_date").val();
var doff_shift=$("#shift option:selected").val();
$("#resetform").click();

 var datString = 'doff_date='+ doff_date +'&doff_shift='+ doff_shift;

	 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_update.php",
      data: datString,
      success: function(data){
	  


$('#podetails').html(data);

	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
	  });
///////////////////////////////////////////////////////////////////////	 
 $('#shift').bind("change",function(e){

$("#resetform").click();
var doff_date=$("#doff_quality_date").val();
var doff_shift=$("#shift").val();
$("#frame_no").val('');
$("#ebno_1").val('');
$("#ebno_2").val('');
$("#quality_1").val('');
$("#quality_2").val('');
$("#eb_name_1").val('');
$("#eb_name_2").val('');

 var datString = 'doff_date='+ doff_date +'&doff_shift='+ doff_shift;

	 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_update.php",
      data: datString,
      success: function(data){
	  

$('#podetails').html(data);

	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
	  });
	  
	  




//////////////////////////////////////////////////////////////////
 $('#quality_1').bind("input",function(){
 var quality_1=$("#quality_1").val();
 $("#quality_2").val(quality_1);
 

});

 $('#ebno_1').bind("input",function(){
 var ebno_1=$("#ebno_1").val();


	   $("#ebno_2").val('');
	   $("#eb_name_1").val('');
	   $("#eb_name_2").val('');
 $("#ebno_2").val(ebno_1);
 
var eb_length= ebno_1.length;
if(eb_length < 5){
return false;
}
 
var datString= 'eb_num='+ebno_1;
 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_emp_name.php",
      data: datString,
      success: function(data){

	  $("#eb_name_1").val(data);
	  $("#eb_name_2").val(data);
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
});

 $('#ebno_2').bind("input",function(){

 var ebno_2=$("#ebno_2").val();
	$("#eb_name_2").val('');	
	
var eb_length= ebno_2.length;
if(eb_length < 5){
return false;
}	
var datString= 'eb_num='+ebno_2;
 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_emp_name.php",
      data: datString,
      success: function(data){

	  $("#eb_name_2").val(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
});
  
 $('#frame_no').bind("input",function(){

 var shift = $("#shift option:selected").val();
  var doff_quality_date=$("#doff_quality_date").val();
 var frame_no=$("#frame_no").val();
 var frame_length= frame_no.length;
if(frame_length < 1){
return false;
}
$("#ebno_1").val('');
	   $("#ebno_2").val('');
	    $("#quality_1").val('');
		$("#quality_2").val('');
$("#eb_name_1").val('');
$("#eb_name_2").val('');
      	   var datString = 'shift='+ shift +'&frame_no='+ frame_no +'&doff_quality_date='+ doff_quality_date;

	 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_frame_prev_data.php",
      data: datString,
      success: function(data){

	  var x = eval('(' + data + ')'); 
	  $("#ebno_1").val(x.ebno1);
	   $("#ebno_2").val(x.ebno2);
	    $("#quality_1").val(x.qcode1);
		$("#quality_2").val(x.qcode2);
		
		var ebno_1=$("#ebno_1").val();
var eb_length= ebno_1.length;
if(eb_length < 5){
return false;
}
var datString= 'eb_num='+ebno_1;
 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_emp_name.php",
      data: datString,
      success: function(data){

	  $("#eb_name_1").val(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
var ebno_2=$("#ebno_2").val();
		
var eb_length= ebno_2.length;
if(eb_length < 5){
return false;
}	
var datString= 'eb_num='+ebno_2;
 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_emp_name.php",
      data: datString,
      success: function(data){

	  $("#eb_name_2").val(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
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


 function doBlink() {
	var blink = document.all.tags("BLINK")
	for (var i=0; i<blink.length; i++)
		blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "" 
}

 


/////////////////////////////////////////////////////////////update starts
$("#update_button").bind("click",function(){

 var doff_quality_date = $("#doff_quality_date").val();
 var shift = $("#shift option:selected").val();
 var hi_po_sele_no = $("#hi_po_sele_no").val();
 var frame_no = $("#frame_no").val();
 var ebno_1 = $("#ebno_1").val();
 var quality_1 = $("#quality_1").val();
 var ebno_2 = $("#ebno_2").val();
 var quality_2 = $("#quality_2").val();
 var eb_name_1 = $("#eb_name_1").val();
 var eb_name_2 = $("#eb_name_2").val();
   
   
     if(hi_po_sele_no==''){
   alert('Select One recored first!');
   return false;
   }
   
   
   if((eb_name_1==''|| eb_name_1=='Inavlid EB') && (eb_name_2=='' || eb_name_2=='Inavlid EB') ){
   alert('Check Eb Number!');
   return false;
   }
    
      if((quality_1=='') && (quality_2=='')){
    alert('Check Quality Code1!');
	return false;
   }

 var datString = 'hi_po_sele_no='+hi_po_sele_no+'&doff_quality_date='+ doff_quality_date+'&shift='+shift+'&frame_no='+frame_no+'&ebno_1='+ebno_1+'&quality_1='+quality_1+'&ebno_2='+ebno_2+'&quality_2='+quality_2;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "doff_quality_eb_update_update.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	

		
	alert(data);
if(data=='EB / Quality Data Updated'){
var doff_date=$("#doff_quality_date").val();
var doff_shift=$("#shift").val();


$("#resetform").click();
 var datString = 'doff_date='+ doff_date +'&doff_shift='+ doff_shift;

	 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_update.php",
      data: datString,
      success: function(data){

$('#podetails').html(data);

	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
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
/////////////////////////////////update ends ///////////////////////////////////////////////
	
$("#submit_button").bind("click",function(){


 var doff_quality_date = $("#doff_quality_date").val();
 var shift = $("#shift option:selected").val();
 var frame_no = $("#frame_no").val();
 var ebno_1 = $("#ebno_1").val();
 var quality_1 = $("#quality_1").val();
 var ebno_2 = $("#ebno_2").val();
 var quality_2 = $("#quality_2").val();
 var eb_name_1 = $("#eb_name_1").val();
 var eb_name_2 = $("#eb_name_2").val();
   
   if((eb_name_1==''|| eb_name_1=='Inavlid EB') && (eb_name_2=='' || eb_name_2=='Inavlid EB')){
   alert('Check Eb Number!');
   return false;
   }
    
      if((quality_1=='') && (quality_2=='')){
    alert('Check Quality Code1!');
	return false;
   }

 var datString = 'doff_quality_date='+ doff_quality_date+'&shift='+shift+'&frame_no='+frame_no+'&ebno_1='+ebno_1+'&quality_1='+quality_1+'&ebno_2='+ebno_2+'&quality_2='+quality_2;
		//alert (dataString);return false;
		/////////create div forajax loading	
$("<div></div>").attr('class','loadback').appendTo('body');   
$(".loadback:hidden").fadeIn("slow");
/////////create div forajax loading	

$.ajax({
      type: "POST",
      url: "doff_quality_eb_update_create.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	

		$(".loadback").remove();
	alert(data);
if(data=='EB / Quality Data Saved'){
var doff_date=$("#doff_quality_date").val();
var doff_shift=$("#shift").val();
$("#resetform").click();
$("#quality_1").val('');
$("#quality_2").val('');
$("#eb_name_1").val('');
$("#eb_name_2").val('');
$("#frame_no").val('');
$("#ebno_1").val('');
$("#ebno_2").val('');

 var datString = 'doff_date='+ doff_date +'&doff_shift='+ doff_shift;

	 $.ajax({
      type: "POST",
      url: "fetch_quality_eb_update.php",
      data: datString,
      success: function(data){
	  


$('#podetails').html(data);
  higlightRow("#podetails tr:nth-child(1) td");
	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
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
	

	
	
 $(".text_input").live('keypress', function(e) {

    // Calling procedure
    // onKeyPress=\"javascript:return IsNumeric(event);\" 
    //
    //alert(e);
    var KeyID = (window.event) ? event.keyCode : e.which;
	//alert(KeyID);
    if ((KeyID >= 66 && KeyID <= 90) || (KeyID >= 97 && KeyID <= 122) || (KeyID >= 33 && KeyID <= 47 && KeyID != 46) ||
	   (KeyID >= 58 && KeyID <= 64) || (KeyID >= 91 && KeyID <= 96) || (KeyID >= 123 && KeyID <= 126) || (KeyID == 32)) {
        return false;
    }
    	return true;
	});		



});
