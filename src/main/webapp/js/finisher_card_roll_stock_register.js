$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();

$('#quantity').focus();
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#issue_date').attr('disabled',false);	
$('#spell').attr('disabled',false);	
$('#quantity').focus();	
$('#type').val('').css("border-color", "").attr('disabled',false);	
$('#quantity').val('').css("border-color", "").attr('disabled',false);	
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_search_button").click();	
$("#po_datewise td").css("background-color", "");
$("#finisher_card_tab td").css("background-color", "");
/////////////////////////////////////////////////////////////////////////
		var issue_date=$('#issue_date').val();
		var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "finisher_card_roll_stock_register_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#finisher_card_tab").html(data);
	  
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

	$("#finisher_card_tab td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var spell= $(this).closest('tr').find('td:eq(2)').text();	
		var type= $(this).closest('tr').find('td:eq(3)').text();
		var quantity= $(this).closest('tr').find('td:eq(4)').text();
		var rec_id= $(this).closest('tr').find('td:eq(5)').text();
		
	$("#spell").val(spell).attr('disabled',true);					
	$("#issue_date").val(issue_date).attr('disabled',true);	
	$("#type").val(type);
	$("#quantity").val(quantity);
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#finisher_card_tab td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});		
///////////////////////////////////////////////////////////////////////////
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
count=0;
var issue_date=$('#issue_date').val();
var spell=$('#spell').val();
var type=$('#type').val();
var quantity=$.trim($('#quantity').val());
			if(quantity=='')
		{
			alert("Please Enter Quantity!");
			$('#quantity').focus().css("border-color", "red");
			return false;
		}	
	var datString='issue_date='+issue_date+'&spell='+spell+'&type='+type+'&quantity='+quantity;

	
	$.ajax({
      type: "POST",
      url: "finisher_card_roll_stock_register_data_save.php",
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
count=0;	
var rec_id=$('#rec_id').val();	
if(rec_id =='')
{
alert("Please Select a Record!");
}
else
{

var type=$('#type').val();
var quantity=$.trim($('#quantity').val());
			if(quantity=='')
		{
			alert("Please Enter Quantity!");
			$('#quantity').focus().css("border-color", "red");
			return false;
		}	
	var datString='type='+type+'&quantity='+quantity+'&rec_id='+rec_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "finisher_card_roll_stock_register_edit.php",
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
			$('#quantity').focus();
		

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
      url: "finisher_card_roll_stock_register_datewise.php",
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
	
    var spell= $(this).closest('tr').find('td:eq(0)').text();
    $("#spell").val(spell);
	var issue_date= $(this).closest('tr').find('td:eq(1)').text();
    $("#issue_date").val(issue_date);
	
	var datString = 'issue_date='+issue_date+'&spell='+spell; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "finisher_card_roll_stock_register_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#finisher_card_tab").html(data);
		
		
		$("#finisher_card_tab td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var spell= $(this).closest('tr').find('td:eq(2)').text();	
		var type= $(this).closest('tr').find('td:eq(3)').text();
		var quantity= $(this).closest('tr').find('td:eq(4)').text();
		var rec_id= $(this).closest('tr').find('td:eq(5)').text();
		
	$("#spell").val(spell).attr('disabled',true);					
	$("#issue_date").val(issue_date).attr('disabled',true);	
	$("#type").val(type);
	$("#quantity").val(quantity);
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#finisher_card_tab td").css("background-color", "");	
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
      url: "finisher_card_roll_stock_register_delete.php",
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
	$('#quantity').focus();

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
      url: "finisher_card_roll_stock_register_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#finisher_card_tab").html(data);
	  
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

	$("#finisher_card_tab td").click(function () 
		{                  
		
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();
		var spell= $(this).closest('tr').find('td:eq(2)').text();	
		var type= $(this).closest('tr').find('td:eq(3)').text();
		var quantity= $(this).closest('tr').find('td:eq(4)').text();
		var rec_id= $(this).closest('tr').find('td:eq(5)').text();
		
	$("#spell").val(spell).attr('disabled',true);					
	$("#issue_date").val(issue_date).attr('disabled',true);	
	$("#type").val(type);
	$("#quantity").val(quantity);
	$("#rec_id").val(rec_id);
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#finisher_card_tab td").css("background-color", "");	
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


