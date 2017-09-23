$(document).ready(function(){

/////////////////////////////////disable button actions
$("#delrow").click(function(event){
return false;
});
$("#saverow").click(function(event){
return false;
});

$("#resettab").live("click",function(event){
	var po_no = $('#hi_po_sele_no').val();
	
				var datString = 'po_no='+ po_no;

	var url = "po_print.php?"+datString;    
			//$(location).attr('href',url);
			window.open( url, '_blank');
return false;
});


$("#deltab").click(function(event){
var po_no = $('#hi_po_sele_no').val();
	
			/* 	var datString = 'po_no='+ po_no;

	var url = "format_po_print.php?"+datString;     */
	var url = "format_po_print_a4.php";    
			//$(location).attr('href',url);
			window.open( url, '_blank');						
return false;
});
$("#savetab").click(function(event){
return false;
});

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

////////////////////////////////////////////////////////////////////////////////++++++++++++++++++++++////////////table headar ends		

$("#po_search_button").click(function() {

$('#po_form')[0].reset();
$("#eve_item_name").text('');

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



 
 var form_date = $("#form_date").val();
	
 var to_date = $("#to_date").val();
 

				
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		//alert (dataString);return false;
		



$.ajax({
      type: "POST",
      url: "fetch_po_datewise_print.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("po_datewise").innerHTML = data;
		
		

		
		
		
$("#load").hide();


//////////////////////////////////////now select each td from search
		
		$("#po_datewise td").click(function(event){
		
$('#po_form')[0].reset();
$("#eve_item_name").text('');
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var selectedpo = $(this).closest('tr').find('td:eq(0)').text();
                     
	$("#hi_po_sele_no").val(selectedpo);////----------------------------------------------------------------------------------------------------------------------------keep po number safe
	
	                 var datString = 'select_po='+ selectedpo ; //another call to pohdr and podtl

					 
					 
					 
					 $.ajax({
      type: "POST",
      url: "fetch_po_datewise_onselect_print.php",
      data: datString,
      success: function(data) {
        


		
		document.getElementById("podetails").innerHTML = data;
		$("#load").hide();
		
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

	////////////////////////////////////////////////////////////////////////////////++++++++++++++++++++++////////////table headar ends				 
					 
//=============================call each po row to edit

$("#table_body td").click(function(event){

$("#table_body td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	var item_code = $(this).closest('tr').find('td:eq(1)').text();
    $("#item_code").val(item_code);
	var indent_no = $(this).closest('tr').find('td:eq(7)').text();
    $("#indent_no").val(indent_no);
	var srl_no = $(this).closest('tr').find('td:eq(8)').text();
    $("#srl_no").val(srl_no);
	var fin_year = $(this).closest('tr').find('td:eq(6)').text();
    $("#fin_year").val(fin_year);
	//var ind_qty = $(this).closest('tr').find('td:eq(0)').text();
    //$("#ind_qty").val(ind_qty);
	var quantity_po = $(this).closest('tr').find('td:eq(5)').text();
    $("#quantity_po").val(quantity_po);
	var rate_po = $(this).closest('tr').find('td:eq(4)').text();
    $("#rate_po").val(rate_po);
	var dtl_description = $(this).closest('tr').find('td:eq(2)').text();
    $("#dtl_description").val(dtl_description);
	var disc_po = $(this).closest('tr').find('td:eq(9)').text();
    $("#disc_po").val(disc_po);
	
	var cst_po = $(this).closest('tr').find('td:eq(10)').text();
    $("#cst_po").val(cst_po);
	var sch_po = $(this).closest('tr').find('td:eq(11)').text();
    $("#sch_po").val(sch_po);
	var exc_po = $(this).closest('tr').find('td:eq(12)').text();
    $("#exc_po").val(exc_po);
	var dlv_chg = $(this).closest('tr').find('td:eq(13)').text();
    $("#dlv_chg").val(dlv_chg);
	var del_no = $(this).closest('tr').find('td:eq(16)').text();
    $("#del_no").val(del_no);
	var make_po = $(this).closest('tr').find('td:eq(17)').text();
    $("#make_po").val(make_po);
	var eve_item_name= $(this).closest('tr').find('td:eq(18)').text();
		$("#eve_item_name").text(eve_item_name);
	var get_indent_qty= $(this).closest('tr').find('td:eq(19)').text();
		$("#ind_qty").val(get_indent_qty);	
	$("#hi_po_item_name").val(eve_item_name);
	
	var term_po = $(this).closest('tr').find('td:eq(15)').text();
 /*    if(term_po == 'D'){
		var term_po = 'Days';
		}
		if(term_po == 'M'){
		var term_po = 'Months';
		}
		if(term_po == 'W'){
		var term_po = 'Weekly';
		}
		if(term_po == 'F'){
		var term_po = 'fortnightly';
		}
		if(term_po == 'A'){
		var term_po = 'As & When';
		}
		//$("#term_po option:selected").text(term_po );*/

$("#term_po").val( term_po ).attr('selected',true);

$("#delrow").click(function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();
$('#po_form')[0].reset();
$("#eve_item_name").text('');
$(del_po_tr).remove();
return false;
});
});
//===================###################################################call each po row to edit ends xxxxxxxxxxxxxxxxxxxxx	 
					 
					 
					 
					 
					 }
					 
					 
					 
					 
	});	//2nd call end			

/////////////////////////////////////=======also get json data from pohdr=======================================================

	$.ajax
({
    type: "POST",
    url: "fetch_po_datewise_onselect_hdr_print.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	
	var x = eval('(' + data + ')'); ////////////////decode json data

      /*  if(x.PO_TYPE == 'G'){
		var po_type = 'GENERAL';
		}
		if(x.PO_TYPE == 'H'){
		var po_type = 'OVERHAULING';
		}
		if(x.PO_TYPE == 'O'){
		var po_type = 'OPEN';
		}
		*/
		
		$("#po_type").val(x.PO_TYPE ).attr('selected',true);
		//$("#po_type option:selected").text(po_type);
		$("#po_date").val(x.PO_DATE);
		$("#supplier_code").val(x.SUPP_CODE);
		$("#footer_note").val(x.FOOTER_NOTE);
		
		//$(".custName").html(data.message1);
        //$(".custName2").html(data.message2);
    }
});

	
	
	
	
	
/////////////////////////////////=============hdr call end===================================	



				 
});//click event close

		
		
		///////////////////////////////////
		
 } /////////imp succsess
     });
    return false;
	});

  
 //////////////////////////////////////////////////////////////////////////
