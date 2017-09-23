$(document).ready(function(){
			$( "#rec_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
			$( "#from_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
			$( "#to_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
            $( "#from1_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
			$( "#to1_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
$("#close_terms_div").draggable({ handle: "#close_terms_div_handle" });
$("#close_terms_div1").draggable({ handle: "#close_terms_div_handle1" });
 $("#close_terms").bind("click",function() {
 $("#close_terms_div").hide();
    $(".loadback").remove();
   return false;
}); 
 $('#group_sbutton').bind("click",function(){
  
//var fol_id = $("#fol_id option:selected").val();
 var from_date = $("#from_date").val();

  
	  var datString='from_date='+from_date;
	  
 $.ajax({
      type: "POST",
      url: "csvexp_doff_eb_quality_datewise.php",
      data: datString,
      success: function(data){

	  alert(data);
	 
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
$("#close_terms").click();
  return false;
});   
$("#saverow").bind("click",function(){
/////////create div forajax loading	
$("<div></div>").attr('class','loadback').appendTo('body');   
$(".loadback:hidden").fadeIn("slow");
/////////create div forajax loading	

$("#close_terms_div").show(100);

		return false;
	});
$("#login_sbutton").live("click",function(event){
	var from1_date = $('#from1_date').val();
	var to1_date = $('#to1_date').val();
				var datString = 'from1_date='+ from1_date +'&to1_date='+to1_date;

	var url = "doff10.php?"+datString;    
			//$(location).attr('href',url);
			window.open( url, '_blank');
			$('#close_terms1').click();
			
return false;
});


	
$("#print_slip").bind("click",function(){
/////////create div forajax loading	
$("<div></div>").attr('class','loadback').appendTo('body');   
$(".loadback:hidden").fadeIn("slow");
/////////create div forajax loading	

$("#close_terms_div1").show(100);

		return false;
	});
$("#podetails td").live("click",function(e){
var selectedrec = $(this).closest('tr').find('td:eq(11)').text();

if(selectedrec ==''){
 return false;
}
$("#podetails td").css({'background-color' : '','font-weight' : '','color':''});
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color

$('#submit_button').hide();
$('#resetform').show();
$('#delrow').show();
$('#update_button').show();

$('#hi_po_sele_no').val(selectedrec);
var frame_number = $(this).closest('tr').find('td:eq(5)').text();
var trolly_number = $(this).closest('tr').find('td:eq(6)').text();
var gross_weight = $(this).closest('tr').find('td:eq(7)').text();
var tare_weight = $(this).closest('tr').find('td:eq(8)').text();
var net_weight = $(this).closest('tr').find('td:eq(9)').text();
var spell_name = $(this).closest('tr').find('td:eq(4)').text();
if((spell_name=='C1') ||(spell_name=='C2')){
spell_name = 'C1'
}
$('#doff_number').val('');
$('#spell_name').val(spell_name).attr('selected',true);
$('#spell_name').attr('disabled',true);
$('#trolly_number').val(trolly_number);
$('#frame_number').val(frame_number);
$('#doff_number').attr('disabled',true);
$('#gross_weight').val(gross_weight);
$('#tare_weight').val(tare_weight);
$('#net_weight').val(net_weight);
$('#net_weight_total').attr('disabled',true);
$('#net_weight_total').val('');
		

 return false;
});
////reset button


$("#resetform").bind("click",function(e){
$("#podetails td").css("background-color", "");
$('#submit_button').show();
$('#resetform').hide();
$('#update_button').hide();
$('#delrow').hide();

$('#hi_po_sele_no').val('');
$("#frame_number").val('');
$("#trolly_number").val('');
$("#gross_weight").val('');
$("#net_weight").val('');
$("#tare_weight").val('');
$("#ebno_1").val('');
$('#spell_name').attr('disabled',false);
$('#net_weight_total').attr('disabled',false);
$('#doff_number').attr('disabled',false);
$('#frame_no').attr('disabled',false);
$('#delrow').attr('disabled', false);
$('#update_button').attr('disabled', false);
$('#submit_button').attr('disabled', false);
 return false;
});


$('#frame_number').focus();

higlightRow = function(row) {
	$(row).css({'background-color':'#EBF8A4','font-weight': 'Bold','color':''});
  setTimeout(function() {
    $(row).css({'background-color':'','font-weight': ''});
  }, 2000);

}
 $('#frame_number').bind("keypress",function(e){

 if ( e.keyCode == 112 )
{
var spell_name = $("#spell_name option:selected").val();
var rec_date=$('#rec_date').val();
var frame_numb=$('#frame_number').val();
var datString = 'frame_num='+frame_numb+'&rec_date='+rec_date+'&spell_name='+spell_name;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 }
	  });
//////////////////////////////////////////////////////////////////



       return false;
	   
}



});
 $('#rec_date').bind("change",function(e){


var spell_name = $("#spell_name option:selected").val();
var rec_date=$('#rec_date').val();
var frame_numb=$('#frame_number').val();
var datString = 'frame_num='+frame_numb+'&rec_date='+rec_date+'&spell_name='+spell_name;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 }
	  });
//////////////////////////////////////////////////////////////////

       return false;
	   
});


 $('#rec_date').bind("keypress",function(e){

 if ( e.keyCode == 112 )
{
var spell_name = $("#spell_name option:selected").val();
var rec_date=$('#rec_date').val();
var frame_numb=$('#frame_number').val();
var datString = 'frame_num='+frame_numb+'&rec_date='+rec_date+'&spell_name='+spell_name;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 }
	  });
//////////////////////////////////////////////////////////////////



       return false;
	   
}



});

 $('#spell_name').bind("keypress",function(e){

 if ( e.keyCode == 112 )
{
var spell_name = $("#spell_name option:selected").val();
var rec_date=$('#rec_date').val();
var frame_numb=$('#frame_number').val();
var datString = 'frame_num='+frame_numb+'&rec_date='+rec_date+'&spell_name='+spell_name;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 }
	  });
//////////////////////////////////////////////////////////////////



       return false;
	   
}



});

 $('#spell_name').bind("change",function(e){

var spell_name = $("#spell_name option:selected").val();
var rec_date=$('#rec_date').val();
var frame_numb=$('#frame_number').val();
var datString = 'frame_num='+frame_numb+'&rec_date='+rec_date+'&spell_name='+spell_name;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 }
	  });
