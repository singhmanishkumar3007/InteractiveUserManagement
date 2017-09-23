$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////

$('#feeder_name').attr('disabled',true);
$('#receiver_name').attr('disabled',true);

///////////////////////////////////////working hour///////////////////////
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
		$("#spell").change()
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});

$('#idle_hours').focus(function(event){
$('#idle_hours').val('');
return false;
});
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').val(strDate).attr('disabled',false);	
$('#spell').val('selected').attr('disabled',false);	
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#working_hours').attr('disabled',false);
$('#spreader_no').val('selected').attr('disabled',false);	
$('#idle_hours').val('0').attr('disabled',false);;
$('#feeder').val('').css("border-color", "").attr('disabled',false);	
$('#receiver').val('').css("border-color", "").attr('disabled',false);	
$('#quality_and_grade').val('').css("border-color", "");
$('#trolly_no').val('').css("border-color", "");
$('#bin_no').val('').css("border-color", "");
$('#rolls_no').val('').css("border-color", "");
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_datewise td").css("background-color", "");
$("#spreader_table td").css("background-color", "");
$("#po_search_button").click();


///////////////////////////////////////////live table//////////////////////////////////
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "spreader_entry_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#spreader_table").html(data);
	  
////////////////////////////////////////table headar starts///////////////						 
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

	$("#spreader_table td").click(function () 
		{                  
		
		var spell= $(this).closest('tr').find('td:eq(1)').text();
		var working_hours= $(this).closest('tr').find('td:eq(2)').text();	
		var idle_hours= $(this).closest('tr').find('td:eq(3)').text();	
		var spreader_no= $(this).closest('tr').find('td:eq(4)').text();
		var feeder= $(this).closest('tr').find('td:eq(5)').text();
		var feeder_name= $(this).closest('tr').find('td:eq(6)').text();	
		var receiver= $(this).closest('tr').find('td:eq(7)').text();
		var receiver_name= $(this).closest('tr').find('td:eq(8)').text();	
		var quality_and_grade= $(this).closest('tr').find('td:eq(9)').text();
		var trolly_no= $(this).closest('tr').find('td:eq(11)').text();
		var bin_no= $(this).closest('tr').find('td:eq(12)').text();
		var rolls_no= $(this).closest('tr').find('td:eq(13)').text();
		var issue_date= $(this).closest('tr').find('td:eq(14)').text();
		var rec_id= $(this).closest('tr').find('td:eq(15)').text();
	$("#spell").val(spell).attr('disabled',true);	
$('#spell').change();
	$("#working_hours").val(working_hours).attr('disabled',true);	
	$("#idle_hours").val(idle_hours).attr('disabled',true);	
	$("#spreader_no").val(spreader_no).attr('disabled',true);		
	$("#feeder").val(feeder).attr('disabled',true);	
	$("#feeder_name").val(feeder_name);	
	$("#receiver").val(receiver).attr('disabled',true);	
	$("#receiver_name").val(receiver_name);	
	$("#quality_and_grade").val(quality_and_grade);
	$("#trolly_no").val(trolly_no);
	$("#bin_no").val(bin_no);
	$("#rolls_no").val(rolls_no);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#spreader_table td").css("background-color", "");	
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
		$("#spell").change()
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});
return false;
});
$('#idle_hours').focus(function(event){
$('#idle_hours').val('');
return false;
});
///////////////////////////////////////////RESET END//////////////////////////////////////

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
var idle_hours=$('#idle_hours').val();
var spreader_no=$('#spreader_no').val();	
var feeder=$('#feeder').val();
if(feeder=='')
	{
		alert("Please Enter Feeder EB No!");
		$('#feeder').focus().css("border-color", "red");
		return false;
	}
var receiver=$('#receiver').val();
if(receiver=='')
	{
		alert("Please Enter Reciver EB No!");
			$('#receiver').focus().css("border-color", "red");
		return false;
	}
var quality_and_grade=$('#quality_and_grade').val();
if(quality_and_grade=='')
	{
		alert("Please Enter Quality and Grade !");
		$('#quality_and_grade').focus().css("border-color", "red");
		return false;
	}
var trolly_no=$('#trolly_no').val();
if(trolly_no=='')
	{
		alert("Please Enter Trolly No !");
		$('#trolly_no').focus().css("border-color", "red");
		return false;
	}
var bin_no=$('#bin_no').val();
if(bin_no=='')
	{
		alert("Please Enter Bin No !");
		$('#bin_no').focus().css("border-color", "red");
		return false;
	}
var rolls_no=$('#rolls_no').val();	
if(rolls_no=='')
	{
		alert("Please Enter No of Rolls !");
		$('#rolls_no').focus().css("border-color", "red");
		return false;
	}
var working_hours=$('#working_hours').val();

	var datString='issue_date='+issue_date+'&spell='+spell+'&spreader_no='+spreader_no+'&feeder='+feeder+'&receiver='+receiver+'&quality_and_grade='+quality_and_grade+'&trolly_no='+trolly_no+'&bin_no='+bin_no+'&rolls_no='+rolls_no+'&idle_hours='+idle_hours+'&working_hours='+working_hours;
//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "spreader_entry_data_save.php",
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
var quality_and_grade=$('#quality_and_grade').val();
if(quality_and_grade=='')
	{
		alert("Please Enter Quality and Grade !");
		$('#quality_and_grade').focus().css("border-color", "red");
		return false;
	}
