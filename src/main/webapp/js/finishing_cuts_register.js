$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////
$('#name').attr('disabled',true);	
//$('#metric_ton').attr('disabled',true);	
///////////////////////////////////////working hour////////////////////////////////////////////////
var spell=$('#spell option:selected').val();
	var datString='spell='+spell;
	
	$.ajax({
      type: "POST",
      url: "spreader_entry_working_hours.php",
      data: datString,
      success: function(data) {  
		
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$('#working_hours').val(x.WORKING_HOURS);
		$("#from_time").html(x.FROM_TIME);
		$("#to_time").html(x.TO_TIME);
		$("#spell").change()
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});

$('#idle_hours_all').focus(function(event){
$('#idle_hours_all').val('');
return false;
});
$('#idle_hours_each').focus(function(event){
$('#idle_hours_each').val('');
return false;
});
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').val(strDate).attr('disabled',false);	
$('#spell').attr('disabled',false);	
$("#spell").change();
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#working_hours').attr('disabled',false);
$('#idle_hours_all').val('0').attr('disabled',false);
$('#idle_hours_each').val('0').attr('disabled',false);;
$('#eb_no').val('').css("border-color", "");	
$('#quality').val('').css("border-color", "");	
$('#quality').focus();
$('#name').val('').css("border-color", "");
$('#cuts').val('').css("border-color", "");	
$('#metric_ton').val('').css("border-color", "");	
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
      url: "finishing_cuts_register_live_table.php",
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
		 var quality= $(this).closest('tr').find('td:eq(1)').text();
		 var eb_no= $(this).closest('tr').find('td:eq(2)').text();
		var name= $(this).closest('tr').find('td:eq(3)').text();	
		var idle_hours_each= $(this).closest('tr').find('td:eq(4)').text();
		var cuts= $(this).closest('tr').find('td:eq(5)').text();	
		var metric_ton= $(this).closest('tr').find('td:eq(6)').text();
		var issue_date= $(this).closest('tr').find('td:eq(7)').text();	
		var spell= $(this).closest('tr').find('td:eq(8)').text();
		var working_hours= $(this).closest('tr').find('td:eq(9)').text();	
		var idle_hours_all= $(this).closest('tr').find('td:eq(10)').text();
		var rec_id= $(this).closest('tr').find('td:eq(11)').text();		
	
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	$("#working_hours").val(working_hours).attr('disabled',true);	
	$("#idle_hours_all").val(idle_hours_all).attr('disabled',true);	
	$("#eb_no").val(eb_no);	
	$("#quality").val(quality);	
	$("#cuts").val(cuts);	
	$("#name").val(name);	
	$("#quality").val(quality);	
	$("#metric_ton").val(metric_ton);	
	$("#idle_hours_each").val(idle_hours_each);	
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

return false;
});
$('#idle_hours_all').focus(function(event){
$('#idle_hours_all').val('');
return false;
});
$('#idle_hours_each').focus(function(event){
$('#idle_hours_each').val('');
return false;
});
///////////////////////////////////////////RESET END//////////////////////////////////////
//////////////////////////////////////////bales to mton////////////////////
/* $('#cuts').bind('input', function()
{
var cuts=$('#cuts').val();
cuts=parseFloat(cuts);
var m_ton=((cuts)*0.334176);
var m_ton=m_ton.toFixed(3);
if(isNaN(m_ton))
{
 m_ton='';

}
$('#metric_ton').val(m_ton);

return false;
}); */


///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////spell time and working hours//////////////
$('#spell').bind('change', function()
	{
	var spell=$('#spell option:selected').val();
	var datString='spell='+spell;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "spreader_entry_working_hours.php",
      data: datString,
      success: function(data) {  
		
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$('#working_hours').val(x.WORKING_HOURS);
		$("#from_time").html(x.FROM_TIME);
		$("#to_time").html(x.TO_TIME);
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});
	return false;
	});
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
var issue_date=$('#issue_date').val();
var spell=$('#spell').val();
var working_hours=$('#working_hours').val();
var idle_hours_all=$('#idle_hours_all').val();
if(idle_hours_all=='')
	{	
		idle_hours_all=0;
		$('#idle_hours_all').val(idle_hours_all);
	
	}
var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Quality !");
			$('#quality').focus().css("border-color", "red");
		return false;
	}	
var eb_no=$('#eb_no').val();
if(eb_no=='')
	{
		alert("Please Enter EB No!");
		$('#eb_no').focus().css("border-color", "red");
		return false;
	}
var idle_hours_each=$('#idle_hours_each').val();
if(idle_hours_each=='')
	{	
		idle_hours_each=0;
		$('#idle_hours_each').val(idle_hours_each);
	
	}	
var cuts=$('#cuts').val();
if(cuts=='')
	{
		alert("Please Enter Production !");
		$('#cuts').focus().css("border-color", "red");
		return false;
	}
