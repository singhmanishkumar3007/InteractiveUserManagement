$(document).ready(function(){
/////////////////////////////////////////////////////////////////////////////////////// CACULATE AVARAGE

/////////////////////////////////////////////////////////////////////////////////////////////
$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	


////////////////////////////////////////////RESET///////////////////////////////////////
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resetform").click(function(event){

$('#selc_zone_no').val('').css("border-color", "");		
$('#trolley_no').val('').css("border-color", "");		
$('#selector_name').val('').css("border-color", "");		
$('#mr_no').val('').css("border-color", "");
$('#mr_bales').val('').css("border-color", "");		
$('#mr_report').val('').css("border-color", "");		
$('#moisture').val('').css("border-color", "");		
$('#root_cut_uncut').val('').css("border-color", "");
$('#qlty_rej').val('').css("border-color", "");		
$('#remarks').val('').css("border-color", "");		
$('#rec_id').val('');
$('#perm_id').val('');
$('#hi_po_sl_no').val('');
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
return false;
});
$("#resettab").click(function(event){
$('#issue_date').attr('disabled',false);
$('#selection_type').val('selected').attr('disabled',false);			
$('#quality').val('selected');		
$('#bales').val('').css("border-color", "");	
$('#a').val('').css("border-color", "");	
$('#b').val('').css("border-color", "");	
$('#c').val('').css("border-color", "");	
$('#d').val('').css("border-color", "");	
$('#e').val('').css("border-color", "");	
$('#f').val('').css("border-color", "");	
$('#total').val('').attr('disabled',true);	
$("#resetform").click();
document.getElementById("details").innerHTML = '';
return false;
});
///////////////////////////////////////////RESET END//////////////////////////////////////
//////////////////////////////////////net weight///////////////////
$("#a").bind('input',function(){
var a=$("#a").val();
	a=parseInt(a);
	var b=$("#b").val();
	b=parseInt(b);
	var c=$("#c").val();
	c=parseInt(c);
	var d=$("#d").val();
	d=parseInt(d);
	var e=$("#e").val();
	e=parseInt(e);
	var f=$("#f").val();
	f=parseInt(f);
	
var total=((a)+(b)+(c)+(d)+(e)+(f));


if(isNaN(total))
{
 total='';

}

$("#total").val(total);	
		
});

$("#b").bind('input',function(){
var a=$("#a").val();
	a=parseInt(a);
	var b=$("#b").val();
	b=parseInt(b);
	var c=$("#c").val();
	c=parseInt(c);
	var d=$("#d").val();
	d=parseInt(d);
	var e=$("#e").val();
	e=parseInt(e);
	var f=$("#f").val();
	f=parseInt(f);
	
var total=((a)+(b)+(c)+(d)+(e)+(f));

if(isNaN(total))
{
 total='';

}

$("#total").val(total);	
		
});

  
$("#c").bind('input',function(){
	
var a=$("#a").val();
	a=parseInt(a);
	var b=$("#b").val();
	b=parseInt(b);
	var c=$("#c").val();
	c=parseInt(c);
	var d=$("#d").val();
	d=parseInt(d);
	var e=$("#e").val();
	e=parseInt(e);
	var f=$("#f").val();
	f=parseInt(f);
	
var total=((a)+(b)+(c)+(d)+(e)+(f));

if(isNaN(total))
{
 total='';

}

$("#total").val(total);	
		
}); 
$("#d").bind('input',function(){
	
var a=$("#a").val();
	a=parseInt(a);
	var b=$("#b").val();
	b=parseInt(b);
	var c=$("#c").val();
	c=parseInt(c);
	var d=$("#d").val();
	d=parseInt(d);
	var e=$("#e").val();
	e=parseInt(e);
	var f=$("#f").val();
	f=parseInt(f);
	
var total=((a)+(b)+(c)+(d)+(e)+(f));

if(isNaN(total))
{
 total='';

}

$("#total").val(total);	
		
}); 
$("#e").bind('input',function(){
	
var a=$("#a").val();
	a=parseInt(a);
	var b=$("#b").val();
	b=parseInt(b);
	var c=$("#c").val();
	c=parseInt(c);
	var d=$("#d").val();
	d=parseInt(d);
	var e=$("#e").val();
	e=parseInt(e);
	var f=$("#f").val();
	f=parseInt(f);
	
var total=((a)+(b)+(c)+(d)+(e)+(f));

if(isNaN(total))
{
 total='';

}

$("#total").val(total);	
		
}); 
$("#f").bind('input',function(){
	
var a=$("#a").val();
	a=parseInt(a);
	var b=$("#b").val();
	b=parseInt(b);
	var c=$("#c").val();
	c=parseInt(c);
	var d=$("#d").val();
	d=parseInt(d);
	var e=$("#e").val();
	e=parseInt(e);
	var f=$("#f").val();
	f=parseInt(f);
	
var total=((a)+(b)+(c)+(d)+(e)+(f));

if(isNaN(total))
{
 total='';
}
$("#total").val(total);	
}); 
/////////////////////////////////////////////////////
///////////////////////////////////////////RESET END//////////////////////////////////////


