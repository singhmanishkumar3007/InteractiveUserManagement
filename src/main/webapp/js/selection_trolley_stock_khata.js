$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();

////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').attr('disabled',false);	
$('#quality').val('').css("border-color", "");		
$('#bales').val('').css("border-color", "");		
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var issue_date=$('#issue_date').val();
var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Jute Quality !");
		$('#quality').focus().css("border-color", "red");
		return false;
	}
var bales=$('#bales').val();
if(bales=='')
	{
		alert("Please Enter No of Bales !");
		$('#bales').focus().css("border-color", "red");
		return false;
	}


	var datString='issue_date='+issue_date+'&quality='+quality+'&bales='+bales;

	
	$.ajax({
      type: "POST",
      url: "selection_trolley_stock_khata_data_save.php",
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
      url: "selection_trolley_stock_khata_live_table.php",
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
		var quality= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(4)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);
	$("#quality").val(quality);					
	$("#bales").val(bales);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	}
	});		
		
		$("#po_search_button").click();	
			alert(data);
			$("#quality").focus();	
		
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
var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Jute Quality !");
		$('#quality').focus().css("border-color", "red");
		return false;
	}
var bales=$('#bales').val();
if(bales=='')
	{
		alert("Please Enter No of Bales !");
		$('#bales').focus().css("border-color", "red");
		return false;
	}

	var datString='quality='+quality+'&bales='+bales+'&rec_id='+rec_id;
		//alert(datString);
	$.ajax({
      type: "POST",
      url: "selection_trolley_stock_khata_edit.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#resettab").click();
		
		var datString;
	var datString;
	$.ajax({
      type: "POST",
      url: "selection_trolley_stock_khata_live_table.php",
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
		var quality= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(4)').text();
		
		$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#quality").val(quality);					
	$("#bales").val(bales);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	}
	});		
			
		$("#po_search_button").click();	
			alert(data);
			
		

			}
			});
			}
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
      url: "selection_trolley_stock_khata_datewise.php",
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
	
    var rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#rec_id").val(rec_id);
	
	var datString = 'rec_id='+rec_id; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "selection_trolley_stock_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);
		
		
		$("#details td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var quality= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(4)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#quality").val(quality);					
	$("#bales").val(bales);		
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

		}
		});
		});
		
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
      url: "selection_trolley_stock_khata_delete.php",
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
      url: "selection_trolley_stock_khata_live_table.php",
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
		var quality= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(4)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);	
	$("#quality").val(quality);					
	$("#bales").val(bales);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
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
      url: "selection_trolley_stock_khata_live_table.php",
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
		var quality= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(4)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#quality").val(quality);					
	$("#bales").val(bales);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	}
	});		
 
 //////////////////////////////////////////live table end/////////////////////////
 });//total doc ready