//#################################################################################item list###########################################
$("#item_code").click(function() {
var item_code_val=$("#item_code").val();

$("#pop_item_code").val(item_code_val) ;
			//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_item_code_list").show();
$("#po_item_code_list").show();
popupStatus = 1;



 


///////////////////////////////////////////////////////////////



}
}

//disabling popup with jQuery magic!
function disablePopup(){
//disables popup only if it is enabled
if(popupStatus==1){
$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
}
}

//position popup
function centerPopup(){
//request data for centering
eleOffset = $("#item_code").offset();
//get position
var leftposi = eleOffset.left -300;
var topposi = eleOffset.top -200 ;

$("#po_item_code_list").css({
"position": "absolute",
"top": topposi,
"left": leftposi
});
//only need force for IE6

$("#background_po_item_code_list").css({
"height": windowHeight
});
}

//CLOSING POPUP
//Click the x event!
$("#po_item_code_list_Close").click(function(){
disablePopup();
});
//Click out event!
$("#background_po_item_code_list").click(function(){
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





 return false;
	});
	
	
///////////////////////////////////////////////////////////////////////
$("#pop_table_item_list").ready(function()
{
    $('#pop_item_name').keyup(function()
    {
        var search_char_item = $('#pop_item_name').val();
		
		var datString ='page_itemlist=item_1 & serach_itemchar='+search_char_item;
		/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#po_item_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "fetch_po_itemlist_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_item_list").innerHTML = data;
	  
	  $("#loading").hide();
	  var datString = 'page_itemlist=item_1 & serach_itemchar='+search_char_item;
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_itemlist.php",
      data: datString,
	
      success: function(data) {
        

		
		
		document.getElementById('item_1').innerHTML = data;
		
		$('.sdiv ').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_item_code").val(selected_item_code);
	$("#pop_table_item_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#item_code").val(selected_item_code);
var selected_item_name= $(this).closest('tr').find('td:eq(0)').text();	
	$("#hi_po_item_name").val(selected_item_name);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
			
			}//success
});
	  $("#loading").hide();
     }
	  });
		
		
		
		
		
		
		
    });//keyup end
	
