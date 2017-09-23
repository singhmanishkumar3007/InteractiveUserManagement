$(document).ready(function(){
	
$('#savetab').attr('disabled', true);

	 $(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });

	/////////////////////////verify start


$("#po_date").focus(function(event){
var z = $("#hi_po_count").val();
var yz = $("#hi_po_sele_no").val();
var xyz = $("#hi_po_sl_no").val();
var wxyz = $("#hi_po_totcount").val();
if( z == "" && wxyz == "-?uvf?-" && yz != "" && xyz != ""  &&   ($("#saverow").attr("disabled")))
{
var x= 0;
var x=parseInt(x)+1;
$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#supplier_code").focus(function(event){

var z = $("#hi_po_count").val();
if( z == "1" )
{
var x= $("#hi_po_count").val();
var x=parseInt(x)+1;
$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});


$("#footer_note").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "2" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});


$("#indent_no").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "3" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#srl_no").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "4" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#fin_year").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "5" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#ind_qty").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "6" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#quantity_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "7" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#rate_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "8" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#dtl_description").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "9" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#disc_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "10" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#cst_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "11" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#sch_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "12" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#exc_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "13" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#dlv_chg").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "14" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#del_no").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "15" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#term_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "16" )
{
var x= $("#hi_po_count").val();

var x=parseInt(x)+1;

$("#hi_po_count").val(x); 
$(this).css({ 'border' : '2px solid green'}); 
}
});

