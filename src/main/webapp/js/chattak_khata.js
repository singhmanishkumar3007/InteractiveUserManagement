$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').attr('disabled',false);	
$('#spell').attr('disabled',false);	
$("#spell").change();
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#working_hours').attr('disabled',false);
$('#loom_no').val('').css("border-color", "").attr('disabled',false);
$('#loom_no').focus();	
$('#eb_no').val('').css("border-color", "");	
$('#name').val('');
$('#quality').val('').css("border-color", "");	
$('#production').val('').css("border-color", "");
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
      url: "chattak_khata_live_table.php",
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
		
		var loom_no= $(this).closest('tr').find('td:eq(1)').text();
		var eb_no= $(this).closest('tr').find('td:eq(2)').text();		
		var quality= $(this).closest('tr').find('td:eq(3)').text();			
		var production= $(this).closest('tr').find('td:eq(4)').text();
		var issue_date= $(this).closest('tr').find('td:eq(5)').text();
		var spell= $(this).closest('tr').find('td:eq(6)').text();
		var working_hours= $(this).closest('tr').find('td:eq(7)').text();
		var rec_id= $(this).closest('tr').find('td:eq(8)').text();
		var name= $(this).closest('tr').find('td:eq(9)').text();
		
	 
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	$('#working_hours').attr('disabled',true);
	$("#eb_no").val(eb_no);	
	$("#quality").val(quality);	
	$("#loom_no").val(loom_no).attr('disabled',true);
	$("#production").val(production);	
	$("#rec_id").val(rec_id);
	$("#name").val(name);
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

////////////////////////////////////////////spell time and working hours//////////////
$('#spell').bind('change', function()
	{
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
		
		var datString='spell='+spell;
	
	$.ajax({
      type: "POST",
      url: "chattak_khata_ebno_spellwise.php",
      data: datString,
      success: function(data) {  
		
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$('#eb_no').val(x.EB_NO);
		$("#name").val(x.WRK_NAME);		
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
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
///////////////////////////////////////////////////////////////////////////
/////////////////////EB NO SEARCH///////////////////////////
$('#name').attr('disabled',true);
$('#desc').attr('disabled',true);
$("#eb_no").bind('input',function(){
var eb_no=$("#eb_no").val();
var wordlength=$("#eb_no").val().length;
if(wordlength>=4)
{
var datString='eb_no='+eb_no;
$.ajax({
      type: "POST",
      url: "chattak_khata_ebno_search.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
		
		
		$('#name').val(data);
		var name=$('#name').val();
	    if((name)=='Invalid EB No !')
		{
			$('#quality').attr('disabled',true);
			$("#production").attr('disabled',true);
			$('#savetab').attr('disabled',true);
				
		}
		else
		{
		
		$('#quality').attr('disabled',false);
		$("#production").attr('disabled',false);
		$('#savetab').attr('disabled',false);
		}
		
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
}
else{	
		$('#name').val('');
		
		
}
return false;
});
///////////////////////////////////////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
var issue_date=$('#issue_date').val();
var spell=$('#spell').val();
var working_hours=$('#working_hours').val();
var loom_no=$('#loom_no').val();
if(loom_no=='')
	{
		alert("Please Enter Loom No!");
		$('#loom_no').focus().css("border-color", "red");
		return false;
	}
var eb_no=$('#eb_no').val();
if(eb_no=='')
	{
		alert("Please Enter EB No!");
		$('#eb_no').focus().css("border-color", "red");
		return false;
	}
var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Quality !");
			$('#quality').focus().css("border-color", "red");
		return false;
	}	

var production=$('#production').val();
if(production=='')
	{
		alert("Please Enter Production !");
		$('#production').focus().css("border-color", "red");
		return false;
	}

	var datString='issue_date='+issue_date+'&loom_no='+loom_no+'&spell='+spell+'&eb_no='+eb_no+'&quality='+quality+'&production='+production+'&working_hours='+working_hours;

	
	$.ajax({
      type: "POST",
      url: "chattak_khata_data_save.php",
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
			
		$('#loom_no').focus();
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
var issue_date=$('#issue_date').val();
var spell=$('#spell').val();
var eb_no=$('#eb_no').val();
if(eb_no=='')
	{
		alert("Please Enter EB No!");
		$('#eb_no').focus().css("border-color", "red");
		return false;
	}
var quality=$('#quality').val();
if(quality=='')
	{
		alert("Please Enter Quality !");
			$('#quality').focus().css("border-color", "red");
		return false;
	}
var production=$('#production').val();
if(production=='')
	{
		alert("Please Enter Production !");
		$('#production').focus().css("border-color", "red");
		return false;
	}
	var datString='eb_no='+eb_no+'&quality='+quality+'&production='+production+'&rec_id='+rec_id;
//alert(datString);
	
	$.ajax({
      type: "POST",
      url: "chattak_khata_edit.php",
      data: datString,
      success: function(data) {        

		
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");

$("#load").hide();
			$("#resettab").click();
					
		$("#po_search_button").click();	
			alert(data);
			$('#loom_no').focus();
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
      url: "chattak_khata_datewise.php",
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
      url: "chattak_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);
		
		
		$("#details td").click(function () 
		{                  
		
		var loom_no= $(this).closest('tr').find('td:eq(1)').text();
		var eb_no= $(this).closest('tr').find('td:eq(2)').text();		
		var quality= $(this).closest('tr').find('td:eq(3)').text();			
		var production= $(this).closest('tr').find('td:eq(4)').text();
		var issue_date= $(this).closest('tr').find('td:eq(5)').text();
		var spell= $(this).closest('tr').find('td:eq(6)').text();
		var working_hours= $(this).closest('tr').find('td:eq(7)').text();
		var rec_id= $(this).closest('tr').find('td:eq(8)').text();
		var name= $(this).closest('tr').find('td:eq(9)').text();
	 
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	$('#working_hours').attr('disabled',true);
	$("#eb_no").val(eb_no);	
	$("#name").val(name);	
	$("#quality").val(quality);	
	$("#loom_no").val(loom_no).attr('disabled',true);
	$("#production").val(production);	
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
      url: "chattak_khata_delete.php",
      data: datString,
      success: function(data) {
        
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			
$("#load").hide();

$("#resettab").click();

 	$("#po_search_button").click();
	alert(data);
	$('#loom_no').focus();

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
      url: "chattak_khata_live_table.php",
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
		
		var loom_no= $(this).closest('tr').find('td:eq(1)').text();
		var eb_no= $(this).closest('tr').find('td:eq(2)').text();		
		var quality= $(this).closest('tr').find('td:eq(3)').text();			
		var production= $(this).closest('tr').find('td:eq(4)').text();
		var issue_date= $(this).closest('tr').find('td:eq(5)').text();
		var spell= $(this).closest('tr').find('td:eq(6)').text();
		var working_hours= $(this).closest('tr').find('td:eq(7)').text();
		var rec_id= $(this).closest('tr').find('td:eq(8)').text();
		var name= $(this).closest('tr').find('td:eq(9)').text();
	 
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#spell").val(spell).attr('disabled',true);	
	$('#spell').change();
	$('#working_hours').attr('disabled',true);
	$("#eb_no").val(eb_no);	
	$("#name").val(name);	
	$("#quality").val(quality);	
	$("#loom_no").val(loom_no).attr('disabled',true);
	$("#production").val(production);	
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
 $('#loom_no').focus();
 //////////////////////////////////////////live table end/////////////////////////
 });//total doc ready


