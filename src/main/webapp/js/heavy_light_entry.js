$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////
$('#quality_desc').attr('disabled',true);
	$("#order").attr('disabled',true);
	$('#length').attr('disabled',true);	
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').attr('disabled',false);	
$('#quality_code').val('').attr('disabled',false).css("border-color", "");
$('#quality_code').focus();	
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#quality_desc').val('').attr('disabled',true);
$('#order').val('').attr('disabled',true);	
$('#bales').val('').css("border-color", "");	
$('#unit').val("selected");
$('#avg_moisture').val('').css("border-color", "");
$('#length').val('').attr('disabled',true);	
$('#standrad_weight').val('').css("border-color", "");
$('#observation_Weight').val('').css("border-color", "");
$('#currective_weight').val('').css("border-color", "");
$('#observation').val('').css("border-color", "");
$('#currective').val('').css("border-color", "");
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
$("#po_search_button").click();


///////////////////////////////////////////live table//////////////////////////////////
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "heavy_light_entry_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#details").html(data);
	  
	  /////////////////////////////////////////////////table headar starts///////////////						 
var YtableEmulator = document.getElementById('y-table-emulator');
var XtableEmulator = document.getElementById('x-table-emulator');
var table = document.getElementById('table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('scroll');
var headerContainer = document.getElementById('header-container');
var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('x-fake-scroll');


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

	$("#details td").click(function () 
		{                  
		
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
    	var quality_code= $(this).closest('tr').find('td:eq(2)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(3)').text();
		var order= $(this).closest('tr').find('td:eq(4)').text();		
		var bales= $(this).closest('tr').find('td:eq(5)').text();			
		var unit= $(this).closest('tr').find('td:eq(6)').text();
		var length= $(this).closest('tr').find('td:eq(7)').text();
		var avg_moisture= $(this).closest('tr').find('td:eq(8)').text();
		var standrad_weight= $(this).closest('tr').find('td:eq(9)').text();
		var observation_Weight= $(this).closest('tr').find('td:eq(10)').text();
		var currective_weight= $(this).closest('tr').find('td:eq(11)').text();
		var observation= $(this).closest('tr').find('td:eq(12)').text();
		var currective= $(this).closest('tr').find('td:eq(13)').text();
		var rec_id= $(this).closest('tr').find('td:eq(14)').text();
		
	 
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#quality_code").val(quality_code).attr('disabled',true);	
	$('#quality_desc').attr('disabled',true);
	$("#order").val(order).attr('disabled',true);
	$("#bales").val(bales);	
	$("#unit").val(unit);
	$("#avg_moisture").val(avg_moisture);	
	$("#length").val(length).attr('disabled',true);
	$("#standrad_weight").val(standrad_weight);
	$("#observation_Weight").val(observation_Weight);	
	$("#currective_weight").val(currective_weight);	
	$("#observation").val(observation);
	$("#currective").val(currective);	
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});		
 //////////////////////////////////////////live table end/////////////////////////
///////////////////////////////////////working hour///////////////////////

return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
var issue_date=$('#issue_date').val();
var unit=$('#unit').val();
var quality_code=$('#quality_code').val();
if(quality_code=='')
	{
		alert("Please Enter Quality Code !");
		$('#quality_code').focus().css("border-color", "red");
		return false;
	}
var bales=$('#bales').val();
if(bales=='')
	{
		alert("Please Enter No of Bales !");
		$('#bales').focus().css("border-color", "red");
		return false;
	}
var avg_moisture=$('#avg_moisture').val();
if(avg_moisture=='')
	{
		alert("Please Enter Avg Moisture !");
			$('#avg_moisture').focus().css("border-color", "red");
		return false;
	}	

var standrad_weight=$('#standrad_weight').val();
if(standrad_weight=='')
	{
		alert("Please Enter Standrad Weight !");
		$('#standrad_weight').focus().css("border-color", "red");
		return false;
	}
	var observation_Weight=$('#observation_Weight').val();
if(observation_Weight=='')
	{
		alert("Please Enter Observation Weight !");
		$('#observation_Weight').focus().css("border-color", "red");
		return false;
	}
	var currective_weight=$('#currective_weight').val();
if(currective_weight=='')
	{
		alert("Please Enter Currective Weight !");
		$('#currective_weight').focus().css("border-color", "red");
		return false;
	}
	var observation=$('#observation').val();
if(observation=='')
	{
		alert("Please Enter Observation !");
		$('#observation').focus().css("border-color", "red");
		return false;
	}
	var currective=$('#currective').val();
if(currective=='')
	{
		alert("Please Enter Currective !");
		$('#currective').focus().css("border-color", "red");
		return false;
	}

	var datString='issue_date='+issue_date+'&unit='+unit+'&quality_code='+quality_code+'&bales='+bales+'&avg_moisture='+avg_moisture+'&standrad_weight='+standrad_weight+'&observation_Weight='+observation_Weight+'&currective_weight='+currective_weight+'&observation='+observation+'&currective='+currective;

	
	$.ajax({
      type: "POST",
      url: "heavy_light_entry_data_save.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();


			$("#resettab").click();
		
	
		$("#po_search_button").click();	
			alert(data);
			
		$('#quality_code').focus();	
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
			});
			return false;
			});

