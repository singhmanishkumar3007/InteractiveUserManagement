$(document).ready(function(){

$( "#conf_menu_frwd" ).draggable();

    // add multiple select / deselect functionality
    $("#selectall").live('click',function () {
          $('.chck_indnt').attr('checked', this.checked);
    });
 

    $(".chck_indnt").live('click',function(){
	
 $("#selectall").removeAttr("checked");
        if($(".chck_indnt").length == $(".chck_indnt:checked").length) {
            $("#selectall").attr("checked", "checked");
        } else {
            $("#selectall").removeAttr("checked");
        }
 
    });


higlightRow = function(row) {

  $(row).animate({borderColor: "#B100E8" }, 1000)
    .animate({borderColor: "#fff"}, 10)
	.animate({borderColor: "#B100E8"}, 1000)
	.animate({borderColor: "#fff"}, 10)
	.animate({borderColor: "#B100E8"}, 1000)
	.animate({borderColor: "#fff"}, 10)
	.animate({borderColor: "#B100E8"}, 1000)
	.animate({borderColor: "#fff"}, 10)
	.animate({borderColor: "#B100E8"}, 1000)
	.animate({borderColor: "#9e9c9c"}, 100);
	


	$(document).click(function(){
	$(row).stop(true,true);
	$(row).css("border-color", "");
	$(row).css("color", "");

	});
}

higlightRow("#po_search_button");

/////////////////////////////////disable button actions
$("#delrow").click(function(event){
return false;
});
$("#saverow").click(function(event){
return false;
});






$("#savetab").live("click",function(event){

var saverowCount = (parseInt($('#podetails >tr').length));


var po_supplier_wr=((($('#supplier_code').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_update_wr=((($('#hi_po_sele_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if(po_supplier_wr =='')
{
alert('Please select a supplier !');
return false;
}
else{

if( saverowCount != 0 )
{
$( "#conf_menu_frwd" ).show(700);


}}
return false;
});


$("#mail_sub").live("click",function(event){
var email = $('#mail_enq').val();
$( "#conf_menu_frwd" ).hide(700);
var saverowCount = (parseInt($('#podetails >tr').length));


var po_supplier_wr=((($('#supplier_code').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_update_wr=((($('#hi_po_sele_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if(po_supplier_wr =='')
{
alert('Please select a supplier !');
return false;
}
else{

if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{

var po_tr='#potr_'+ic;
var chk_box='#chkbox_'+ic;



if($(chk_box).is(":checked"))
{
var wr_arr= wr_arr+((($(po_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));


if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}
}
ic++;
}
if(wr_arr == "")
{
alert('One row must be selected!');
return false;
}

				
		var datString = 'po_update_no=' + po_update_wr + '&po_supplier_wr=' + po_supplier_wr +  '&wr_arr=' + wr_arr + '&email=' + email;
		
//alert(datString);
		
		/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('body');   
$("#loading").show();
/////////create div forajax loading	

$.ajax({
      type: "POST",
      url: "mail_indent_print.php",
      data: datString,
      success: function(data) {
        
$("#load").fadeOut("slow");
		
		//alert(data);
	
		alert(data);

		$("#loading").hide();
		

},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
			
		});	
			
			
			}//count not 0
			
			
			} //else
return false;

});



$("#resettab").live("click",function(event){


var saverowCount = (parseInt($('#podetails >tr').length));


var po_supplier_wr=((($('#supplier_code').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_update_wr=((($('#hi_po_sele_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if(po_supplier_wr =='')
{
alert('Please select a supplier !');
return false;
}
else{

if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{

var po_tr='#potr_'+ic;
var chk_box='#chkbox_'+ic;



if($(chk_box).is(":checked"))
{
var wr_arr= wr_arr+((($(po_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));


if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}
}
ic++;
}
if(wr_arr == "")
{
alert('One row must be selected!');
return false;
}

				
		var datString = 'po_update_no=' + po_update_wr + '&po_supplier_wr=' + po_supplier_wr +  '&wr_arr=' + wr_arr;
		
//alert(datString);


$.ajax({
      type: "POST",
      url: "indent_print.php",
      data: datString,
      success: function(data) {
        
$("#load").fadeOut("slow");
		
		//alert(data);
		if(data=='2'){
		
		 	var url = "indent_print.php";    
			//$(location).attr('href',url);
			window.open( url, '_blank');

		}
		else{
		alert('Erorr! try again please.'+data);
		}
		
		

},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
			
		});	
			
			
			}//count not 0
			
			
			} //else
return false;

});





$("#deltab").click(function(event){
return false;
});


//////////////////////////////////////////////////////////////////////////enable drag

$( "#po_supp_code_list" ).draggable({ handle: '.drag' });
$("#resetform").click(function() {
$("#po_form")[0].reset();
 return false;
	});
	

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
      url: "fetch_priceenq_indent_datewise.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("indent_datewise").innerHTML = data;
		
		

		
		
		
$("#load").fadeOut();

higlightRow("#indent_datewise tr:nth-child(3) td");

//////////////////////////////////////now select each td from search
		
		$("#indent_datewise td").live('click',function(event){
		
$('#po_form')[0].reset();
$("#eve_item_name").text('');
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

		
            $("#indent_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var selectedpo = $(this).closest('tr').find('td:eq(0)').text();
                     
	$("#hi_po_sele_no").val(selectedpo);////----------------------------------------------------------------------------------------------------------------------------keep po number safe
	
	                 var datString = 'select_po='+ selectedpo ; //another call to pohdr and podtl

					 
					 
					 
					 $.ajax({
      type: "POST",
      url: "fetch_priceenq_datewise_onselect.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("podetails").innerHTML = data;
		$("#load").fadeOut();
		
		 higlightRow("#selectall");
					 
//=============================call each po row to edit

$("#table_body td").click(function(event){

$("#table_body td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	


});
//===================###################################################call each po row to edit ends xxxxxxxxxxxxxxxxxxxxx	 
					 
					 
					 
					 
					 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
					 
					 
					 
					 
	});	//2nd call end			

/////////////////////////////////////=======also get json data from pohdr=======================================================

	$.ajax
({
    type: "POST",
    url: "fetch_priceenq_datewise_onselect_hdr.php",
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
		
		$("#indent_type").val(x.PO_TYPE ).attr('selected',true);
		//$("#po_type option:selected").text(po_type);
		$("#po_date").val(x.PO_DATE);
		$("#supplier_code").val(x.SUPP_CODE);
		$("#footer_note").val(x.FOOTER_NOTE);
		
		//$(".custName").html(data.message1);
        //$(".custName2").html(data.message2);
    },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});

	
	
	
	
	
/////////////////////////////////=============hdr call end===================================	



				 
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



//################################################################################# end item list###########################################
$("#supplier_code").dblclick(function() {

$("#pop_supp_name").val('') ;
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
$('#popdiv_scroll_supp').scrollTop(0);
popupStatus = 0;
	higlightRow("#savetab");
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
	higlightRow("#savetab");
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
	higlightRow("#savetab");
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
		higlightRow("#savetab");
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
		higlightRow("#savetab");
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
	higlightRow("#savetab");
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
		
		




});//scroll ends	supp
	
	
	
	
	
 });//total doc ready


