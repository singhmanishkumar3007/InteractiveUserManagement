$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });

/////////////////////////////////disable button actions




//////////////////////////////////////////////////////////////////////////enable drag
$( "#po_item_code_list" ).draggable({  handle: '.drag'  });
$( "#po_supp_code_list" ).draggable({ handle: '.drag' });

$("#resetform").click(function() {
$("#po_form")[0].reset();
$('#po_srl_no').attr('disabled', false);
$('#eve_item_name').text('');
$('#hi_po_sele_no').val('');
$("#po_datewise td").css("background-color", "");


$('#saverow').attr('disabled', true);
$('#po_type').attr('disabled', false);
$('#po_no').attr('disabled', false);
$('#item_code').attr('disabled', false);


$('#make_po').attr('disabled', true);
$('#dlv_chg').attr('disabled', true);
$('#exc_po').attr('disabled', true);
$('#sch_po').attr('disabled', true);
$('#cst_po').attr('disabled', true);
$('#disc_po').attr('disabled', true);
$('#po_rate').attr('disabled', true);
$('#ammend_no').attr('disabled', true);


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
      url: "ammendment_fetch_po_datewise_create.php",
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
      url: "ammendment_fetch_po_datewise_onselect.php",
      data: datString,
      success: function(data) {
        

		
		
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#po_type").val(x.PO_TYPE).attr('selected',true);
		$("#eve_item_name").text(x.ITEM_DESC );
		$("#po_no").val(x.PO_NO );
		$("#item_code").val(x.ITEM_CODE );
		$("#po_srl_no").val(x.PO_SRL_NO );
		$("#po_fin_year").val(x.FIN_YEAR );
		$("#ammend_no").val(x.AMMEND_NO );
		$("#po_rate").val(x.PO_RATE );
		$("#cst_po").val(x.CST_PCT );
		$("#disc_po").val(x.DISC_PCT );
		$("#exc_po").val(x.EXC_PCT );
		$("#dlv_chg").val(x.DLV_CHG );
		$("#make_po").val(x.MAKE );
		$("#sch_po").val(x.SCH_PCT );
		

$('#po_ammnd_create').attr('disabled', true);
$('#po_type').attr('disabled', true);
$('#po_no').attr('disabled', true);
$('#item_code').attr('disabled', true);		 
$('#po_srl_no').attr('disabled', true);
$('#po_fin_year').attr('disabled', true);		 
$('#ammend_no').attr('disabled', true);		 
	
$('#make_po').attr('disabled', false);
$('#dlv_chg').attr('disabled', false);
$('#exc_po').attr('disabled', false);
$('#sch_po').attr('disabled', false);
$('#cst_po').attr('disabled', false);
$('#disc_po').attr('disabled', false);
$('#po_rate').attr('disabled', false);			
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
		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});

  
 //////////////////////////////////////////////////////////////////////////
//#################################################################################item list###########################################




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
//-------------------------------------------------------------------indent list-----------------------------------------

//////////////////////////////////////////////////////////////////////////enable drag
$( "#po_item_code_list" ).draggable({  handle: '.drag'  });
$( "#po_supp_code_list" ).draggable({ handle: '.drag' });
$( "#po_indn_code_list" ).draggable({ handle: '.drag' });
$( "#po_alert_message" ).draggable({ handle: '.drag' });

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
      url: "ammnd_check_po.php",
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


$("#po_rate").val(x.PO_RATE );
$('#po_rate').attr('disabled', false);

$("#disc_po").val(x.DISC_PCT );
$('#disc_po').attr('disabled', false);

$("#cst_po").val(x.CST_PCT );
$('#cst_po').attr('disabled', false);

$("#sch_po").val(x.SCH_PCT );
$('#sch_po').attr('disabled', false);

$("#exc_po").val(x.EXC_PCT );
$('#exc_po').attr('disabled', false);

$("#dlv_chg").val(x.DLV_CHG );
$('#dlv_chg').attr('disabled', false);

$("#make_po").val(x.MAKE );
$('#make_po').attr('disabled', false);


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



$('#saverow').attr('disabled', true);

var update_check= $("#hi_po_sele_no").val();

var amm_po_type= $("#po_type").val();
var amm_po_no= $("#po_no").val();
var amm_po_srl= $("#po_srl_no").val();
var amm_po_item= $("#item_code").val();
var amm_po_fin_year= $("#po_fin_year").val();
var ammend_no=$("#ammend_no").val();
var po_rate=$("#po_rate").val( );
var disc_po=$("#disc_po").val();
var cst_po=$("#cst_po").val();
var sch_po=$("#sch_po").val();
var exc_po=$("#exc_po").val();
var dlv_chg=$("#dlv_chg").val();
var make_po=$("#make_po").val();






		var datString = 'update_check='+update_check + '&make_po=' + make_po +'&dlv_chg=' + dlv_chg +'&exc_po=' + exc_po +'&sch_po=' + sch_po +'&cst_po=' + cst_po +'&disc_po=' + disc_po +'&po_rate=' + po_rate +'&ammend_no=' + ammend_no +'&amm_po_type=' + amm_po_type + '&amm_po_no=' + amm_po_no+ '&amm_po_srl=' + amm_po_srl + '&amm_po_item=' + amm_po_item + '&amm_po_fin_year=' + amm_po_fin_year  ;
		



$.ajax({
      type: "POST",
      url: "ammnd_po_add_1.php",
      data: datString,
      success: function(data) {
        
		
		$("#resetform").click();
		$("#po_search").click();
		$("#load").fadeOut("fast");

				
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
	



var ammend_no=$("#ammend_no").val();
var amm_po_type= $("#po_type").val();
var amm_po_no= $("#po_no").val();
var amm_po_srl= $("#po_srl_no").val();
var amm_po_item= $("#item_code").val();
var amm_po_fin_year= $("#po_fin_year").val();




		var datString = 'ammend_no=' + ammend_no +'&amm_po_type=' + amm_po_type + '&amm_po_no=' + amm_po_no+ '&amm_po_srl=' + amm_po_srl + '&amm_po_item=' + amm_po_item + '&amm_po_fin_year=' + amm_po_fin_year  ;
		



$.ajax({
      type: "POST",
      url: "ammnd_po_del_1.php",
      data: datString,
      success: function(data) {
        
		
		$("#resetform").click();
		$("#po_search").click();
		$("#load").fadeOut("fast");

				
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