//////////////////////////////////////////////////////////////////////////////inview scroll-------------------------
$.extend($.expr[':'],{
    inview: /*function(a) {
        var st = (document.documentElement.scrollTop || document.body.scrollTop),
            ot = $(a).offset().top,
            wh = (window.innerHeight && window.innerHeight < $(window).height()) ? window.innerHeight : $(window).height();
        return ot > st && ($(a).height() + ot) < (st + wh);
    } */
	
	function (elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	return (!((elemBottom > docViewBottom) && (elemTop > docViewBottom) || (elemTop < docViewTop) && (elemBottom < docViewTop)));
}

});//inview ends



	
});//doc ready end
////=======================================	load item data at start=========================


//+++++++++++++++++++++++++++++++++++++
var datString;
$.ajax
({
    type: "POST",
    url: "fetch_po_itemlist_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_item_list").innerHTML = data;
	  
	  
	  var datString = 'page_itemlist=item_1 & serach_itemchar=';
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_itemlist.php",
      data: datString,
	
      success: function(data) {
        

		
		
		document.getElementById('item_1').innerHTML = data;
		$('.sdiv ').last().css({ 'height' : 'auto' });
	
			////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_item_code").val(selected_item_code);
	$("#pop_table_item_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#item_code").val(selected_item_code);
	var selected_item_name= $(this).closest('tr').find('td:eq(0)').text();	
	$("#hi_po_item_name").val(selected_item_name);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
			}//success
});
	  
     }
	  });
//_____________________________-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++________________________________
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   $("#popdiv_scroll_item").bind("scroll", function(event) {
 
////////////////////////////////////////////////////////////////++++++++++++++++++++++++===========================




var divid = $('.sdiv:inview').attr("id");




//===================================================================================================================
var search_char_item = $('#pop_item_name').val();


var datString = 'page_itemlist='+ divid + '&serach_itemchar=' + search_char_item;
		
		


if($('.sdiv:inview').is(':empty')){

/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#po_item_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax({

      type: "POST",
      url: "fetch_po_itemlist.php",
      data: datString,
	
      success: function(data) {
        

		
		$(".sdiv:not(:inview)").empty();
		document.getElementById(divid).innerHTML = data;
		$('.sdiv ').last().css({ 'height' : 'auto' });
		$("#loading").hide();
		////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_item_code").val(selected_item_code);
	$("#pop_table_item_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#item_code").val(selected_item_code);
	var selected_item_name= $(this).closest('tr').find('td:eq(0)').text();	
	$("#hi_po_item_name").val(selected_item_name);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
			}//success
});
}//endif

		
////////////////////////////////////////////////////////////////////////////next//////////////////////////////////////////////////////		
		if($('.sdiv:inview').next().is('.sdiv')){
		var search_char_item = $('#pop_item_name').val();
	
		var page_id_next=($('.sdiv:inview').next().attr("id"));
				var datString = 'page_itemlist='+ page_id_next + '&serach_itemchar=' + search_char_item;
		
		


if($('.sdiv:inview').next().is(':empty')){


$.ajax({

      type: "POST",
      url: "fetch_po_itemlist.php",
      data: datString,
	  
      success: function(data) {
        	
			
		document.getElementById(page_id_next).innerHTML = data;
		$('.sdiv ').last().css({ 'height' : 'auto' });
		
		
		////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_item_code").val(selected_item_code);
	$("#pop_table_item_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#item_code").val(selected_item_code);
	var selected_item_name= $(this).closest('tr').find('td:eq(0)').text();	
	$("#hi_po_item_name").val(selected_item_name);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");

popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
		
		
		}//success
		});//ajax
		}//if empty
		}//next
		
