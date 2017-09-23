$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });
////////////////////////////////////////
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
//////////////////////	
$('#jute_code').focus();
$('#quality').attr('disabled',true);
$('#batch').attr('disabled',true);
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){
 $("#issue_date").attr('disabled',false);
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#jute_code').val('').focus().css("border-color", "");
$('#quality').val('');
$('#batch').val('').css("border-color", "");
$('#rate').val('').css("border-color", "");
$('#rec_id').val('');
$("#jute_code").attr('disabled', false);		
$("#po_datewise td").css("background-color", "");
$("#rate_report td").css("background-color", "");
//$('#savetab').show();
//$('#jute_entry_edit').hide();
$("#po_search_button").click();	
/////////////////////////table////////////////////////
var issue_date=$('#issue_date').val();
	var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "jute_rate_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#rate_report").html(data);
	  
	  
	  $("#rate_report td").click(function () 
		{                  
		
		var selected_jute_code= $(this).closest('tr').find('td:eq(1)').text();
		var selected_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_batch= $(this).closest('tr').find('td:eq(3)').text();
		var selected_rate= $(this).closest('tr').find('td:eq(4)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(6)').text();
		var selected_issue_date= $(this).closest('tr').find('td:eq(5)').text();
		$("#issue_date").val(selected_issue_date).attr('disabled', true);		
	$("#jute_code").val(selected_jute_code);
	$("#quality").val(selected_quality);
	$("#batch").val(selected_batch);
	$("#rate").val(selected_rate);
	$("#rec_id").val(selected_rec_id);
	$("#jute_code").attr('disabled', true);		
	//$('#savetab').hide();
	//$('#jute_entry_edit').show();		
	$("#rate_report td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});		  
	  /////////////////table headar starts///////////////						 
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
		
	
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
////////////////////jute code search///////////////////////
$("#jute_code").bind('input',function(){
var jute_code=$("#jute_code").val();
var wordlength=$("#jute_code").val().length;
if(wordlength>2)
{
var datString='jute_code='+jute_code;

$.ajax({
      type: "POST",
      url: "jute_rate_jute_code_search.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
		
		//alert(data);
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$('#rate').val(x.RATE);
		$("#rec_id").val(x.REC_ID);
		$('#batch').val(x.BATCH);
		$('#quality').val(x.QUALITY);
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});
		}
		else
		{
		$('#rate').val('');
		$("#rec_id").val('');
		$('#batch').val('');
		$('#quality').val('');
		}
		return false;
		});


/////////////////////////////////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
	
var jute_code=$('#jute_code').val();
if(jute_code=='')
	{
		alert("Please Enter Jute Code !");
		$('#jute_code').focus().css("border-color", "red");
		return false;
	}

var rate=$('#rate').val();
if(rate=='')
	{
		alert("Please Enter Rate!");
		$('#rate').focus().css("border-color", "red");
		return false;
	}
var issue_date=$('#issue_date').val();
var rec_id=$("#rec_id").val();	
	var datString='jute_code='+jute_code+'&rate='+rate+'&issue_date='+issue_date+'&rec_id='+rec_id;
//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "jute_rate_khata_data_save.php",
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
var batch=$('#batch').val();
if(batch=='')
	{
		alert("Please Enter Batch!");
		$('#batch').focus().css("border-color", "red");
		return false;
	}

var rate=$('#rate').val();
if(rate=='')
	{
		alert("Please Enter Rate!");
		$('#rate').focus().css("border-color", "red");
		return false;
	}
	
	var datString='batch='+batch+'&rate='+rate+'&rec_id='+rec_id;
//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "jute_rate_khata_edit.php",
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
      url: "jute_rate_khata_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
			////$("#resettab").click();	
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	////////$("#resettab").click();	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	//alert("test");
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var issue_date= $(this).closest('tr').find('td:eq(0)').text();
    $("#issue_date").val(issue_date).attr('disabled',true);
	
	var datString = 'issue_date='+issue_date; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "jute_rate_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#rate_report").html(data);
		$("#load").hide();
		
		$("#rate_report td").click(function () 
		{                  
		
		var selected_jute_code= $(this).closest('tr').find('td:eq(1)').text();
		var selected_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_batch= $(this).closest('tr').find('td:eq(3)').text();
		var selected_rate= $(this).closest('tr').find('td:eq(4)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(6)').text();
		var selected_issue_date= $(this).closest('tr').find('td:eq(5)').text();
		$("#issue_date").val(selected_issue_date).attr('disabled', true);		
	$("#jute_code").val(selected_jute_code);
	$("#quality").val(selected_quality);
	$("#batch").val(selected_batch);
	$("#rate").val(selected_rate);
	$("#rec_id").val(selected_rec_id);
	$("#jute_code").attr('disabled', true);		
	//$('#savetab').hide();
	//$('#jute_entry_edit').show();		
	$("#rate_report td").css("background-color", "");	
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
//////////////////////////////////////////search end//////////////////////////////
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
      url: "jute_rate_khata_delete.php",
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
      url: "jute_rate_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#rate_report").html(data);
	  
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
	
	$("#rate_report td").click(function () 
		{                  
		
		var selected_jute_code= $(this).closest('tr').find('td:eq(1)').text();
		var selected_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_batch= $(this).closest('tr').find('td:eq(3)').text();
		var selected_rate= $(this).closest('tr').find('td:eq(4)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(6)').text();
		var selected_issue_date= $(this).closest('tr').find('td:eq(5)').text();
		$("#issue_date").val(selected_issue_date).attr('disabled', true);			
	$("#jute_code").val(selected_jute_code);
	$("#quality").val(selected_quality);
	$("#batch").val(selected_batch);
	$("#rate").val(selected_rate);
	$("#rec_id").val(selected_rec_id);
	$("#jute_code").attr('disabled', true);		
	//$('#savetab').hide();
	//$('#jute_entry_edit').show();	
	$("#rate_report td").css("background-color", "");	
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