var metric_ton=$('#metric_ton').val();
if(metric_ton=='')
	{
		alert("Please Enter Metric Ton !");
		$('#metric_ton').focus().css("border-color", "red");
		return false;
	}
	
	var datString='issue_date='+issue_date+'&spell='+spell+'&eb_no='+eb_no+'&quality='+quality+'&cuts='+cuts+'&idle_hours_all='+idle_hours_all+'&idle_hours_each='+idle_hours_each+'&working_hours='+working_hours+'&metric_ton='+metric_ton;

	$.ajax({
      type: "POST",
      url: "finishing_cuts_register_data_save.php",
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
			$('#quality').focus();
		
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
var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Quality !");
			$('#quality').focus().css("border-color", "red");
		return false;
	}	
var eb_no=$('#eb_no').val();
if(eb_no=='')
	{
		alert("Please Enter EB No!");
		$('#eb_no').focus().css("border-color", "red");
		return false;
	}
var idle_hours_each=$('#idle_hours_each').val();
if(idle_hours_each=='')
	{	
		idle_hours_each=0;
		$('#idle_hours_each').val(idle_hours_each);
	
	}	

var cuts=$('#cuts').val();
if(cuts=='')
	{
		alert("Please Enter Production !");
		$('#cuts').focus().css("border-color", "red");
		return false;
	}
var metric_ton=$('#metric_ton').val();
if(metric_ton=='')
	{
		alert("Please Enter Metric Ton !");
		$('#metric_ton').focus().css("border-color", "red");
		return false;
	}
	
	var datString='eb_no='+eb_no+'&quality='+quality+'&cuts='+cuts+'&idle_hours_each='+idle_hours_each+'&metric_ton='+metric_ton+'&rec_id='+rec_id;
	
	$.ajax({
      type: "POST",
      url: "finishing_cuts_register_edit.php",
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
			
		$('#quality').focus();

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
///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "finishing_cuts_register_datewise.php",
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
	var spell= $(this).closest('tr').find('td:eq(1)').text();
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	var datString = 'issue_date='+issue_date+'&spell='+spell; 
	 	 
					 
	  $.ajax({
      type: "POST",
      url: "finishing_cuts_register_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);
				
		$("#details td").click(function () 
		{                  
		 var quality= $(this).closest('tr').find('td:eq(1)').text();
		 var eb_no= $(this).closest('tr').find('td:eq(2)').text();
		var name= $(this).closest('tr').find('td:eq(3)').text();	
		var idle_hours_each= $(this).closest('tr').find('td:eq(4)').text();
		var cuts= $(this).closest('tr').find('td:eq(5)').text();	
		var metric_ton= $(this).closest('tr').find('td:eq(6)').text();
		var issue_date= $(this).closest('tr').find('td:eq(7)').text();	
		var spell= $(this).closest('tr').find('td:eq(8)').text();
		var working_hours= $(this).closest('tr').find('td:eq(9)').text();	
		var idle_hours_all= $(this).closest('tr').find('td:eq(10)').text();
		var rec_id= $(this).closest('tr').find('td:eq(11)').text();		
	
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	$("#working_hours").val(working_hours).attr('disabled',true);	
	$("#idle_hours_all").val(idle_hours_all).attr('disabled',true);	
	$("#eb_no").val(eb_no);	
	$("#quality").val(quality);	
	$("#cuts").val(cuts);	
	$("#name").val(name);	
	$("#quality").val(quality);	
	$("#metric_ton").val(metric_ton);	
	$("#idle_hours_each").val(idle_hours_each);	
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
      url: "finishing_cuts_register_delete.php",
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
	$('#quality').focus();

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
      url: "finishing_cuts_register_live_table.php",
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
		 var quality= $(this).closest('tr').find('td:eq(1)').text();
		 var eb_no= $(this).closest('tr').find('td:eq(2)').text();
		var name= $(this).closest('tr').find('td:eq(3)').text();	
		var idle_hours_each= $(this).closest('tr').find('td:eq(4)').text();
		var cuts= $(this).closest('tr').find('td:eq(5)').text();	
		var metric_ton= $(this).closest('tr').find('td:eq(6)').text();
		var issue_date= $(this).closest('tr').find('td:eq(7)').text();	
		var spell= $(this).closest('tr').find('td:eq(8)').text();
		var working_hours= $(this).closest('tr').find('td:eq(9)').text();	
		var idle_hours_all= $(this).closest('tr').find('td:eq(10)').text();
		var rec_id= $(this).closest('tr').find('td:eq(11)').text();		
	
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	$("#working_hours").val(working_hours).attr('disabled',true);	
	$("#idle_hours_all").val(idle_hours_all).attr('disabled',true);	
	$("#eb_no").val(eb_no);	
	$("#quality").val(quality);	
	$("#cuts").val(cuts);	
	$("#name").val(name);	
	$("#quality").val(quality);	
	$("#metric_ton").val(metric_ton);	
	$("#idle_hours_each").val(idle_hours_each);	
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
 $('#quality').focus();
 //////////////////////////////////////////live table end/////////////////////////
 });//total doc ready


