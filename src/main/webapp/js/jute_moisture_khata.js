$(document).ready(function(){
/////////////////////////////////////////////////////////////////////////////////////// CACULATE AVARAGE




/////////////////////////////////////////////////////////////////////////////////////////////
$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	


////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#r_1').val('');
$('#r_2').val('');
$('#r_3').val('');
$('#r_4').val('');
$('#r_5').val('');
$('#hi_po_sl_no').val('');
$('#tot_moisture').val('');
$('#avg_moisture').val('');
$('#rec_id').val('');
$('#perm_id').val('');
//$('#hdr_id').val('');
return false;
});
$("#resetform").click(function(event){
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$("#resettab").click();
$('#lorry_no').val('');
$('#challan_no').val('');
$('#challan_date').val(strDate);
$('#mukam').val('');
$('#marka').val('');
$('#quality').val('');
$('#quality_desc').val('');
$('#rec_id').val('');
$('#perm_id').val('');
$('#hdr_id').val('');
$("#quantity").val('');
$("#uom").val('0');
$("#remarks").val('');
$("#from_time").val('');	
document.getElementById("moisture_report").innerHTML = '';
$("#po_datewise td").css("background-color", "");

return false;
});
///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////////////////////////////////
$("#r_1").bind('input',function(){
	var r_1=$("#r_1").val();
	r_1=parseInt(r_1);
	var r_2=$("#r_2").val();
	r_2=parseInt(r_2);
	var r_3=$("#r_3").val();
	r_3=parseInt(r_3);
	var r_4=$("#r_4").val();
	r_4=parseInt(r_4);
	var r_5=$("#r_5").val();
	r_5=parseInt(r_5);
	var tot_moisture=((r_1)+(r_2)+(r_3)+(r_4)+(r_5));
		if(isNaN(tot_moisture))
		{
			tot_moisture=0;
		}
	$("#tot_moisture").val(tot_moisture);
	
});
$("#r_2").bind('input',function(){
	var r_1=$("#r_1").val();
	r_1=parseInt(r_1);
	var r_2=$("#r_2").val();
	r_2=parseInt(r_2);
	var r_3=$("#r_3").val();
	r_3=parseInt(r_3);
	var r_4=$("#r_4").val();
	r_4=parseInt(r_4);
	var r_5=$("#r_5").val();
	r_5=parseInt(r_5);
	var tot_moisture=((r_1)+(r_2)+(r_3)+(r_4)+(r_5));
		if(isNaN(tot_moisture))
		{
			tot_moisture=0;
		}
	$("#tot_moisture").val(tot_moisture);
	
});
$("#r_3").bind('input',function(){
	var r_1=$("#r_1").val();
	r_1=parseInt(r_1);
	var r_2=$("#r_2").val();
	r_2=parseInt(r_2);
	var r_3=$("#r_3").val();
	r_3=parseInt(r_3);
	var r_4=$("#r_4").val();
	r_4=parseInt(r_4);
	var r_5=$("#r_5").val();
	r_5=parseInt(r_5);
	var tot_moisture=((r_1)+(r_2)+(r_3)+(r_4)+(r_5));
		if(isNaN(tot_moisture))
		{
			tot_moisture=0;
		}
	$("#tot_moisture").val(tot_moisture);
	
});
$("#r_4").bind('input',function(){
	var r_1=$("#r_1").val();
	r_1=parseInt(r_1);
	var r_2=$("#r_2").val();
	r_2=parseInt(r_2);
	var r_3=$("#r_3").val();
	r_3=parseInt(r_3);
	var r_4=$("#r_4").val();
	r_4=parseInt(r_4);
	var r_5=$("#r_5").val();
	r_5=parseInt(r_5);
	var tot_moisture=((r_1)+(r_2)+(r_3)+(r_4)+(r_5));
		if(isNaN(tot_moisture))
		{
			tot_moisture=0;
		}
	$("#tot_moisture").val(tot_moisture);
	
});
$("#r_5").bind('input',function(){
	var r_1=$("#r_1").val();
	r_1=parseInt(r_1);
	var r_2=$("#r_2").val();
	r_2=parseInt(r_2);
	var r_3=$("#r_3").val();
	r_3=parseInt(r_3);
	var r_4=$("#r_4").val();
	r_4=parseInt(r_4);
	var r_5=$("#r_5").val();
	r_5=parseInt(r_5);
	var tot_moisture=((r_1)+(r_2)+(r_3)+(r_4)+(r_5));
		if(isNaN(tot_moisture))
		{
			tot_moisture=0;
		}
	$("#tot_moisture").val(tot_moisture);
	
});

