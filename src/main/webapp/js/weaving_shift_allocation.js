$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////
$('#quality_desc').attr('disabled',true);
$('#quality_code').focus();
///////////////////////////////////////working hour////////////////////////////////////////////////
var shift=$('#shift option:selected').val();
	var datString='shift='+shift;
	
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_working_hours.php",
      data: datString,
      success: function(data) {  
		
				
		$('#working_hours').val(data);
		$("#shift").change();
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});


////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').attr('disabled',false);	
$('#shift').attr('disabled',false);	
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#working_hours').attr('disabled',false).css("border-color", "");
$('#quality_desc').val('').attr('disabled',true);
$('#quality_code').val('').css("border-color", "");	
$('#quality_code').focus();
$('#loom').val('').css("border-color", "");		
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
      url: "weaving_shift_allocation_live_table.php",
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
		var shift= $(this).closest('tr').find('td:eq(2)').text();	
		var working_hours= $(this).closest('tr').find('td:eq(3)').text();	
		var quality_code= $(this).closest('tr').find('td:eq(4)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(5)').text();	
		var loom= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();	 
		
		$("#issue_date").val(issue_date).attr('disabled',true);		
		$("#shift").val(shift).attr('disabled',true);	
		$('#shift').change();
	$("#working_hours").val(working_hours);	
	$("#quality_code").val(quality_code);	
	$("#quality_desc").val(quality_desc).attr('disabled',true);	
	$("#loom").val(loom);	
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
$('#shift').change();
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
////////////////////////////////////////////spell time and working hours//////////////
$('#shift').bind('change', function()
	{
	var shift=$('#shift option:selected').val();
	var datString='shift='+shift;
	
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_working_hours.php",
      data: datString,
      success: function(data) {  
		
				
		$('#working_hours').val(data);
		
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
var shift=$('#shift').val();
var working_hours=$('#working_hours').val();
if(working_hours==''||working_hours==0)
	{
		alert("Please Enter a Valid Working Hours !");
		$('#working_hours').focus().css("border-color", "red");
		return false;
	}	
var quality_code=$('#quality_code').val();
if(quality_code=='')
	{
		alert("Please Enter Quality Code!");
		$('#quality_code').focus().css("border-color", "red");
		return false;
	}
var loom=$('#loom').val();
if(loom=='')
	{
		alert("Please Enter No of Loom !");
			$('#loom').focus().css("border-color", "red");
		return false;
	}

	var datString='issue_date='+issue_date+'&shift='+shift+'&working_hours='+working_hours+'&quality_code='+quality_code+'&loom='+loom;

	
	$.ajax({
      type: "POST",
      url: "weaving_shift_allocation_data_save.php",
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
var working_hours=$('#working_hours').val();
if(working_hours==''||working_hours==0)
	{
		alert("Please Enter a Valid Working Hours !");
		$('#working_hours').focus().css("border-color", "red");
		return false;
	}	
var quality_code=$('#quality_code').val();
if(quality_code=='')
	{
		alert("Please Enter Quality Code!");
		$('#quality_code').focus().css("border-color", "red");
		return false;
	}
var loom=$('#loom').val();
if(loom=='')
	{
		alert("Please Enter No of Loom !");
			$('#loom').focus().css("border-color", "red");
		return false;
	}

	var datString='working_hours='+working_hours+'&quality_code='+quality_code+'&loom='+loom+'&rec_id='+rec_id;
	
	$.ajax({
      type: "POST",
      url: "weaving_shift_allocation_edit.php",
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
			}
			return false;
			});

///////////////////////////////////////////edit end//////////////////
/////////////////////search start////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "weaving_shift_allocation_datewise.php",
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
	var shift= $(this).closest('tr').find('td:eq(1)').text();
	$("#shift").val(shift).attr('disabled',true);	
	$('#shift').change();
	var datString = 'issue_date='+issue_date+'&shift='+shift; 
	 	 
					 
	  $.ajax({
      type: "POST",
      url: "weaving_shift_allocation_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
	
		$("#details").html(data);
		
		
		$("#details td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();	
		var shift= $(this).closest('tr').find('td:eq(2)').text();	
		var working_hours= $(this).closest('tr').find('td:eq(3)').text();	
		var quality_code= $(this).closest('tr').find('td:eq(4)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(5)').text();	
		var loom= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();	 
		
		$("#issue_date").val(issue_date).attr('disabled',true);		
		$("#shift").val(shift).attr('disabled',true);	
		$('#shift').change();
	$("#working_hours").val(working_hours);	
	$("#quality_code").val(quality_code);	
	$("#quality_desc").val(quality_desc).attr('disabled',true);	
	$("#loom").val(loom);	
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
      url: "weaving_shift_allocation_delete.php",
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
      url: "weaving_shift_allocation_live_table.php",
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
		var shift= $(this).closest('tr').find('td:eq(2)').text();	
		var working_hours= $(this).closest('tr').find('td:eq(3)').text();	
		var quality_code= $(this).closest('tr').find('td:eq(4)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(5)').text();	
		var loom= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();	 
		
		$("#issue_date").val(issue_date).attr('disabled',true);		
		$("#shift").val(shift).attr('disabled',true);	
		$('#shift').change();
	$("#working_hours").val(working_hours);	
	$("#quality_code").val(quality_code);	
	$("#quality_desc").val(quality_desc).attr('disabled',true);	
	$("#loom").val(loom);	
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
 });//total doc ready