/////////////////////////////////////////////////////////////////////////prev/////////////////////////////////////////////////////////////////////////////

	var search_char_item = $('#pop_item_name').val();	
	
		if($('.sdiv:inview').prev().is('.sdiv')){
		
		var page_id_prev=($('.sdiv:inview').prev().attr("id"));
				var datString = 'page_itemlist='+ page_id_prev + '&serach_itemchar=' + search_char_item;

		


if($('.sdiv:inview').prev().is(':empty')){


$.ajax({

      type: "POST",
      url: "fetch_po_itemlist.php",
      data: datString,
	  	
      success: function(data) {
        
		document.getElementById(page_id_prev).innerHTML = data;
		$('.sdiv ').last().css({ 'height' : 'auto' });
		
		////////////////////////////////////////////////////////////

	
	$("#pop_table_item_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_item_code").val(selected_item_code);
	$("#pop_table_item_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#item_code").val(selected_item_code);
	var selected_item_name= $(this).closest('tr').find('td:eq(0)').text();	
	$("#hi_po_item_name").val(selected_item_name);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
		}//success
		});//ajax
		}//if empty
		}///////////////////////////////////////////////////////////////////////////////////////prev
		
		




});//scroll ends


//################################################################################# end item list###########################################
$("#supplier_code").click(function() {
var supp_code_val=$("#supplier_code").val();

$("#pop_supp_code").val(supp_code_val) ;


////////////////////////////////////////////////////////////search by code/////////////////////////
if( $.trim("#pop_supp_code").length ) {
          
		  var search_char_code = $('#pop_supp_code').val();
		  var datString ='page_supplist=supp_1 & serach_suppcode='+search_char_code;
/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#po_supp_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "fetch_po_supplist_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_supp_list").innerHTML = data;
	  
	  $("#loading").hide();
	  var datString = 'page_supplist=supp_1 & serach_suppcode='+search_char_code;
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_supplist.php",
      data: datString,
	
      success: function(data) {
        

		
		
		document.getElementById('supp_1').innerHTML = data;
		
		$('.sdiv1 ').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_table_supp_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
			
			}//success
});
	  $("#loading").hide();
     }
	  });
		  
		  
		  
    }

			//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_supp_code_list").show();
$("#po_supp_code_list").show();
popupStatus = 1;



 


///////////////////////////////////////////////////////////////



}
}

//disabling popup with jQuery magic!
function disablePopup(){
//disables popup only if it is enabled
if(popupStatus==1){
$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0;
}
}

//position popup
function centerPopup(){
//request data for centering
eleOffset = $("#supplier_code").offset();
//get position
var leftposi = eleOffset.left -300;
var topposi = eleOffset.top -50 ;

$("#po_supp_code_list").css({
"position": "absolute",
"top": topposi,
"left": leftposi
});
//only need force for IE6

$("#background_po_supp_code_list").css({
"height": windowHeight
});
}

//CLOSING POPUP
//Click the x event!
$("#po_supp_code_list_Close").click(function(){
disablePopup();
});
//Click out event!
$("#background_po_supp_code_list").click(function(){
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





 return false;
	});////supp click ok

	
$("#pop_table_supp_list").ready(function()
{
    $('#pop_supp_name').keyup(function()
    {
        $('#pop_supp_code').val('');
		var search_char_supp = $('#pop_supp_name').val();
		
		var datString ='page_supplist=supp_1 & serach_suppchar='+search_char_supp;
		/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#po_supp_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "fetch_po_supplist_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_supp_list").innerHTML = data;
	  
	  $("#loading").hide();
	  var datString = 'page_supplist=supp_1 & serach_suppchar='+search_char_supp;
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_supplist.php",
      data: datString,
	
      success: function(data) {
        

		
		
		document.getElementById('supp_1').innerHTML = data;
		
		$('.sdiv1 ').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_table_supp_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
			
			}//success
});
	  $("#loading").hide();
     }
	  });
		
		
		
		
		
		
		
    });//keyup end
	
