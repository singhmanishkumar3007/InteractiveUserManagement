$(document).ready(function(){

////////////////////////////////////////time////////////////////////////////////////////////////////////
var elapsed_seconds = 0;
setInterval(function() {
  $("#entry_time").datepicker('setDate',new Date());
   var now = new Date();
   var outStr = ((now.getHours()<10?'0':'') + now.getHours() )+':'+((now.getMinutes()<10?'0':'') + now.getMinutes() )+':'+((now.getSeconds()<10?'0':'') + now.getSeconds() );
   $('#entry_time').val(outStr);
}, 1000);

var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
			

		var entry_type=$('#entry_type option:selected').val();
		//alert(entry_type);
		var datString='entry_type='+entry_type;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "gate_backend.php",
      data: datString,
      success: function(data) {  
		
		$("#body_load").html(data);
		$("#entry_type").change()
	
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});	

///////////////////main dropdown /////////////////////////	
	$('#entry_type').bind('change', function()
	{
		var entry_type=$('#entry_type option:selected').val();
		//alert(entry_type);
		var datString='entry_type='+entry_type;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "gate_backend.php",
      data: datString,
      success: function(data) {  
		
		$("#body_load").html(data);
		
//////////////////////visitor register/////////////////////////////////////////
$( "#visitorform_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true ,maxDate:0});
			$( "#visitorto_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
			$( "#jute_entry_form_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0 });
			$( "#jute_entry_to_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
			$( "#challan_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
			$( "#finish_challan_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
			$( "#store_challan_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
			$( "#form_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
			$( "#to_date" ).datepicker({ dateFormat: 'dd-mm-yy', changeYear: true,maxDate:0});
//////////////////////////////////////////////////////////////////////////////////////////////////
$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
/////////////////////reset////////////////////////////////////////////////////////////////////////
$("#reset_visitor").click(function() {
$('#visitorform_date').val(strDate);
$('#visitorto_date').val(strDate);
$("#visitor_rec_id").val('');
$("#visitor_name").val('');
$("#visitor_name").focus();
$("#whom_to_meet").val('');
$("#purpose").val('');
$("#address").val('');
$("#phone_no").val('');
$('#savein').show();
$('#saveout').hide();
$("#visitor_search_button").click();
$("#visitor_details td").css("background-color", "");
$("#visitor_datewise td").css("background-color", "");

/////////////////////////////////////////////////visitor live table///////////////////////
	
	var datString ;
	  	
$.ajax({

      type: "POST",
      url: "visitor_live_table.php",
      data: datString,
	
      success: function(data) {  		
		//alert("test");
		$("#visitor_details").html(data);
		$("#visitor_details td").click(function () 
		{  
        		
		var selected_visitor_name= $(this).closest('tr').find('td:eq(1)').text();
		var selected_whom_to_meet= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_purpose= $(this).closest('tr').find('td:eq(3)').text();
		var selected_address= $(this).closest('tr').find('td:eq(4)').text();
		var selected_phone_no= $(this).closest('tr').find('td:eq(5)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(8)').text();				
	$("#visitor_name").val(selected_visitor_name);
	$("#whom_to_meet").val(selected_whom_to_meet);
	$("#purpose").val(selected_purpose);
	$("#address").val(selected_address);
	$("#phone_no").val(selected_phone_no);
	$("#visitor_rec_id").val(selected_rec_id);
	$("#visitor_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$('#savein').hide();
	$('#saveout').show();

});	
	var YtableEmulator = document.getElementById('visitor_y-table-emulator');
var XtableEmulator = document.getElementById('visitor_x-table-emulator');
var table = document.getElementById('visitor_table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('visitor_scroll');
var headerContainer = document.getElementById('visitor_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('visitor_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('visitor_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
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
	//////////////////////////////reset end//////////////////////////////////////////////////
	
/////////////////////////////////save in//////////////////////////
	$("#savein").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var entry_time=$('#entry_time').val();	
	var visitor_name=$('#visitor_name').val();
	if(visitor_name=='')
	{
		alert("Please Enter Visitor Name!");
		return false;
	}
	var whom_to_meet=$('#whom_to_meet').val();
	if(whom_to_meet=='')
	{
		alert("Please Enter Whom To Meet!");
		return false;
	}
	var purpose=$('#purpose').val();
	if(purpose=='')
	{
		alert("Please Enter Purpose!");
		return false;
	}
	var address=$('#address').val();
	if(address=='')
	{
		alert("Please Enter Address!");
		return false;
	}
	var phone_no=$('#phone_no').val();
		if(phone_no.length<10)
		{
		alert("Invalid Phone No!");
		return false;
		}
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&visitor_name='+visitor_name+'&whom_to_meet='+whom_to_meet+'&purpose='+purpose+'&address='+address+'&phone_no='+phone_no;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "visitor_data_save.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			$("#reset_visitor").click();
			
			$("#visitor_search_button").click();
$("#load").fadeOut("slow");


	alert(data);	
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});	
	
return false;	
	});
/////////////////////////save in end///////////////////////////////////////////////////////////
/////////////////////////save out/////////////////////////////////////////////////
$("#saveout").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var entry_time=$('#entry_time').val();	
	var rec_id=$("#visitor_rec_id").val();
	var visitor_name=$('#visitor_name').val();
	if(visitor_name=='')
	{
		alert("Please Enter Visitor Name!");
		return false;
	}
	
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&visitor_name='+visitor_name+'&rec_id='+rec_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "visitor_data_save_out.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			$("#reset_visitor").click();
				
$("#load").fadeOut("slow");


	alert(data);	
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});	
	
return false;	
	});
//////////////////////save out end/////////////////////////////////////////////////////
//////////////////////edit/////////////////////////////////////////////////////////////////

$("#saveedit").click(function() {
	var visitor_id=$("#visitor_rec_id").val();
	var visitor_name=$('#visitor_name').val();
	if(visitor_name=='')
	{
		alert("Please Enter Visitor Name!");
		return false;
	}
	var whom_to_meet=$('#whom_to_meet').val();
	if(whom_to_meet=='')
	{
		alert("Please Enter Whom To Meet!");
		return false;
	}
	var purpose=$('#purpose').val();
	if(purpose=='')
	{
		alert("Please Enter Purpose!");
		return false;
	}
	var address=$('#address').val();
	if(address=='')
	{
		alert("Please Enter Address!");
		return false;
	}
	var phone_no=$('#phone_no').val();
		if(phone_no.length<10)
		{
		alert("Invalid Phone No!");
		return false;
		}
	var datString='visitor_name='+visitor_name+'&whom_to_meet='+whom_to_meet+'&purpose='+purpose+'&address='+address+'&phone_no='+phone_no+'&visitor_id='+visitor_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "visitor_data_edit.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			$("#reset_visitor").click();
			
			$("#visitor_search_button").click();
$("#load").fadeOut("slow");


	alert(data);	
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});	
	
return false;	
});
//////////////////////////////////edit end////////////////////////////////////////
//////////////////////////////////delete start//////////////////////////////////////
$("#visitor_del").click(function(event){
//alert("test");
var visitor_id=$("#visitor_rec_id").val();	
if(visitor_id =='')
{
alert("Please Select a Visitor!");
}
else
{
	

if(confirm('Are you sure you want to delete?')){
var datString='visitor_id='+visitor_id;

$.ajax({
      type: "POST",
      url: "visitor_delete.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading		
					
$("#load").fadeOut("slow");

$("#reset_visitor").click();
$("#visitor_search_button").click();

	alert(data);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
}
}


return false;
});
/////////////////////delete end/////////////////////////////
//////////////////////visitor search'//////////////////////
$("#visitor_search_button").click(function() {

 var form_date = $("#visitorform_date").val();	
 var to_date = $("#visitorto_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "fetch_visitor_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("visitor_datewise").innerHTML = data;
					
$("#visitor_datewise td").click(function(event){
	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
		
            $("#visitor_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var select_rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#visitor_rec_id").val(select_rec_id);
	
	var datString = 'select_rec_id='+select_rec_id; 
						 
	  $.ajax({
      type: "POST",
      url: "fetch_visitor_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		document.getElementById("visitor_details").innerHTML = data;
		$("#load").hide();		
		$("#visitor_details td").click(function () 
		{  
                      		
		var selected_visitor_name= $(this).closest('tr').find('td:eq(1)').text();
		var selected_whom_to_meet= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_purpose= $(this).closest('tr').find('td:eq(3)').text();
		var selected_address= $(this).closest('tr').find('td:eq(4)').text();
		var selected_phone_no= $(this).closest('tr').find('td:eq(5)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(8)').text();				
	$("#visitor_name").val(selected_visitor_name);
	$("#whom_to_meet").val(selected_whom_to_meet);
	$("#purpose").val(selected_purpose);
	$("#address").val(selected_address);
	$("#phone_no").val(selected_phone_no);
	$("#visitor_rec_id").val(selected_rec_id);
	$("#visitor_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$('#savein').hide();
	$('#saveout').show();

});	

	var YtableEmulator = document.getElementById('visitor_y-table-emulator');
var XtableEmulator = document.getElementById('visitor_x-table-emulator');
var table = document.getElementById('visitor_table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('visitor_scroll');
var headerContainer = document.getElementById('visitor_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('visitor_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('visitor_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
}
	}					 
					 
	});	
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
$("#visitor_search_button").click();
//////////////////////visitor search end/////////////////////////////////////
/////////////////////////////////////////////////visitor live table///////////////////////
	  var datString ;
	  	
      $.ajax({

      type: "POST",
      url: "visitor_live_table.php",
      data: datString,
	
      success: function(data) {  		
		//alert("test");
		$("#visitor_details").html(data);
		$("#visitor_details td").click(function () 
		{  
        		
		var selected_visitor_name= $(this).closest('tr').find('td:eq(1)').text();
		var selected_whom_to_meet= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_purpose= $(this).closest('tr').find('td:eq(3)').text();
		var selected_address= $(this).closest('tr').find('td:eq(4)').text();
		var selected_phone_no= $(this).closest('tr').find('td:eq(5)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(8)').text();				
	$("#visitor_name").val(selected_visitor_name);
	$("#whom_to_meet").val(selected_whom_to_meet);
	$("#purpose").val(selected_purpose);
	$("#address").val(selected_address);
	$("#phone_no").val(selected_phone_no);
	$("#visitor_rec_id").val(selected_rec_id);
	$("#visitor_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$('#savein').hide();
	$('#saveout').show();

});	
	var YtableEmulator = document.getElementById('visitor_y-table-emulator');
var XtableEmulator = document.getElementById('visitor_x-table-emulator');
var table = document.getElementById('visitor_table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('visitor_scroll');
var headerContainer = document.getElementById('visitor_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('visitor_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('visitor_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
}
	}
	});	
///////////////////////////////visitor register end//////////////////////////////
///////////////////////////////jute entry register start////////////////////////////////////
/////////////////////reset//////////////////////
$("#reset_jute_entry").click(function() {
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$("#vehicle_no").val('');
$("#challan_no").val('');
$("#challan_no").focus();
$("#broker_address").val('');
$("#broker").val('');
$("#transporter").val('');
$("#driver_name").val('');
$("#mukam").val('');
$('#challan_date').val(strDate);
$("#resetform").click();
$("#jute_rec_id").val('');
$("#hdr_id").val('');
$("#perm_id").val('');
$("#jute_entry td").css("background-color", "");
document.getElementById("jute_entry").innerHTML = '';

$("#jute_entry_datewise td").css("background-color", "");

 return false;
	});

/////////////////////VIRTUAL TABLE/////////////////////////////////////////
$("#resetform").click(function() {
$("#marka").val('');

$("#quality").val('');
$("#quantity").val('');
$('#jute_entry_savein').show();
$('#jute_entry_saveout').hide();
$("#uom").val('');
$("#weight").val('');
$("#remarks").val('');
$("#hi_po_sl_no").val('');

 return false;
	});

///////////////////////////save row//////////////////
$("#saverow").bind("click",function(event){

var marka=((($('#marka').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(marka=='')
	{
		alert("Please Enter Marka!");
		return false;
	}	
	var quality=((($('#quality').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(quality=='')
	{
		alert("Please Jute Quality!");
		return false;
	}	
	var quantity=((($('#quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	if(quantity=='')
		{
		alert("Please Enter Quantity!");
		return false;
		}
		
	var uom=((($('#uom').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	var weight=((($('#weight').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	if(weight=='')
		{
		alert("Please Enter Weight!");
		return false;
		}	
	var remarks=((($('#remarks').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
		var hi_po_sl_no=$("#hi_po_sl_no").val();
		//alert(hi_po_sl_no);
		var rec_id=$.trim($("#jute_rec_id").val());
		var hdr_id=$.trim($("#hdr_id").val());
	var perm_id = $.trim($("#perm_id").val());
	
	 if(hi_po_sl_no==''){
	 
	 var last_td= $("#jute_entry_table_body tr:last").find('td:eq(0)').text();
	
	 if(last_td ==''){
	 hi_po_sl_no=1;
	 }
	 else{
	 hi_po_sl_no=(parseInt(last_td)+1);
	 }
	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"16px\">'+hi_po_sl_no+'</td><td width=\"50px\" >'+marka+'</td><td width=\"90px\" >'+quality+'</td><td width=\"50px\">'+quantity+'</td><td width=\"40px\">'+uom+'</td><td width=\"50px\" >'+weight+'</td><td width=\"100px\">'+remarks+'</td><td width=\"45px\"></td><td width=\"45px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#jute_entry_table_body >tbody:last').append(trdata)
$("#marka").focus();
	  }
	else{
	 if(perm_id !=''){
	  
	 var trdata = '<th width=\"8px\"><pre></th><td width=\"16px\">'+hi_po_sl_no+'</td><td width=\"50px\">'+marka+'</td><td width=\"90px\">'+quality+'</td><td width=\"50px\" >'+quantity+'</td><td width=\"40px\">'+uom+'</td><td width=\"50px\">'+weight+'</td><td width=\"100px\" >'+remarks+'</td><td width=\"45px\"></td><td width=\"45px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+rec_id+'</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+hdr_id+'</span></td><th width=\"8px\"><pre></th>';
	
	  $("#marka").focus(); 
	 } 
	 	  else{
		  
	 	  var trdata = '<th width=\"8px\"><pre></th><td width=\"16px\">'+hi_po_sl_no+'</td><td width=\"50px\" >'+marka+'</td><td width=\"90px\" >'+quality+'</td><td width=\"50px\" >'+quantity+'</td><td width=\"40px\" >'+uom+'</td><td width=\"50px\">'+weight+'</td><td width=\"100px\" >'+remarks+'</td><td width=\"45px\"></td><td width=\"45px\" ></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	 $("#marka").focus();
	 }	 			 
		
	$('#potr_'+hi_po_sl_no+'').html(trdata);		

	}
	  $("#resetform").click();
	 
	var YtableEmulator = document.getElementById('jute_entry_y-table-emulator');
var XtableEmulator = document.getElementById('jute_entry_x-table-emulator');
var table = document.getElementById('jute_entry_table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('jute_entry_scroll');
var headerContainer = document.getElementById('jute_entry_header-container');
var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('jute_entry_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('jute_entry_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
}
return false;
});
//////////////////////VIRTUAL TABLE END/////////////////////////////////////////////
///////////////////////VIRTUAL TABLE ON SELECT/////////////////////////
$("#jute_entry_table_body td").live("click",function(event){

$("#jute_entry_table_body td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	//alert(sl_no);
	//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	    var selected_marka= $(this).closest('tr').find('td:eq(1)').text();
		var selected_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_quantity= $(this).closest('tr').find('td:eq(3)').text();
		var selected_uom= $(this).closest('tr').find('td:eq(4)').text();
		var selected_weight= $(this).closest('tr').find('td:eq(5)').text();
		var selected_remarks= $(this).closest('tr').find('td:eq(6)').text();
		var selected_perm_id= $(this).closest('tr').find('td:eq(9)').text();
		var selected_hdr_id= $(this).closest('tr').find('td:eq(11)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(10)').text();
		//alert(selected_hdr_id);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#quantity").val(selected_quantity);
	$("#uom").val(selected_uom);
	$("#weight").val(selected_weight);
	$("#remarks").val(selected_remarks);
	$("#jute_rec_id").val(selected_rec_id);
	$("#hdr_id").val(selected_hdr_id);
	$("#perm_id").val(selected_perm_id);
	return false;
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////

$("#delrow").click(function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();

var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(9)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#jute_entry >tr').find('td:eq(9):contains("d")').length;
var rowCounb = $('#jute_entry >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta != 1){


$(del_po_tr).remove();
}else{
var che_po_sl=$("#hi_po_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}

}
else{
var rowCouna = $('#jute_entry >tr').find('td:eq(9):contains("d")').length;
var rowCounb = $('#jute_entry >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta !=1){

$(del_po_tr).closest('tr').find('td:eq(9)').text('d');
$(del_po_tr).hide();
}
else{
var che_po_sl=$("#hi_po_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}
}
$('#resetform').click();

return false;
});
///////////////////////////////////virtual delete end////////////////
///////////////////////////////////SAVE DATA/////////////////////////////////////////////////

$("#jute_entry_savein").click(function(event){
//alert("test");
var saverowCount = (parseInt($('#jute_entry >tr').length));
var entry_date=$('#entry_date').val();
var entry_time=$('#entry_time').val();	
var challan_no_wr=((($('#challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(challan_no_wr==''){ alert("Please Enter Challan No!"); return false;}
var challan_date_wr=((($('#challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var broker_wr=((($('#broker').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(broker_wr==''){ alert("Please Enter Broker Name!"); return false;}
var broker_address_wr=((($('#broker_address').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(broker_address_wr==''){ alert("Please EnterBroker Address_wr!"); return false;}
var transporter_wr=((($('#transporter').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(transporter_wr==''){ alert("Please Enter Transporter Name!"); return false;}
var vehicle_no_wr=((($('#vehicle_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(vehicle_no_wr==''){ alert("Please Enter Vehicle No!"); return false;}
var driver_name_wr=((($('#driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(driver_name_wr==''){ alert("Please Enter Driver Name!"); return false;}
var fin_year_wr=((($('#fin_year').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var mukam_wr=((($('#mukam').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var hdr_id=((($('#hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{

var po_tr='#potr_'+ic;
var wr_arr= wr_arr+((($(po_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(2)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(3)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(5)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(6)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(10)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(11)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}	

		var datString = 'r='+ saverowCount +'&entry_date=' +entry_date+ '&entry_time=' +entry_time+'&challan_no_wr='+challan_no_wr+'&challan_date_wr=' + challan_date_wr+'&broker_wr=' + broker_wr+'&broker_address_wr='+broker_address_wr+'&transporter_wr='+transporter_wr+'&vehicle_no_wr='+vehicle_no_wr+'&driver_name_wr='+driver_name_wr+'&fin_year_wr='+fin_year_wr+'&mukam_wr='+mukam_wr+'&wr_arr='+wr_arr+'&hdr_id='+hdr_id;
		
		
$.ajax({
      type: "POST",
      url: "jute_entry_register_data_save.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();	
		
	$("#reset_jute_entry").click();
	$("#jute_entry_search_button").click();
alert(data);
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

///////////////////////////////////////////save end//////////////////////////////////////////	
////////////////////////////////SAVE END//////////////////////////////////////////////////
/////////////////////////save out start/////////////////////////////////////////////////////////////
$("#jute_entry_saveout").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var entry_time=$('#entry_time').val();	
	var rec_id=$("#hdr_id").val();
		
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&rec_id='+rec_id;
	alert(datString);
	$.ajax({
      type: "POST",
      url: "jute_entry_register_data_save_out.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			$("#reset_jute_entry").click();
			$("#jute_entry_search_button").click();
			
	
$("#load").hide();
		
		alert(data);	
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});
	

	
return false;	
	});
////////////////////////////////save out end//////////////////////////////////////////////////
////////////////////////////////delete start////////////////////////////////////////////////
$("#jute_entry_del").click(function(event){
var rec_id=$("#hdr_id").val();	
if(rec_id=='')
{
alert("Please Select a Record!");
}
else
{
if(confirm('Are you sure you want to delete?')){

var datString='rec_id='+rec_id;

$.ajax({
      type: "POST",
      url: "jute_entry_register_delete.php",
      data: datString,
      success: function(data) {
        
		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading			
					
$("#load").fadeOut("slow");

$("#reset_jute_entry").click();

$("#jute_entry_search_button").click();

	alert(data);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
}
}
return false;
});
/////////////////////////////////delete end/////////////////////////////////////////////
/////////////////////////////////jute entry search'/////////////////////////////////////
$("#jute_entry_search_button").click(function() {

 var form_date = $("#jute_entry_form_date").val();	
 var to_date = $("#jute_entry_to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "fetch_jute_entry_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("jute_entry_datewise").innerHTML = data;
		
		////////////////////on select each td from search///////////////////
$("#jute_entry_datewise td").click(function(event){
	
	$('#jute_entry_savein').hide();
	$('#jute_entry_saveout').show();
	//$("#reset_jute_entry").click();	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");

		
            $("#jute_entry_datewise td").css("background-color", "");
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   
	var select_rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#hdr_id").val(select_rec_id);	
	var selected_challan_no= $(this).closest('tr').find('td:eq(3)').text();
	$("#challan_no").val(selected_challan_no);
	var selected_challan_date= $(this).closest('tr').find('td:eq(4)').text();	
    $("#challan_date").val(selected_challan_date);
	var select_broker= $(this).closest('tr').find('td:eq(5)').text();
    $("#broker").val(select_broker);	
	var selected_broker_address= $(this).closest('tr').find('td:eq(6)').text();
	$("#broker_address").val(selected_broker_address);
	var selected_transporter= $(this).closest('tr').find('td:eq(7)').text();	
    $("#transporter").val(selected_transporter);
	var selected_vehicle_no= $(this).closest('tr').find('td:eq(0)').text();	
    $("#vehicle_no").val(selected_vehicle_no);
	var selected_driver_name= $(this).closest('tr').find('td:eq(8)').text();
	$("#driver_name").val(selected_driver_name);
	var selected_fin_year= $(this).closest('tr').find('td:eq(9)').text();	
    $("#fin_year").val(selected_fin_year).attr('selected',true);
	var selected_mukam= $(this).closest('tr').find('td:eq(10)').text();	
    $("#mukam").val(selected_mukam);
	/* var in_time= $(this).closest('tr').find('td:eq(11)').text();
		$("#in_time").text(in_time);
	var out_time= $(this).closest('tr').find('td:eq(12)').text();
		$("#out_time").text(out_time); */
	
	var datString = 'select_rec_id='+select_rec_id; 
	//alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "fetch_jute_entry_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#load").hide();
		document.getElementById("jute_entry").innerHTML = data;
				
		$("#jute_entry td").click(function () 
		{                   
		
		var selected_marka= $(this).closest('tr').find('td:eq(1)').text();
		var selected_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_quantity= $(this).closest('tr').find('td:eq(3)').text();
		var selected_uom= $(this).closest('tr').find('td:eq(4)').text();
		var selected_weight= $(this).closest('tr').find('td:eq(5)').text();
		var selected_remarks= $(this).closest('tr').find('td:eq(6)').text();
		var selected_perm_id= $(this).closest('tr').find('td:eq(9)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(10)').text();
		var selected_hdr_id= $(this).closest('tr').find('td:eq(11)').text();
		
//alert(selected_rec_id);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#quantity").val(selected_quantity);
	$("#uom").val(selected_uom);
	$("#weight").val(selected_weight);
	$("#remarks").val(selected_remarks);
	$("#jute_rec_id").val(selected_rec_id);
	$("#hdr_id").val(selected_hdr_id);
	$("#perm_id").val(selected_perm_id);
	$('#jute_entry_savein').show();
$('#jute_entry_saveout').hide();
	$("#jute_entry td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	

});

	var YtableEmulator = document.getElementById('jute_entry_y-table-emulator');
var XtableEmulator = document.getElementById('jute_entry_x-table-emulator');
var table = document.getElementById('jute_entry_table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('jute_entry_scroll');
var headerContainer = document.getElementById('jute_entry_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('jute_entry_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('jute_entry_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	
}

	 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }					 
					 
	});	//2nd call end	

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
		
		
		
		$("#jute_entry_search_button").click();
////////////////////////////////jute entry search end///////////////////////////////////

///////////////////////////////finishing register start////////////////////////////////////

/////////////////////reset//////////////////////
$("#finish_vehicle_no").focus();

$("#resett").click(function() {
$("#lorry_pass_no").val('');	
$("#cloth_quality").val('');	
$("#goods_desc").val('');	
$("#finish_quantity").val('');	
$("#finish_weight").val('');	
$("#finish_uom").val('');	
$("#fdtl_id").val('');
$("#fperm_id").val('');
$("#fnish_sl_no").val('');
$("#finish_datewise td").css("background-color", "");
return false;
});
$("#finish_reset").click(function() {
$("#finish_vehicle_no").val('');
$("#finish_vehicle_no").focus();
$("#finish_challan_no").val('');
$("#finish_challan_no").attr('disabled', true);
$("#finish_challan_date").val('');
$("#finish_challan_date").attr('disabled', true);
$("#whom_to_dispatch").val('');
$("#whom_to_dispatch").attr('disabled', true);
$("#transporter").val('');
$("#finish_driver_name").val('');
$("#cloth_quality").attr('disabled', true);	
	$("#whom_to_dispatch").attr('disabled', true);	
	$("#goods_desc").attr('disabled', true);	
	$("#finish_quantity").attr('disabled', true);
	$("#finish_weight").attr('disabled', true);	
	$("#finish_uom").attr('disabled', true);
	$("#lorry_pass_no").attr('disabled', true);
$('#fhdr_id').val('');
$("#resett").click();
$('#finish_savein').show();
$('#finish_saveout').hide();
$('#finish_edit').hide();
$("#finish_details").html('');
$("#finish_datewise td").css("background-color", "");

 return false;
	});
//////////////////////////////disable/////////////////////////////////////////
	/*$("#finish_challan_no").attr('disabled', true);	
	$("#finish_challan_date").attr('disabled', true);	
	$("#cloth_quality").attr('disabled', true);	
	$("#whom_to_dispatch").attr('disabled', true);	
	$("#goods_desc").attr('disabled', true);	
	$("#finish_quantity").attr('disabled', true);
	$("#finish_weight").attr('disabled', true);	
	$("#finish_uom").attr('disabled', true);
	$("#lorry_pass_no").attr('disabled', true);*/
////////////////////////////////////////////////////////////////////
///////////////////////////save row//////////////////////////////
$("#savet").bind("click",function(event){

var lorry_pass_no=((($('#lorry_pass_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(lorry_pass_no=='')
	{
		alert("Please Enter Lorry Pass !");
		$('#lorry_pass_no').focus();
		return false;
	}	
	var cloth_quality=((($('#cloth_quality').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));	
	if(cloth_quality=='')
	{
		alert("Please Enter Quality !");
		$('#cloth_quality').focus();
		return false;
	}	
	var finish_quantity=((($('#finish_quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	var finish_uom=((($('#finish_uom').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
		if(finish_quantity !='')
	{
		if(finish_uom==0)
		{
		alert("Please Select Quality Unit !");
		$('#finish_uom').focus();
		return false;
		}
	}	
	var finish_weight=((($('#finish_weight').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));	
	var goods_desc=((($('#goods_desc').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));		
	var fnish_sl_no=$.trim(((($('#fnish_sl_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"))); 
	var store_uom=$("#store_uom").val();
	var fdtl_id=$.trim(((($('#fdtl_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	var fhdr_id=$.trim(((($('#fhdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	var fperm_id = $.trim(((($('#fperm_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	//alert(perm_id);
	 if(fnish_sl_no==''){
	 
	 var lst_td= $("#table_bd tr:last").find('td:eq(0)').text();
	
	 if(lst_td ==''){
	 fnish_sl_no=1;
	 }
	 else{
	 fnish_sl_no=(parseInt(lst_td)+1);
	 }
	 
	 var tab_data = '<tr id=\"ftr_'+fnish_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"22px\">'+fnish_sl_no+'</td><td width=\"45px\" >'+lorry_pass_no+'</td><td width=\"80px\" >'+cloth_quality+'</td><td width=\"120px\" >'+goods_desc+'</td><td width=\"45px\">'+finish_quantity+'</td><td width=\"38px\">'+finish_uom+'</td><td width=\"42px\">'+finish_weight+'</td><td width=\"50px\"></td><td width=\"50px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#table_bd >tbody:last').append(tab_data)
$("#lorry_pass_no").focus();
	  }
	else{
	 if(fperm_id !=''){
	 
	 var tab_data = '<th width=\"8px\"><pre></th><td width=\"22px\">'+fnish_sl_no+'</td><td width=\"45px\" >'+lorry_pass_no+'</td><td width=\"80px\" >'+cloth_quality+'</td><td width=\"120px\" >'+goods_desc+'</td><td width=\"45px\">'+finish_quantity+'</td><td width=\"38px\">'+finish_uom+'</td><td width=\"42px\">'+finish_weight+'</td><td width=\"50px\"></td><td width=\"50px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+fdtl_id+'</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+fhdr_id+'</span></td><th width=\"8px\"><pre></th>';
		 	 	 	 

 $("#lorry_pass_no").focus(); 
	 } 
	 	  else{
		 
	 	  var tab_data = '<th width=\"8px\"><pre></th><td width=\"22px\">'+fnish_sl_no+'</td><td width=\"45px\" >'+lorry_pass_no+'</td><td width=\"80px\" >'+cloth_quality+'</td><td width=\"120px\" >'+goods_desc+'</td><td width=\"45px\">'+finish_quantity+'</td><td width=\"38px\">'+finish_uom+'</td><td width=\"42px\">'+finish_weight+'</td><td width=\"50px\"></td><td width=\"50px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	$("#lorry_pass_no").focus();
	 }	 			 
		
	$('#ftr_'+fnish_sl_no+'').html(tab_data);		

	}
	$("#resett").click();
	 
	var YtableEmulator = document.getElementById('finish_y-fake-scroll');
var XtableEmulator = document.getElementById('finish_x-table-emulator');
var table = document.getElementById('table_bd');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('finish_scroll');
var headerContainer = document.getElementById('finish_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('finish_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('finish_x-fake-scroll');

YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
}	
return false;
});
///////////////////////////////////////////finish virtual table end	//////////
///////////////////////VIRTUAL TABLE ON SELECT/////////////////////////
$("#table_bd td").live("click",function(event){

$("#table_bd td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var fnish_sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#fnish_sl_no").val(fnish_sl_no);
	//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	    var lorry_pass_no= $(this).closest('tr').find('td:eq(1)').text();
		var cloth_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var goods_desc= $(this).closest('tr').find('td:eq(3)').text();
		var finish_quantity= $(this).closest('tr').find('td:eq(4)').text();
		var finish_uom= $(this).closest('tr').find('td:eq(5)').text();
		var finish_weight= $(this).closest('tr').find('td:eq(6)').text();		
		var fperm_id= $(this).closest('tr').find('td:eq(9)').text();
		var fdtl_id= $(this).closest('tr').find('td:eq(10)').text();
		var fhdr_id= $(this).closest('tr').find('td:eq(11)').text();
		
		//alert(selected_hdr_id);
	$("#lorry_pass_no").val(lorry_pass_no);
	$("#cloth_quality").val(cloth_quality);
	$("#finish_quantity").val(finish_quantity);
	$("#finish_uom").val(finish_uom);	
	$("#finish_weight").val(finish_weight);
	$("#goods_desc").val(goods_desc);	
	$("#fdtl_id").val(fdtl_id);
	$("#fhdr_id").val(fhdr_id);
	$("#fperm_id").val(fperm_id);
	return false;
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////

$("#delt").click(function(event){

var del_po_tr = '#ftr_'+ $("#fnish_sl_no").val();
alert(del_po_tr);
var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(9)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#finish_details >tr').find('td:eq(9):contains("d")').length;
var rowCounb = $('#finish_details >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta != 1){


$(del_po_tr).remove();
}else{
var che_po_sl=$("#fnish_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}

}
else{
var rowCouna = $('#finish_details >tr').find('td:eq(9):contains("d")').length;
var rowCounb = $('#finish_details >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta !=1){

$(del_po_tr).closest('tr').find('td:eq(9)').text('d');
$(del_po_tr).hide();
}
else{
var che_po_sl=$("#fnish_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}
}
$('#resett').click();

return false;
});
////////////////////////////////virtual delete end////////////////	
/////////////////////////////////////save in//////////////////////////////////////////////////////////

	$("#finish_savein").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var entry_time=$('#entry_time').val();	
	var finish_vehicle_no=$('#finish_vehicle_no').val();
	if(finish_vehicle_no=='')
	{
		alert("Please Enter Vehicle No!");
		$("#finish_vehicle_no").focus();
		return false;
	}
	var driver_name=$('#finish_driver_name').val();
	if(driver_name=='')
	{
		alert("Please Enter Driver Name!");
		$("#driver_name").focus();
		return false;
	}
	var transporter=$('#transporter').val();
	if(transporter=='')
	{
		alert("Please Enter Transporter!");
		$("#transporter").focus();
		return false;
	}
	
	
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&finish_vehicle_no='+finish_vehicle_no+'&transporter='+transporter+'&driver_name='+driver_name;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "finishing_dispatch_savein.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#finish_reset").click();
			$("#finish_search_button").click();
	
			alert(data);
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
			});
			return false;
			});
/////////////////////////////////save in end///////////////////////////
/////////////////////////////////save out/////////////////////////////
$("#finish_saveout").click(function(event){
	
	var entry_date=((($('#entry_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var entry_time=((($('#entry_time').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

var finish_challan_no=((($('#finish_challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_challan_no=='')
{
 alert("Please Enter Challan No!");
 $('#finish_challan_no').focus();
 return false;
 }
var finish_challan_date=((($('#finish_challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_challan_date=='')
{
 alert("Please Select Challan Date !");
 $('#finish_challan_date').focus();
 return false;
 }
var finish_vehicle_no=((($('#finish_vehicle_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_vehicle_no=='')
{ 
alert("Please Enter Vehicle No !");
 $('#finish_vehicle_no').focus();
 return false;
 }
var finish_driver_name=((($('#finish_driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_driver_name=='')
{ 
alert("Please Enter Driver Name !");
$('#finish_driver_name').focus(); 
return false;
}
var transporter=((($('#transporter').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(transporter=='')
{ 
alert("Please Enter Transporter Name !");
$('#transporter').focus();
 return false;
 }
var whom_to_dispatch=((($('#whom_to_dispatch').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
if(whom_to_dispatch=='')
{ 
alert("Please Enter Whom To Dispatch !");
$('#whom_to_dispatch').focus();
 return false;
 }
var fhdr_id=((($('#fhdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var saverowCountf = (parseInt($('#finish_details >tr').length));
if( saverowCountf != 0 )
{
var f=1;
var wr_arrf='';
while(f <= saverowCountf)
{

var f_tr='#ftr_'+f;
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(2)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(3)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(5)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(6)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(10)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrf= wr_arrf+'~|~';
var wr_arrf= wr_arrf+((($(f_tr).find('td:eq(11)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if(f != saverowCountf){
var wr_arrf= wr_arrf+'||';
}

f++;
}	

		var datString = 'fr='+ saverowCountf +'&entry_date=' +entry_date+ '&entry_time=' +entry_time+'&finish_challan_no='+finish_challan_no+'&finish_challan_date=' + finish_challan_date+'&finish_vehicle_no=' + finish_vehicle_no+'&finish_driver_name='+finish_driver_name+'&transporter='+transporter+'&wr_arrf='+wr_arrf+'&fhdr_id='+fhdr_id+'&whom_to_dispatch='+whom_to_dispatch;
		
$.ajax({
      type: "POST",
      url: "finishing_dispatch_saveout.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();	
		
	$("#finish_reset").click();
	$("#finish_search_button").click();
alert(data);
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
////////////////////////////////save out end////////////////////////////

//////////////////////////////delete////////////////////////////////////////

$("#finish_del").click(function(event){
	
	
	var fhdr_id=$('#fhdr_id').val();
if(fhdr_id =='')
{
alert("Please Select a Record !");
}
else
{

if(confirm('Are you sure you want to delete?')){
var datString='fhdr_id='+fhdr_id;

$.ajax({
      type: "POST",
      url: "finishing_dispatch_delete.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#finish_reset").click();
			$("#finish_search_button").click();
	
			alert(data);
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
			});
			}
			}
			return false;
			});	

/////////////////////////////delete///////////////////////////////////////////
/////////////////////////////////finishing datawise search'/////////////////////////////////////
$("#finish_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "finishing_dispatch_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("finish_datewise").innerHTML = data;
		
		////////////////////on select each td from search///////////////////
$("#finish_datewise td").click(function(event){
	$("#resett").click();
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
//
		
    $("#finish_datewise td").css("background-color", "");
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
   	var finish_vehicle_no= $(this).closest('tr').find('td:eq(0)').text();
	var fhdr_id= $(this).closest('tr').find('td:eq(2)').text();  
	var finish_challan_no= $(this).closest('tr').find('td:eq(3)').text();	
	var finish_challan_date= $(this).closest('tr').find('td:eq(4)').text();
	var finish_driver_name= $(this).closest('tr').find('td:eq(5)').text();
	var transporter= $(this).closest('tr').find('td:eq(6)').text();
	var whom_to_dispatch= $(this).closest('tr').find('td:eq(7)').text();	
		  $("#fhdr_id").val(fhdr_id);
	$("#finish_vehicle_no").val(finish_vehicle_no).attr('disabled',false);
	$("#finish_challan_no").val(finish_challan_no).attr('disabled',false);
	$("#finish_challan_date").val(finish_challan_date).attr('disabled',false);
	$("#finish_driver_name").val(finish_driver_name).attr('disabled',false);
	$("#transporter").val(transporter);
	$("#whom_to_dispatch").val(whom_to_dispatch).attr('disabled',false);
	$('#finish_savein').hide();
	$('#finish_saveout').show();
	$('#finish_edit').show();
	$("#lorry_pass_no").attr('disabled',false);
	$("#cloth_quality").attr('disabled',false);
	$("#finish_quantity").attr('disabled',false);
	$("#finish_uom").attr('disabled',false);
	$("#finish_weight").attr('disabled',false);
	$("#goods_desc").attr('disabled',false);
	
	var datString = 'fhdr_id='+fhdr_id; 
	 					 
	  $.ajax({
      type: "POST",
      url: "finishing_dispatch_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#load").hide();
		document.getElementById("finish_details").innerHTML = data;
				
		$("#finish_details td").click(function () 
		{                  
		 var lorry_pass_no= $(this).closest('tr').find('td:eq(1)').text();
		var cloth_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var goods_desc= $(this).closest('tr').find('td:eq(3)').text();
		var finish_quantity= $(this).closest('tr').find('td:eq(4)').text();
		var finish_uom= $(this).closest('tr').find('td:eq(5)').text();
		var finish_weight= $(this).closest('tr').find('td:eq(6)').text();		
		var fperm_id= $(this).closest('tr').find('td:eq(9)').text();
		var fdtl_id= $(this).closest('tr').find('td:eq(10)').text();
		var fhdr_id= $(this).closest('tr').find('td:eq(11)').text();
		
		//alert(selected_hdr_id);
	$("#lorry_pass_no").val(lorry_pass_no);
	$("#cloth_quality").val(cloth_quality);
	$("#finish_quantity").val(finish_quantity);
	$("#finish_uom").val(finish_uom);	
	$("#finish_weight").val(finish_weight);
	$("#goods_desc").val(goods_desc);	
	$("#fdtl_id").val(fdtl_id);
	$("#fhdr_id").val(fhdr_id);
	$("#fperm_id").val(fperm_id);
	$("#finish_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
	$("#finish_challan_no").attr('disabled', false);	
	$("#finish_challan_date").attr('disabled', false);	
	$("#cloth_quality").attr('disabled', false);	
	$("#whom_to_dispatch").attr('disabled', false);	
	$("#goods_desc").attr('disabled', false);	
	$("#finish_quantity").attr('disabled', false);
});	

	var YtableEmulator = document.getElementById('finish_y-fake-scroll');
var XtableEmulator = document.getElementById('finish_x-table-emulator');
var table = document.getElementById('table_bd');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('finish_scroll');
var headerContainer = document.getElementById('finish_header-container');
var YfakeScrollablePanel = document.getElementById('finish_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('finish_x-fake-scroll');

YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
}	
	
	 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }					 
					 
	});	

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
		$("#finish_search_button").click();
////////////////////////////////finishing search end////////////////////////
////////////////////////////////edit//////////////////////////////////
$("#finish_edit").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var fhdr_id=$('#fhdr_id').val();
	if(fhdr_id =='')
	{
	alert("Please Select a Record !");
	}
	else
	{
	var finish_vehicle_no=$('#finish_vehicle_no').val();
	if(finish_vehicle_no=='')
	{ 
	alert("Please Enter Vehicle No !");
	$('#finish_vehicle_no').focus();
	return false;
	}	
	var finish_driver_name=$('#finish_driver_name').val();
	if(finish_driver_name=='')
	{ 
	alert("Please Enter Driver Name !");
	$('#finish_driver_name').focus();
	return false;
	}	
	var transporter=$('#transporter').val();
	if(transporter=='')
	{ 
	alert("Please Enter Transporter Name !");
	$('#transporter').focus();
	return false;
	}	
	var datString='finish_vehicle_no='+finish_vehicle_no+'&transporter='+transporter+'&finish_driver_name='+finish_driver_name+'&fhdr_id='+fhdr_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "finishing_dispatch_edit.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#finish_reset").click();
			$("#finish_search_button").click();
	
			alert(data);
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

///////////////////////////////edit end///////////////////////////////	
		
////////////////////////////////finishing end////////////////////////////
////////////////////////////////STORE START/////////////////////////////
/////////////////////reset//////////////////////
$("#store_reset").click(function() {
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$("#store_challan_no").val('');
$("#store_challan_date").val('');
$("#store_challan_no").focus();
$("#store_vehicle_no").val('');
$("#store_driver_name").val('');
$("#store_supp_name").val('');
$("#remarks").val('');
$("#dtl_id").val('');
$("#hdr_id").val('');
$("#perm_id").val('');
document.getElementById("store_details").innerHTML = '';
$("#store_datewise td").css("background-color", "");
$("#resettab").click();
$("#po_search_button").click();
$('#store_savein').show();
$('#store_saveout').hide();
 return false;
	});

/////////////////////VIRTUAL TABLE////////////////////////////////////
$("#resettab").click(function() {
$("#item_name").val('');
$('#item_name').focus();
$("#store_quantity").val('');
$("#store_dept").val('');
$("#store_uom").val('selected');
$("#dtl_id").val('');
$("#perm_id").val('');
$("#store_sl_no").val('');

$("#store_details td").css("background-color", "");
 return false;
	});

///////////////////////////save row//////////////////////////////
$("#savetab").bind("click",function(event){

var item_name=((($('#item_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(item_name=='')
	{
		alert("Please Enter Item Name !");
		$('#item_name').focus();
		return false;
	}	
	var store_quantity=((($('#store_quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(store_quantity=='')
	{
		alert("Please Quantity !");
		$('#store_quantity').focus();
		return false;
	}	
	var store_dept=((($('#store_dept').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	if(store_dept=='')
		{
		alert("Please Enter Department !");
		$('#store_dept').focus();
		return false;
		}
		
		var store_sl_no=$.trim(((($('#store_sl_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"))); 
		var store_uom=$("#store_uom").val();
		var dtl_id=$.trim(((($('#dtl_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
		var hdr_id=$.trim(((($('#hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
		var perm_id = $.trim(((($('#perm_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	//alert(perm_id);
	 if(store_sl_no==''){
	 
	 var last_td= $("#table_body tr:last").find('td:eq(0)').text();
	
	 if(last_td ==''){
	 store_sl_no=1;
	 }
	 else{
	 store_sl_no=(parseInt(last_td)+1);
	 }
	 
	 var tr_data = '<tr id=\"str_'+store_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"22px\">'+store_sl_no+'</td><td width=\"180px\" >'+item_name+'</td><td width=\"55px\" >'+store_quantity+'</td><td width=\"30px\" >'+store_uom+'</td><td width=\"70px\">'+store_dept+'</td><td width=\"48px\"></td><td width=\"48px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#table_body >tbody:last').append(tr_data)
$("#item_name").focus();
	  }
	else{
	 if(perm_id !=''){
	 
	 var tr_data = '<th width=\"8px\"><pre></th><td width=\"22px\">'+store_sl_no+'</td><td width=\"180px\" >'+item_name+'</td><td width=\"55px\" >'+store_quantity+'</td><td width=\"30px\" >'+store_uom+'</td><td width=\"70px\">'+store_dept+'</td><td width=\"48px\"></td><td width=\"48px\"></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+dtl_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+hdr_id+'</span></td><th width=\"8px\"><pre></th>';
		 	 	 	 

 $("#item_name").focus(); 
	 } 
	 	  else{
		 
	 	  var tr_data = '<th width=\"8px\"><pre></th><td width=\"22px\">'+store_sl_no+'</td><td width=\"180px\" >'+item_name+'</td><td width=\"55px\" >'+store_quantity+'</td><td width=\"30px\" >'+store_uom+'</td><td width=\"70px\">'+store_dept+'</td><td width=\"48px\"></td><td width=\"48px\"></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	$("#item_name").focus();
	 }	 			 
		
	$('#str_'+store_sl_no+'').html(tr_data);		

	}
	  $("#resettab").click();
	 
	var YtableEmulator = document.getElementById('jute_entry_y-table-emulator');
var XtableEmulator = document.getElementById('jute_entry_x-table-emulator');
var table = document.getElementById('table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('jute_entry_scroll');
var headerContainer = document.getElementById('jute_entry_header-container');
var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('jute_entry_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('jute_entry_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
}

return false;
});



//////////////////////VIRTUAL TABLE END/////////////////////////////////////////////
///////////////////////VIRTUAL TABLE ON SELECT/////////////////////////
$("#table_body td").live("click",function(event){

$("#table_body td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#store_sl_no").val(sl_no);
	//alert(sl_no);
	//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	    var item_name= $(this).closest('tr').find('td:eq(1)').text();
		var store_quantity= $(this).closest('tr').find('td:eq(2)').text();	
		var store_uom= $(this).closest('tr').find('td:eq(3)').text();
		var store_dept= $(this).closest('tr').find('td:eq(4)').text();
		
		var perm_id= $(this).closest('tr').find('td:eq(7)').text();
		var dtl_id= $(this).closest('tr').find('td:eq(8)').text();
		var hdr_id= $(this).closest('tr').find('td:eq(9)').text();
		
		//alert(selected_hdr_id);
	$("#item_name").val(item_name);
	$("#store_quantity").val(store_quantity);
	$("#store_uom").val(store_uom);
	$("#store_dept").val(store_dept);	
	$("#dtl_id").val(dtl_id);
	$("#hdr_id").val(hdr_id);
	$("#perm_id").val(perm_id);
	return false;
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////

$("#deltab").click(function(event){

var del_po_tr = '#str_'+ $("#store_sl_no").val();

var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(7)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#store_details >tr').find('td:eq(7):contains("d")').length;
var rowCounb = $('#store_details >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta != 1){


$(del_po_tr).remove();
}else{
var che_po_sl=$("#store_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}

}
else{
var rowCouna = $('#store_details >tr').find('td:eq(7):contains("d")').length;
var rowCounb = $('#store_details >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta !=1){

$(del_po_tr).closest('tr').find('td:eq(7)').text('d');
$(del_po_tr).hide();
}
else{
var che_po_sl=$("#store_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}
}
$('#resetform').click();

return false;
});
////////////////////////////////virtual delete end////////////////
////////////////////////////////SAVE DATA/////////////////////////

$("#store_savein").click(function(event){

var entry_date=((($('#entry_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var entry_time=((($('#entry_time').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

var store_challan_no_wr=((($('#store_challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_challan_no_wr=='')
{
 alert("Please Enter Challan No!");
 $('#store_challan_no').focus();
 return false;
 }
var store_challan_date_wr=((($('#store_challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var store_vehicle_no_wr=((($('#store_vehicle_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_vehicle_no_wr=='')
{ 
alert("Please Enter Vehicle No !");
 $('#store_vehicle_no').focus();
 return false;
 }
var store_driver_name_wr=((($('#store_driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_driver_name_wr=='')
{ 
alert("Please Enter Driver Name !");
$('#store_driver_name').focus(); 
return false;
}
var store_supp_name_wr=((($('#store_supp_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_supp_name_wr=='')
{ 
alert("Please Enter Supplier Name !");
$('#store_supp_name').focus();
 return false;
 }
var remarks_wr=((($('#remarks').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 

var hdr_id=((($('#hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var saverowCounts = (parseInt($('#store_details >tr').length));
if( saverowCounts != 0 )
{
var c=1;
var wr_arrs='';
while(c <= saverowCounts)
{

var s_tr='#str_'+c;
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrs= wr_arrs+'~|~';
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(2)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrs= wr_arrs+'~|~';
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(3)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrs= wr_arrs+'~|~';
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrs= wr_arrs+'~|~';
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrs= wr_arrs+'~|~';
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arrs= wr_arrs+'~|~';
var wr_arrs= wr_arrs+((($(s_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if(c != saverowCounts){
var wr_arrs= wr_arrs+'||';
}

c++;
}	

		

		var datString = 'r='+ saverowCounts +'&entry_date=' +entry_date+ '&entry_time=' +entry_time+'&store_challan_no_wr='+store_challan_no_wr+'&store_challan_date_wr=' + store_challan_date_wr+'&store_vehicle_no_wr=' + store_vehicle_no_wr+'&store_driver_name_wr='+store_driver_name_wr+'&remarks_wr='+remarks_wr+'&wr_arrs='+wr_arrs+'&hdr_id='+hdr_id+'&store_supp_name_wr='+store_supp_name_wr;
		
		
$.ajax({
      type: "POST",
      url: "store_entry_register_savein.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();	
		
	$("#store_reset").click();
	$("#po_search_button").click();
alert(data);
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

///////////////////////////////////////////save end//////////////////////////////////////////	
////////////////////////////////SAVE END//////////////////////////////////////////////////
/////////////////////////save out start/////////////////////////////////////////////////////////////
$("#store_saveout").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var entry_time=$('#entry_time').val();	
	var rec_id=$("#hdr_id").val();
		
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&rec_id='+rec_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "store_entry_register_saveout.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
		    $("#store_reset").click();
			$("#po_search_button").click();		
	
$("#load").hide();		
		alert(data);		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});	
return false;	
	});
////////////////////////////////save out end//////////////////////////////////////////////////
////////////////////////////////delete start////////////////////////////////////////////////
$("#store_del").click(function(event){
var rec_id=$("#hdr_id").val();	
if(rec_id=='')
{
alert("Please Select a Record!");
}
else
{
if(confirm('Are you sure you want to delete?')){

var datString='rec_id='+rec_id;

$.ajax({
      type: "POST",
      url: "store_entry_register_delete.php",
      data: datString,
      success: function(data) {
        
		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading			
					
$("#load").fadeOut("slow");

$("#store_reset").click();

$("#po_search_button").click();

	alert(data);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
}
}
return false;
});
/////////////////////////////////delete end/////////////////////////////////////////////
/////////////////////////////////store entry search'/////////////////////////////////////
$("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "store_entry_register_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("store_datewise").innerHTML = data;
		
		////////////////////on select each td from search///////////////////
$("#store_datewise td").click(function(event){
	
	$('#store_savein').hide();
	$('#store_saveout').show();
	$('#resettab').click();
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");

		
            $("#store_datewise td").css("background-color", "");
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   
	var hdr_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#hdr_id").val(hdr_id);	
	var challan_no= $(this).closest('tr').find('td:eq(3)').text();
	$("#store_challan_no").val(challan_no);
	var challan_date= $(this).closest('tr').find('td:eq(4)').text();	
    $("#store_challan_date").val(challan_date);
	var driver_name= $(this).closest('tr').find('td:eq(5)').text();
    $("#store_driver_name").val(driver_name);	
	var supplier_name= $(this).closest('tr').find('td:eq(6)').text();
	$("#store_supp_name").val(supplier_name);
	var remarks= $(this).closest('tr').find('td:eq(7)').text();	
    $("#remarks").val(remarks);
	var store_vehicle_no= $(this).closest('tr').find('td:eq(0)').text();	
    $("#store_vehicle_no").val(store_vehicle_no);
	
	
	
	var datString = 'hdr_id='+hdr_id; 
	//alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "store_entry_register_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#load").hide();
		document.getElementById("store_details").innerHTML = data;
				
		$("#store_details td").click(function () 
		{                   
		
		 var item_name= $(this).closest('tr').find('td:eq(1)').text();
		var store_quantity= $(this).closest('tr').find('td:eq(2)').text();	
		var store_quantity= $(this).closest('tr').find('td:eq(3)').text();	
		var store_dept= $(this).closest('tr').find('td:eq(4)').text();
		var perm_id= $(this).closest('tr').find('td:eq(7)').text();
		var dtl_id= $(this).closest('tr').find('td:eq(8)').text();
		var hdr_id= $(this).closest('tr').find('td:eq(9)').text();
		
		//alert(selected_hdr_id);
	$("#item_name").val(item_name);
	$("#store_quantity").val(store_quantity);
	$("#store_uom").val(store_uom);
	$("#store_dept").val(store_dept);	
	$("#dtl_id").val(dtl_id);
	$("#hdr_id").val(hdr_id);
	$("#perm_id").val(perm_id);
	$('#store_savein').show();
	$('#store_saveout').hide();
	$("#store_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	

});

	var YtableEmulator = document.getElementById('jute_entry_y-table-emulator');
var XtableEmulator = document.getElementById('jute_entry_x-table-emulator');
var table = document.getElementById('table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('jute_entry_scroll');
var headerContainer = document.getElementById('jute_entry_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('jute_entry_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('jute_entry_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	
}

	 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }					 
					 
	});	//2nd call end	

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
		
		
		
		
		
		$("#po_search_button").click();
	/////////////////////////////table hadr///////////////
		var YtableEmulator = document.getElementById('jute_entry_y-table-emulator');
var XtableEmulator = document.getElementById('jute_entry_x-table-emulator');
var table = document.getElementById('table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('jute_entry_scroll');
var headerContainer = document.getElementById('jute_entry_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('jute_entry_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('jute_entry_x-fake-scroll');


YfakeScrollablePanel.style.top = headerContainer.clientHeight == 0 ? "0px" : headerContainer.clientHeight + "px";
scrollablePanel.onscroll = function (e) {
  	XfakeScrollablePanel.scrollTop = scrollablePanel.scrollTop;
}
YfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollTop = YfakeScrollablePanel.scrollTop;
}
XfakeScrollablePanel.onscroll = function (e) {
  	scrollablePanel.scrollLeft = XfakeScrollablePanel.scrollLeft;
	headerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	footerContainer.scrollLeft = XfakeScrollablePanel.scrollLeft;
	
}

///////////////////////////////STORE END/////////////////////////////////////////	
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});

		
	});
	



});