$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$('#frame_no').focus();
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#issue_date').attr('disabled',false);	
$('#frame_no').val('').focus().attr('disabled',false).css("border-color", "");		
$('#record_time').css("border-color", "");		
$('#idle_spindle').val('').css("border-color", "");	
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_search_button").click();
$("#po_datewise td").css("background-color", "");
$("#winding_idle td").css("background-color", "");
///////////////////////////table////////////////////
	var issue_date=$('#issue_date').val();
	var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "winding_idle_spindle_live_table.php",
      data: datString,
      success: function(data) {        

	  
	  $("#winding_idle").html(data);
	 
	  
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

	$("#winding_idle td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var record_time= $(this).closest('tr').find('td:eq(2)').text();	
		var frame_no= $(this).closest('tr').find('td:eq(3)').text();		
		var idle_spindle= $(this).closest('tr').find('td:eq(4)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(5)').text();
	$("#frame_no").val(frame_no).attr('disabled',true);					
	$("#record_time").val(record_time);		
	$("#idle_spindle").val(idle_spindle);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#winding_idle td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});		

///////////////////////////////////////////////////
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var issue_date=$('#issue_date').val();
var record_time=$('#record_time').val();
if(record_time=='')
	{
		alert("Please Select Time!");
		$('#record_time').focus().css("border-color", "red");
		return false;
	}
var frame_no=$('#frame_no').val();
if(frame_no=='')
	{
		alert("Please Enter Frame No!");
		$('#frame_no').focus().css("border-color", "red");
		return false;
	}

var idle_spindle=$('#idle_spindle').val();
if(idle_spindle=='')
	{
		alert("Please Enter No of Idle Spindle!");
		$('#idle_spindle').focus().css("border-color", "red");
		return false;
	}

	var datString='issue_date='+issue_date+'&frame_no='+frame_no+'&idle_spindle='+idle_spindle+'&record_time='+record_time;

	
	$.ajax({
      type: "POST",
      url: "winding_idle_spindle_data_save.php",
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
var record_time=$('#record_time').val();
if(record_time=='')
	{
		alert("Please Select Time!");
		$('#record_time').focus().css("border-color", "red");
		return false;
	}

var idle_spindle=$('#idle_spindle').val();
if(idle_spindle=='')
	{
		alert("Please Enter No of Idle Spindle!");
		$('#idle_spindle').focus().css("border-color", "red");
		return false;
	}

	var datString='issue_date='+issue_date+'&idle_spindle='+idle_spindle+'&record_time='+record_time+'&rec_id='+rec_id;
		//alert(datString);
	$.ajax({
      type: "POST",
      url: "winding_idle_spindle_edit.php",
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
///////////////////////////////////////////search start////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "winding_idle_spindle_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
						
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");

		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var frame_no= $(this).closest('tr').find('td:eq(0)').text();	
	var issue_date= $(this).closest('tr').find('td:eq(1)').text();
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#frame_no").val(frame_no).attr('disabled',true);			
	
	var datString = 'frame_no='+frame_no+'&issue_date='+issue_date; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "winding_idle_spindle_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#winding_idle").html(data);
		
		
		$("#winding_idle td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var record_time= $(this).closest('tr').find('td:eq(2)').text();	
		var frame_no= $(this).closest('tr').find('td:eq(3)').text();		
		var idle_spindle= $(this).closest('tr').find('td:eq(4)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(5)').text();
	$("#frame_no").val(frame_no).attr('disabled',true);					
	$("#record_time").val(record_time);		
	$("#idle_spindle").val(idle_spindle);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#winding_idle td").css("background-color", "");	
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
      url: "winding_idle_spindle_delete.php",
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
	var issue_date=$('#issue_date').val();
	var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "winding_idle_spindle_live_table.php",
      data: datString,
      success: function(data) {        

	 	  $("#winding_idle").html(data);
	  
	  
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

	$("#winding_idle td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var record_time= $(this).closest('tr').find('td:eq(2)').text();	
		var frame_no= $(this).closest('tr').find('td:eq(3)').text();		
		var idle_spindle= $(this).closest('tr').find('td:eq(4)').text();		
		var rec_id= $(this).closest('tr').find('td:eq(5)').text();
	$("#frame_no").val(frame_no).attr('disabled',true);					
	$("#record_time").val(record_time);		
	$("#idle_spindle").val(idle_spindle);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#winding_idle td").css("background-color", "");	
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
 });//total doc ready


