$(document).ready(function(){
/////echo date('d-m-Y', strtotime('+3 days'));
$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
////////////////////////////////////////diseable header field/////

		$("#entry_date").attr('disabled', true);
		$("#challan_no").attr('disabled', true);
		$("#inward_date").attr('disabled', true);
		$("#challan_date").attr('disabled', true);
		$("#broker").attr('disabled', true);
		$("#ac_seller").attr('disabled', true);
		$("#mukam").attr('disabled', true);
		$("#delivery_place").attr('disabled', true);
		$("#purchase_no").attr('disabled', true);
		$("#purchase_date").attr('disabled', true);
		$("#cont_no").attr('disabled', true);
		$("#cont_date").attr('disabled', true);
		$("#lorry_no").attr('disabled', true);
		$("#driver_name").attr('disabled', true);
		$("#lorry_owner_name").attr('disabled', true);
		/////////////////////////////////////
		$("#adv_quality").attr('disabled', true);
		$("#adv_marka").attr('disabled', true);
		$("#adv_quantity").attr('disabled', true);
		$("#adv_uom").attr('disabled', true);
		$("#adv_weight").attr('disabled', true);
		$("#shotage").attr('disabled', true);
		$("#adv_remarks").attr('disabled', true);
///////////////////////////////////////////////////////////////
$('#mill_quality').attr('disabled', true);
$('#mill_marka').attr('disabled', true);
$('#mill_quantity').attr('disabled', true);
$('#uom').attr('disabled', true);
$('#mill_weight').attr('disabled', true);
$('#shotage').attr('disabled', true);
$('#mill_remarks').attr('disabled', true);
$('#moisture_percentage').attr('disabled', true);
$('#down_percentage').attr('disabled', true);
$('#godown_no').attr('disabled', true);
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resetform").click(function(event){
$('#mill_quality').val('');
$('#mill_marka').val('');
$('#mill_quantity').val('');
$('#uom').val('0');
$('#mill_weight').val('');
$("#mr_rec_id").val('');
$("#challan_rec_id").val('');
$('#perm_id').val('');
$('#hi_po_sl_no').val('');
$('#shotage').val('');
$('#mill_remarks').val('');
$('#moisture_percentage').val('');
$('#down_percentage').val('');
		$("#adv_quality").val('');
		$("#adv_marka").val('');
		$("#adv_quantity").val('');
		$("#adv_uom").val('');
		$("#adv_weight").val('');
		$("#adv_remarks").val('');
		$('#godown_no').val('');
		$('#mill_quality').attr('disabled', true);
$('#mill_marka').attr('disabled', true);
$('#mill_quantity').attr('disabled', true);
$('#uom').attr('disabled', true);
$('#mill_weight').attr('disabled', true);
$('#shotage').attr('disabled', true);
$('#mill_remarks').attr('disabled', true);
$('#moisture_percentage').attr('disabled', true);
$('#down_percentage').attr('disabled', true);
$('#godown_no').attr('disabled', true);
$("#mr_details td").css("background-color", "");
return false;
});
/////////////////////////////////////
$("#resettab").click(function(event){
$("#resetform").click();
$('#mr_no').val('').attr('disabled',false);
$('#fin_year').val('selected').attr('disabled',false);
$("#inward_date").val('');	
$("#challan_no").val('');
		$("#challan_date").val('');
		$("#broker").val('');
		$("#ac_seller").val('');
		$("#mukam").val('');
		$("#delivery_place").val('');
		$("#purchase_no").val('');
		$("#purchase_date").val('');
		$("#cont_no").val('');
		$("#cont_date").val('');
		$("#lorry_no").val('');
		$("#driver_name").val('');
		$("#lorry_owner_name").val('');
$('#adv_quality').val('');
$('#adv_marka').val('');
$('#adv_quantity').val('');
$('#adv_uom').val('');
$("#adv_weight").val('');
$('#godown_no').val('');
$('#adv_remarks').val('');
$('#challan_hdr_id').val('');

$("#mr_hdr_id").val('');
$("#po_datewise td").css("background-color", "");
$("#mr_details td").css("background-color", "");
$("#mr_details").html('');
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////

///////////////////////////////////////code for header loading//////////////////////

$("#mr_no").bind('input',function(){
var mr_no=$("#mr_no").val();
var fin_year=$("#fin_year").val();
var wordlength=$("#mr_no").val().length;
if(wordlength>3)
{
var datString='mr_no='+mr_no+'&fin_year='+fin_year;
$.ajax({
      type: "POST",
      url: "jute_mr_file_header_data.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
		
		//alert(data);
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$('#challan_hdr_id').val(x.HDR_ID);
		$("#challan_no").val(x.CHALLAN_NO);
		$("#challan_date").val(x.CHALLAN_DATE);
		$("#broker").val(x.BROKER);
		$("#ac_seller").val(x.AC_SELLER);
		$("#mukam").val(x.MUKAM);
		$("#delivery_place").val(x.DELIVERY_PLACE);
		$("#purchase_no").val(x.PURCHASE_NO);
		$("#purchase_date").val(x.PURCHASE_DATE);
		$("#cont_no").val(x.CONT_NO);
		$("#cont_date").val(x.CONT_DATE);
		$("#lorry_no").val(x.LORRY_NO);
		$("#driver_name").val(x.DRIVER_NAME);
		$("#lorry_owner_name").val(x.LORRY_OWNER_NAME);	
		$("#inward_date").val(x.INWARD_DATE);	
		$("#mr_details").html(x.table_html);
		
		
				
		$("#mr_details td").click(function () 
		{    
		
		var sl_no = $(this).closest('tr').find('td:eq(0)').text();
		var adv_quality= $(this).closest('tr').find('td:eq(1)').text();
		var adv_marka= $(this).closest('tr').find('td:eq(3)').text();	
		var adv_quantity= $(this).closest('tr').find('td:eq(5)').text();
		var adv_uom= $(this).closest('tr').find('td:eq(6)').text();
		var adv_weight= $(this).closest('tr').find('td:eq(9)').text();
		var adv_remarks= $(this).closest('tr').find('td:eq(14)').text();
		var perm_id= $(this).closest('tr').find('td:eq(17)').text();
		var rec_id= $(this).closest('tr').find('td:eq(18)').text();
		
	$("#rec_id").val(rec_id);			
	$("#adv_quality").val(adv_quality);
	$("#adv_marka").val(adv_marka);
	$("#adv_quantity").val(adv_quantity);
	$("#adv_uom").val(adv_uom);
	$("#adv_weight").val(adv_weight);
	$("#adv_remarks").val(adv_remarks);
	$("#perm_id").val(perm_id);
	$("#hi_po_sl_no").val(sl_no);
	
	$("#mr_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	///////table end

},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
}
else{	
		$('#challan_hdr_id').val('');
		$("#inward_date").val('');	
		$("#challan_no").val('');
		$("#challan_date").val('');
		$("#broker").val('');
		$("#ac_seller").val('');
		$("#mukam").val('');
		$("#delivery_place").val('');
		$("#purchase_no").val('');
		$("#purchase_date").val('');
		$("#cont_no").val('');
		$("#cont_date").val('');
		$("#lorry_no").val('');
		$("#driver_name").val('');
		$("#lorry_owner_name").val('');
		$("#mr_details").html('');
		$("#rec_id").val('');	
		$("#adv_quality").val('');
		$("#adv_marka").val('');
		$("#adv_quantity").val('');
		$("#adv_uom").val('');
		$("#adv_weight").val('');
		$("#adv_remarks").val('');
		$("#perm_id").val('');
		$("#hi_po_sl_no").val('');
	
		
}
return false;
});
////////////////// on fin year change
$('#fin_year').bind('change', function()
	{
	$("#resetform").click();
	//////////////////////////////set details val zero
	$("#rec_id").val('');	
		$("#adv_quality").val('');
		$("#adv_marka").val('');
		$("#adv_quantity").val('');
		$("#adv_uom").val('');
		$("#adv_weight").val('');
		$("#adv_remarks").val('');
		$("#perm_id").val('');
		$("#hi_po_sl_no").val('');
	
	
	////////////////////////////////////////////////////////
		var fin_year=$('#fin_year option:selected').val();
		var mr_no=$("#mr_no").val();

var wordlength=$("#mr_no").val().length;
if(wordlength>3)
{
var datString='mr_no='+mr_no+'&fin_year='+fin_year;
$.ajax({
      type: "POST",
      url: "jute_mr_file_header_data.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();
		
		//alert(data);
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$('#challan_hdr_id').val(x.HDR_ID);
		$("#challan_no").val(x.CHALLAN_NO);
		$("#challan_date").val(x.CHALLAN_DATE);
		$("#broker").val(x.BROKER);
		$("#ac_seller").val(x.AC_SELLER);
		$("#mukam").val(x.MUKAM);
		$("#delivery_place").val(x.DELIVERY_PLACE);
		$("#purchase_no").val(x.PURCHASE_NO);
		$("#purchase_date").val(x.PURCHASE_DATE);
		$("#cont_no").val(x.CONT_NO);
		$("#cont_date").val(x.CONT_DATE);
		$("#lorry_no").val(x.LORRY_NO);
		$("#driver_name").val(x.DRIVER_NAME);
		$("#lorry_owner_name").val(x.LORRY_OWNER_NAME);	
		$("#inward_date").val(x.INWARD_DATE);	
		$("#mr_details").html(x.table_html);

		$("#mr_details td").click(function () 
		{  
		 var sl_no = $(this).closest('tr').find('td:eq(0)').text();
		var adv_quality= $(this).closest('tr').find('td:eq(1)').text();
		var adv_marka= $(this).closest('tr').find('td:eq(3)').text();	
		var adv_quantity= $(this).closest('tr').find('td:eq(5)').text();
		var adv_uom= $(this).closest('tr').find('td:eq(6)').text();
		var adv_weight= $(this).closest('tr').find('td:eq(9)').text();
		var adv_remarks= $(this).closest('tr').find('td:eq(14)').text();
		var perm_id= $(this).closest('tr').find('td:eq(17)').text();
		var rec_id= $(this).closest('tr').find('td:eq(18)').text();
		
	$("#rec_id").val(rec_id);			
	$("#adv_quality").val(adv_quality);
	$("#adv_marka").val(adv_marka);
	$("#adv_quantity").val(adv_quantity);
	$("#adv_uom").val(adv_uom);
	$("#adv_weight").val(adv_weight);
	$("#adv_remarks").val(adv_remarks);
	$("#perm_id").val(perm_id);
	$("#hi_po_sl_no").val(sl_no);
	
	
	$("#mr_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	///////table end
		
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});
}
else{
		
		$("#inward_date").val('');	
		$("#challan_no").val('');
		$("#challan_date").val('');
		$("#broker").val('');
		$("#ac_seller").val('');
		$("#mukam").val('');
		$("#delivery_place").val('');
		$("#purchase_no").val('');
		$("#purchase_date").val('');
		$("#cont_no").val('');
		$("#cont_date").val('');
		$("#lorry_no").val('');
		$("#driver_name").val('');
		$("#lorry_owner_name").val('');
		$("#mr_details").html('');
		$("#rec_id").val('');	
		$("#adv_quality").val('');
		$("#adv_marka").val('');
		$("#adv_quantity").val('');
		$("#adv_uom").val('');
		$("#adv_weight").val('');
		$("#adv_remarks").val('');
		$("#perm_id").val('');
		$('#challan_hdr_id').val('');
		$("#hi_po_sl_no").val('');
	
	
}
	});
//////////////////////////////////////header load end//////////////////////////
////////////////////////////////////////////////////////////////////////////////////
$("#mill_weight").bind('input',function(){
	var adv_weight=$("#adv_weight").val();
	adv_weight=parseInt(adv_weight);
	var mill_weight=$("#mill_weight").val();
	mill_weight=parseInt(mill_weight);
	var shotage=((adv_weight)-(mill_weight));
		if(isNaN(shotage))
		{
			shotage=0;
		}
	$("#shotage").val(shotage);
	
});

/////////////////////VIRTUAL TABLE/////////////////////////////////////////
$("#saverow").live("click",function(event){
	
		var adv_quality=$.trim($('#adv_quality').val());	
		var adv_marka=$.trim($('#adv_marka').val());	
		var adv_quantity=$.trim($('#adv_quantity').val());
		var adv_uom=$.trim($('#adv_uom').val());	
		var adv_weight=$.trim($('#adv_weight').val());	
		var adv_remarks=$.trim($('#adv_remarks').val());
		var mill_quality=$.trim($('#mill_quality').val());	
		if(mill_quality=='')
		{
			alert("Please Enter Mill Quality!");
			return false;
		}	
		var mill_marka=$.trim($('#mill_marka').val());	
		if(mill_marka=='')
		{
			alert("Please Enter Mill Marka!");
			return false;
		}	
		var mill_quantity=$.trim($('#mill_quantity').val());
		if(mill_quantity=='')
		{
			alert("Please Enter Mill Quantity!");
			return false;
		}	
		var uom=$.trim($('#uom').val());
		if(uom==0)
		{
			alert("Please Select UOM!");
			return false;
		}	
		var mill_weight=$.trim($('#mill_weight').val());	
		if(mill_weight=='')
		{
			alert("Please Enter Mill Weight!");
			return false;
		}	
		var shotage=$.trim($('#shotage').val());
		var mill_remarks=$.trim($('#mill_remarks').val());
		var moisture_percentage=$.trim($('#moisture_percentage').val());	
		if(moisture_percentage=='')
		{
			alert("Please Enter Moisture %!");
			return false;
		}	
		var down_percentage=$.trim($('#down_percentage').val());	
		if(down_percentage=='')
		{
			alert("Please Enter Down %!");
			return false;
		}	
		var godown_no=$.trim($('#godown_no').val());	
		if(godown_no=='')
		{
			alert("Please Enter Godown No!");
			return false;
		}	
		var hi_po_sl_no=$("#hi_po_sl_no").val();
		var challan_rec_id=$.trim($("#challan_rec_id").val());
		var challan_hdr_id=$.trim($("#challan_hdr_id").val());		
		var perm_id = $.trim($("#perm_id").val());
		var mr_rec_id=$.trim($("#mr_rec_id").val());
		var mr_hdr_id=$.trim($("#mr_hdr_id").val());	
	
	 if(perm_id !=''){
	  
	 var trdata = '<th width=\"8px\"><pre></th><td width=\"24px\">'+hi_po_sl_no+'</td><td width=\"60px\" class=\"reading\">'+adv_quality+'</td><td width=\"60px\" class=\"mill\">'+mill_quality+'</td><td width=\"60px\" class=\"reading\">'+adv_marka+'</td><td width=\"60px\" class=\"mill\">'+mill_marka+'</td><td width=\"50px\" class=\"reading\">'+adv_quantity+'</td><td width=\"55px\" class=\"data\">'+adv_uom+'</td><td width=\"50px\" class=\"mill\">'+mill_quantity+'</td><td width=\"55px\" class=\"mill\">'+uom+'</td><td width=\"55px\" class=\"reading\">'+adv_weight+'</td><td width=\"35px\" class=\"data\">KGS</td><td width=\"55px\" class=\"mill\">'+mill_weight+'</td><td width=\"35px\" class=\"data\">KGS</td><td width=\"55px\" class=\"mill\">'+shotage+'</td><td width=\"100px\" class=\"data\">'+adv_remarks+'</td><td width=\"100px\" class=\"data\">'+mill_remarks+'</td><td width=\"45px\" class=\"mill\">'+moisture_percentage+'</td><td width=\"45px\" class=\"mill\">'+down_percentage+'</td><td width=\"50px\" class=\"mill\">'+godown_no+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+challan_rec_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+mr_rec_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+mr_hdr_id+'</span></td><th width=\"8px\"><pre></th>';
	  	   
	 } 
	 	  else{
		  
	 			 
		 var trdata = '<th width=\"8px\"><pre></th><td width=\"24px\">'+hi_po_sl_no+'</td><td width=\"60px\" class=\"reading\">'+adv_quality+'</td><td width=\"60px\" class=\"mill\">'+mill_quality+'</td><td width=\"60px\" class=\"reading\">'+adv_marka+'</td><td width=\"60px\" class=\"mill\">'+mill_marka+'</td><td width=\"50px\" class=\"reading\">'+adv_quantity+'</td><td width=\"55px\" class=\"data\">'+adv_uom+'</td><td width=\"50px\" class=\"mill\">'+mill_quantity+'</td><td width=\"55px\" class=\"mill\">'+uom+'</td><td width=\"55px\" class=\"reading\">'+adv_weight+'</td><td width=\"35px\" class=\"data\">KGS</td><td width=\"55px\" class=\"mill\">'+mill_weight+'</td><td width=\"35px\" class=\"data\">KGS</td><td width=\"55px\" class=\"mill\">'+shotage+'</td><td width=\"100px\" class=\"data\">'+adv_remarks+'</td><td width=\"100px\" class=\"data\">'+mill_remarks+'</td><td width=\"45px\" class=\"mill\">'+moisture_percentage+'</td><td width=\"45px\" class=\"mill\">'+down_percentage+'</td><td width=\"50px\" class=\"mill\">'+godown_no+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+challan_rec_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+mr_rec_id+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+mr_hdr_id+'</span></td><th width=\"8px\"><pre></th>';
	   	
	 }
	 			 
	
	$('#potr_'+hi_po_sl_no+'').html(trdata);		

	
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
		var adv_quality= $(this).closest('tr').find('td:eq(1)').text();
		var mill_quality= $(this).closest('tr').find('td:eq(2)').text();
		var adv_marka= $(this).closest('tr').find('td:eq(3)').text();
		var mill_marka= $(this).closest('tr').find('td:eq(4)').text();		
		var adv_quantity= $(this).closest('tr').find('td:eq(5)').text();		
		var adv_uom= $(this).closest('tr').find('td:eq(6)').text();
		var mill_quantity= $(this).closest('tr').find('td:eq(7)').text();
		var uom= $(this).closest('tr').find('td:eq(8)').text();	   
		var adv_weight= $(this).closest('tr').find('td:eq(9)').text();
		var mill_weight= $(this).closest('tr').find('td:eq(11)').text();
		var shotage= $(this).closest('tr').find('td:eq(13)').text();
		var adv_remarks= $(this).closest('tr').find('td:eq(14)').text();
		var mill_remarks= $(this).closest('tr').find('td:eq(15)').text();
		var moisture_percentage= $(this).closest('tr').find('td:eq(16)').text();
		var down_percentage= $(this).closest('tr').find('td:eq(17)').text();
		var godown_no= $(this).closest('tr').find('td:eq(18)').text();
		var perm_id= $(this).closest('tr').find('td:eq(19)').text();
		var challan_rec_id= $(this).closest('tr').find('td:eq(20)').text();
		var mr_rec_id= $(this).closest('tr').find('td:eq(21)').text();
		var mr_hdr_id= $(this).closest('tr').find('td:eq(22)').text()
		
	$("#challan_rec_id").val(challan_rec_id);			
	$("#adv_quality").val(adv_quality);
	$("#mill_quality").val(mill_quality);
	$("#adv_marka").val(adv_marka);
	$("#mill_marka").val(mill_marka);
	$("#adv_quantity").val(adv_quantity);
	$("#adv_uom").val(adv_uom);
	$("#mill_quantity").val(mill_quantity);	
	$("#uom").val(uom).attr('selected',true);
	$("#adv_weight").val(adv_weight);
	$("#mill_weight").val(mill_weight);
	$("#shotage").val(shotage);
	$("#adv_remarks").val(adv_remarks);
	$("#mill_remarks").val(mill_remarks);
	$("#moisture_percentage").val(moisture_percentage);
	$("#down_percentage").val(down_percentage);
	$("#perm_id").val(perm_id);
	$('#godown_no').val(godown_no);
	$("#hi_po_sl_no").val(sl_no);
	$("#mr_rec_id").val(mr_rec_id);
		$("#mr_hdr_id").val(mr_hdr_id);	
	$('#mill_quality').attr('disabled', false);
$('#mill_marka').attr('disabled', false);
$('#mill_quantity').attr('disabled', false);
$('#uom').attr('disabled', false);
$('#mill_weight').attr('disabled', false);
$('#godown_no').attr('disabled', false);
$('#mill_remarks').attr('disabled', false);
$('#moisture_percentage').attr('disabled', false);
$('#down_percentage').attr('disabled', false);
	
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){


var saverowCount = (parseInt($('#mr_details >tr').length));

var mr_no=((($('#mr_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(mr_no==''){ alert("Please Enter MR No!"); return false;}
var mr_date=((($('#mr_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var fin_year=((($('#fin_year').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var challan_hdr_id=((($('#challan_hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var inward_date=((($('#inward_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var hdr_id=((($('#mr_hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{

var po_tr='#potr_'+ic;
var wr_arr= wr_arr+((($(po_tr).find('td:eq(2)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(11)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(12)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(13)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(15)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(16)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(17)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(18)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(19)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(20)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(21)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(0)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}		//alert(wr_arr);		
		var datString = 'r='+ saverowCount +'&mr_no=' +mr_no+ '&mr_date=' +mr_date+'&fin_year='+fin_year+'&challan_hdr_id='+challan_hdr_id+'&wr_arr=' + wr_arr+'&inward_date='+inward_date+'&hdr_id='+hdr_id;
		
		
$.ajax({
      type: "POST",
      url: "jute_mr_file_data_saved.php",
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

///////////////////////////////////////////save end///////////////////////////////////////	

///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "jute_mr_file_datewise.php",
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
	
        $("#po_datewise td").css("background-color", "");
		$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   
	
	var mr_no= $(this).closest('tr').find('td:eq(0)').text();
    $("#mr_no").val(mr_no);
	var rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#rec_id").val(rec_id);    
	var mr_date= $(this).closest('tr').find('td:eq(3)').text();
    $("#mr_date").val(mr_date);
	var fin_year= $(this).closest('tr').find('td:eq(4)').text();
    $("#fin_year").val(fin_year);
	var challan_no= $(this).closest('tr').find('td:eq(5)').text();
    $("#challan_no").val(challan_no);
	var challan_date= $(this).closest('tr').find('td:eq(6)').text();
    $("#challan_date").val(challan_date);
	var broker= $(this).closest('tr').find('td:eq(7)').text();
    $("#broker").val(broker);
	var ac_seller= $(this).closest('tr').find('td:eq(8)').text();
    $("#ac_seller").val(ac_seller);
	var delivery_place= $(this).closest('tr').find('td:eq(9)').text();
    $("#delivery_place").val(delivery_place);
	var mukam= $(this).closest('tr').find('td:eq(10)').text();
    $("#mukam").val(mukam);
	var cont_no= $(this).closest('tr').find('td:eq(11)').text();
    $("#cont_no").val(cont_no);
	var cont_date= $(this).closest('tr').find('td:eq(12)').text();
    $("#cont_date").val(cont_date);
	
	var purchase_no= $(this).closest('tr').find('td:eq(13)').text();
    $("#purchase_no").val(purchase_no);
    var purchase_date= $(this).closest('tr').find('td:eq(14)').text();
    $("#purchase_date").val(purchase_date);
	
	var lorry_no= $(this).closest('tr').find('td:eq(15)').text();
    $("#lorry_no").val(lorry_no);
	var driver_name= $(this).closest('tr').find('td:eq(16)').text();
    $("#driver_name").val(driver_name);
	var lorry_owner_name= $(this).closest('tr').find('td:eq(17)').text();
    $("#lorry_owner_name").val(lorry_owner_name);
	var challan_hdr_id= $(this).closest('tr').find('td:eq(18)').text();
    $("#challan_hdr_id").val(challan_hdr_id);
	var inward_date= $(this).closest('tr').find('td:eq(19)').text();
    $("#inward_date").val(inward_date);
	
	
	var datString = 'rec_id='+rec_id+'&mr_no='+mr_no; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "jute_mr_file_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		//alert(data);
		$("#mr_details").html(data);
		$("#load").hide();
		
		$("#mr_details td").click(function () 
		{                  
		
		 var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	//alert(sl_no);
		var adv_quality= $(this).closest('tr').find('td:eq(1)').text();
		var mill_quality= $(this).closest('tr').find('td:eq(2)').text();
		var adv_marka= $(this).closest('tr').find('td:eq(3)').text();
		var mill_marka= $(this).closest('tr').find('td:eq(4)').text();		
		var adv_quantity= $(this).closest('tr').find('td:eq(5)').text();		
		var adv_uom= $(this).closest('tr').find('td:eq(6)').text();
		var mill_quantity= $(this).closest('tr').find('td:eq(7)').text();
		var uom= $(this).closest('tr').find('td:eq(8)').text();	   
		var adv_weight= $(this).closest('tr').find('td:eq(9)').text();
		var mill_weight= $(this).closest('tr').find('td:eq(11)').text();
		var shotage= $(this).closest('tr').find('td:eq(13)').text();
		var adv_remarks= $(this).closest('tr').find('td:eq(14)').text();
		var mill_remarks= $(this).closest('tr').find('td:eq(15)').text();
		var moisture_percentage= $(this).closest('tr').find('td:eq(16)').text();
		var down_percentage= $(this).closest('tr').find('td:eq(17)').text();
		var godown_no= $(this).closest('tr').find('td:eq(18)').text();
		var perm_id= $(this).closest('tr').find('td:eq(19)').text();
		var challan_rec_id= $(this).closest('tr').find('td:eq(20)').text();
		var mr_rec_id= $(this).closest('tr').find('td:eq(21)').text();
		var mr_hdr_id= $(this).closest('tr').find('td:eq(22)').text()
		
	$("#challan_rec_id").val(challan_rec_id);			
	$("#adv_quality").val(adv_quality);
	$("#mill_quality").val(mill_quality);
	$("#adv_marka").val(adv_marka);
	$("#mill_marka").val(mill_marka);
	$("#adv_quantity").val(adv_quantity);
	$("#adv_uom").val(adv_uom);
	$("#mill_quantity").val(mill_quantity);	
	$("#uom").val(uom).attr('selected',true);
	$("#adv_weight").val(adv_weight);
	$("#mill_weight").val(mill_weight);
	$("#shotage").val(shotage);
	$("#adv_remarks").val(adv_remarks);
	$("#mill_remarks").val(mill_remarks);
	$("#moisture_percentage").val(moisture_percentage);
	$("#down_percentage").val(down_percentage);
	$("#perm_id").val(perm_id);
	$('#godown_no').val(godown_no);
	$("#hi_po_sl_no").val(sl_no);
	$("#mr_rec_id").val(mr_rec_id);
	$("#mr_hdr_id").val(mr_hdr_id);
	$('#mill_quality').attr('disabled', false);
$('#mill_marka').attr('disabled', false);
$('#mill_quantity').attr('disabled', false);
$('#uom').attr('disabled', false);
$('#mill_weight').attr('disabled', false);
$('#godown_no').attr('disabled', false);
$('#mill_remarks').attr('disabled', false);
$('#moisture_percentage').attr('disabled', false);
$('#down_percentage').attr('disabled', false);
$('#mr_no').attr('disabled', true);
$('#fin_year').attr('disabled', true);
	

	$("#mr_details td").css("background-color", "");	
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
var challan_hdr_id=$("#challan_hdr_id").val();

if(challan_hdr_id =='')
{
alert("Please Select a Record!");
}
else
{
	
if(confirm('Are you sure you want to delete?')){
var datString='challan_hdr_id='+challan_hdr_id;

$.ajax({
      type: "POST",
      url: "jute_mr_file_delete.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
			
$("#load").hide();

$("#resettab").click();


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

 });//total doc ready