///////////////////////////////////////////save end//////////////////////////////////////////	
///////////////////////////////////////////edit start/////////////////////////////////////////
$("#jute_entry_edit").click(function(event){
	
var rec_id=$('#rec_id').val();	
if(rec_id =='')
{
alert("Please Select a Record!");
}
else
{
var unit=$('#unit').val();
var bales=$('#bales').val();
if(bales=='')
	{
		alert("Please Enter No of Bales !");
		$('#bales').focus().css("border-color", "red");
		return false;
	}
var avg_moisture=$('#avg_moisture').val();
if(avg_moisture=='')
	{
		alert("Please Enter Avg Moisture !");
			$('#avg_moisture').focus().css("border-color", "red");
		return false;
	}	

var standrad_weight=$('#standrad_weight').val();
if(standrad_weight=='')
	{
		alert("Please Enter Standrad Weight !");
		$('#standrad_weight').focus().css("border-color", "red");
		return false;
	}
	var observation_Weight=$('#observation_Weight').val();
if(observation_Weight=='')
	{
		alert("Please Enter Observation Weight !");
		$('#observation_Weight').focus().css("border-color", "red");
		return false;
	}
	var currective_weight=$('#currective_weight').val();
if(currective_weight=='')
	{
		alert("Please Enter Currective Weight !");
		$('#currective_weight').focus().css("border-color", "red");
		return false;
	}
	var observation=$('#observation').val();
if(observation=='')
	{
		alert("Please Enter Observation !");
		$('#observation').focus().css("border-color", "red");
		return false;
	}
	var currective=$('#currective').val();
if(currective=='')
	{
		alert("Please Enter Currective !");
		$('#currective').focus().css("border-color", "red");
		return false;
	}

	var datString='bales='+bales+'&avg_moisture='+avg_moisture+'&standrad_weight='+standrad_weight+'&observation_Weight='+observation_Weight+'&currective_weight='+currective_weight+'&observation='+observation+'&currective='+currective+'&unit='+unit+'&rec_id='+rec_id;

	
	$.ajax({
      type: "POST",
      url: "heavy_light_entry_edit.php",
      data: datString,
      success: function(data) {        

		
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");

$("#load").hide();
			$("#resettab").click();
					
		$("#po_search_button").click();	
			alert(data);
			$('#quality_code').focus();	
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

///////////////////////////////////////////edit end//////////////////////////////////////////
//////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "heavy_light_entry_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
			
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	 var issue_date= $(this).closest('tr').find('td:eq(0)').text();
    $("#issue_date").val(issue_date).attr('disabled',true);	
	var quality_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#quality_code").val(quality_code).attr('disabled',true);	
	
	var datString = 'issue_date='+issue_date+'&quality_code='+quality_code; 
	 	 
	  $.ajax({
      type: "POST",
      url: "heavy_light_entry_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);
		
		
		$("#details td").click(function () 
		{                  
		
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
    	var quality_code= $(this).closest('tr').find('td:eq(2)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(3)').text();
		var order= $(this).closest('tr').find('td:eq(4)').text();		
		var bales= $(this).closest('tr').find('td:eq(5)').text();			
		var unit= $(this).closest('tr').find('td:eq(6)').text();
		var length= $(this).closest('tr').find('td:eq(7)').text();
		var avg_moisture= $(this).closest('tr').find('td:eq(8)').text();
		var standrad_weight= $(this).closest('tr').find('td:eq(9)').text();
		var observation_Weight= $(this).closest('tr').find('td:eq(10)').text();
		var currective_weight= $(this).closest('tr').find('td:eq(11)').text();
		var observation= $(this).closest('tr').find('td:eq(12)').text();
		var currective= $(this).closest('tr').find('td:eq(13)').text();
		var rec_id= $(this).closest('tr').find('td:eq(14)').text();
		
	 
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#quality_code").val(quality_code).attr('disabled',true);	
	$('#quality_desc').attr('disabled',true);
	$("#order").val(order).attr('disabled',true);
	$("#bales").val(bales);	
	$("#unit").val(unit);
	$("#avg_moisture").val(avg_moisture);	
	$("#length").val(length).attr('disabled',true);
	$("#standrad_weight").val(standrad_weight);
	$("#observation_Weight").val(observation_Weight);	
	$("#currective_weight").val(currective_weight);	
	$("#observation").val(observation);
	$("#currective").val(currective);	
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	  /////////////////////////////////////////////////table headar starts///////////////						 
var YtableEmulator = document.getElementById('y-table-emulator');
var XtableEmulator = document.getElementById('x-table-emulator');
var table = document.getElementById('table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('scroll');
var headerContainer = document.getElementById('header-container');
var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('x-fake-scroll');


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
	$("#po_search_button").click();	 
//////////////////////////////////////////search end////////////////////////////////////////////////
//////////////////////////////////////////delete//////////////////////////////////////////////
$("#deltab").click(function(event){
//alert("test");
var rec_id=$("#rec_id").val();	
if(rec_id =='')
{
alert("Please Select a Record!");
}
else
{
	
if(confirm('Are you sure you want to delete?')){
var datString='rec_id='+rec_id;

$.ajax({
      type: "POST",
      url: "heavy_light_entry_delete.php",
      data: datString,
      success: function(data) {
        
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			
$("#load").hide();

$("#resettab").click();

 	$("#po_search_button").click();
	alert(data);
	$('#quality_code').focus();	

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

////////////////////////////////////////delete end///////////////////////////////////////////////

///////////////////////////////////////////live table//////////////////////////////////
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "heavy_light_entry_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#details").html(data);
	  
	  /////////////////////////////////////////////////table headar starts///////////////						 
var YtableEmulator = document.getElementById('y-table-emulator');
var XtableEmulator = document.getElementById('x-table-emulator');
var table = document.getElementById('table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('scroll');
var headerContainer = document.getElementById('header-container');
var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('x-fake-scroll');


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

	$("#details td").click(function () 
		{                  
		
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
    	var quality_code= $(this).closest('tr').find('td:eq(2)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(3)').text();
		var order= $(this).closest('tr').find('td:eq(4)').text();		
		var bales= $(this).closest('tr').find('td:eq(5)').text();			
		var unit= $(this).closest('tr').find('td:eq(6)').text();
		var length= $(this).closest('tr').find('td:eq(7)').text();
		var avg_moisture= $(this).closest('tr').find('td:eq(8)').text();
		var standrad_weight= $(this).closest('tr').find('td:eq(9)').text();
		var observation_Weight= $(this).closest('tr').find('td:eq(10)').text();
		var currective_weight= $(this).closest('tr').find('td:eq(11)').text();
		var observation= $(this).closest('tr').find('td:eq(12)').text();
		var currective= $(this).closest('tr').find('td:eq(13)').text();
		var rec_id= $(this).closest('tr').find('td:eq(14)').text();
		
	 
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#quality_code").val(quality_code).attr('disabled',true);	
	$('#quality_desc').attr('disabled',true);
	$("#order").val(order).attr('disabled',true);
	$("#bales").val(bales);	
	$("#unit").val(unit);
	$("#avg_moisture").val(avg_moisture);	
	$("#length").val(length).attr('disabled',true);
	$("#standrad_weight").val(standrad_weight);
	$("#observation_Weight").val(observation_Weight);	
	$("#currective_weight").val(currective_weight);	
	$("#observation").val(observation);
	$("#currective").val(currective);	
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});		
 $('#quality_code').focus();	
 //////////////////////////////////////////live table end/////////////////////////
 });//total doc ready


