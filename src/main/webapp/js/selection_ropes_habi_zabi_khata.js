$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$('#trolley_no').focus();
$('#net_weight').attr('disabled',true);	
$('#trolley_weight').attr('disabled',true);	
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#issue_date').attr('disabled',false);	
$('#goods').val('selected').attr('disabled',false);		
$('#trolley_no').val('').focus().css("border-color", "").attr('disabled',false);		
$('#trolley_weight').val('').attr('disabled',true);	
$('#gross_weight').val('').css("border-color", "").attr('disabled',true);;		
$('#net_weight').val('').attr('disabled',true);	
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_search_button").click();
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
/////////////////////////////table/////////////////////////
var issue_date=$('#issue_date').val();
	var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "selection_ropes_habi_zabi_khata_table.php",
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
		var goods= $(this).closest('tr').find('td:eq(2)').text();	
		var trolley_no= $(this).closest('tr').find('td:eq(3)').text();		
		var trolley_weight= $(this).closest('tr').find('td:eq(4)').text();
		var gross_weight= $(this).closest('tr').find('td:eq(5)').text();
		var net_weight= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#goods").val(goods);					
	$("#trolley_no").val(trolley_no);		
	$("#trolley_weight").val(trolley_weight);
	$("#gross_weight").val(gross_weight).attr('disabled',false);	;
	$("#net_weight").val(net_weight);
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
////////////////////////////////////////////////////////
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
///////////////////////////////////////trolley weight/////////////////////////
$("#trolley_no").bind('input',function(){
var trolley_no=$("#trolley_no").val();
var wordlength=$("#trolley_no").val().length;
if(wordlength!='')
{
var datString='trolley_no='+trolley_no;

$.ajax({
      type: "POST",
      url: "selection_ropes_habi_zabi_khata_trolley_weight.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
	  $('#trolley_weight').val(data);
	  
	  var trolley_weight=$('#trolley_weight').val();
	    if(isNaN(trolley_weight))
		{
			$('#gross_weight').attr('disabled',true);
			$("#net_weight").val('');
				
		}
		else
		{
		$('#gross_weight').attr('disabled',false);
		var trolley_weight=$('#trolley_weight').val();
	var gross_weight=$("#gross_weight").val();
	if(gross_weight!='')
	{
	trolley_weight=parseFloat(trolley_weight);
	gross_weight=parseFloat(gross_weight);
	
	var net_weight=gross_weight-trolley_weight;
	var net_weight=net_weight.toFixed(2);
	if(isNaN(net_weight))
		{
			net_weight='';
		}
		$("#net_weight").val(net_weight);
		
	}

else
{
$("#net_weight").val('');
}	
		}
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
 $('#trolley_weight').val('');
}
return false;
});
///////////////////////////////////////trolley weight end////////////////////

//////////////////////////////////////net weight///////////////////
$("#gross_weight").bind('input',function(){
	var trolley_weight=$('#trolley_weight').val();
	var gross_weight=$("#gross_weight").val();
	if(gross_weight!='')
	{
	trolley_weight=parseFloat(trolley_weight);
	gross_weight=parseFloat(gross_weight);
	
	var net_weight=gross_weight-trolley_weight;
	var net_weight=net_weight.toFixed(2);
	if(isNaN(net_weight))
		{
			net_weight='';
		}
		$("#net_weight").val(net_weight);
		
	}

else
{
$("#net_weight").val('');
}	
		
});
/////////////////////////////////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var issue_date=$('#issue_date').val();
var goods=$('#goods').val();
var trolley_no=$('#trolley_no').val();
if(trolley_no=='')
	{
		alert("Please Enter Trolley No !");
		$('#trolley_no').focus().css("border-color", "red");
		return false;
	}
var trolley_weight=$('#trolley_weight').val();	
	if(isNaN(trolley_weight))
		{
			alert("Please Enter A valid Trolley No !");
			$('#trolley_no').focus().css("border-color", "red");
			return false;
		}
var gross_weight=$('#gross_weight').val();
if(gross_weight=='')
	{
		alert("Please Enter Gross Weight !");
		$('#gross_weight').focus().css("border-color", "red");
		return false;
	}

var net_weight=$('#net_weight').val();


	var datString='issue_date='+issue_date+'&goods='+goods+'&trolley_no='+trolley_no+'&gross_weight='+gross_weight+'&net_weight='+net_weight;

	
	$.ajax({
      type: "POST",
      url: "selection_ropes_habi_zabi_khata_save.php",
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
				$("#trolley_no").focus();
		
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
var goods=$('#goods').val();
var trolley_no=$('#trolley_no').val();
if(trolley_no=='')
	{
		alert("Please Enter Trolley No !");
		$('#trolley_no').focus().css("border-color", "red");
		return false;
	}
var trolley_weight=$('#trolley_weight').val();	
	if(isNaN(trolley_weight))
		{
			alert("Please Enter A valid Trolley No !");
			$('#trolley_no').focus().css("border-color", "red");
			return false;
		}
var gross_weight=$('#gross_weight').val();
if(gross_weight=='')
	{
		alert("Please Enter Gross Weight !");
		$('#gross_weight').focus().css("border-color", "red");
		return false;
	}

var net_weight=$('#net_weight').val();


	var datString='issue_date='+issue_date+'&goods='+goods+'&trolley_no='+trolley_no+'&gross_weight='+gross_weight+'&net_weight='+net_weight+'&rec_id='+rec_id;
		//alert(datString);
	$.ajax({
      type: "POST",
      url: "selection_ropes_habi_zabi_khata_edit.php",
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
				$("#trolley_no").focus();
		

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
      url: "selection_ropes_habi_zabi_khata_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
				
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	//alert("test");
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var trolley_no= $(this).closest('tr').find('td:eq(0)').text();	
	var issue_date= $(this).closest('tr').find('td:eq(1)').text();
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#trolley_no").val(trolley_no);	
var datString = 'trolley_no='+trolley_no+'&issue_date='+issue_date; 	
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "selection_ropes_habi_zabi_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);
		
		
		$("#details td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var goods= $(this).closest('tr').find('td:eq(2)').text();	
		var trolley_no= $(this).closest('tr').find('td:eq(3)').text();		
		var trolley_weight= $(this).closest('tr').find('td:eq(4)').text();
		var gross_weight= $(this).closest('tr').find('td:eq(5)').text();
		var net_weight= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#goods").val(goods);					
	$("#trolley_no").val(trolley_no);		
	$("#trolley_weight").val(trolley_weight);
	$("#gross_weight").val(gross_weight).attr('disabled',false);	;
	$("#net_weight").val(net_weight);
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
		$("#trolley_no").focus();
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
      url: "selection_ropes_habi_zabi_khata_delete.php",
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
      url: "selection_ropes_habi_zabi_khata_table.php",
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
		var goods= $(this).closest('tr').find('td:eq(2)').text();	
		var trolley_no= $(this).closest('tr').find('td:eq(3)').text();		
		var trolley_weight= $(this).closest('tr').find('td:eq(4)').text();
		var gross_weight= $(this).closest('tr').find('td:eq(5)').text();
		var net_weight= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();
		
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#goods").val(goods);					
	$("#trolley_no").val(trolley_no);		
	$("#trolley_weight").val(trolley_weight);
	$("#gross_weight").val(gross_weight).attr('disabled',false);	;
	$("#net_weight").val(net_weight);
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