var trolly_no=$('#trolly_no').val();
if(trolly_no=='')
	{
		alert("Please Enter Trolly No !");
		$('#trolly_no').focus().css("border-color", "red");
		return false;
	}
var bin_no=$('#bin_no').val();
if(bin_no=='')
	{
		alert("Please Enter Bin No !");
		$('#bin_no').focus().css("border-color", "red");
		return false;
	}
var rolls_no=$('#rolls_no').val();	
if(rolls_no=='')
	{
		alert("Please Enter No of Rolls !");
		$('#rolls_no').focus().css("border-color", "red");
		return false;
	}

	var datString='quality_and_grade='+quality_and_grade+'&trolly_no='+trolly_no+'&bin_no='+bin_no+'&rolls_no='+rolls_no+'&rec_id='+rec_id;
//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "spreader_entry_edit.php",
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
///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "spreader_entry_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
			
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	//$("#resettab").click();	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	var spreader_no= $(this).closest('tr').find('td:eq(0)').text();
	$("#spreader_no").val(spreader_no).attr('disabled',true);		
    var issue_date= $(this).closest('tr').find('td:eq(1)').text();
    $("#issue_date").val(issue_date).attr('disabled',true);	
	var spell= $(this).closest('tr').find('td:eq(2)').text();
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	var datString = 'spreader_no='+spreader_no+'&issue_date='+issue_date+'&spell='+spell; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "spreader_entry_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#spreader_table").html(data);
		
		
		$("#spreader_table td").click(function () 
		{                  
		
		//var spell= $(this).closest('tr').find('td:eq(1)').text();
		var working_hours= $(this).closest('tr').find('td:eq(2)').text();	
		var idle_hours= $(this).closest('tr').find('td:eq(3)').text();	
		//var spreader_no= $(this).closest('tr').find('td:eq(4)').text();
		var feeder= $(this).closest('tr').find('td:eq(5)').text();
		var feeder_name= $(this).closest('tr').find('td:eq(6)').text();	
		var receiver= $(this).closest('tr').find('td:eq(7)').text();
		var receiver_name= $(this).closest('tr').find('td:eq(8)').text();	
		var quality_and_grade= $(this).closest('tr').find('td:eq(9)').text();
		var trolly_no= $(this).closest('tr').find('td:eq(11)').text();
		var bin_no= $(this).closest('tr').find('td:eq(12)').text();
		var rolls_no= $(this).closest('tr').find('td:eq(13)').text();
		//var issue_date= $(this).closest('tr').find('td:eq(14)').text();
		var rec_id= $(this).closest('tr').find('td:eq(15)').text();
	//
	$("#working_hours").val(working_hours).attr('disabled',true);	
	$("#idle_hours").val(idle_hours).attr('disabled',true);	
	//$("#spreader_no").val(spreader_no).attr('disabled',true);		
	$("#feeder").val(feeder).attr('disabled',true);	
	$("#feeder_name").val(feeder_name);	
	$("#receiver").val(receiver).attr('disabled',true);	
	$("#receiver_name").val(receiver_name);	
	$("#quality_and_grade").val(quality_and_grade);
	$("#trolly_no").val(trolly_no);
	$("#bin_no").val(bin_no);
	$("#rolls_no").val(rolls_no);
	
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#spreader_table td").css("background-color", "");	
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
      url: "spreader_entry_delete.php",
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
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "spreader_entry_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#spreader_table").html(data);
	  
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

	$("#spreader_table td").click(function () 
		{                  
		
		var spell= $(this).closest('tr').find('td:eq(1)').text();
		var working_hours= $(this).closest('tr').find('td:eq(2)').text();	
		var idle_hours= $(this).closest('tr').find('td:eq(3)').text();	
		var spreader_no= $(this).closest('tr').find('td:eq(4)').text();
		var feeder= $(this).closest('tr').find('td:eq(5)').text();
		var feeder_name= $(this).closest('tr').find('td:eq(6)').text();	
		var receiver= $(this).closest('tr').find('td:eq(7)').text();
		var receiver_name= $(this).closest('tr').find('td:eq(8)').text();	
		var quality_and_grade= $(this).closest('tr').find('td:eq(9)').text();
		var trolly_no= $(this).closest('tr').find('td:eq(11)').text();
		var bin_no= $(this).closest('tr').find('td:eq(12)').text();
		var rolls_no= $(this).closest('tr').find('td:eq(13)').text();
		var issue_date= $(this).closest('tr').find('td:eq(14)').text();
		var rec_id= $(this).closest('tr').find('td:eq(15)').text();
	$("#spell").val(spell).attr('disabled',true);	
	$("#working_hours").val(working_hours).attr('disabled',true);	
	$("#idle_hours").val(idle_hours).attr('disabled',true);	
	$("#spreader_no").val(spreader_no).attr('disabled',true);		
	$("#feeder").val(feeder).attr('disabled',true);	
	$("#feeder_name").val(feeder_name);	
	$("#receiver").val(receiver).attr('disabled',true);	
	$("#receiver_name").val(receiver_name);	
	$("#quality_and_grade").val(quality_and_grade);
	$("#trolly_no").val(trolly_no);
	$("#bin_no").val(bin_no);
	$("#rolls_no").val(rolls_no);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#spreader_table td").css("background-color", "");	
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


