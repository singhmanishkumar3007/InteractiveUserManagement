$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$('#machine_no').focus();	
$('#operator_name').attr('disabled',true);		
$('#helper_name').attr('disabled',true);
$('#quality_desc').attr('disabled',true);
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#issue_date').attr('disabled',false);	
$('#spell').attr('disabled',false);		
$('#machine_no').val('').focus().attr('disabled',false).css("border-color", "");		
$('#operator_eb_no').val('').css("border-color", "");		
$('#operator_name').val('').attr('disabled',true);	
$('#helper_eb_no').val('').css("border-color", "");		
$('#helper_name').val('').attr('disabled',true);
$('#quality_code').val('').css("border-color", "");		
$('#quality_desc').val('').attr('disabled',true);
$('#bundle').val('').css("border-color", "");		
$('#remarks').val('');
$('#idle_hours').val('');
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_search_button").click();
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
//////////////////////////table//////////////////
	var issue_date=$('#issue_date').val();
	var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "hemming_register_live_table.php",
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
		var spell= $(this).closest('tr').find('td:eq(2)').text();	
		var machine_no= $(this).closest('tr').find('td:eq(3)').text();		
		var operator_eb_no= $(this).closest('tr').find('td:eq(4)').text();
		var operator_name= $(this).closest('tr').find('td:eq(5)').text();
		var helper_eb_no= $(this).closest('tr').find('td:eq(6)').text();
		var helper_name= $(this).closest('tr').find('td:eq(7)').text();
		var quality_code= $(this).closest('tr').find('td:eq(8)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(9)').text();	
		var bundle= $(this).closest('tr').find('td:eq(10)').text();	
		var remarks= $(this).closest('tr').find('td:eq(11)').text();			
		var rec_id= $(this).closest('tr').find('td:eq(12)').text();
		var idle_hours= $(this).closest('tr').find('td:eq(13)').text();
		$("#idle_hours").val(idle_hours);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);					
	$("#machine_no").val(machine_no).attr('disabled',true);		
	$("#operator_eb_no").val(operator_eb_no);
	$("#operator_name").val(operator_name);
	$("#helper_eb_no").val(helper_eb_no);
	$("#helper_name").val(helper_name);
	$("#quality_code").val(quality_code);
	$("#quality_desc").val(quality_desc);
	$("#bundle").val(bundle);
	$("#remarks").val(remarks);	
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
//////////////////////////////////////////////
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var issue_date=$('#issue_date').val();
var machine_no=$('#machine_no').val();
if(machine_no=='')
	{
		alert("Please Enter Machine No !");
		$('#machine_no').focus().css("border-color", "red");
		return false;
	}
var operator_eb_no=$('#operator_eb_no').val();
if(operator_eb_no=='')
	{
		alert("Please Enter Operator EB No !");
		$('#operator_eb_no').focus().css("border-color", "red");
		return false;
	}

var helper_eb_no=$('#helper_eb_no').val();
var quality_code=$('#quality_code').val();
if(quality_code=='')
	{
		alert("Please Enter Quality Code !");
		$('#quality_code').focus().css("border-color", "red");
		return false;
	}

var bundle=$('#bundle').val();
if(bundle=='')
	{
		alert("Please Enter No of Bundle !");
		$('#bundle').focus().css("border-color", "red");
		return false;
	}
