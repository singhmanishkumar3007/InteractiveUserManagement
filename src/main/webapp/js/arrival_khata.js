$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	


////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#lorry_no').val('');
$('#challan_no').val('');
$('#broker').val('');
$('#party').val('');
$('#mukam').val('');
$('#marka').val('');
$('#quality').val('');
$('#bales').val('');
$('#dot').val('');
$('#rec_id').val('');
$('#moisture_report').val('');
$('#quality_report').val('');

$("#po_datewise td").css("background-color", "");
$("#arrival_khata_details td").css("background-color", "");
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
	
var lorry_no=$('#lorry_no').val();
if(lorry_no=='')
	{
		alert("Please Enter Lorry No!");
		return false;
	}
var challan_no=$('#challan_no').val();
if(challan_no=='')
	{
		alert("Please Enter Challan No!");
		return false;
	}
var broker=$('#broker').val();
if(broker=='')
	{
		alert("Please Enter Broker Name!");
		return false;
	}
var party=$('#party').val();
/* if(party=='')
	{
		alert("Please Enter Party Name!");
		return false;
	} */
var mukam=$('#mukam').val();
if(mukam=='')
	{
		alert("Please Enter Mukam!");
		return false;
	}
var marka=$('#marka').val();
if(marka=='')
	{
		alert("Please Enter Marka!");
		return false;
	}

var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Quality!");
		return false;
	}
var bales=$('#bales').val();
if(bales=='')
	{
		alert("Please Enter No of Bales!");
		return false;
	}
var dot=$('#dot').val();
if(dot=='')
	{
		alert("Please Enter Dot!");
		return false;
	}
var moisture_report=$('#moisture_report').val();
if(moisture_report=='')
	{
		alert("Please Enter Moisture Report!");
		return false;
	}
var quality_report=$('#quality_report').val();
if(quality_report=='')
	{
		alert("Please Enter Quality Report!");
		return false;
	}
	
	var datString='lorry_no='+lorry_no+'&challan_no='+challan_no+'&broker='+broker+'&party='+party+'&mukam='+mukam+'&marka='+marka+'&quality='+quality+'&bales='+bales+'&dot='+dot+'&moisture_report='+moisture_report+'&quality_report='+quality_report;
	//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "arrival_khata_data_save.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#resettab").click();
		
			var datString;
	$.ajax({
      type: "POST",
      url: "arrival_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#arrival_khata_details").html(data);
	  
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

	}
	});		
		$("#po_search_button").click();	
			alert(data);
			
			$("#arrival_khata_details td").click(function () 
		{                  
		
		var selected_lorry_no= $(this).closest('tr').find('td:eq(1)').text();
		var selected_challan_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_broker= $(this).closest('tr').find('td:eq(3)').text();
		var selected_party= $(this).closest('tr').find('td:eq(4)').text();
		var selected_mukam= $(this).closest('tr').find('td:eq(5)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(6)').text();	
		var selected_quality= $(this).closest('tr').find('td:eq(7)').text();		
		var selected_bales= $(this).closest('tr').find('td:eq(8)').text();	
		var selected_dot= $(this).closest('tr').find('td:eq(9)').text();	
		var selected_moisture_report= $(this).closest('tr').find('td:eq(10)').text();		
		var selected_quality_report= $(this).closest('tr').find('td:eq(11)').text();		
		var selected_rec_id= $(this).closest('tr').find('td:eq(13)').text();
			
				
	$("#lorry_no").val(selected_lorry_no);
	$("#challan_no").val(selected_challan_no);
	$("#broker").val(selected_broker);
	$("#party").val(selected_party);
	$("#mukam").val(selected_mukam);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#bales").val(selected_bales);
	$("#dot").val(selected_dot);
	$("#moisture_report").val(selected_moisture_report);
	$("#quality_report").val(selected_quality_report);
	$("#rec_id").val(selected_rec_id);
	
	$("#arrival_khata_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	

			}
			});
			return false;
			});