//////////////////////////////////////////////////////////////////////////////inview scroll-------------------------
$.extend($.expr[':'],{
    inview: /*function(a) {
        var st = (document.documentElement.scrollTop || document.body.scrollTop),
            ot = $(a).offset().top,
            wh = (window.innerHeight && window.innerHeight < $(window).height()) ? window.innerHeight : $(window).height();
        return ot > st && ($(a).height() + ot) < (st + wh);
    } */
	
	function (elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	return (!((elemBottom > docViewBottom) && (elemTop > docViewBottom) || (elemTop < docViewTop) && (elemBottom < docViewTop)));
}

});//inview ends



	
});//doc ready end	
	
	
////=======================================	load item data at start=========================


//+++++++++++++++++++++++++++++++++++++
var datString;
$.ajax
({
    type: "POST",
    url: "fetch_po_supplist_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_supp_list").innerHTML = data;
	  
	  
	  var datString = 'page_supplist=supp_1 & serach_suppchar=';
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_supplist.php",
      data: datString,
	
      success: function(data) {
        

		
		
		document.getElementById('supp_1').innerHTML = data;
		$('.sdiv1 ').last().css({ 'height' : 'auto' });
	
			////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_table_supp_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
			}//success
});
	  
     }
	  });
//_____________________________-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++________________________________
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   $("#popdiv_scroll_supp").bind("scroll", function(event) {
 
////////////////////////////////////////////////////////////////++++++++++++++++++++++++===========================




var divid = $('.sdiv1:inview').attr("id");




//===================================================================================================================
var search_char_supp = $('#pop_supp_name').val();


var datString = 'page_supplist='+ divid + '&serach_suppchar=' + search_char_supp;
		
		


if($('.sdiv1:inview').is(':empty')){

/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#po_supp_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax({

      type: "POST",
      url: "fetch_po_supplist.php",
      data: datString,
	
      success: function(data) {
        

		
		$(".sdiv1:not(:inview)").empty();
		document.getElementById(divid).innerHTML = data;
		$('.sdiv1').last().css({ 'height' : 'auto' });
		$("#loading").hide();
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_item_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_item_code);
	$("#pop_table_supp_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
			}//success
});
}//endif

		
////////////////////////////////////////////////////////////////////////////next//////////////////////////////////////////////////////		
		if($('.sdiv1:inview').next().is('.sdiv1')){
		var search_char_supp = $('#pop_supp_name').val();
	
		var page_id_next=($('.sdiv1:inview').next().attr("id"));
				var datString = 'page_supplist='+ page_id_next + '&serach_suppchar=' + search_char_supp;
		
		


if($('.sdiv1:inview').next().is(':empty')){


$.ajax({

      type: "POST",
      url: "fetch_po_supplist.php",
      data: datString,
	  
      success: function(data) {
        	
			
		document.getElementById(page_id_next).innerHTML = data;
		$('.sdiv1').last().css({ 'height' : 'auto' });
		
		
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_table_supp_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");

popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
		
		
		}//success
		});//ajax
		}//if empty
		}//next
		
/////////////////////////////////////////////////////////////////////////prev/////////////////////////////////////////////////////////////////////////////

	var search_char_supp = $('#pop_supp_name').val();	
	
		if($('.sdiv1:inview').prev().is('.sdiv1')){
		
		var page_id_prev=($('.sdiv1:inview').prev().attr("id"));
				var datString = 'page_supplist='+ page_id_prev + '&serach_suppchar=' + search_char_supp;

		


if($('.sdiv1:inview').prev().is(':empty')){


$.ajax({

      type: "POST",
      url: "fetch_po_supplist.php",
      data: datString,
	  	
      success: function(data) {
        
		document.getElementById(page_id_prev).innerHTML = data;
		$('.sdiv1').last().css({ 'height' : 'auto' });
		
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_table_supp_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
		}//success
		});//ajax
		}//if empty
		}///////////////////////////////////////////////////////////////////////////////////////prev
		
		




});//scroll ends	supp
	
	
	
	
	
 });//total doc ready


