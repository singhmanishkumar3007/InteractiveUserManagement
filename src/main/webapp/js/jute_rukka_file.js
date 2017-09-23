$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
/////////////////////////////////disable button actions
/* $("#delrow").click(function(event){
return false;
});
$("#saverow").click(function(event){
return false;
});
$("#savetab").click(function(event){
return false;
});
$("#resettab").click(function(event){
return false;
});
$("#deltab").click(function(event){
return false;
}); */


//////////////////////////////////////////////////////////////////////////enable drag
$( "#po_item_code_list" ).draggable({  handle: '.drag'  });
$( "#po_supp_code_list" ).draggable({ handle: '.drag' });
$("#resetform").click(function() {
$("#po_form")[0].reset();
 return false;
	});
//////////////////////////////////////////////////////////////////////////////////////////++++++++++++++//table headar starts						 
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

////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){
$('#rukka_no').val('');
$('#rukka_date').val('');
$('#broker').val('');
$('#quantity').val('');
$('#quantity_unit').val('0');
$('#quality').val('');
$('#mukam').val('');
$('#delivery_place').val('');
$('#delivery_date').val('');
$('#rate').val('');
$('#payment_term').val('0');

return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
	
	var rukka_no=$('#rukka_no').val();
	if(rukka_no=='')
	{
		alert("Please Enter Rukka No!");
		return false;
	}
	var rukka_date=$('#rukka_date').val();
	
	var broker=$('#broker').val();
	if(broker=='')
	{
		alert("Please Enter Broker Name!");
		return false;
	}
	var quantity=$('#quantity').val();
	if(quantity=='')
	{
		alert("Please Enter Quantity!");
		return false;
	}
	var quantity_unit=$('#quantity_unit').val();
	if(quantity_unit==0)
	{
		alert("Please Select a Unit!");
		return false;
	}
	var quality=$('#quality').val();
	if(quality=='')
	{
		alert("Please Enter Quality!");
		return false;
	}
	var mukam=$('#mukam').val();
	if(mukam=='')
	{
		alert("Please Enter Mukam!");
		return false;
	}
	var delivery_place=$('#delivery_place').val();
	if(delivery_place=='')
	{
		alert("Please Enter Delivery Place!");
		return false;
	}
	var delivery_date=$('#delivery_date').val();
	if(delivery_date=='')
	{
		alert("Please Select Delivery Date!");
		return false;
	}
	var rate=$('#rate').val();
	if(rate=='')
	{
		alert("Please Enter Rate!");
		return false;
	}
	var payment_term=$('#payment_term').val();
	if(payment_term==0)
	{
		alert("Please Select Payment Term!");
		return false;
	}
	
	var datString='rukka_no='+rukka_no+'&rukka_date='+rukka_date+'&broker='+broker+'&quantity='+quantity+'&quantity_unit='+quantity_unit+'&quality='+quality+'&mukam='+mukam+'&delivery_place='+delivery_place+'&delivery_date='+delivery_date+'&rate='+rate+'&payment_term='+payment_term;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "jute_rukka_file_save.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
$("#load").hide();
			$("#resettab").click();
			alert(data);
			}
			});
			return false;
			});

///////////////////////////////////////////save end//////////////////////////////////////////	
	///////////////////////////////////////live table//////////////////////////////////
	var datString;
	$.ajax({
      type: "POST",
      url: "jute_rukka_file_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#rukka_details").html(data);

	}
	});
 });//total doc ready