///////////////////////////////////////////save end//////////////////////////////////////////	
///////////////////////////////////////////edit start/////////////////////////////////////////
$("#jute_entry_edit").click(function(event){
	
var lorry_no=$('#lorry_no').val();
if(lorry_no=='')
	{
		alert("Please Enter Lorry No!");
		return false;
	}
var challan_no=$('#challan_no').val();
if(challan_no=='')
	{
		alert("Please Enter Challan No!");
		return false;
	}
var broker=$('#broker').val();
if(broker=='')
	{
		alert("Please Enter Broker Name!");
		return false;
	}
var party=$('#party').val();
/* if(party=='')
	{
		alert("Please Enter Party Name!");
		return false;
	} */
var mukam=$('#mukam').val();
if(mukam=='')
	{
		alert("Please Enter Mukam!");
		return false;
	}
var marka=$('#marka').val();
if(marka=='')
	{
		alert("Please Enter Marka!");
		return false;
	}

var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Quality!");
		return false;
	}
var bales=$('#bales').val();
if(bales=='')
	{
		alert("Please Enter No of Bales!");
		return false;
	}
var dot=$('#dot').val();
if(dot=='')
	{
		alert("Please Enter Dot!");
		return false;
	}
var moisture_report=$('#moisture_report').val();
if(moisture_report=='')
	{
		alert("Please Enter Moisture Report!");
		return false;
	}
var quality_report=$('#quality_report').val();
if(quality_report=='')
	{
		alert("Please Enter Quality Report!");
		return false;
	}
var rec_id=$('#rec_id').val();

	var datString='lorry_no='+lorry_no+'&challan_no='+challan_no+'&broker='+broker+'&party='+party+'&mukam='+mukam+'&marka='+marka+'&quality='+quality+'&bales='+bales+'&dot='+dot+'&moisture_report='+moisture_report+'&quality_report='+quality_report+'&rec_id='+rec_id;
	//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "arrival_khata_data_edit.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#resettab").click();
		
			var datString;
	$.ajax({
      type: "POST",
      url: "arrival_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#arrival_khata_details").html(data);
	  
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

	}
	});		
		$("#po_search_button").click();	
			alert(data);
			
			$("#arrival_khata_details td").click(function () 
		{                  
		
		var selected_lorry_no= $(this).closest('tr').find('td:eq(1)').text();
		var selected_challan_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_broker= $(this).closest('tr').find('td:eq(3)').text();
		var selected_party= $(this).closest('tr').find('td:eq(4)').text();
		var selected_mukam= $(this).closest('tr').find('td:eq(5)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(6)').text();	
		var selected_quality= $(this).closest('tr').find('td:eq(7)').text();		
		var selected_bales= $(this).closest('tr').find('td:eq(8)').text();	
		var selected_dot= $(this).closest('tr').find('td:eq(9)').text();	
		var selected_moisture_report= $(this).closest('tr').find('td:eq(10)').text();		
		var selected_quality_report= $(this).closest('tr').find('td:eq(11)').text();		
		var selected_rec_id= $(this).closest('tr').find('td:eq(13)').text();
			
				
	$("#lorry_no").val(selected_lorry_no);
	$("#challan_no").val(selected_challan_no);
	$("#broker").val(selected_broker);
	$("#party").val(selected_party);
	$("#mukam").val(selected_mukam);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#bales").val(selected_bales);
	$("#dot").val(selected_dot);
	$("#moisture_report").val(selected_moisture_report);
	$("#quality_report").val(selected_quality_report);
	$("#rec_id").val(selected_rec_id);
	
	$("#arrival_khata_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	

			}
			});
			return false;
			});

///////////////////////////////////////////edit end//////////////////////////////////////////
///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "arrival_khata_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
			$("#resettab").click();	
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	$("#resettab").click();	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	//alert("test");
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var select_rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#rec_id").val(select_rec_id);
	
	var datString = 'select_rec_id='+select_rec_id; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "arrival_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#arrival_khata_details").html(data);
		$("#load").hide();
		
		$("#arrival_khata_details td").click(function () 
		{                  
		
		var selected_lorry_no= $(this).closest('tr').find('td:eq(1)').text();
		var selected_challan_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_broker= $(this).closest('tr').find('td:eq(3)').text();
		var selected_party= $(this).closest('tr').find('td:eq(4)').text();
		var selected_mukam= $(this).closest('tr').find('td:eq(5)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(6)').text();	
		var selected_quality= $(this).closest('tr').find('td:eq(7)').text();		
		var selected_bales= $(this).closest('tr').find('td:eq(8)').text();	
		var selected_dot= $(this).closest('tr').find('td:eq(9)').text();	
		var selected_moisture_report= $(this).closest('tr').find('td:eq(10)').text();		
		var selected_quality_report= $(this).closest('tr').find('td:eq(11)').text();		
		var selected_rec_id= $(this).closest('tr').find('td:eq(13)').text();
			
				
	$("#lorry_no").val(selected_lorry_no);
	$("#challan_no").val(selected_challan_no);
	$("#broker").val(selected_broker);
	$("#party").val(selected_party);
	$("#mukam").val(selected_mukam);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#bales").val(selected_bales);
	$("#dot").val(selected_dot);
	$("#moisture_report").val(selected_moisture_report);
	$("#quality_report").val(selected_quality_report);
	$("#rec_id").val(selected_rec_id);
	
	$("#arrival_khata_details td").css("background-color", "");	
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
		}
		});
		});
		
		}
			});
			return false;
		});
		 
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
      url: "arrival_khata_data_delete.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			