var remarks=$('#remarks').val();
var spell=$('#spell').val();
var idle_hours=$('#idle_hours').val();
if(idle_hours=='')
	{
	 var idle_hours=0;
	}


	var datString='issue_date='+issue_date+'&machine_no='+machine_no+'&operator_eb_no='+operator_eb_no+'&helper_eb_no='+helper_eb_no+'&quality_code='+quality_code+'&bundle='+bundle+'&remarks='+remarks+'&spell='+spell+'&idle_hours='+idle_hours;

	
	$.ajax({
      type: "POST",
      url: "hemming_register_data_save.php",
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
var operator_eb_no=$('#operator_eb_no').val();
if(operator_eb_no=='')
	{
		alert("Please Enter Operator EB No !");
		$('#operator_eb_no').focus().css("border-color", "red");
		return false;
	}

var helper_eb_no=$('#helper_eb_no').val();
var quality_code=$('#quality_code').val();
if(quality_code=='')
	{
		alert("Please Enter Quality Code !");
		$('#quality_code').focus().css("border-color", "red");
		return false;
	}

var bundle=$('#bundle').val();
if(bundle=='')
	{
		alert("Please Enter No of Bundle !");
		$('#bundle').focus().css("border-color", "red");
		return false;
	}
var remarks=$('#remarks').val();
var idle_hours=$('#idle_hours').val();
if(idle_hours=='')
	{
	 var idle_hours=0;
	}

	var datString='operator_eb_no='+operator_eb_no+'&helper_eb_no='+helper_eb_no+'&quality_code='+quality_code+'&bundle='+bundle+'&remarks='+remarks+'&rec_id='+rec_id+'&idle_hours='+idle_hours;
		//alert(datString);
	$.ajax({
      type: "POST",
      url: "hemming_register_edit.php",
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
			$('#machine_no').focus();
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
      url: "hemming_register_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
			//$("#resettab").click();	
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){

$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var spell= $(this).closest('tr').find('td:eq(0)').text();	
	var issue_date= $(this).closest('tr').find('td:eq(1)').text();
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);			
	
	var datString = 'spell='+spell+'&issue_date='+issue_date; 
						 
	  $.ajax({
      type: "POST",
      url: "hemming_register_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);		
		
		$("#details td").click(function () 		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var spell= $(this).closest('tr').find('td:eq(2)').text();	
		var machine_no= $(this).closest('tr').find('td:eq(3)').text();		
		var operator_eb_no= $(this).closest('tr').find('td:eq(4)').text();
		var operator_name= $(this).closest('tr').find('td:eq(5)').text();
		var helper_eb_no= $(this).closest('tr').find('td:eq(6)').text();
		var helper_name= $(this).closest('tr').find('td:eq(7)').text();
		var quality_code= $(this).closest('tr').find('td:eq(8)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(9)').text();	
		var bundle= $(this).closest('tr').find('td:eq(10)').text();	
		var remarks= $(this).closest('tr').find('td:eq(11)').text();			
		var rec_id= $(this).closest('tr').find('td:eq(12)').text();
		var idle_hours= $(this).closest('tr').find('td:eq(13)').text();
		$("#idle_hours").val(idle_hours);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);					
	$("#machine_no").val(machine_no).attr('disabled',true);		
	$("#operator_eb_no").val(operator_eb_no);
	$("#operator_name").val(operator_name);
	$("#helper_eb_no").val(helper_eb_no);
	$("#helper_name").val(helper_name);
	$("#quality_code").val(quality_code);
	$("#quality_desc").val(quality_desc);
	$("#bundle").val(bundle);
	$("#remarks").val(remarks);	
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
		$('#machine_no').focus();
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
	
//////////////////////////////////////////search end//////////////////////////////////
//////////////////////////////////////////delete/////////////////////////////
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
      url: "hemming_register_delete.php",
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
$('#machine_no').focus();
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
      url: "hemming_register_live_table.php",
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
		var spell= $(this).closest('tr').find('td:eq(2)').text();	
		var machine_no= $(this).closest('tr').find('td:eq(3)').text();		
		var operator_eb_no= $(this).closest('tr').find('td:eq(4)').text();
		var operator_name= $(this).closest('tr').find('td:eq(5)').text();
		var helper_eb_no= $(this).closest('tr').find('td:eq(6)').text();
		var helper_name= $(this).closest('tr').find('td:eq(7)').text();
		var quality_code= $(this).closest('tr').find('td:eq(8)').text();
		var quality_desc= $(this).closest('tr').find('td:eq(9)').text();	
		var bundle= $(this).closest('tr').find('td:eq(10)').text();	
		var remarks= $(this).closest('tr').find('td:eq(11)').text();			
		var rec_id= $(this).closest('tr').find('td:eq(12)').text();
		var idle_hours= $(this).closest('tr').find('td:eq(13)').text();
		$("#idle_hours").val(idle_hours);
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);					
	$("#machine_no").val(machine_no).attr('disabled',true);		
	$("#operator_eb_no").val(operator_eb_no);
	$("#operator_name").val(operator_name);
	$("#helper_eb_no").val(helper_eb_no);
	$("#helper_name").val(helper_name);
	$("#quality_code").val(quality_code);
	$("#quality_desc").val(quality_desc);
	$("#bundle").val(bundle);
	$("#remarks").val(remarks);	
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