//////////////////////////////////////////////////////////////////

       return false;
	   
});
var datString;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 }
	  });
//////////////////////////////////////////////////////////////////


setInterval(function() {

   var now = new Date();
   var outStr = ((now.getHours()<10?'0':'') + now.getHours() )+':'+((now.getMinutes()<10?'0':'') + now.getMinutes() )+':'+((now.getSeconds()<10?'0':'') + now.getSeconds() );
   $('#rec_time').val(outStr);
}, 1000);
////////////////////////////////////////////////////////////////++++++++++++++++++++++++===========================




//===================================================================================================================


		
			$( "#rec_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
			
			
////fetch table at start		



	  
 $('#submit_button').bind("click",function(){
   $('#submit_button').attr('disabled', true);
   var spell_name = $("#spell_name option:selected").val();
var rec_date=$("#rec_date").val();
var rec_time=$("#rec_time").val();
var frame_number=$("#frame_number").val();
var trolly_number=$("#trolly_number").val();
var gross_weight=$("#gross_weight").val();
var tare_weight=$("#tare_weight").val();
var net_weight=$("#net_weight").val();

    if(isNaN(net_weight) || net_weight <= 0) {
      alert('Invalid Net weight');
	  return false;
    }
	  if(isNaN(trolly_number) || trolly_number <= 0) {
      alert('Invalid Frame / Trolly Number');
	  return false;
    }
	
      	   var datString = 'spell_name='+ spell_name +'&frame_number='+ frame_number+'&rec_date='+ rec_date +'&rec_time='+ rec_time+'&trolly_number='+ trolly_number+'&gross_weight='+ gross_weight+'&tare_weight='+ tare_weight+'&net_weight='+ net_weight;

	 $.ajax({
      type: "POST",
      url: "manual_doff_create.php",
      data: datString,
      success: function(data){
	  $('#submit_button').attr('disabled', false);
	  alert(data);
	  if(data=='Data Saved'){
$("#frame_number").val('');
$("#trolly_number").val('');
$("#gross_weight").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
	var rec_date=$('#rec_date').val();
var datString = 'rec_date='+rec_date;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  higlightRow("#podetails tr:nth-child(1) td");
 }
	  });
	  }


	  },	  
	  error:function (xhr, ajaxOptions, thrownError){
        //alert(xhr.status);
        //alert(xhr.statusText);
       // alert(xhr.responseText);
	   window.location = 'index.php';
	   	
    }
	  });
	  return false;
  });	  

 $('#gross_weight').bind("input",function(){
 var gross_weight=$("#gross_weight").val();
		
		var tare_weight=$("#tare_weight").val();
		var net_weight=(gross_weight-tare_weight).toFixed(2);
		

    if(isNaN(net_weight) || net_weight <= 0) {
      net_weight='';
    }
		 $("#net_weight").val(net_weight);
  return false;
});

 $('#trolly_number').bind("input",function(){
 var spell_name = $("#spell_name option:selected").val();
var rec_date=$("#rec_date").val();
var frame_number=$("#frame_number").val();
 var trolly_number=$("#trolly_number").val();
//reset values

 $("#doff_number").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
$("#gross_weight").val('');

      	   var datString = 'spell_name='+ spell_name +'&frame_number='+ frame_number+'&rec_date='+ rec_date+'&trolly_number='+ trolly_number;

	 $.ajax({
      type: "POST",
      url: "fetch_trolly_input_auto_doff_entry.php",
      data: datString,
      success: function(data){

	  var x = eval('(' + data + ')'); 
	 
	   $("#tare_weight").val(x.tarewt);
	    $("#doff_number").val(x.doff_no);
		$("#net_weight_total").val(x.total_netwt);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});   
  return false;
});
  
 $('#frame_number').bind("input",function(){
 var spell_name = $("#spell_name option:selected").val();
var rec_date=$("#rec_date").val();
var frame_number=$("#frame_number").val();
//reset values
  $("#trolly_number").val('');
 $("#doff_number").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
$("#gross_weight").val('');
      	   var datString = 'spell_name='+ spell_name +'&frame_number='+ frame_number+'&rec_date='+ rec_date;

	 $.ajax({
      type: "POST",
      url: "fetch_trolly_auto_doff_entry.php",
      data: datString,
      success: function(data){

	  var x = eval('(' + data + ')'); 
	  $("#trolly_number").val(x.trollyno);
	   $("#tare_weight").val(x.tarewt);
	    $("#doff_number").val(x.doff_no);
		$("#net_weight_total").val(x.total_netwt);
}
});   
  return false;
});

          
$("#close_terms_div1").draggable({ handle: "#close_terms_div_handle1" });
$("#close_terms_div").draggable({ handle: "#close_terms_div_handle" });

 $("#close_terms").live("click",function() {
 $("#close_terms_div").hide();
 
  $(".loadback").remove();
   return false;
}); 
 $("#close_terms1").live("click",function() {
 $("#close_terms_div1").hide();

  $(".loadback").remove();
   return false;
}); 
 function doBlink() {
	var blink = document.all.tags("BLINK")
	for (var i=0; i<blink.length; i++)
		blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "" 
}

 

  
 $("#spell_name").live("change",function(){

$("#frame_number").val('');
$("#trolly_number").val('');
$("#gross_weight").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
$("#doff_number").val('');

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 $('#delrow').bind("click",function(){
  
if(confirm('Are you sure you want to delete?')){
 $('#delrow').attr('disabled', true);
var hi_po_sele_no=$("#hi_po_sele_no").val();

	
      	   var datString = 'hi_po_sele_no='+ hi_po_sele_no;

	 $.ajax({
      type: "POST",
      url: "doff_manual_delete.php",
      data: datString,
      success: function(data){
	  $('#delrow').attr('disabled', false);
	  alert(data);
	  if(data=='Doff Successfully Deleted !'){
$("#resetform").click();
var rec_date=$('#rec_date').val();
var datString = 'rec_date='+rec_date;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  higlightRow("#podetails tr:nth-child(1) td");
 }
	  });
	  }
	  },	  
	  error:function (xhr, ajaxOptions, thrownError){
      
	   window.location = 'index.php';
	   	
    }
	  });
	  }
	  return false;
  });	
		
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 $('#update_button').bind("click",function(){
   $('#update_button').attr('disabled', true);
var hi_po_sele_no=$("#hi_po_sele_no").val();


var frame_number=$("#frame_number").val();
var trolly_number=$("#trolly_number").val();
var gross_weight=$("#gross_weight").val();
var tare_weight=$("#tare_weight").val();
var net_weight=$("#net_weight").val();

    if(isNaN(net_weight) || net_weight <= 0) {
      alert('Invalid Net weight');
	  return false;
    }
	  if(isNaN(trolly_number) || trolly_number <= 0) {
      alert('Invalid Frame / Trolly Number');
	  return false;
    }
	
      	   var datString = 'rec_id='+ hi_po_sele_no +'&frame_number='+ frame_number +'&trolly_number='+ trolly_number+'&gross_weight='+ gross_weight+'&tare_weight='+ tare_weight+'&net_weight='+ net_weight;

	 $.ajax({
      type: "POST",
      url: "manual_doff_update.php",
      data: datString,
      success: function(data){
	  $('#update_button').attr('disabled', false);
	  alert(data);
	  if(data=='Data Updated'){
$("#resetform").click();

	var rec_date=$('#rec_date').val();
var datString = 'rec_date='+rec_date;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	 
 }
	  });
	  }


	  },	  
	  error:function (xhr, ajaxOptions, thrownError){
        //alert(xhr.status);
        //alert(xhr.statusText);
       // alert(xhr.responseText);
	   window.location = 'index.php';
	   	
    }
	  });
	  return false;
  });	
	

	


});
