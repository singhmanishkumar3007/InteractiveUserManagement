$(document).ready(function(){

/////////////////////////////////disable button actions
$("#delrow").click(function(event){
return false;
});
$("#po_ammnd_create").click(function(event){
return false;
});
$("#savetab").click(function(event){
return false;
});
$("#resettab").click(function(event){
return false;
});
$("#deltab").click(function(event){
return false;
});
$("#saverow").click(function(event){
return false;
});

//////////////////////////////////////////////////////////////////////////enable drag
$( "#po_item_code_list" ).draggable({  handle: '.drag'  });
$( "#po_supp_code_list" ).draggable({ handle: '.drag' });

$("#resetform").click(function() {

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
      url: "ammendment_fetch_po_datewise.php",
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
	
			
			
			
					 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
					 
					 
					 
					 
	});	//2nd call end			




				 
});//click event close

		
		
		///////////////////////////////////
		
 } ,
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
	});

  
	

	
	
	
	
 });//total doc ready


