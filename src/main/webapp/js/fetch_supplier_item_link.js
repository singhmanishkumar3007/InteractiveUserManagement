$(document).ready(function(){

$("#resetform").click(function() {

$("#item_group_code").val('');
$("#item_code").val('');
$("#pop_supp_name").val('');
$("#pop_supp_code").val('');
$("#item_desc").val('');
$("#podetails").html('');
 return false;
	});

/////////////////table header scrol////////////////////
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
/////////////////table header scrol end////////////////

////////////////////supplier table /////////////////
$("#pop_table_supp_list").ready(function()
{
	    $('#pop_supp_name').keyup(function()
    { 
		$("#podetails").html('');
	$("#av_supp_code_list").show();
        $('#pop_supp_code').val('');
		var search_char_supp = $('#pop_supp_name').val();
		
		var datString ='page_supplist=supp_1 & serach_suppchar='+search_char_supp;
		$("<div></div>").attr('id','loading').appendTo('#av_supp_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "fetch_po_supplier_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_supp_list").innerHTML = data;	  
	  $("#loading").hide();
	  var datString = 'page_supplist=supp_1 & serach_suppchar='+search_char_supp;
		
$.ajax({

      type: "POST",
      url: "fetch_po_supplier.php",
      data: datString,
	
      success: function(data) {   

		
		
		document.getElementById('pop_table_supp_list').innerHTML = data;		
		////////////////////////////////////////////////////////////
	
	$("#pop_table_supp_list td").live('click',function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(0)').text();
	var selected_supp_name= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_supp_name").val(selected_supp_name);
	$("#pop_table_supp_list td").css("background-color", "");
	$("#av_supp_code_list").hide();
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
////////////////////////////////////////////
 var datString='sup_code='+selected_supp_code;
	  	
$.ajax({

      type: "POST",
      url: "supplier_item_link_live_table.php",
      data: datString,
	
      success: function(data) {  		
		//alert(data);
			
	$("#podetails").html(data);
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


////////////////////////////////////////////////////////
	});
		/////////////////////////////////////////////////	
			
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
	  $("#loading").hide();
     },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });		
		
		
    });//keyup end
	
//////////////////////////////////////////////////////////////////////////////inview scroll-------------------------



	
});
///////////////////////supplier table end////////////////////
//////////////////////item table/////////////////////////////
$("#pop_table_item_list").ready(function()
{
    $('#item_group_code').keyup(function()
    {	
		$('#av_item_code_list').show();
        $('#item_code').val('');
		var search_char_item = $('#item_group_code').val();
		
		var datString ='page_supplist=supp_1 & serach_itemchar='+search_char_item;
		/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#av_item_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "fetch_item_list_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_item_list").innerHTML = data;	  
	  $("#loading").hide();
	  var datString = 'page_supplist=supp_1 & serach_itemchar='+search_char_item;
	  //alert(datString);
		
$.ajax({

      type: "POST",
      url: "fetch_item_list.php",
      data: datString,
	
      success: function(data) {  		
		//alert(data);
		//document.getElementById('pop_table_item_list').innerHTML = data;
		$("#pop_table_item_list").html(data);
		$('.sdiv1 ').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	var selected_item_group_code= $(this).closest('tr').find('td:eq(0)').text();
	var selected_item_desc= $(this).closest('tr').find('td:eq(2)').text();
	$("#item_code").val(selected_item_code);
	$("#item_group_code").val(selected_item_group_code);
	$("#item_desc").val(selected_item_desc);
	$("#pop_table_item_list td").css("background-color", "");
	$("#av_item_code_list").hide();
	
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
	
});
		/////////////////////////////////////////////////	
			
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
	  $("#loading").hide();
     },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });		
		
		
    });//keyup end
	
//////////////////////////////////////////////////////////////////////////////inview scroll-------------------------
	
});
$(document).live("mouseup",function()
{
$("#av_item_code_list").hide();
$("#av_supp_code_list").hide();
});
//////////////////////item table end/////////////////////////
//////////////////////submit data////////////////////////

$("#supp_item_button").live("click",function()
{
var pop_supp_name=$("#pop_supp_name").val();
var pop_supp_code=$("#pop_supp_code").val();
var item_group_code=$("#item_group_code").val();
var item_code=$("#item_code").val();
var item_desc=$("#item_desc").val();

if(pop_supp_code=='')
{
alert("Please Select A Supplier !");
$("#pop_supp_name").focus();
return false;
}
if(item_group_code=='')
{
alert("Please Enter Item Group Code !");
return false;
}
if(item_code=='')
{
alert("Item Code Is Blank !");
return false;
}

else
{
var dataString='pop_supp_code='+pop_supp_code+'&item_group_code='+item_group_code+'&item_code='+item_code; 
//alert(dataString);
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "supplier_item_data_save.php",
	data: dataString,
    success: function(data)
    {
	
	  $("#loading").hide();

	  document.getElementById("po_alert").innerHTML = data;
$("#item_group_code").val('');
$("#item_code").val('');
$("#item_desc").val('');
		 	
	var datString='sup_code='+pop_supp_code;
	  	
$.ajax({

      type: "POST",
      url: "supplier_item_link_live_table.php",
      data: datString,
	
      success: function(data) {  		
		//alert(data);
			
	$("#podetails").html(data);
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
	
	var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_alert").show();
$("#po_alert_message").show();
popupStatus = 1;


}
}

//disabling popup with jQuery magic!
function disablePopup(){
//disables popup only if it is enabled
if(popupStatus==1){
$("#background_po_alert").hide("");
$("#po_alert_message").hide("");
popupStatus = 0;
}
}
//position popup
function centerPopup(){
//request data for centering
eleOffset = $("#item_code").offset();
//get position
var leftposi = eleOffset.left +50;
var topposi = eleOffset.top +50 ;

$("#po_alert_message").css({
"position": "absolute",
"top": topposi,
"left": leftposi
});
//only need force for IE6

$("#background_po_alert").css({
"height": windowHeight
});
}

//CLOSING POPUP
//Click the x event!
$("#alert_Close").click(function(){
disablePopup();
});
//Click out event!
$("#background_po_alert").click(function(){
disablePopup();
});
//Press Escape event!
$(document).keypress(function(e){
if(e.keyCode==27 & popupStatus==1){
disablePopup();
}
});

//load popup
loadPopup();
centerPopup();
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
$(".delete_row").live("click",function()
{
if(confirm('Are you sure you want to delete ?')){

var rec_id=$(this).attr('id');
var datString = 'rec_id='+rec_id;
$.ajax({

      type: "POST",
      url: "supplier_item_link_delete.php",
      data: datString,	
      success: function(data) { 		
		alert(data);
		
		var sup_code=$("#pop_supp_code").val();
		
		var datString='sup_code='+sup_code;
	  	
$.ajax({

      type: "POST",
      url: "supplier_item_link_live_table.php",
      data: datString,
	
      success: function(data) {  		
		//alert(data);
			
	$("#podetails").html(data);
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
	
		
	  }
	  });

return false;
}
});

//////////////////////submit data end//////////////////////
});