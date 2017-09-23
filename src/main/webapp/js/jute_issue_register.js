$(document).ready(function(){
$('#issue_no').attr('disabled',true);
/////////////////////////////////////////////////////////////////////////////////////////////
$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();


////////////////////////////////////////////RESET///////////////////////////////////////
$("#resetform").click(function(event){

$('#quality').val('');
$('#godown_no').val('');
$('#bales').val('');
$('#weight').val('');
$('#packing_type').val('0');
$('#s_type').val('');
$('#dtl_id').val('');
$('#perm_id').val('');
$('#hi_po_sl_no').val('');
$("#issue_report td").css("background-color", "");
return false;
});
$("#resettab").click(function(event){

$('#issue_date').val(strDate);
$('#fin_year').val('selected');
$('#hdr_id').val('');
$('#issue_no').val('');
$("#resetform").click();
document.getElementById("issue_report").innerHTML = '';
$("#po_datewise td").css("background-color", "");

return false;
});
///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////////////////////////////
$("#bales").bind('input',function(){
	var bales=$("#bales").val();
	if(bales!='0')
	{
	bales=parseInt(bales);
	var weight=bales*150;
	if(isNaN(weight))
		{
			weight='';
		}
		$("#weight").val(weight);
		
	}
	
		
});

/////////////////////VIRTUAL TABLE/////////////////////////////////////////
$("#saverow").bind("click",function(event){
	
		var quality=$.trim($('#quality').val());
			if(quality=='')
		{
			alert("Please Enter Quality!");
			$('#quality').focus();
			return false;
		}	
		var godown_no=$.trim($('#godown_no').val());
		if(godown_no=='')
		{
			alert("Please Enter Godown No!");
			$('#godown_no').focus();
			return false;
		}			
		var bales=$.trim($('#bales').val());	
		if(bales=='')
		{
			alert("Please Enter No of Bales!");
			$('#bales').focus();
			return false;
		}		
		var weight=$.trim($('#weight').val());	
		if(weight=='')
		{
			alert("Please Enter Weight!");
			$('#weight').focus();
			return false;
		}	
		var packing_type=$.trim($('#packing_type').val());	
		if(packing_type=='0')
		{
			alert("Please Select a Packing Type!");
			$('#packing_type').focus();
			return false;
		}	
		var s_type=$.trim($('#s_type').val());	
		if(s_type=='')
		{
			alert("Please Enter S Type!");
			$('#s_type').focus();
			return false;
		}	
		
		var hi_po_sl_no=$("#hi_po_sl_no").val();
		var dtl_id=$.trim($("#dtl_id").val());
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
	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"24px\">'+hi_po_sl_no+'</td><td width=\"80px\" class=\"reading\">'+quality+'</td><td width=\"60px\" class=\"reading\">'+godown_no+'</td><td width=\"60px\" class=\"reading\">'+bales+'</td><td width=\"60px\" class=\"reading\">'+packing_type+'</td><td width=\"70px\" class=\"reading\">'+weight+'</td><td width=\"40px\" class=\"data\">kgs</td><td width=\"60px\" class=\"data\">'+s_type+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#table_body >tbody:last').append(trdata)
	
	  }
	else{
	 if(perm_id !=''){
	  
	 var trdata = '<th width=\"8px\"><pre></th><td width=\"24px\">'+hi_po_sl_no+'</td><td width=\"80px\" class=\"reading\">'+quality+'</td><td width=\"60px\" class=\"reading\">'+godown_no+'</td><td width=\"60px\" class=\"reading\">'+bales+'</td><td width=\"60px\" class=\"reading\">'+packing_type+'</td><td width=\"70px\" class=\"reading\">'+weight+'</td><td width=\"40px\" class=\"data\">KGS</td><td width=\"60px\" class=\"data\">'+s_type+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+dtl_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+hdr_id+'</span></td><th width=\"8px\"><pre></th>';
	  	   
	 } 
	 	  else{
		  
	 	  var trdata = '<th width=\"8px\"><pre></th><td width=\"24px\">'+hi_po_sl_no+'</td><td width=\"80px\" class=\"reading\">'+quality+'</td><td width=\"60px\" class=\"reading\">'+godown_no+'</td><td width=\"60px\" class=\"reading\">'+bales+'</td><td width=\"60px\" class=\"reading\">'+packing_type+'</td><td width=\"70px\" class=\"reading\">'+weight+'</td><td width=\"40px\" class=\"data\">kgs</td><td width=\"60px\" class=\"data\">'+s_type+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	   
	 }	 			 
		
	$('#potr_'+hi_po_sl_no+'').html(trdata);		

	}
	  $("#resetform").click();
	 
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
	//////////////////////////--------------------keep sl no safe
	
		var quality= $(this).closest('tr').find('td:eq(1)').text();
		var godown_no= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();
		var packing_type= $(this).closest('tr').find('td:eq(4)').text();		
		var weight= $(this).closest('tr').find('td:eq(5)').text();
		
		var s_type= $(this).closest('tr').find('td:eq(7)').text();
		var perm_id= $(this).closest('tr').find('td:eq(8)').text();		
		var dtl_id= $(this).closest('tr').find('td:eq(9)').text();
		var hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		
		//alert(selected_hdr_id);
	$("#quality").val(quality);
	$("#godown_no").val(godown_no);
	$("#bales").val(bales);
	$("#weight").val(weight);
	$("#packing_type").val(packing_type).attr('selected',true);
	$("#s_type").val(s_type);	
	$("#perm_id").val(perm_id);
	$("#dtl_id").val(dtl_id);	
	$("#hdr_id").val(hdr_id);	
	
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////
$("#delrow").live("click",function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();
	
var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(8)').text();
//alert(del_i_ch);
if(del_i_ch ==='' )
{
var rowCouna = $('#issue_report >tr').find('td:eq(8):contains("d")').length;
var rowCounb = $('#issue_report >tr').length;
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
//alert('test');
var rowCouna = $('#issue_report >tr').find('td:eq(8):contains("d")').length;
var rowCounb = $('#issue_report >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
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
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var saverowCount = (parseInt($('#issue_report >tr').length));

var issue_date=((($('#issue_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var fin_year=((($('#fin_year').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
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
var wr_arr= wr_arr+((($(po_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(10)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(0)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}		//alert(wr_arr);		
		var datString = 'r='+ saverowCount +'&issue_date=' +issue_date+ '&fin_year=' +fin_year+'&hdr_id='+hdr_id+'&wr_arr=' + wr_arr;
		
		//alert(datString);
		//return false;
$.ajax({
      type: "POST",
      url: "issue_register_data_saved.php",
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
      url: "issue_register_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
		$("#resettab").click();	
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	$("#resettab").click();	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	//alert("test");
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
	var issue_no= $(this).closest('tr').find('td:eq(0)').text();
    $("#issue_no").val(issue_no);
    var hdr_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#hdr_id").val(hdr_id);
	var issue_date= $(this).closest('tr').find('td:eq(3)').text();	
    $("#issue_date").val(issue_date);
	var fin_year= $(this).closest('tr').find('td:eq(4)').text();
    $("#fin_year").val(fin_year);	
	
	
	var datString = 'hdr_id='+hdr_id; 
	 //alert(datString); 		 
					 
	  $.ajax({
      type: "POST",
      url: "issue_register_datewise_onselect.php",
      data: datString,
      success: function(data) { 
	  
		
		$("#load").hide();
		$("#issue_report").html(data);
				
		
		$("#issue_report td").click(function () 
		{                  
		
		 var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	//alert(sl_no);
	//////////////////////////--------------------keep sl no safe
	
		var quality= $(this).closest('tr').find('td:eq(1)').text();
		var godown_no= $(this).closest('tr').find('td:eq(2)').text();	
		var bales= $(this).closest('tr').find('td:eq(3)').text();
		var packing_type= $(this).closest('tr').find('td:eq(4)').text();		
		var weight= $(this).closest('tr').find('td:eq(5)').text();
		
		var s_type= $(this).closest('tr').find('td:eq(7)').text();
		var perm_id= $(this).closest('tr').find('td:eq(8)').text();		
		var dtl_id= $(this).closest('tr').find('td:eq(9)').text();
		var hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		
		//alert(selected_hdr_id);
	$("#quality").val(quality);
	$("#godown_no").val(godown_no);
	$("#bales").val(bales);
	$("#weight").val(weight);
	$("#packing_type").val(packing_type).attr('selected',true);
	$("#s_type").val(s_type);	
	$("#perm_id").val(perm_id);
	$("#dtl_id").val(dtl_id);	
	$("#hdr_id").val(hdr_id);	
	$("#issue_report td").css("background-color", "");	
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
      url: "issue_register_delete.php",
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


