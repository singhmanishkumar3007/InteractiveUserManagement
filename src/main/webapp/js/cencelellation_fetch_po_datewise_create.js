$(document).ready(function(){
$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });
/////////////////////////////////disable button actions

$("#savetab").click(function(event){
return false;
});
$("#resettab").click(function(event){
return false;
});
$("#deltab").click(function(event){
return false;
});


//////////////////////////////////////////////////////////////////////////enable drag
$( "#po_item_code_list" ).draggable({  handle: '.drag'  });
$( "#po_supp_code_list" ).draggable({ handle: '.drag' });

$("#resetform").click(function() {
$("#po_form")[0].reset();
$("#eve_item_name").text('');
$("#hi_po_sele_no").val('');

$('#po_type').attr('disabled', false);
$('#po_no').attr('disabled', false);
$('#item_code').attr('disabled', false);		 
$('#po_srl_no').attr('disabled', false);
 $('#saverow').attr('disabled', true);
$("#po_datewise td").css("background-color", "");
 return false;
	});
//////////////////////////////////////////////////////////////////////////////////////////++++++++++++++//table headar starts						 
			

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
      url: "cencelellation_fetch_po_datewise_create.php",
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

					 $("#load").fadeOut("fast");
					 
					 
					 $.ajax({
      type: "POST",
      url: "cencelellation_fetch_po_datewise_onselect_create.php",
      data: datString,
      success: function(data) {
        

		
		
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#po_type").val(x.PO_TYPE).attr('selected',true);
		$("#eve_item_name").text(x.ITEM_DESC);
		$("#po_no").val(x.PO_NO);
		$("#item_code").val(x.ITEM_CODE);
		$("#po_srl_no").val(x.PO_SRL_NO);
		$("#po_fin_year").val(x.FIN_YEAR);
		$("#ammend_no").val(x.AMMEND_NO);
		$("#ammend_date").val(x.AMMEND_DATE);
		$("#po_rate").val(x.PO_RATE);
		$("#cst_po").val(x.CST_PCT);
		$("#disc_po").val(x.DISC_PCT);
		$("#exc_po").val(x.EXC_PCT);
		$("#dlv_chg").val(x.DLV_CHG);
		$("#make_po").val(x.MAKE);
		$("#sch_po").val(x.SCH_PCT);
		$("#CANCEL_NO").val(x.CANCEL_NO);
		$("#po_qty").val(x.PO_QTY);
		$("#tot_can_qty").val(x.PO_AMD_QTY);
		$("#cancel_reason").val(x.CANCEL_REASON);
		
		$("#sr_qty").val(x.SR_QTY);
		$("#nxt_can_qty").val(x.POAMMEND_PO_QTY);
		$("#hid_nxt_can_qty").val(x.POAMMEND_PO_QTY);

$('#po_ammnd_create').attr('disabled', true);
$('#po_type').attr('disabled', true);
$('#po_no').attr('disabled', true);
$('#item_code').attr('disabled', true);		 
$('#po_srl_no').attr('disabled', true);
$('#po_fin_year').attr('disabled', true);		 
$('#ammend_no').attr('disabled', true);		 
$('#saverow').attr('disabled', false);		
			
			
			
					 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
					 
					 
					 
					 
	});	//2nd call end			




				 
});//click event close

		
		
		///////////////////////////////////
		
 } ,
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});

  
	

