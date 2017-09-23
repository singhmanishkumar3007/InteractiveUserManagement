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
      url: "cencelellation_fetch_po_datewise_print.php",
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
      url: "cencelellation_fetch_po_datewise_onselect_print.php",
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
		
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});

  
	




//################################################################################# end item list###########################################
//################################################################################# end item list###########################################


	

	
$("#saverow").live("click",function(event){

var update_check= $("#hi_po_sele_no").val();





if(update_check =='')
{
alert('search and select one first');
}


if(update_check !='')
{


var url = "cancel_po_print.php";    
			//$(location).attr('href',url);
			window.open( url, '_blank');



}

return false;
});	
	
$("#delrow").live("click",function(event){	
	var update_check= $("#hi_po_sele_no").val();
	
	

	return false;
	 });	
	
	
 });//total doc ready


