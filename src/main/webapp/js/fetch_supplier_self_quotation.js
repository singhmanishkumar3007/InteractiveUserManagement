$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });
 
$("#resetform").click(function() {

$("#item_group_code").val('');
$("#uom").val('');
$("#item_code").val('');
$("#rate").val('');
$("#item_desc").val('');
$("#note").val('');
$("#hi_po_sl_no").val('');
$("#hi_po_perm_id").val('');
$("#rec_id").val('');
$("#attach_file").val('');
var po_type = $("#po_type").val();
$("#supplier_item_list")[0].reset();
$("#table_body td").css("background-color", "");
$("#po_type").val(po_type).attr('selected',true);
$('#item_code').attr('disabled', false);

 return false;
	});
$("#resettab").click(function(event){

$("#po_datewise td").css("background-color", "");
$('#resetform').click();
$("#supplier_item_list")[0].reset();
document.getElementById("podetails").innerHTML = '';
$("#quot_no").val('');
return false;
});


//////////////////table scrol//////////////////////
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


/////////////////////table scrol end///////////////////

//////////////////////item table/////////////////////////////
$("#pop_table_item_list").ready(function()
{
    $('#item_group_code').live("click",function()
    {	$("#av_item_code_list").show();
		//$('#av_item_code_list').show();
       $('#item_code').val('');
		
		var supp_code=$('#supp_code').val();
		var datString ='supp_code='+supp_code;
				/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#av_item_code_list');   
$("#loading").show();
/////////create div forajax loading	
		
$.ajax({

      type: "POST",
      url: "fetch_supplier_self_quotation.php",
      data: datString,
	
      success: function(data) {  		
		//alert(data);
		//document.getElementById('pop_table_item_list').innerHTML = data;
		$("#pop_table_item_list").html(data);
		$('.sdiv1 ').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	//var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	var selected_item_group_code= $(this).closest('tr').find('td:eq(0)').text();
	var selected_item_desc= $(this).closest('tr').find('td:eq(1)').text();
	var selected_uom= $(this).closest('tr').find('td:eq(2)').text();
	
	//$("#item_code").val(selected_item_code);
	$("#item_group_code").val(selected_item_group_code);
	//$("#item_group_code").val(selected_item_group_code.concat(selected_item_code));
	$("#item_desc").val(selected_item_desc);
	$("#uom").val(selected_uom);
	$("#pop_table_item_list td").css("background-color", "");
	$("#av_item_code_list").hide();
	
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	});            
					$("#loading").hide();
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
	  
     		
    });//click end
	
//////////////////////////////////////////////////////////////////////////////inview scroll-------------------------
	
});
$(document).live("mouseup",function()
{
$("#av_item_code_list").hide();
});
//////////////////////item table end/////////////////////////
$("#savetab").click(function(event){

var saverowCount = (parseInt($('#podetails >tr').length));

var supp_name_wr=((($('#supp_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var supp_code_wr=((($('#supp_code').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var quot_no_wr=((($('#quot_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

var attach_file = $('#attach_file').val();
  var extension = attach_file.substr(attach_file.lastIndexOf('.') + 1).toLowerCase();
  var allowedExtensions = ['doc', 'docx', 'txt', 'pdf', 'JPEG','jpg','GIF','gif'];
  if (attach_file.length > 0)
     {
          if (allowedExtensions.indexOf(extension) === -1) 
             {
               alert('Invalid file Format. Only ' + allowedExtensions.join(', ') + ' are allowed.');
               return false;
             }
    }


if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{

var po_tr='#potr_'+ic;
var wr_arr= wr_arr+((($(po_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(3)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(5)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(6)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
//var wr_arr= wr_arr+((($(po_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
//var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(0)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}		//alert(wr_arr);		
		var datString = 'r='+ saverowCount +'&supp_name_wr=' +supp_name_wr+ '&supp_code_wr=' +supp_code_wr+'&quot_no_wr='+quot_no_wr+'&wr_arr=' + wr_arr+'&attach_file='+attach_file;
		
		//alert(datString);
		//return false;
$.ajax({
      type: "POST",
      url: "supplier_self_quotation_data_save.php",
	  //enctype: 'multipart/form-data',
      data: datString,
      success: function(data) {

		//alert(data);		
		document.getElementById("po_alert").innerHTML = data;
		$("#podetails").html('');
		 	
		
$("#load").fadeOut("slow");


$("#po_search_button").click();
//$("#resettab").click();
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
////////////////////////////////delete permanently//////////////
$("#deltab").click(function(event){
if(confirm('Are you sure you want to delete?')){

//$("#quot_no").val(select_quotation_no);  
var quot_no=$("#quot_no").val();

if(quot_no !=''){
var datString='quot_no='+quot_no;

$.ajax({
      type: "POST",
      url: "supplier_self_quotation_delete.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
		
		document.getElementById("po_alert").innerHTML = data;
		
	
$("#load").fadeOut("slow");

$("#resettab").click();
$("#po_search_button").click();

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
}

return false;
});

///////////////////////////////delete end///////////////////////

//////////////////////quation search'//////////////////////
$("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
				
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "fetch_supplier_self_quotation_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
				
		
////////////////////on select each td from search
$("#po_datewise td").click(function(event){
	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	//alert("test");
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var select_quotation_no= $(this).closest('tr').find('td:eq(0)').text();
    $("#quot_no").val(select_quotation_no);  
	  
	                 var datString = 'select_quotation_no='+select_quotation_no; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "fetch_supplier_self_quotation_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		document.getElementById("podetails").innerHTML = data;
		$("#load").hide();
		
		$("#podetails td").single_double_click(function () 
		{                                    ///////////////single click
		
		
		var selected_item_group_code= $(this).closest('tr').find('td:eq(1)').text();
		var selected_item_desc= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_uom= $(this).closest('tr').find('td:eq(3)').text();
		var selected_rate= $(this).closest('tr').find('td:eq(5)').text();
		var selected_note= $(this).closest('tr').find('td:eq(6)').text();
		var select_quot_no=$(this).closest('tr').find('td:eq(7)').text();
		var select_rec_id=$(this).closest('tr').find('td:eq(9)').text();
		
	$("#item_group_code").val(selected_item_group_code);
	$("#item_desc").val(selected_item_desc);
	$("#uom").val(selected_uom);
	$("#rate").val(selected_rate);
	$("#note").val(selected_note);
	$("#quot_no").val(select_quot_no);
	$("#rec_id").val(select_rec_id);
	$("#podetails td").css("background-color", "");
	
	
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
//$("#supp_item_button").show();	
	}, function () {                /////////////////////////dblclick

});	
	
///////////////////////////////////++++++++++++++//table headar starts	/////////////////////////////					 
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

	////////////////////////////////////////////////////////////////////////////////++++++++++++++++++++++////////////table headar ends	
//////////////////update start
			 				 
					 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
					 
					 
					 
					 
	});	//2nd call end	

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
//////////////////////quation search end//////////////////
/////////////////////VIRTUAL TABLE//////////////
$("#saverow").live("click",function(event){
	
			 //alert("test");
		var item_group_code =$.trim($("#item_group_code").val());
		if(item_group_code == 0 ) {alert ('Item Code is Empty!'); return false;}
		var uom = $.trim($("#uom").val());
		var item_code = $.trim($("#item_code").val());
		var rate = $.trim($("#rate").val());
		if(rate == 0 ) {alert ('Rate is Empty!'); return false;}
		var quentity = $.trim($("#quentity").val());
		var item_desc=$.trim($("#item_desc").val());
		var note = $.trim($("#note").val());
		var quot_no=$.trim($("#quot_no").val());
		var perm_id = $.trim($("#hi_po_perm_id").val());
		var hi_po_sl_no = $("#hi_po_sl_no").val();
		var rec_id = $("#rec_id").val();
		 //alert(rec_id);
	 if(hi_po_sl_no==''){
	 
	 //get last tr data
	 var last_td= $("#table_body tr:last").find('td:eq(0)').text();
	 //alert(last_td);
	 if(last_td ==''){
	 hi_po_sl_no=1;
	 }
	 else{
	 hi_po_sl_no=(parseInt(last_td)+1);
	 }
	 //alert(item_code);
	 	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"10px\"><pre></th><td width=\"28px\">'+hi_po_sl_no+'</td><td width=\"71px\">'+item_group_code+''+item_code+'</td><td width=\"306px\">'+item_desc+'</td><td width=\"44px\">'+uom+'</td><td width=\"53px\">'+quentity+'</td><td width=\"50px\">'+rate+'</td><td width=\"197px\">'+note+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	  $('#table_body >tbody:last').append(trdata);
	  }
	  else{
	 if(perm_id !=''){
	 var trdata = '<th width=\"10px\"><pre></th><td width=\"28px\">'+hi_po_sl_no+'</td><td width=\"71px\">'+item_group_code+''+item_code+'</td><td width=\"306px\">'+item_desc+'</td><td width=\"44px\">'+uom+'</td><td width=\"53px\">'+quentity+'</td><td width=\"50px\">'+rate+'</td><td width=\"197px\">'+note+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+quot_no+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+rec_id+'</span></td><th width=\"8px\"><pre></th>';
	  
	 }
	 	  else{
	 	 var trdata = '<th width=\"10px\"><pre></th><td width=\"28px\">'+hi_po_sl_no+'</td><td width=\"71px\">'+item_group_code+''+item_code+'</td><td width=\"306px\">'+item_desc+'</td><td width=\"44px\">'+uom+'</td><td width=\"53px\">'+quentity+'</td><td width=\"50px\">'+rate+'</td><td width=\"197px\">'+note+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	  
	 }
	 	//alert("test"); 
	 //alert('#potr_'+hi_po_sl_no+'');
	 
		  
	 $('#potr_'+hi_po_sl_no+'').html(trdata);
	 }
	 $('#resetform').click();
	 
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
return false;
});
//////////////////////VIRTUAL TABLE END/////////////////////////////////////////////
///////////////////////VIRTUAL TABLE ON SELECT/////////////////////////
$("#table_body td").live("click",function(event){

$("#table_body td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	//alert(sl_no);
	//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	var item_group_code = $(this).closest('tr').find('td:eq(1)').text();
    $("#item_group_code").val(item_group_code);
	//var item_code = $(this).closest('tr').find('td:eq(2)').text();
    //$("#item_code").val(item_code);
	var uom = $(this).closest('tr').find('td:eq(3)').text();
    $("#uom").val(uom);
	var item_desc=$(this).closest('tr').find('td:eq(2)').text();
	$('#item_desc').val(item_desc);
	var rate = $(this).closest('tr').find('td:eq(5)').text();
    $("#rate").val(rate);
	var note = $(this).closest('tr').find('td:eq(6)').text();
    $("#note").val(note);
	var get_perm_id= $(this).closest('tr').find('td:eq(8)').text();
	$("#hi_po_perm_id").val(get_perm_id);	
	
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////

//////////////////virtual delete/////////////////
$("#delrow").live("click",function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();

var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(8)').text();
//alert(del_i_ch);
if(del_i_ch ==='' )
{
var rowCouna = $('#podetails >tr').find('td:eq(8):contains("d")').length;
var rowCounb = $('#podetails >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta != 1){


$(del_po_tr).remove();
}else{
var che_po_sl=$("#hi_po_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}

}
else{
var rowCouna = $('#podetails >tr').find('td:eq(8):contains("d")').length;
var rowCounb = $('#podetails >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta !=1){

$(del_po_tr).closest('tr').find('td:eq(8)').text('d');
$(del_po_tr).hide();
}
else{
var che_po_sl=$("#hi_po_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}
}


$('#resetform').click();

return false;
});
});