$("#item_code").dblclick(function() {
$("#pop_item_name").val('') ;
var item_code_val=$("#item_code").val();

$("#pop_item_code").val(item_code_val) ;


if( $.trim("#pop_item_code").length ) {
          
		  var search_char_code = $('#pop_item_code').val();
		  var datString ='page_itemlist=item_1 & serach_itemcode='+search_char_code;
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
	  var datString = 'page_itemlist=item_1 & serach_itemcode='+search_char_code;
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_itemlist.php",
      data: datString,
	
      success: function(data) {
        

		
		
		document.getElementById('item_1').innerHTML = data;
		
		$('.sdiv').last().css({ 'height' : 'auto' });
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
	$("#eve_item_name").text(selected_item_name);
var selected_item_uom= $(this).closest('tr').find('td:eq(2)').text();	
	$("#hi_po_item_uom").val(selected_item_uom);	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$('#popdiv_scroll_item').scrollTop(0);
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
			
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
	  $("#loading").fadeOut(100);
     },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
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
var leftposi = eleOffset.left -500;
var topposi = eleOffset.top -10 ;

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
		$('#pop_item_code').val('');
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
	$("#eve_item_name").text(selected_item_name);
var selected_item_uom= $(this).closest('tr').find('td:eq(2)').text();	
	$("#hi_po_item_uom").val(selected_item_uom);	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$('#popdiv_scroll_item').scrollTop(0);
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
			
			}//success
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
	$("#eve_item_name").text(selected_item_name);
var selected_item_uom= $(this).closest('tr').find('td:eq(2)').text();	
	$("#hi_po_item_uom").val(selected_item_uom);	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$('#popdiv_scroll_item').scrollTop(0);
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
			}//success
});
	  
     },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
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
	$("#eve_item_name").text(selected_item_name);
var selected_item_uom= $(this).closest('tr').find('td:eq(2)').text();	
	$("#hi_po_item_uom").val(selected_item_uom);	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$('#popdiv_scroll_item').scrollTop(0);
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
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
	$("#eve_item_name").text(selected_item_name);
var selected_item_uom= $(this).closest('tr').find('td:eq(2)').text();	
	$("#hi_po_item_uom").val(selected_item_uom);	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	$('#popdiv_scroll_item').scrollTop(0);
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");

popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
		
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
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
	$("#eve_item_name").text(selected_item_name);
var selected_item_uom= $(this).closest('tr').find('td:eq(2)').text();	
	$("#hi_po_item_uom").val(selected_item_uom);	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$('#popdiv_scroll_item').scrollTop(0);
	$("#background_po_item_code_list").hide("");
$("#po_item_code_list").hide("");
popupStatus = 0;
	
});
		/////////////////////////////////////////////////	
		
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});//ajax
		}//if empty
		}///////////////////////////////////////////////////////////////////////////////////////prev
		
		




});//scroll ends


//################################################################################# end item list###########################################
//################################################################################# end item list###########################################

$("#po_srl_no").dblclick(function(event){

var cheko= $("#po_type").val();
if (cheko=='type'){alert ('Please Select PO type !');}
else{
var chekn= $("#po_no").val();
if (chekn==''){alert ('Please Select PO NO !');}
else{
var chekt= $("#item_code").val();
if (chekt==''){alert ('Please Select Item Code !');
}
else{


var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_indn_code_list").show();
$("#po_indn_code_list").show();
popupStatus = 1;

///////////////////////////////////////////////////////////////

}
}

//disabling popup with jQuery magic!
function disablePopup(){
//disables popup only if it is enabled
if(popupStatus==1){
$("#background_po_indn_code_list").hide("");
$("#po_indn_code_list").hide("");
popupStatus = 0;
}
}

//position popup
function centerPopup(){
//request data for centering
eleOffset = $("#item_code").offset();
//get position
var leftposi = eleOffset.left -500;
var topposi = eleOffset.top -10 ;

$("#po_indn_code_list").css({
"position": "absolute",
"top": topposi,
"left": leftposi
});
//only need force for IE6

$("#background_po_indn_code_list").css({
"height": windowHeight
});
}

//CLOSING POPUP
//Click the x event!
$("#po_indn_code_list_Close").click(function(){
disablePopup();
});
//Click out event!
$("#background_po_indn_code_list").click(function(){
disablePopup();
});
//Press Escape event!
$(document).keypress(function(e){
if(e.keyCode==27 & popupStatus==1){
disablePopup();
}
});





				
		var datString = 'po_type='+ cheko + '&po_no=' + chekn + '&item_code=' + chekt;
		
		
		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	



$.ajax({
      type: "POST",
      url: "ammnd_fetch_po_list.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("pop_table_indn_list_tb").innerHTML = data;
		
$("#load").fadeOut("slow");

//////////////////////////////////////////////////////////////////////////////////////////////////qty check	live	


		////////////////////////////////////////////////////////////

	
	$("#pop_table_indn_list td").single_double_click(function () {
	///////////////single click
	
	$("#pop_table_indn_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_indn_code= $(this).closest('tr').find('td:eq(4)').text();
	$("#po_srl_no").val(selected_indn_code);
	var selected_fin_year= $(this).closest('tr').find('td:eq(3)').text();
	$("#po_fin_year").val(selected_fin_year);
	var selected_item_name_amm= $(this).closest('tr').find('td:eq(1)').text();
	$("#eve_item_name").text(selected_item_name_amm);
	
	$('#po_srl_no').attr('disabled', true);
	$('#po_fin_year').attr('disabled', true);
	$('#po_type').attr('disabled', true);
	$('#po_no').attr('disabled', true);
	$('#item_code').attr('disabled', true);
	$('#po_ammnd_create').attr('disabled', false);
	
	
	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_indn_list td").css("background-color", "");
	$("#background_po_indn_code_list").hide("");
$("#po_indn_code_list").hide("");
popupStatus = 0;
	

	
});
		/////////////////////////////////////////////////	



//load popup
loadPopup();
centerPopup();
$("#load").fadeOut("slow");





},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }

});
}
}
}
return false;
});
	