$("#make_po").focus(function(event){
var z = $("#hi_po_count").val();
if( z == "17" )
{
$("#hi_po_count").val(''); 
$("#hi_po_totcount").val('vf'); 
$('#saverow').removeAttr('disabled');
$(this).css({ 'border' : '2px solid green'}); 

 
}
});
	/////////////save to table
	
	$("#saverow").live("click",function(event){
	
	$('#saverow').attr('disabled', true);
	$( ":input ").css('border', '');
	var rc_po_type_chk=$("#indent_no").val().substring(0,1);
	
	var chek0= $("#po_type").val();
	var chek1= $.trim($("#item_code").val());
	var chek2= $.trim($("#ind_qty").val());
	var chek2= (1*chek2).toFixed(3);
	var chek3= $.trim($("#indent_no").val());
	var chek4= $.trim($("#srl_no").val());
	var chek5= $.trim($("#po_date").val());
	var chek6= $.trim($("#quantity_po").val());
	var chek6= (1*chek6).toFixed(3);
	var chek7= $.trim($("#rate_po").val());
	var chek7= (1*chek7).toFixed(2);
	var chek8= $.trim($("#fin_year").val());
	var chek9= $("#term_po").val();
	var check10 = $.trim($("#del_no").val());
	var check10= Math.round(check10);
	var make = $.trim($("#make_po").val());
	var perm_po_qty = $.trim($("#hi_po_perm_qty").val());
	var perm_po_qty= (1*perm_po_qty).toFixed(3);
	var perm_id = $.trim($("#hi_po_perm_id").val());
	
	var dc=1;
	var dc2=1;
	var dc3=1;
	var dc4=1;
	var dc5=1;
	
	if(rc_po_type_chk !='O' && chek2 == 0)
	{
	
	alert('Indent quantity ?');
	var dc3=2;
	}
	if ((rc_po_type_chk !='O') && ((parseFloat(chek2)) < (parseFloat(chek6))) ){
	alert ('PO quantity must be less or equal to Indent quantity !');
	
	var dc2=2;
	
	}
	
	if( rc_po_type_chk !='O' && chek6 == 0 ) {alert ('Quantity empty!!');
	var dc4=2;
	}
	
	if( rc_po_type_chk =='O' && chek0 == 'G' && chek6 == 0 ) {alert ('Quantity empty!!');
	var dc5=2;
	}
	
	
	if( rc_po_type_chk !='O' && chek7 == 0 ) {alert ('Rate empty!'); return false;}
	if( chek9 == '0' ) {alert ('Select Terms !');}
	
	if( chek9 !== 'A' ) {
	if( check10 == 0 ) {
	alert ('Del no empty !');
	var dc=2;}
	
	}
	if( chek9 == 'A' ) 
	{
	check10 = 0;
	}
	
if (chek0=='type' || chek1=='' || chek3 =='' || chek4 =='' || chek5 =='' || chek8 ==''|| chek9 =='0' || dc==2 || dc2==2 || dc3==2 || dc4==2  || dc5==2)

{
}
else{
     

	 
	 
var item_desc =$.trim($("#hi_po_item_name").val());
var indent_qty = chek2;
var del_no =check10;
var del_term = chek9;
var dlv_chg = $.trim($("#dlv_chg").val());
var dlv_chg= (1*dlv_chg).toFixed(2);
var exc_pct = $.trim($("#exc_po").val());
var exc_pct= (1*exc_pct).toFixed(2);
var sch_pct = $.trim($("#sch_po").val());
var sch_pct= (1*sch_pct).toFixed(2);
var cst_pct = $.trim($("#cst_po").val());
var cst_pct= (1*cst_pct).toFixed(2);
var disc_pct = $.trim($("#disc_po").val());
var disc_pct= (1*disc_pct).toFixed(2);
var indent_srl_no = chek4;
var indent_no =chek3;
var ind_fin_year=chek8;
var po_qty=chek6;
var po_rate=chek7;
var uom_code=$.trim($("#hi_po_item_uom").val());
var dtl_item_desc = $.trim($("#dtl_description").val());
var po_value =(po_qty*po_rate);
var po_value= (1*po_value).toFixed(2);

	 	 var hi_po_sl_no = $("#hi_po_sl_no").val();
		 
	 if(hi_po_sl_no==''){
	 
	 //get last tr data
	 var last_td= $("#table_body tr:last").find('td:eq(0)').text();
	 //alert(last_td);
	 if(last_td ==''){
	 hi_po_sl_no=1;
	 }
	 else{
	 hi_po_sl_no=(parseInt(last_td)+1);
	 }
	 	 
	 var trdata = '<tr id=\"potr_'+hi_po_sl_no+'\"><th width=\"1%\"><pre></th><td width=\"3%\">'+hi_po_sl_no+'</td><td width=\"7%\">'+chek1+'</td><td width=\"15%\">'+dtl_item_desc+'</td><td width=\"3%\">'+uom_code+'</td><td width=\"6%\">'+po_rate+'</td><td width=\"5%\">'+po_qty+'</td><td width=\"4%\">'+ind_fin_year+'</td><td width=\"5%\">'+indent_no+'</td><td width=\"4%\">'+indent_srl_no+'</td><td width=\"4%\">'+disc_pct+'</td><td width=\"4%\">'+cst_pct+'</td><td width=\"4%\">'+sch_pct+'</td><td width=\"4%\">'+exc_pct+'</td><td width=\"4%\">'+dlv_chg+'</td><td width=\"5%\">'+po_value+'</td><td width=\"5%\">'+del_term+'</td><td width=\"4%\">'+del_no+'</td><td width=\"10%\">'+make+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+item_desc+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+indent_qty+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+chek3+ind_fin_year+chek1+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+po_qty+'</td><th width=\"2%\"></th></tr>';
	 $('#table_body >tbody:last').append(trdata);
	 }
	 else{
	 if(perm_id !=''){
	 var po_tdv = '#potr_'+ $("#hi_po_sl_no").val();
	 var old_po_srl = $(po_tdv).find('td:eq(0)').text();
	 
	 
	 var up_po_qty = parseFloat((parseFloat(po_qty))-(parseFloat(perm_po_qty)));
	 var up_po_qty= (1*up_po_qty).toFixed(3);
	 var trdata = '<th width=\"1%\"><pre></th><td width=\"3%\">'+ old_po_srl +'</td><td width=\"7%\">'+chek1+'</td><td width=\"15%\">'+dtl_item_desc+'</td><td width=\"3%\">'+uom_code+'</td><td width=\"6%\">'+po_rate+'</td><td width=\"5%\">'+po_qty+'</td><td width=\"4%\">'+ind_fin_year+'</td><td width=\"5%\">'+indent_no+'</td><td width=\"4%\">'+indent_srl_no+'</td><td width=\"4%\">'+disc_pct+'</td><td width=\"4%\">'+cst_pct+'</td><td width=\"4%\">'+sch_pct+'</td><td width=\"4%\">'+exc_pct+'</td><td width=\"4%\">'+dlv_chg+'</td><td width=\"5%\">'+po_value+'</td><td width=\"5%\">'+del_term+'</td><td width=\"4%\">'+del_no+'</td><td width=\"10%\">'+make+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+item_desc+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+indent_qty+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+chek3+ind_fin_year+chek1+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+up_po_qty+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+perm_po_qty+'</td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">vf</td><th width=\"2%\"></th>';

	 
	 }
	 else
	 {
	 var up_po_qty=(parseFloat(po_qty));
	 var up_po_qty= (1*up_po_qty).toFixed(3);
	 var trdata = '<th width=\"1%\"><pre></th><td width=\"3%\">'+hi_po_sl_no+'</td><td width=\"7%\">'+chek1+'</td><td width=\"15%\">'+dtl_item_desc+'</td><td width=\"3%\">'+uom_code+'</td><td width=\"6%\">'+po_rate+'</td><td width=\"5%\">'+po_qty+'</td><td width=\"4%\">'+ind_fin_year+'</td><td width=\"5%\">'+indent_no+'</td><td width=\"4%\">'+indent_srl_no+'</td><td width=\"4%\">'+disc_pct+'</td><td width=\"4%\">'+cst_pct+'</td><td width=\"4%\">'+sch_pct+'</td><td width=\"4%\">'+exc_pct+'</td><td width=\"4%\">'+dlv_chg+'</td><td width=\"5%\">'+po_value+'</td><td width=\"5%\">'+del_term+'</td><td width=\"4%\">'+del_no+'</td><td width=\"10%\">'+make+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+item_desc+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+indent_qty+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+chek3+ind_fin_year+chek1+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\">'+up_po_qty+'</span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0%\"><span class=\"hideFromScreen\"></td><th width=\"2%\"></th>';
	
	 }
	  
	 $('#potr_'+hi_po_sl_no+'').html(trdata);
	 	 var po_tdv = '#potr_'+ $("#hi_po_sl_no").val();

$(po_tdv).children('td').css({ 'color' : 'green','font-weight' : 'bolder' }); 
	 }
	 $('#resetform').click();
	 var po_sure= $("#hi_po_sele_no").val();
	 var unvrf = $('#podetails >tr:contains(-?uvf?-)').length;

	 if(unvrf == '0' && po_sure !='')
	 {
	 $('#savetab').attr('disabled', false);
	 }
	//document.getElementById("potr_"+hi_po_sl_no).innerHTML = trdata;
	 
	//$(this).unbind(event);
}
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





	
	//=============================call each po row to edit

	
$("#table_body td").live("click",function(event){
$('#resetform').click();
$('#saverow').attr('disabled', true);
$( ":input ").css('border', '');
$('#item_code').attr('disabled', true);
$('#po_type').attr('disabled', true);
$("#table_body td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var sl_no = $(this).closest('tr').attr('id');
	var sl_no=sl_no.replace('potr_','');
    $("#hi_po_sl_no").val(sl_no);//////////////////////////----------------------------------------------------------------------------------------------keep sl no safe
	var item_code = $(this).closest('tr').find('td:eq(1)').text();
    $("#item_code").val(item_code);
	var indent_no = $(this).closest('tr').find('td:eq(7)').text();
    $("#indent_no").val(indent_no);
	var srl_no = $(this).closest('tr').find('td:eq(8)').text();
    $("#srl_no").val(srl_no);
	var fin_year = $(this).closest('tr').find('td:eq(6)').text();
    $("#fin_year").val(fin_year);
	var it_uom = $(this).closest('tr').find('td:eq(3)').text();
    $("#hi_po_item_uom").val(it_uom);
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
	var get_perm_qty= $(this).closest('tr').find('td:eq(23)').text();
			$("#hi_po_perm_qty").val(get_perm_qty);	
	var get_perm_id= $(this).closest('tr').find('td:eq(22)').text();
			$("#hi_po_perm_id").val(get_perm_id);	
	var get_vrf= $(this).closest('tr').find('td:eq(24)').text();
			$("#hi_po_totcount").val(get_vrf);
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
});
  //////////////////////////////////////////////////////////////////////////////////////////////////delete 
$("#delrow").live("click",function(event){

var del_po_tr = '#potr_'+ $("#hi_po_sl_no").val();

var del_i_ch=$(del_po_tr).closest('tr').find('td:eq(22)').text();

if(del_i_ch ==='' )
{
var rowCouna = $('#podetails >tr').find('td:eq(22):contains("d")').length;
var rowCounb = $('#podetails >tr').length;
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
var rowCouna = $('#podetails >tr').find('td:eq(22):contains("d")').length;
var rowCounb = $('#podetails >tr').length;
var rowCounta= (parseInt(rowCounb)-parseInt(rowCouna));
//alert(rowCounta);
if(rowCounta !=1){

var updel_qty='-'+(parseFloat($(del_po_tr).find('td:eq(23)').text()));
$(del_po_tr).find('td:eq(21)').text(updel_qty);
$(del_po_tr).closest('tr').find('td:eq(22)').text('d');
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





/////////////////////////////////disable button actions



$("#resettab").click(function(event){
$( ":input ").css('border', '');
$("#po_datewise td").css("background-color", "");
$('#resetform').click();
$("#po_headform")[0].reset();
document.getElementById("podetails").innerHTML = '';
$("#hi_po_sele_no").val('');
$('#item_code').attr('disabled', false);
$('#po_type').attr('disabled', false);

$('#savetab').attr('disabled', true);
return false;
});


$("#deltab").click(function(event){
if(confirm('Are you sure you want to delete?')){


var po_update_wr=$('#hi_po_sele_no').val();
if(po_update_wr !=''){
var datString='po_del_num='+ po_update_wr;



$.ajax({
      type: "POST",
      url: "po_del_1.php",
      data: datString,
      success: function(data) {
        

		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
		
		document.getElementById("po_alert").innerHTML = data;
		
		 

$("#load").fadeOut("slow");


$("#po_search_button").click();



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





}
}

return false;
});

$("#savetab").click(function(event){
$('#savetab').attr('disabled', true);

var saverowCount = (parseInt($('#podetails >tr').length));

var po_type_wr=((($('#po_type').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_supplier_wr=((($('#supplier_code').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_footer_wr=((($('#footer_note').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_date_wr=((($('#po_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var po_update_wr=((($('#hi_po_sele_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

if(po_supplier_wr =='')
{
alert('Please select a supplier !');
}
else{

if( saverowCount != 0 )
{
var ic=1;
var wr_arr='';
while(ic <= saverowCount)
{


var po_tr='#potr_'+ic;
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(1)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(2)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(3)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(4)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(5)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(6)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(7)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(8)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(9)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(10)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(11)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(12)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(13)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(14)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(15)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(16)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(17)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
//var wr_arr= wr_arr+$(po_tr).find('td:eq(18)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
//var wr_arr= wr_arr+'~|~';
//var wr_arr= wr_arr+$(po_tr).find('td:eq(19)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
//var wr_arr= wr_arr+'~|~';
//var wr_arr= wr_arr+$(po_tr).find('td:eq(20)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
//var wr_arr= wr_arr+'~|~';
//var wr_arr= wr_arr+$(po_tr).find('td:eq(21)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
//var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(22)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var wr_arr= wr_arr+'~|~';
var wr_arr= wr_arr+ encodeURIComponent((($(po_tr).find('td:eq(0)').text()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(ic != saverowCount){
var wr_arr= wr_arr+'||';
}

ic++;
}





 


				
		var datString = 'r='+ saverowCount + '&po_update_no=' + po_update_wr + '&po_type_wr=' + po_type_wr+ '&po_supplier_wr=' + po_supplier_wr + '&po_footer_wr=' + po_footer_wr + '&po_date_wr=' + po_date_wr + '&wr_arr=' + wr_arr;
		

//alert(datString);

$.ajax({
      type: "POST",
      url: "po_add_2.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("po_alert").innerHTML = data;
		
		 

		
		
		
$("#load").fadeOut("slow");





$("#po_search_button").click();





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
}
}
return false;
});


//-------------------------------------------------------------------indent list-----------------------------------------
$("#indent_no").dblclick(function(event){

var cheko= $("#po_type").val();
if (cheko=='type'){alert ('Please Select PO type !');}
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
var leftposi = eleOffset.left -300;
var topposi = eleOffset.top -200 ;

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




var selec_item_name=$("#hi_po_item_name").val();
$("#pop_indn_name").val(selec_item_name);
var selec_item_uom=$("#hi_po_item_uom").val();

if(selec_item_uom == ''){     ///////////////////////////////////////////////////////////////////////////////////if no dblclick on item code


$("#pop_item_name").val('') ;
var item_code_val=$("#item_code").val();

$("#pop_item_code").val(item_code_val) ;


if( $.trim("#pop_item_code").length ) {
        
		  var search_char_code = $('#pop_item_code').val();
		  var datString ='page_itemlist=item_1 & serach_itemcode='+search_char_code;
		
		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
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
	  

	  var datString = 'page_itemlist=item_1 & serach_itemcode='+search_char_code;
		
		

$.ajax({

      type: "POST",
      url: "fetch_po_itemlist_for_indent.php",
      data: datString,
	
      success: function(data) {
        

		 
		
		document.getElementById('item_1').innerHTML = data;
		
		$('.sdiv').last().css({ 'height' : 'auto' });
		////////////////////////////////////////////////////////////

	$("#load").fadeOut("slow");

 var selected_item_code= $("#pop_table_item_list tr:first").find('td:eq(1)').text();

 
 if (selected_item_code == ''){
	alert('Invalid Item Selection');
	$("#pop_indn_name").val('');
	$("#pop_indn_code").val('');
	}
	$("#item_code").val(selected_item_code);
	
	var selected_item_name= $("#pop_table_item_list tr:first").find('td:eq(0)').text();	
	$("#pop_indn_name").val(selected_item_name);
	$("#hi_po_item_name").val(selected_item_name);
	$("#eve_item_name").text(selected_item_name);
    
	var selected_item_uom= $("#pop_table_item_list tr:first").find('td:eq(2)').text();

	
	$("#pop_indn_code").val(selected_item_uom);
	$("#hi_po_item_uom").val(selected_item_uom);	
	$("#pop_table_item_list tr:first").children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$("#pop_table_item_list td").css("background-color", "");
	
	

	

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
		  
		  
		  
    }
			//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!








}
$("#pop_indn_code").val(selec_item_uom);

				
		var datString = 'po_type='+ cheko + '&item_code=' + chekt;
		//alert (datString);
		



$.ajax({
      type: "POST",
      url: "fetch_po_indentlist.php",
      data: datString,
      success: function(data) {
        
		/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	


		
		
		document.getElementById("pop_table_indn_list_tb").innerHTML = data;
		
$("#load").fadeOut("slow");

//////////////////////////////////////////////////////////////////////////////////////////////////qty check	live	

$("#pop_table_indn_list_tb > tr ").each(function(i) {

var po_type_chk=$(this).find('td:eq(0)').text().substring(0,1);



if(po_type_chk !='O'){
var chekt= $(this).find('td:eq(7)').text();
var sum = 0;


$("#podetails >tr > td:contains("+chekt+") ").each(function(i) {

 fcount = parseFloat($(this).closest('tr').find('td:eq(21)').text());

       sum += fcount;
	   
});

//var test=$("#podetails >tr > td:contains("+chekt+") ").closest('tr').find('td:eq(17)').text()


var chekqty= $(this).find('td:eq(4)').text();
var chekqtyf=((parseFloat(chekqty))-(parseFloat(sum)));

var hi_po_sl_no_chk = $("#hi_po_sl_no").val();
if(hi_po_sl_no_chk != ''){

var po_tr_chk='#potr_'+hi_po_sl_no_chk;

var old_chekqtyf_po = ($(po_tr_chk).find('td:eq(5)').text());

var chekqtyf=((parseFloat(chekqtyf))+(parseFloat(old_chekqtyf_po)));
}


if(chekqtyf <=0 ){
$(this).hide();
}
else{
$(this).find('td:eq(4)').text(chekqtyf);
}
}

});
		////////////////////////////////////////////////////////////

	
	$("#pop_table_indn_list td").single_double_click(function () {
	///////////////single click
	
	$("#pop_table_indn_list td").css("background-color", "");
$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	}, function () {                /////////////////////////dblclick
 var selected_indn_code= $(this).closest('tr').find('td:eq(0)').text();
	$("#indent_no").val(selected_indn_code);
	var selected_srl_no= $(this).closest('tr').find('td:eq(1)').text();
	$("#srl_no").val(selected_srl_no);
	var selected_fin_year= $(this).closest('tr').find('td:eq(2)').text();
	$("#fin_year").val(selected_fin_year);
	var selected_ind_qty= $(this).closest('tr').find('td:eq(4)').text();
	$("#ind_qty").val(selected_ind_qty);
	$("#quantity_po").val(selected_ind_qty);
	var del_no= $(this).closest('tr').find('td:eq(5)').text();
	$("#del_no").val(del_no);
	var term_po= $(this).closest('tr').find('td:eq(6)').text();
	
	 if(term_po == 'Days'){
		var term_po = 'D';
		}
		if(term_po == 'Months'){
		var term_po = 'M';
		}
		if(term_po == 'Weekly'){
		var term_po = 'W';
		}
		if(term_po == 'Fortnightly'){
		var term_po = 'F';
		}
		if(term_po == 'As & When'){
		var term_po = 'A';
		}
	$("#term_po").val( term_po ).attr('selected',true);
	
	$('#po_type').attr('disabled', true);
	$('#item_code').attr('disabled', true);
	
	
	var open_po_ch=$('#po_type').val();
	if(open_po_ch =='O')
	{
	$('#quantity_po').val(0);
	$('#quantity_po').attr('disabled', true);
	}
	
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
return false;
});
//-------------------------------------------------------------------indent list-----------------------------------------

//////////////////////////////////////////////////////////////////////////enable drag
$( "#po_item_code_list" ).draggable({  handle: '.drag'  });
$( "#po_supp_code_list" ).draggable({ handle: '.drag' });
$( "#po_indn_code_list" ).draggable({ handle: '.drag' });
$( "#po_alert_message" ).draggable({ handle: '.drag' });



$("#resetform").click(function() {
$('#saverow').attr('disabled', false);
$( ":input ").css('border', '');

$("#eve_item_name").text('');
$("#hi_po_sl_no").val('');
$("#hi_po_item_uom").val('');
$("#hi_po_item_name").val('');
$("#hi_po_perm_qty").val('');
$("#hi_po_perm_id").val('');
var po_type = $("#po_type").val();
$("#po_form")[0].reset();
$("#table_body td").css("background-color", "");
$("#po_type").val(po_type).attr('selected',true);
$('#item_code').attr('disabled', false);
$("#quantity_po").attr('disabled', false);
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
$('#resetform').click();
$('#resettab').click();
$( ":input ").css('border', '');
$('#item_code').attr('disabled', false);
$('#po_type').attr('disabled', false);
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
      url: "fetch_po_datewise_create.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("po_datewise").innerHTML = data;
		
		

		
		
		
$("#load").fadeOut("slow");


//////////////////////////////////////now select each td from search
		
		$("#po_datewise td").click(function(event){
		$('#savetab').attr('disabled', true);
		$('#po_type').attr('disabled', true);
		
$('#item_code').attr('disabled', false);
$('#resetform').click();	

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
      url: "fetch_po_datewise_onselect_verify.php",
      data: datString,
      success: function(data) {
        

		
		
		document.getElementById("podetails").innerHTML = data;
		$("#load").fadeOut("slow");
		
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
    url: "fetch_po_datewise_onselect_hdr.php",
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
$("#item_code").keydown(function() {
	$("#eve_item_name").text('') ;
	$("#hi_po_item_uom").val('');
	$("#hi_po_item_name").val('');
	$("#pop_indn_name").val('');
	$("#pop_indn_code").val('');
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
$('#popdiv_scroll_supp').scrollTop(0);
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
	$('#popdiv_scroll_supp').scrollTop(0);
$("#po_supp_code_list").hide("");
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
	$('#popdiv_scroll_supp').scrollTop(0);
$("#po_supp_code_list").hide("");
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
	$('#popdiv_scroll_supp').scrollTop(0);
$("#po_supp_code_list").hide("");

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
	$('#popdiv_scroll_supp').scrollTop(0);
$("#po_supp_code_list").hide("");
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
		
		




});//scroll ends	supp
	
	
	
	
	
 });//total doc ready