/////////////////////VIRTUAL TABLE/////////////////////////////////////////
$("#saverow").live("click",function(event){
	
		var lorry_no=$.trim($('#lorry_no').val());	
		var challan_no=$.trim($('#challan_no').val());	
		var mukam=$.trim($('#mukam').val());	
		var marka=$.trim($('#marka').val());	
		var quality=$.trim($('#quality').val());	
		var bales_loose=$.trim($('#bales_loose').val());	
		var r_1 =$.trim($("#r_1").val());	
		if(r_1=='')
		{
			alert("Please Enter R1!");
			return false;
		}		
		
		var r_2 = $.trim($("#r_2").val());
		var r_3 = $.trim($("#r_3").val());
		var r_4 = $.trim($("#r_4").val());		
		var r_5 = $.trim($("#r_5").val());
		var from_time=$.trim($("#from_time").val());
		if(from_time=='')
		{
			alert("Please select time!");
			return false;
		}	
		var hi_po_sl_no=$("#hi_po_sl_no").val();
		//alert(hi_po_sl_no);
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
	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"4px\"><pre></th><td width=\"12px\">'+hi_po_sl_no+'</td><td width=\"20px\" class=\"reading\">'+r_1+'</td><td width=\"20px\" class=\"reading\">'+r_2+'</td><td width=\"20px\" class=\"reading\">'+r_3+'</td><td width=\"20px\" class=\"reading\">'+r_4+'</td><td width=\"20px\" class=\"reading\">'+r_5+'</td><td width=\"32px\" class=\"data\">'+from_time+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"4px\"><pre></th></tr>';
	 
	 $('#table_body >tbody:last').append(trdata)
	
	  }
	else{
	 if(perm_id !=''){
	  
	 var trdata = '<th width=\"4px\"><pre></th><td width=\"12px\">'+hi_po_sl_no+'</td><td width=\"20px\" class=\"reading\">'+r_1+'</td><td width=\"20px\" class=\"reading\">'+r_2+'</td><td width=\"20px\" class=\"reading\">'+r_3+'</td><td width=\"20px\" class=\"reading\">'+r_4+'</td><td width=\"20px\" class=\"reading\">'+r_5+'</td><td width=\"32px\" class=\"data\">'+from_time+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+rec_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+hdr_id+'</span></td><th width=\"4px\"><pre></th>';
	  	   
	 } 
	 	  else{
		  
	 	  var trdata = '<th width=\"4px\"><pre></th><td width=\"12px\">'+hi_po_sl_no+'</td><td width=\"20px\" class=\"reading\">'+r_1+'</td><td width=\"20px\" class=\"reading\">'+r_2+'</td><td width=\"20px\" class=\"reading\">'+r_3+'</td><td width=\"20px\" class=\"reading\">'+r_4+'</td><td width=\"20px\" class=\"reading\">'+r_5+'</td><td width=\"32px\" class=\"data\">'+from_time+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><th width=\"4px\"><pre></th>';
	   //var count=$("#table_body > tbody > tr").length
	// alert(count);
	 }
	 			 
		
	$('#potr_'+hi_po_sl_no+'').html(trdata);		

	}
	  $("#resettab").click();
	 
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
///////////////////////////////////################################################////////////////// CACULATE AVARAGE///////////////////////////

 sum = 0;
count_k=0;
$(".reading:visible").each(function(i) {

var td_val=$(this).text();
if((td_val)==''){
td_val=0;
}else{
count_k=count_k+1;
}


 fcount = parseFloat(td_val);

       sum += fcount;
	  
});


var fin_avrg=(sum/count_k);
var fin_avrg=fin_avrg.toFixed(2);

$("#avg_moisture").val(fin_avrg);
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
	var selected_r_1= $(this).closest('tr').find('td:eq(1)').text();
		var selected_r_2= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_r_3= $(this).closest('tr').find('td:eq(3)').text();
		var selected_r_4= $(this).closest('tr').find('td:eq(4)').text();
		var selected_r_5= $(this).closest('tr').find('td:eq(5)').text();
		var selected_from_time= $(this).closest('tr').find('td:eq(6)').text();		
		var selected_perm_id= $(this).closest('tr').find('td:eq(7)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(8)').text();
		var selected_hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		//alert(selected_hdr_id);
	$("#r_1").val(selected_r_1);
	$("#r_2").val(selected_r_2);
	$("#r_3").val(selected_r_3);
	$("#r_4").val(selected_r_4);
	$("#r_5").val(selected_r_5);
	$("#from_time").val(selected_from_time);	
	$("#perm_id").val(selected_perm_id);
	$("#rec_id").val(selected_rec_id);	
	$("#hdr_id").val(selected_hdr_id);	
	
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////
$("#delrow").live("click",function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();
	
var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(7)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#moisture_report >tr').find('td:eq(7):contains("d")').length;
var rowCounb = $('#moisture_report >tr').length;
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

var rowCouna = $('#moisture_report >tr').find('td:eq(7):contains("d")').length;
var rowCounb = $('#moisture_report >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
if(rowCounta !=1){

$(del_po_tr).closest('tr').find('td:eq(7)').text('d');
$(del_po_tr).hide();
}
else{
var che_po_sl=$("#hi_po_sl_no").val();
if(che_po_sl != 0){
alert("One row must be present !");
}

}

}


$('#resettab').click();
sum = 0;
count_k=0;
$(".reading:visible").each(function(i) {

var td_val=$(this).text();
if((td_val)==''){
td_val=0;
}else{
count_k=count_k+1;
}


 fcount = parseFloat(td_val);

       sum += fcount;	 
});


var fin_avrg=(sum/count_k);
var fin_avrg=fin_avrg.toFixed(2);
$("#avg_moisture").val(fin_avrg);



return false;
});
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){

var saverowCount = (parseInt($('#moisture_report >tr').length));

var lorry_no_wr=((($('#lorry_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(lorry_no_wr==''){ alert("Please Enter Lorry No!"); return false;}
var challan_no_wr=((($('#challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(challan_no_wr==''){ alert("Please Enter Challan No!"); return false;}
var challan_date_wr=((($('#challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

var mukam_wr=((($('#mukam').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(mukam_wr==''){ alert("Please Enter Mukam!"); return false;}
var marka_wr=((($('#marka').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(marka_wr==''){ alert("Please Enter Marka!"); return false;}
var quality_wr=((($('#quality').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(quality_wr==''){ alert("Please Enter Jute Quality!"); return false;}
var quality_desc_wr=((($('#quality_desc').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var quantity_wr=((($('#quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(quantity_wr==''){ alert("Please Enter Quantity!"); return false;}
var uom_wr=((($('#uom').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(uom_wr==0){ alert("Please Select a Unit!"); return false;}
var remarks_wr=((($('#remarks').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var avg_moisture_wr=((($('#avg_moisture').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
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
var wr_arr= wr_arr+((($(po_tr).find('td:eq(0)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}		//alert(wr_arr);		
		var datString = 'r='+ saverowCount +'&lorry_no_wr=' +lorry_no_wr+ '&challan_no_wr=' +challan_no_wr+'&challan_date_wr='+challan_date_wr+'&mukam_wr='+mukam_wr+'&marka_wr=' + marka_wr+'&quality_wr=' + quality_wr+'&quality_desc_wr='+quality_desc_wr+'&quantity_wr='+quantity_wr+'&uom_wr='+uom_wr+'&remarks_wr='+remarks_wr+'&wr_arr=' + wr_arr+'&avg_moisture_wr='+avg_moisture_wr+'&hdr_id='+hdr_id;
		
		//alert(datString);
		//return false;
$.ajax({
      type: "POST",
      url: "jute_moisture_khata_data_save.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
		$("#resetform").click();
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
      url: "jute_moisture_khata_datewise.php",
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
	
	var select_challan_no= $(this).closest('tr').find('td:eq(0)').text();
    $("#challan_no").val(select_challan_no);
    var select_rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#hdr_id").val(select_rec_id);
	var selected_lorry_no= $(this).closest('tr').find('td:eq(3)').text();	
    $("#lorry_no").val(selected_lorry_no);
	var select_challan_date= $(this).closest('tr').find('td:eq(4)').text();
    $("#challan_date").val(select_challan_date);	
	var selected_mukam= $(this).closest('tr').find('td:eq(5)').text();
	$("#mukam").val(selected_mukam);
	var selected_marka= $(this).closest('tr').find('td:eq(6)').text();	
    $("#marka").val(selected_marka);
	var selected_quality= $(this).closest('tr').find('td:eq(7)').text();	
    $("#quality").val(selected_quality);	
	var selected_quality_desc= $(this).closest('tr').find('td:eq(8)').text();
	$("#quality_desc").val(selected_quality_desc);
	var selected_quantity= $(this).closest('tr').find('td:eq(9)').text();	
    $("#quantity").val(selected_quantity);
	var selected_uom= $(this).closest('tr').find('td:eq(10)').text();	
    $("#uom").val(selected_uom).attr('selected',true);
	var selected_remarks= $(this).closest('tr').find('td:eq(11)').text();	
    $("#remarks").val(selected_remarks);
	var selected_avg_moisture= $(this).closest('tr').find('td:eq(12)').text();	
    $("#avg_moisture").val(selected_avg_moisture);
	
	var datString = 'select_rec_id='+select_rec_id; 
	 //alert(datString); 		 
					 
	  $.ajax({
      type: "POST",
      url: "jute_moisture_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
	  
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#moisture_report").html(x.table_html);
			
		
		$("#load").hide();
		
		$("#moisture_report td").click(function () 
		{                  
		
		var selected_r_1= $(this).closest('tr').find('td:eq(1)').text();
		var selected_r_2= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_r_3= $(this).closest('tr').find('td:eq(3)').text();
		var selected_r_4= $(this).closest('tr').find('td:eq(4)').text();
		var selected_r_5= $(this).closest('tr').find('td:eq(5)').text();
		var selected_from_time= $(this).closest('tr').find('td:eq(6)').text();		
		var selected_perm_id= $(this).closest('tr').find('td:eq(7)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(8)').text();
				var selected_hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		//alert(selected_hdr_id);
	$("#r_1").val(selected_r_1);
	$("#r_2").val(selected_r_2);
	$("#r_3").val(selected_r_3);
	$("#r_4").val(selected_r_4);
	$("#r_5").val(selected_r_5);
	$("#from_time").val(selected_from_time);	
	$("#perm_id").val(selected_perm_id);
	$("#rec_id").val(selected_rec_id);
	
	$("#hdr_id").val(selected_hdr_id);	
	$("#moisture_report td").css("background-color", "");	
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
      url: "jute_moisture_khata_delete.php",
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


