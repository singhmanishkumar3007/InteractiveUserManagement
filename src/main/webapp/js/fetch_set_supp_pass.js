$(document).ready(function(){
$("#resetform").click(function() {

$("#pass1").val('');
$("#item_code").val('');
$("#pop_supp_name").val('');
$("#pop_supp_code").val('');
$("#pass2").val('');
$("#email").val('');
document.getElementById("pop_table_supp_list").innerHTML = '';
 return false;
	});

$("#pop_table_supp_list").ready(function()
{
	    $('#pop_supp_name').keyup(function()
    {
        $('#pop_supp_code').val('');
		var search_char_supp = $('#pop_supp_name').val();
		
		var datString ='page_supplist=supp_1 & serach_suppchar='+search_char_supp;
		/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#av_supp_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax
({
    type: "POST",
    url: "fetch_set_supp_pass_supplist_div.php",
	data: datString,
    
    cache: false,
    success: function(data)
    {
	document.getElementById("pop_table_supp_list").innerHTML = data;
	  
	  $("#loading").hide();
	  var datString = 'page_supplist=supp_1 & serach_suppchar='+search_char_supp;
		
		

$.ajax({

      type: "POST",
      url: "fetch_set_supp_pass_supplist.php",
      data: datString,
	
      success: function(data) {     
		
		
		document.getElementById('supp_1').innerHTML = data;
		
		$('.sdiv2 ').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	var selected_supp_name= $(this).closest('tr').find('td:eq(0)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_supp_name").val(selected_supp_name);
	$("#pop_table_supp_list td").css("background-color", "");
//$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 /*var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#av_supp_code_list").hide("");
popupStatus = 0;*/
	
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

	});
///////////////////////////////////////scroll////////////////////////////////////
	  $("#popdiv_scroll_supp").bind("scroll", function(event) {
 
var divid = $('.sdiv2:inview').attr("id");



var search_char_supp = $('#pop_supp_name').val();

var datString = 'page_supplist='+ divid + '&serach_suppchar=' + search_char_supp;


if($('.sdiv2:inview').is(':empty')){

/////////create div forajax loading	
$("<div></div>").attr('id','loading').appendTo('#po_supp_code_list');   
$("#loading").show();
/////////create div forajax loading	
$.ajax({

      type: "POST",
      url: "fetch_set_supp_pass_supplist.php",
      data: datString,
	
      success: function(data) {
        

		
		$(".sdiv2:not(:inview)").empty();
		document.getElementById(divid).innerHTML = data;
		$('.sdiv2').last().css({ 'height' : 'auto' });
		$("#loading").hide();
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	var selected_supp_name= $(this).closest('tr').find('td:eq(0)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_supp_name").val(selected_supp_name);
	$("#pop_table_supp_list td").css("background-color", "");
//$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 /* var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0; */
	
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
		if($('.sdiv2:inview').next().is('.sdiv2')){
		var search_char_supp = $('#pop_supp_name').val();
	
		var page_id_next=($('.sdiv2:inview').next().attr("id"));
				var datString = 'page_supplist='+ page_id_next + '&serach_suppchar=' + search_char_supp;
		
		


if($('.sdiv2:inview').next().is(':empty')){


$.ajax({

      type: "POST",
      url: "fetch_set_supp_pass_supplist.php",
      data: datString,
	  
      success: function(data) {
        	
			
		document.getElementById(page_id_next).innerHTML = data;
		$('.sdiv2').last().css({ 'height' : 'auto' });
		
		
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	var selected_supp_name= $(this).closest('tr').find('td:eq(0)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_supp_name").val(selected_supp_name);
	$("#pop_table_supp_list td").css("background-color", "");
//$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 /* var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_supp_list td").css("background-color", "");
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");

popupStatus = 0; */
	
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
	
		if($('.sdiv2:inview').prev().is('.sdiv2')){
		
		var page_id_prev=($('.sdiv2:inview').prev().attr("id"));
				var datString = 'page_supplist='+ page_id_prev + '&serach_suppchar=' + search_char_supp;

		


if($('.sdiv2:inview').prev().is(':empty')){


$.ajax({

      type: "POST",
      url: "fetch_set_supp_pass_supplist.php",
      data: datString,
	  	
      success: function(data) {
        
		document.getElementById(page_id_prev).innerHTML = data;
		$('.sdiv2').last().css({ 'height' : 'auto' });
		
		////////////////////////////////////////////////////////////

	
	$("#pop_table_supp_list td").single_double_click(function () {  ///////////////single click
	var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	var selected_supp_name= $(this).closest('tr').find('td:eq(0)').text();
	$("#pop_supp_code").val(selected_supp_code);
	$("#pop_supp_name").val(selected_supp_name);
	$("#pop_table_supp_list td").css("background-color", "");
//$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 /* var selected_supp_code= $(this).closest('tr').find('td:eq(1)').text();
	$("#supplier_code").val(selected_supp_code);
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#background_po_supp_code_list").hide("");
$("#po_supp_code_list").hide("");
popupStatus = 0; */
	
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

	
/////////////////////////////////////////////////////data saved-------------------------
$("#set_pass_button").live("click",function()
{
	var pop_supp_name=$("#pop_supp_name").val();
	if(pop_supp_name==''){alert("Please Select a Supplier!");pop_supp_name.focus; return false;}
	var pop_supp_code=$("#pop_supp_code").val();
	var pass1=$("#pass1").val();
	if(pass1==''){alert("Password is Blank!");pass1.focus();return false;}
	var pass2=$("#pass2").val();
	if(pass2==''){alert("Confirm Password is Blank!");pass2.focus;return false;}
	if(pass1!=pass2)
			{
			alert("Tow Password Must be Same!");
			return false;
			}
	var email=$("#email").val();
	if(email==''){alert("Please Enter Email-id!");return false;}
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
    alert('Please provide a valid email address');
      return false;
	}
	
	var dataString='pop_supp_name='+pop_supp_name+'&pop_supp_code='+pop_supp_code+'&pass1='+pass1+'&pass2='+pass2+'&email='+email;
	//alert(dataString);
	//return false;
	$.ajax({

      type: "POST",
      url: "set_supp_pass_create.php",
      data: dataString,	
      success: function(data) {  	
		$("#resetform").click();
		//alert(data);
		document.getElementById("po_alert").innerHTML = data;	
	$("#load").fadeOut("slow");
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
	return false;
	});
});