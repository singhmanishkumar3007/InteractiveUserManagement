$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });


$('#challan_no').bind('change', function()
	{	
	
		var challan_no_rec_id=$('#challan_no option:selected').val();
	var datString='challan_no_rec_id='+challan_no_rec_id;
	
	$('#ac_seller').val('').attr('disabled',false);
	$('#delivery_place').val('').attr('disabled',false);
	$('#purchase_no').val('').attr('disabled',false);
	$('#purchase_date').val('').attr('disabled',false);
	$('#cont_no').val('').attr('disabled',false);
	$('#cont_date').val('').attr('disabled',false);
	$('#lorry_owner_name').val('').attr('disabled',false);
	document.getElementById("challan_details").innerHTML = '';
	$('#rupees').val('').attr('disabled',false);
$('#advance').val('').attr('disabled',false);
$('#balance').val('').attr('disabled',false);
$('#others').val('').attr('disabled',false);
$('#to_pay').val('');
$("#resetform").click();
	
	$.ajax({
      type: "POST",
      url: "jute_challan_header_data.php",
      data: datString,
      success: function(data) {  
		
				
		var x = eval('(' + data + ')'); ////////////////decode json data
		
		$("#challan_date").val(x.CHALLAN_DATE).attr('disabled',true);
		$('#broker').val(x.BROKER_NAME).attr('disabled',true);
		$("#driver_name").val(x.DRIVER_NAME).attr('disabled',true);
		$('#fin_year').val(x.FIN_YEAR).attr('disabled',true);
		$("#mukam").val(x.MUKAM).attr('disabled',true);
		$("#lorry_no").val(x.VEHICLE_NO).attr('disabled',true);
		$("#inward_date").val(x.IN_DATE);
		$("#challan_details").html(x.TABLE_HTML);
		$("#challan_details td").click(function () 
		{            
		
	var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
		//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
		var selected_quality= $(this).closest('tr').find('td:eq(1)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(2)').text();		
		var selected_quantity= $(this).closest('tr').find('td:eq(3)').text();
		var selected_uom= $(this).closest('tr').find('td:eq(4)').text();
		var selected_weight= $(this).closest('tr').find('td:eq(5)').text();
		var selected_remarks= $(this).closest('tr').find('td:eq(7)').text();
		var selected_perm_id= $(this).closest('tr').find('td:eq(8)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(9)').text();
		var selected_hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		alert(selected_hdr_id);
	$("#marka").val(selected_marka).attr('disabled',true);
	$("#quality").val(selected_quality).attr('disabled',true);
	$("#quantity").val(selected_quantity).attr('disabled',true);
	$("#uom").val(selected_uom).attr('selected',true).attr('disabled',true);
	$("#weight").val(selected_weight).attr('disabled',true);
	$("#remarks").val(selected_remarks).attr('disabled',true);
	$("#challan_rec_id").val(selected_rec_id);
	$("#hdr_id").val(selected_hdr_id);
	$("#perm_id").val(selected_perm_id);
	
	$("#challan_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
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

//////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
$("#challan_no_inp").val('').hide().attr('disabled',false);
$('#challan_no').val('selected').show();
$('#challan_date').val('').attr('disabled',true);
$('#inward_date').attr('disabled',false);
$('#broker').val('').attr('disabled',true);
$('#fin_year').val('selected').attr('disabled',true);
$('#ac_seller').val('').attr('disabled',false);
$('#delivery_place').val('').attr('disabled',false);
$('#mukam').val('').attr('disabled',true);
$('#purchase_no').val('').attr('disabled',false);
$('#purchase_date').val('').attr('disabled',false);
$('#cont_no').val('').attr('disabled',false);
$('#cont_date').val('').attr('disabled',false);
$('#lorry_no').val('').attr('disabled',true);
$('#driver_name').val('').attr('disabled',true);
$('#lorry_owner_name').val('').attr('disabled',false);
$('#rupees').val('').attr('disabled',false);
$('#advance').val('').attr('disabled',false);
$('#balance').val('').attr('disabled',false);
$('#others').val('').attr('disabled',false);
$('#to_pay').val('');
$('#jute_id').val('');
$("#resetform").click();
$("#challan_rec_id").val('');
$("#hdr_id").val('');
$("#perm_id").val('');
$('#mr_div').hide();
$("#po_datewise td").css("background-color", "");
document.getElementById("challan_details").innerHTML = '';

return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
///////////////////////////////////Freight start////////////////////////////////////

$("#rupees").bind('input',function(){
	var rupees=$("#rupees").val();	
	rupees=parseInt(rupees);
	if(isNaN(rupees))
		{
			rupees=0;
		}
	var advance=$("#advance").val();	
	advance=parseInt(advance);
	if(isNaN(advance))
		{
			advance=0;
		}
	var balance=((rupees)-(advance));
	balance=parseInt(balance);
		if(isNaN(balance))
		{
			balance=0;
		}
	$("#balance").val(balance);
	var others=$("#others").val();	
	others=parseInt(others);
	if(isNaN(others))
		{
			others=0;
		}
	var to_pay=((balance)+(others));
	if(isNaN(to_pay))
		{
			to_pay=0;
		}	
	$("#to_pay").val(to_pay);
});
$("#advance").bind('input',function(){
	var rupees=$("#rupees").val();
	rupees=parseInt(rupees);
	if(isNaN(rupees))
		{
			rupees=0;
		}
	var advance=$("#advance").val();
	advance=parseInt(advance);
	if(isNaN(advance))
		{
			advance=0;
		}
	var balance=((rupees)-(advance));
	$("#balance").val(balance);
	balance=parseInt(balance);
	if(isNaN(balance))
		{
			balance=0;
		}
	
	var others=$("#others").val();
	others=parseInt(others);
	if(isNaN(others))
		{
			others=0;
		}
	var to_pay=((balance)+(others));
	if(isNaN(to_pay))
		{
			to_pay=0;
		}	
	$("#to_pay").val(to_pay);
});
$("#others").bind('input',function(){
	var rupees=$("#rupees").val();
	rupees=parseInt(rupees);
	if(isNaN(rupees))
		{
			rupees=0;
		}
	var advance=$("#advance").val();
	advance=parseInt(advance);
	if(isNaN(advance))
		{
			advance=0;
		}
	var balance=((rupees)-(advance));
	$("#balance").val(balance);
	balance=parseInt(balance);
	if(isNaN(balance))
		{
			balance=0;
		}
	
	var others=$("#others").val();
	others=parseInt(others);
	if(isNaN(others))
		{
			others=0;
		}
	var to_pay=((balance)+(others));
	if(isNaN(to_pay))
		{
			to_pay=0;
		}	
	$("#to_pay").val(to_pay);
});
///////////////////////////////Freight end///////////////////////////
/////////////////////VIRTUAL TABLE/////////////////////////////////////////
$("#resetform").click(function() {
$("#marka").val('').attr('disabled',false);
$("#quality").val('').attr('disabled',false);
$("#quantity").val('').attr('disabled',false);
$("#uom").val('').attr('disabled',false);
$("#weight").val('').attr('disabled',false);
$("#remarks").val('').attr('disabled',false);
$("#hi_po_sl_no").val('').attr('disabled',false);

 return false;
	});

///////////////////////////save row//////////////////
$("#saverow").bind("click",function(event){
var quality=((($('#quality').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(quality=='')
	{
		alert("Please Jute Quality!");
				$('#quality').focus();
		return false;
	}	
var marka=((($('#marka').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(marka=='')
	{
		alert("Please Enter Marka!");
			$('#marka').focus();
		return false;
	}	
		
	var quantity=((($('#quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	if(quantity=='')
		{
		alert("Please Enter Quantity!");
		$('#quantity').focus();
		return false;
		}
	var uom=((($('#uom').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	if(uom=='0')
		{
		alert("Please Select Quantity Unit!");
		$('#uom').focus();
		return false;
		}
	var weight=((($('#weight').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	if(weight=='')
		{
		alert("Please Enter Weight!");
		$('#weight').focus();
		return false;
		}	
		
	var remarks=((($('#remarks').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
		
		var hi_po_sl_no=$("#hi_po_sl_no").val();
		
		var rec_id=$.trim($("#challan_rec_id").val());
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
	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"22px\">'+hi_po_sl_no+'</td><td width=\"60px\" >'+quality+'</td><td width=\"100px\" >'+marka+'</td><td width=\"55px\">'+quantity+'</td><td width=\"55px\">'+uom+'</td><td width=\"60px\" >'+weight+'</td><td width=\"40px\">KGS</td><td width=\"100px\">'+remarks+'</td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#table_body >tbody:last').append(trdata)
	
	  }
	else{
	 if(perm_id !=''){
	  
	 var trdata = '<th width=\"8px\"><pre></th><td width=\"22px\">'+hi_po_sl_no+'</td><td width=\"60px\" >'+quality+'</td><td width=\"100px\" >'+marka+'</td><td width=\"55px\">'+quantity+'</td><td width=\"55px\">'+uom+'</td><td width=\"60px\" >'+weight+'</td><td width=\"40px\">KGS</td><td width=\"100px\">'+remarks+'</td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+rec_id+'</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+hdr_id+'</span></td><th width=\"8px\"><pre></th>';
	
	   
	 } 
	 	  else{
		  
	 	  var trdata = '<th width=\"8px\"><pre></th><td width=\"22px\">'+hi_po_sl_no+'</td><td width=\"60px\" >'+quality+'</td><td width=\"100px\" >'+marka+'</td><td width=\"55px\">'+quantity+'</td><td width=\"55px\">'+uom+'</td><td width=\"60px\" >'+weight+'</td><td width=\"40px\">KGS</td><td width=\"100px\">'+remarks+'</td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	 
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
	//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	   
		var selected_quality= $(this).closest('tr').find('td:eq(1)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(2)').text();		
		var selected_quantity= $(this).closest('tr').find('td:eq(3)').text();
		var selected_uom= $(this).closest('tr').find('td:eq(4)').text();
		var selected_weight= $(this).closest('tr').find('td:eq(5)').text();
		var selected_remarks= $(this).closest('tr').find('td:eq(7)').text();
		var selected_perm_id= $(this).closest('tr').find('td:eq(8)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(9)').text();
		var selected_hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		
		//alert(selected_hdr_id);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#quantity").val(selected_quantity);
	$("#uom").val(selected_uom);
	$("#weight").val(selected_weight);
	$("#remarks").val(selected_remarks);
	$("#jute_rec_id").val(selected_rec_id);
	$("#hdr_id").val(selected_hdr_id);
	$("#perm_id").val(selected_perm_id);
	return false;
});
///////////////////////VIRTUAL TABLE ONSELECT END////////////////////////
/////////////////virtual delete/////////////////

$("#delrow").click(function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();

var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(8)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#challan_details >tr').find('td:eq(8):contains("d")').length;
var rowCounb = $('#challan_details >tr').length;
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
var rowCouna = $('#challan_details >tr').find('td:eq(8):contains("d")').length;
var rowCounb = $('#challan_details >tr').length;
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
///////////////////////////////////virtual delete end////////////////
///////////////////////////////////////////save data////////////////////////////////////

///////////////////////////////////SAVE DATA/////////////////////////////////////////////////

$("#savetab").click(function(event){

var saverowCount = (parseInt($('#challan_details >tr').length));

var challan_no=((($('#challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(challan_no==''){ alert("Please Enter Challan No!"); return false;}
var challan_date=((($('#challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var broker=((($('#broker').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(broker==''){ alert("Please Enter Broker Name!"); return false;}
var ac_seller=((($('#ac_seller').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ac_seller==''){ alert("Please A/C(Seller Name)!"); return false;}
var delivery_place=((($('#delivery_place').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(delivery_place==''){ alert("Please Enter Delivery Place!"); return false;}
var mukam=((($('#mukam').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(mukam==''){ alert("Please Enter Mukam!"); return false;}
var purchase_no=((($('#purchase_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var purchase_date=((($('#purchase_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var cont_no=((($('#cont_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var cont_date=((($('#cont_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var lorry_no=((($('#lorry_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
if(lorry_no==''){ alert("Please Lorry No!"); return false;}
var driver_name=((($('#driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
if(driver_name==''){ alert("Please Enter Driver Name!"); return false;}
var lorry_owner_name=((($('#lorry_owner_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 

var fin_year=((($('#fin_year').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var rupees=((($('#rupees').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var advance=((($('#advance').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var balance=((($('#balance').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var others=((($('#others').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var to_pay=((($('#to_pay').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
//alert(to_pay);
var hdr_id=((($('#hdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var challan_no_val=$("#challan_no_inp").val();
var inward_date=$('#inward_date').val();
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
/* var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(6)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); */
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+((($(po_tr).find('td:eq(10)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}	//alert(wr_arr);
		var datString = 'r='+ saverowCount +'&challan_no=' +challan_no+ '&challan_date=' +challan_date+'&broker='+broker+'&ac_seller='+ac_seller+'&delivery_place=' + delivery_place+'&mukam='+mukam+'&cont_no='+cont_no+'&cont_date='+cont_date+'&lorry_no='+lorry_no+'&driver_name='+driver_name+'&lorry_owner_name='+lorry_owner_name+'&rupees='+rupees+'&advance='+advance+'&balance='+balance+'&others='+others+'&to_pay='+to_pay+'&fin_year='+fin_year+'&wr_arr='+wr_arr+'&hdr_id='+hdr_id+'&purchase_no='+purchase_no+'&purchase_date='+purchase_date+'&challan_no_val='+challan_no_val+'&inward_date='+inward_date;
		
		//alert(datString);
		//return false;
$.ajax({
      type: "POST",
      url: "jute_challan_file_data_save.php",
	  data: datString,
      success: function(data) {
	  $("#load").hide();	
		
	$("#resettab").click();
	$("#po_search_button").click();
alert(data);
location.reload();
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
///////////////////////////////////////////save end//////////////////////////////////////////	

///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "jute_challan_file_datewise.php",
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
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
			
	$('#mr_div').show();
	var selected_challan_no= $(this).closest('tr').find('td:eq(0)').text();	
	$("#challan_no").hide();	
	$("#challan_no_inp").val(selected_challan_no).show().attr('disabled',true);
	var select_rec_id= $(this).closest('tr').find('td:eq(2)').text();
	$("#hdr_id").val(select_rec_id);	
	var selected_challan_date= $(this).closest('tr').find('td:eq(3)').text();	
    $("#challan_date").val(selected_challan_date);
	var select_broker= $(this).closest('tr').find('td:eq(4)').text();
    $("#broker").val(select_broker);	
	var selected_ac_seller= $(this).closest('tr').find('td:eq(5)').text();
	$("#ac_seller").val(selected_ac_seller);
	var selected_delivery_place= $(this).closest('tr').find('td:eq(6)').text();	
    $("#delivery_place").val(selected_delivery_place);
	var selected_mukam= $(this).closest('tr').find('td:eq(7)').text();	
    $("#mukam").val(selected_mukam);
	
	var selected_cont_no= $(this).closest('tr').find('td:eq(8)').text();
	$("#cont_no").val(selected_cont_no);
	var selected_cont_date= $(this).closest('tr').find('td:eq(9)').text();	
    $("#cont_date").val(selected_cont_date);
	var selected_fin_year= $(this).closest('tr').find('td:eq(10)').text();	
    $("#fin_year").val(selected_fin_year).attr('selected',true);
	var selected_lorry_no= $(this).closest('tr').find('td:eq(11)').text();	
    $("#lorry_no").val(selected_lorry_no);
	var selected_driver_name= $(this).closest('tr').find('td:eq(12)').text();
	$("#driver_name").val(selected_driver_name);
	var selected_lorry_owner_name= $(this).closest('tr').find('td:eq(13)').text();	
    $("#lorry_owner_name").val(selected_lorry_owner_name);
	var selected_lorry_no= $(this).closest('tr').find('td:eq(11)').text();	
    $("#lorry_no").val(selected_lorry_no);
	var selected_driver_name= $(this).closest('tr').find('td:eq(12)').text();
	$("#driver_name").val(selected_driver_name);
	var selected_lorry_owner_name= $(this).closest('tr').find('td:eq(13)').text();	
    $("#lorry_owner_name").val(selected_lorry_owner_name);
	var selected_rupees= $(this).closest('tr').find('td:eq(14)').text();	
    $("#rupees").val(selected_rupees);
	var selected_advance= $(this).closest('tr').find('td:eq(15)').text();
	$("#advance").val(selected_advance);
	var selected_balance= $(this).closest('tr').find('td:eq(16)').text();	
    $("#balance").val(selected_balance);
	var selected_others= $(this).closest('tr').find('td:eq(17)').text();
	$("#others").val(selected_others);
	var selected_to_pay= $(this).closest('tr').find('td:eq(18)').text();	
    $("#to_pay").val(selected_to_pay);
	var selected_mr_no= $(this).closest('tr').find('td:eq(19)').text();
	$("#mr_div").text(selected_mr_no);
	var selected_purchase_no= $(this).closest('tr').find('td:eq(20)').text();	
    $("#purchase_no").val(selected_purchase_no);
	var selected_purchase_date= $(this).closest('tr').find('td:eq(21)').text();	
    $("#purchase_date").val(selected_purchase_date);
	var jute_id= $(this).closest('tr').find('td:eq(22)').text();	
	$('#jute_id').val(jute_id);
	var datString = 'select_rec_id='+select_rec_id; 
	 //alert(datString); 			 
					 
	  $.ajax({
      type: "POST",
      url: "jute_challan_file_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#challan_details").html(data);
		$("#load").hide();
		
		$("#challan_details td").click(function () 
		{                  
		
		var sl_no = $(this).closest('tr').find('td:eq(0)').text();
    $("#hi_po_sl_no").val(sl_no);
	//alert(sl_no);
	//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	   
		var selected_quality= $(this).closest('tr').find('td:eq(1)').text();
		var selected_marka= $(this).closest('tr').find('td:eq(2)').text();		
		var selected_quantity= $(this).closest('tr').find('td:eq(3)').text();
		var selected_uom= $(this).closest('tr').find('td:eq(4)').text();
		var selected_weight= $(this).closest('tr').find('td:eq(5)').text();
		var selected_remarks= $(this).closest('tr').find('td:eq(7)').text();
		var selected_perm_id= $(this).closest('tr').find('td:eq(8)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(9)').text();
		var selected_hdr_id= $(this).closest('tr').find('td:eq(10)').text();
		//alert(selected_perm_id);
		//alert(selected_rec_id);
	$("#marka").val(selected_marka);
	$("#quality").val(selected_quality);
	$("#quantity").val(selected_quantity);
	$("#uom").val(selected_uom).attr('selected',true);
	$("#weight").val(selected_weight);
	$("#remarks").val(selected_remarks);
	$("#challan_rec_id").val(selected_rec_id);
	$("#hdr_id").val(selected_hdr_id);
	$("#perm_id").val(selected_perm_id);
	
	$("#challan_details td").css("background-color", "");	
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
var hdr_id=$("#hdr_id").val();	
if(hdr_id =='')
{
alert("Please Select a Record!");
}
else
{
	
var gate_jute_id=$('#jute_id').val();
if(confirm('Are you sure you want to delete?')){
var datString='hdr_id='+hdr_id+'&gate_jute_id='+gate_jute_id;

$.ajax({
      type: "POST",
      url: "jute_challan_file_delete.php",
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
	 /////////////////////////////////////////table headar starts///////////////						 
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

	
	//},1000); /////////for table refresh
 });//total doc ready