/////////////////////VIRTUAL TABLE/////////////////////////////////////////
$("#saverow").live("click",function(event){
	
		var selc_zone_no=$('#selc_zone_no').val();
if(selc_zone_no=='')
	{
		alert("Please Enter Selection Zone No !");
		$('#selc_zone_no').focus().css("border-color", "red");
		return false;
	}
var trolley_no=$('#trolley_no').val();	
	if(trolley_no=='')
	{
		alert("Please Enter Trolley No !");
		$('#trolley_no').focus().css("border-color", "red");
		return false;
	}
var selector_name=$('#selector_name').val();
if(selector_name=='')
	{
		alert("Please Enter Selector Name !");
		$('#selector_name').focus().css("border-color", "red");
		return false;
	}

var mr_no=$('#mr_no').val();
if(mr_no=='')
	{
		alert("Please Enter MR No !");
		$('#mr_no').focus().css("border-color", "red");
		return false;
	}
	var mr_bales=$('#mr_bales').val();
if(mr_bales=='')
	{
		alert("Please Enter No of Bales !");
		$('#mr_bales').focus().css("border-color", "red");
		return false;
	}
	var mr_report=$('#mr_report').val();
if(mr_report=='')
	{
		alert("Please Enter MR Report !");
		$('#mr_report').focus().css("border-color", "red");
		return false;
	}
	var moisture=$('#moisture').val();
if(moisture=='')
	{
		alert("Please Enter Moisture % !");
		$('#moisture').focus().css("border-color", "red");
		return false;
	}
		var root_cut_uncut=$('#root_cut_uncut').val();
if(root_cut_uncut=='')
	{
		alert("Please Enter Root Cut Uncut !");
		$('#root_cut_uncut').focus().css("border-color", "red");
		return false;
	}
		var qlty_rej=$('#qlty_rej').val();
if(qlty_rej=='')
	{
		alert("Please Enter Quality Rejection(Bales) !");
		$('#qlty_rej').focus().css("border-color", "red");
		return false;
	}
		var remarks=$('#remarks').val();

		var hi_po_sl_no=$("#hi_po_sl_no").val();
		var rec_id=$.trim($("#rec_id").val());
		var hdr_id=$.trim($("#hdr_id").val());
		var perm_id = $.trim($("#perm_id").val());
		
	 if(hi_po_sl_no==''){	 
	 var last_td= $("#table_body tr:last").find('td:eq(0)').text();
	 if(last_td ==''){
	 hi_po_sl_no=1;
	 }
	 else{
	 hi_po_sl_no=(parseInt(last_td)+1);
	 }
	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"18px\">'+hi_po_sl_no+'</td><td width=\"25px\" class=\"reading\">'+selc_zone_no+'</td><td width=\"25px\" class=\"reading\">'+trolley_no+'</td><td width=\"80px\" class=\"reading\">'+selector_name+'</td><td width=\"30px\" class=\"reading\">'+mr_no+'</td><td width=\"25px\">'+mr_bales+'</td><td width=\"35px\" class=\"reading\">'+mr_report+'</td><td width=\"25px\" class=\"reading\">'+moisture+'</td><td width=\"35px\" class=\"reading\">'+root_cut_uncut+'</td><td width=\"50px\" class=\"reading\">'+qlty_rej+'</td><td width=\"70px\">'+remarks+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#table_body >tbody:last').append(trdata)
	
	  }
	else{
	 if(perm_id !=''){
	  
	 var trdata = '<th width=\"8px\"><pre></th><td width=\"18px\">'+hi_po_sl_no+'</td><td width=\"25px\" class=\"reading\">'+selc_zone_no+'</td><td width=\"25px\" class=\"reading\">'+trolley_no+'</td><td width=\"80px\" class=\"reading\">'+selector_name+'</td><td width=\"30px\" class=\"reading\">'+mr_no+'</td><td width=\"25px\">'+mr_bales+'</td><td width=\"35px\" class=\"reading\">'+mr_report+'</td><td width=\"25px\" class=\"reading\">'+moisture+'</td><td width=\"35px\" class=\"reading\">'+root_cut_uncut+'</td><td width=\"50px\" class=\"reading\">'+qlty_rej+'</td><td width=\"70px\">'+remarks+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+rec_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+hdr_id+'</span></td><th width=\"8px\"><pre></th>';
	  	   
	 } 
	 	  else{
		  
	 	  var trdata = '<th width=\"8px\"><pre></th><td width=\"18px\">'+hi_po_sl_no+'</td><td width=\"25px\" class=\"reading\">'+selc_zone_no+'</td><td width=\"25px\" class=\"reading\">'+trolley_no+'</td><td width=\"80px\" class=\"reading\">'+selector_name+'</td><td width=\"30px\" class=\"reading\">'+mr_no+'</td><td width=\"25px\">'+mr_bales+'</td><td width=\"35px\" class=\"reading\">'+mr_report+'</td><td width=\"25px\" class=\"reading\">'+moisture+'</td><td width=\"35px\" class=\"reading\">'+root_cut_uncut+'</td><td width=\"50px\" class=\"reading\">'+qlty_rej+'</td><td width=\"70px\">'+remarks+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	  
	 }
	 			 
		
	$('#potr_'+hi_po_sl_no+'').html(trdata);		

	}
	  $("#resetform").click();
	 $("#selc_zone_no").focus();
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
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });  
	
    var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	
		var selc_zone_no= $(this).closest('tr').find('td:eq(1)').text();
		var trolley_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selector_name= $(this).closest('tr').find('td:eq(3)').text();
		var mr_no= $(this).closest('tr').find('td:eq(4)').text();
		var mr_bales= $(this).closest('tr').find('td:eq(5)').text();
		var mr_report= $(this).closest('tr').find('td:eq(6)').text();		
		var moisture= $(this).closest('tr').find('td:eq(7)').text();
		var root_cut_uncut= $(this).closest('tr').find('td:eq(8)').text();
		var qlty_rej= $(this).closest('tr').find('td:eq(9)').text();		
		var remarks= $(this).closest('tr').find('td:eq(10)').text();
		var perm_id= $(this).closest('tr').find('td:eq(11)').text();
		var rec_id= $(this).closest('tr').find('td:eq(12)').text();
		var hdr_id= $(this).closest('tr').find('td:eq(13)').text();
		
	$("#selc_zone_no").val(selc_zone_no);
	$("#trolley_no").val(trolley_no);
	$("#selector_name").val(selector_name);
	$("#mr_no").val(mr_no);
	$("#mr_bales").val(mr_bales);
	$("#mr_report").val(mr_report);	
	$("#moisture").val(moisture);
	$("#root_cut_uncut").val(root_cut_uncut);
	$("#qlty_rej").val(qlty_rej);	
	$("#remarks").val(remarks);
	$("#perm_id").val(perm_id);	
	$("#rec_id").val(rec_id);	
	$("#hdr_id").val(hdr_id);
	
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////
$("#delrow").live("click",function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();
	
var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(11)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#details >tr').find('td:eq(11):contains("d")').length;
var rowCounb = $('#details >tr').length;
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

var rowCouna = $('#details >tr').find('td:eq(11):contains("d")').length;
var rowCounb = $('#details >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
if(rowCounta !=1){

$(del_po_tr).closest('tr').find('td:eq(11)').text('d');
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
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var saverowCount = (parseInt($('#details >tr').length));

var issue_date=((($('#issue_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var selection_type=((($('#selection_type').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var quality=((($('#quality').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var bales=((($('#bales').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(bales=='')
	{
		alert("Please Enter No of Bales !");
		$('#bales').focus().css("border-color", "red");
		return false;
	}
var a=((($('#a').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(a=='')
	{
		alert("Please Enter Value of A !");
		$('#a').focus().css("border-color", "red");
		return false;
	}
var b=((($('#b').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(b=='')
	{
		alert("Please Enter Value of B !");
		$('#b').focus().css("border-color", "red");
		return false;
	}
var c=((($('#c').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(c=='')
	{
		alert("Please Enter Value of C !");
		$('#c').focus().css("border-color", "red");
		return false;
	}
var d=((($('#d').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(d=='')
	{
		alert("Please Enter Value of D !");
		$('#d').focus().css("border-color", "red");
		return false;
	}
var e=((($('#e').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(e=='')
	{
		alert("Please Enter Value of E !");
		$('#e').focus().css("border-color", "red");
		return false;
	}
var f=((($('#f').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(f=='')
	{
		alert("Please Enter Value of F !");
		$('#f').focus().css("border-color", "red");
		return false;
	}
var total=((($('#total').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var hdr_id=((($('#hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{

var po_tr='#potr_'+ic;
var wr_arr= wr_arr+((($(po_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(2)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(3)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(5)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(6)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(10)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(11)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(12)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(0)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}		
		var datString = 'r='+ saverowCount +'&issue_date=' +issue_date+ '&selection_type=' +selection_type+'&quality='+quality+'&bales=' +bales+'&a='+a+'&b='+b+'&c='+c+'&d='+d+'&e='+e+'&f='+f+'&total='+total+'&wr_arr=' + wr_arr+'&hdr_id='+hdr_id;
		
		//alert(datString);
		//return false;
$.ajax({
      type: "POST",
      url: "selection_monitoring_sheet_save.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
		$("#resettab").click();
		alert(data);
$("#po_search_button").click();

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

///////////////////////////////////////////save end//////////////////////////////////////////	

///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		//alert(datString);
$.ajax({
      type: "POST",
      url: "selection_monitoring_sheet_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
		$("#resettab").click();	
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	$("#resetform").click();
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");

		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
	
	var selection_type= $(this).closest('tr').find('td:eq(0)').text();
    $("#selection_type").val(selection_type).attr('disabled',true);
	var quality= $(this).closest('tr').find('td:eq(1)').text();	
    $("#quality").val(quality);
	var issue_date= $(this).closest('tr').find('td:eq(2)').text();
    $("#issue_date").val(issue_date).attr('disabled',true);	
    var hdr_id= $(this).closest('tr').find('td:eq(3)').text();
    $("#hdr_id").val(hdr_id);
	
	var bales= $(this).closest('tr').find('td:eq(4)').text();	
    $("#bales").val(bales);
	var a= $(this).closest('tr').find('td:eq(5)').text();	
    $("#a").val(a);
	var b= $(this).closest('tr').find('td:eq(6)').text();	
    $("#b").val(b);
	var c= $(this).closest('tr').find('td:eq(7)').text();	
    $("#c").val(c);
	var d= $(this).closest('tr').find('td:eq(8)').text();	
    $("#d").val(d);
	var e= $(this).closest('tr').find('td:eq(9)').text();	
    $("#e").val(e);
	var f= $(this).closest('tr').find('td:eq(10)').text();	
    $("#f").val(f);
	var total= $(this).closest('tr').find('td:eq(11)').text();	
    $("#total").val(total);
	
	var datString = 'hdr_id='+hdr_id; 
	 //alert(datString); 		 
					 
	  $.ajax({
      type: "POST",
      url: "selection_monitoring_sheet_datewise_onselect.php",
      data: datString,
      success: function(data) { 
	  
				
		$("#details").html(data);
			
		
		$("#load").hide();
		
		$("#details td").click(function () 
		{                  
		
		 var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	
		var selc_zone_no= $(this).closest('tr').find('td:eq(1)').text();
		var trolley_no= $(this).closest('tr').find('td:eq(2)').text();	
		var selector_name= $(this).closest('tr').find('td:eq(3)').text();
		var mr_no= $(this).closest('tr').find('td:eq(4)').text();
		var mr_bales= $(this).closest('tr').find('td:eq(5)').text();
		var mr_report= $(this).closest('tr').find('td:eq(6)').text();		
		var moisture= $(this).closest('tr').find('td:eq(7)').text();
		var root_cut_uncut= $(this).closest('tr').find('td:eq(8)').text();
		var qlty_rej= $(this).closest('tr').find('td:eq(9)').text();		
		var remarks= $(this).closest('tr').find('td:eq(10)').text();
		var perm_id= $(this).closest('tr').find('td:eq(11)').text();
		var rec_id= $(this).closest('tr').find('td:eq(12)').text();
		var hdr_id= $(this).closest('tr').find('td:eq(13)').text();
		
	$("#selc_zone_no").val(selc_zone_no);
	$("#trolley_no").val(trolley_no);
	$("#selector_name").val(selector_name);
	$("#mr_no").val(mr_no);
	$("#mr_bales").val(mr_bales);
	$("#mr_report").val(mr_report);	
	$("#moisture").val(moisture);
	$("#root_cut_uncut").val(root_cut_uncut);
	$("#qlty_rej").val(qlty_rej);	
	$("#remarks").val(remarks);
	$("#perm_id").val(perm_id);	
	$("#rec_id").val(rec_id);	
	$("#hdr_id").val(hdr_id);
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


///////////////////////////////////################################################////////////////// ////////////////////////////////////////////////////////

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
var hdr_id=$("#hdr_id").val();	
if(hdr_id =='')
{
alert("Please Select a Record!");
}
else
{
	
if(confirm('Are you sure you want to delete?')){
var datString='hdr_id='+hdr_id;

$.ajax({
      type: "POST",
      url: "selection_monitoring_sheet_delete.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			
$("#load").hide();

$("#resetform").click();
		
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
 //////////////////////////////////////////////////////////////////
     
 });//total doc ready