$("#po_ammnd_create").live("click",function(event){



$('#po_ammnd_create').attr('disabled', true);


var amm_po_type= $("#po_type").val();
var amm_po_no= $("#po_no").val();
var amm_po_srl= $("#po_srl_no").val();
var amm_po_item= $("#item_code").val();
var amm_po_fin_year= $("#po_fin_year").val();



		var datString = 'amm_po_type=' + amm_po_type + '&amm_po_no=' + amm_po_no+ '&amm_po_srl=' + amm_po_srl + '&amm_po_item=' + amm_po_item + '&amm_po_fin_year=' + amm_po_fin_year  ;
		



$.ajax({
      type: "POST",
      url: "cencelellation_check_po.php",
      data: datString,
      success: function(data) {
        
		
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#load").fadeOut("fast");

		
		if(x.error)
		{
$("#po_alert").html(x.error );
		
		 
//$("#po_search_button").click();





var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_alert").show();
$("#po_alert_message").show();
popupStatus = 1;



 


///////////////////////////////////////////////////////////////



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
var leftposi = eleOffset.left -250;
var topposi = eleOffset.top +100 ;

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
}
else
{
$("#ammend_no").val(x.AMMEND_NO );
$("#CANCEL_NO").val(x.CANCEL_NO );
$("#ammend_date").val(x.AMMEND_DATE );

$("#po_qty").val(x.PO_QTY );
$('#po_qty').attr('disabled', true);

$("#tot_can_qty").val(x.CANCEL_QTY );
$('#tot_can_qty').attr('disabled', true);

$("#sr_qty").val(x.SR_QTY );
$('#sr_qty').attr('disabled', true);

var nxt_can_qty=((parseFloat(x.PO_QTY))-(parseFloat(x.CANCEL_QTY))-(parseFloat(x.SR_QTY)));

$("#nxt_can_qty").val(nxt_can_qty);



$('#saverow').attr('disabled', false);
$('#po_type').attr('disabled', true);
$('#po_no').attr('disabled', true);
$('#item_code').attr('disabled', true);

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
	
$("#saverow").live("click",function(event){

var update_check= $("#hi_po_sele_no").val();
var ammend_no= $("#ammend_no").val();
var cancel_reason_check= $("#cancel_reason").val();
var nxt_can_qty = $("#nxt_can_qty").val();


var can_po_type= $("#po_type").val();
var can_po_no= $("#po_no").val();
var can_po_srl= $("#po_srl_no").val();
var can_po_item= $("#item_code").val();
var can_po_fin_year= $("#po_fin_year").val();
var CANCEL_NO=$("#CANCEL_NO").val();
var po_qty=$("#po_qty").val();
var sr_qty=$("#sr_qty").val();
var tot_can_qty=$("#tot_can_qty").val();
var hid_nxt_can_qty=$("#hid_nxt_can_qty").val();



if(cancel_reason_check =='' )
{
alert('cancel reason is blank!');
return false;
}

if(nxt_can_qty <= 0 && can_po_type !='O')
{
alert('check quantity!');
return false;
}


if(update_check =='')
{
var max_qty= (parseFloat(po_qty) - parseFloat(sr_qty))-((parseFloat(tot_can_qty)));

if(max_qty < nxt_can_qty)
{
alert('check quantity!');
return false;
}

}
if(update_check !='')
{
var max_qty= (parseFloat(po_qty) - parseFloat(sr_qty))-((parseFloat(tot_can_qty)) - parseFloat(hid_nxt_can_qty));

if(max_qty < nxt_can_qty)
{
alert('check quantity! max ' +max_qty);
return false;
}

}


$('#saverow').attr('disabled', true);










		var datString = 'update_check=' + update_check + '&ammend_no=' + ammend_no + '&tot_can_qty=' + tot_can_qty + '&sr_qty=' + sr_qty + '&po_qty=' + po_qty +'&CANCEL_NO=' + CANCEL_NO +'&can_po_type=' + can_po_type + '&can_po_no=' + can_po_no+ '&can_po_srl=' + can_po_srl + '&can_po_item=' + can_po_item + '&can_po_fin_year=' + can_po_fin_year + '&nxt_can_qty=' + nxt_can_qty + '&cancel_reason_check=' + cancel_reason_check ;
		



$.ajax({
      type: "POST",
      url: "cencelellation_po_add_1.php",
      data: datString,
      success: function(data) {
        
		
		$("#resetform").click();
		$("#po_search_button").click();
		$("#load").fadeOut();

				
$("#po_alert").html(data );
		
	 
//$("#po_search_button").click();





var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_alert").show();
$("#po_alert_message").show();
popupStatus = 1;



 


///////////////////////////////////////////////////////////////



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
var leftposi = eleOffset.left -250;
var topposi = eleOffset.top +100 ;

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


return false;
});	
	
$("#delrow").live("click",function(event){	
	var update_check= $("#hi_po_sele_no").val();
	
	
	if(update_check !=''){
if(confirm('Are you sure you want to delete?')){	
	


var CANCEL_NO=$("#CANCEL_NO").val();
var ammend_no=$("#ammend_no").val();
var amm_po_type= $("#po_type").val();
var amm_po_no= $("#po_no").val();
var amm_po_srl= $("#po_srl_no").val();
var amm_po_item= $("#item_code").val();
var amm_po_fin_year= $("#po_fin_year").val();




		var datString = 'ammend_no=' + ammend_no +'&CANCEL_NO=' + CANCEL_NO +'&amm_po_type=' + amm_po_type + '&amm_po_no=' + amm_po_no+ '&amm_po_srl=' + amm_po_srl + '&amm_po_item=' + amm_po_item + '&amm_po_fin_year=' + amm_po_fin_year  ;
		



$.ajax({
      type: "POST",
      url: "cencelellation_po_del_1.php",
      data: datString,
      success: function(data) {
        
		$("#load").fadeOut("fast");
		$("#resetform").click();
		$("#po_search_button").click();
		

				
$("#po_alert").html(data );
		
		 
//$("#po_search_button").click();





var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
//loads popup only if it is disabled
if(popupStatus==0){

$("#background_po_alert").show();
$("#po_alert_message").show();
popupStatus = 1;



 


///////////////////////////////////////////////////////////////



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
var leftposi = eleOffset.left -250;
var topposi = eleOffset.top +100 ;

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
	
	
 });//total doc ready