$("#load").hide();

$("#resettab").click();

var datString;
	$.ajax({
      type: "POST",
      url: "arrival_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#arrival_khata_details").html(data);
	  
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
	
	$("#arrival_khata_details td").click(function () 
		{                  
		
		var selected_lorry_no= $(this).closest('tr').find('td:eq(1)').text();
		var selected_challan_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_broker= $(this).closest('tr').find('td:eq(3)').text();
		var selected_party= $(this).closest('tr').find('td:eq(4)').text();
		var selected_mukam= $(this).closest('tr').find('td:eq(5)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(6)').text();	
		var selected_quality= $(this).closest('tr').find('td:eq(7)').text();		
		var selected_bales= $(this).closest('tr').find('td:eq(8)').text();	
		var selected_dot= $(this).closest('tr').find('td:eq(9)').text();	
		var selected_moisture_report= $(this).closest('tr').find('td:eq(10)').text();		
		var selected_quality_report= $(this).closest('tr').find('td:eq(11)').text();		
		var selected_rec_id= $(this).closest('tr').find('td:eq(13)').text();
			
				
	$("#lorry_no").val(selected_lorry_no);
	$("#challan_no").val(selected_challan_no);
	$("#broker").val(selected_broker);
	$("#party").val(selected_party);
	$("#mukam").val(selected_mukam);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#bales").val(selected_bales);
	$("#dot").val(selected_dot);
	$("#moisture_report").val(selected_moisture_report);
	$("#quality_report").val(selected_quality_report);
	$("#rec_id").val(selected_rec_id);
	
	$("#arrival_khata_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	

	}
	});		
	$("#po_search_button").click();
	alert(data);
	

}
});
}
}
return false;
});

////////////////////////////////////////delete end///////////////////////////////////////////////

///////////////////////////////////////////live table//////////////////////////////////
 var datString;
	$.ajax({
      type: "POST",
      url: "arrival_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#arrival_khata_details").html(data);
	  
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
	
	$("#arrival_khata_details td").click(function () 
		{                  
		
		var selected_lorry_no= $(this).closest('tr').find('td:eq(1)').text();
		var selected_challan_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_broker= $(this).closest('tr').find('td:eq(3)').text();
		var selected_party= $(this).closest('tr').find('td:eq(4)').text();
		var selected_mukam= $(this).closest('tr').find('td:eq(5)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(6)').text();	
		var selected_quality= $(this).closest('tr').find('td:eq(7)').text();		
		var selected_bales= $(this).closest('tr').find('td:eq(8)').text();	
		var selected_dot= $(this).closest('tr').find('td:eq(9)').text();	
		var selected_moisture_report= $(this).closest('tr').find('td:eq(10)').text();		
		var selected_quality_report= $(this).closest('tr').find('td:eq(11)').text();		
		var selected_rec_id= $(this).closest('tr').find('td:eq(13)').text();
			
				
	$("#lorry_no").val(selected_lorry_no);
	$("#challan_no").val(selected_challan_no);
	$("#broker").val(selected_broker);
	$("#party").val(selected_party);
	$("#mukam").val(selected_mukam);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#bales").val(selected_bales);
	$("#dot").val(selected_dot);
	$("#moisture_report").val(selected_moisture_report);
	$("#quality_report").val(selected_quality_report);
	$("#rec_id").val(selected_rec_id);
	
	$("#arrival_khata_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	

	}
	});		
 });//total doc ready


