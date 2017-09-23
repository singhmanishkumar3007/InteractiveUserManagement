$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////
$('#efficiency_i').attr('disabled',true);
$('#efficiency_ii').attr('disabled',true);
///////////////////////////////////////working hour////////////////////////////////////////////////
var shift=$('#shift option:selected').val();
	var datString='shift='+shift;
	
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_working_hours.php",
      data: datString,
      success: function(data) {  
		
				
		$('#working_hours').val(data);
		$("#shift").change();
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});


////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').attr('disabled',false);	
$('#shift').attr('disabled',false);	
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#working_hours').attr('disabled',false);
$('#idle_hours').val('').attr('disabled',false);
$('#constant_meter').val('').css("border-color", "");	
$('#machine_no').val('').css("border-color", "").attr('disabled',false);		
$('#opening').val('').css("border-color", "");
$('#spell_i_closing').val('').css("border-color", "");	
$('#spell_ii_closing').val('').css("border-color", "");	
$('#efficiency_i').val('').attr('disabled',true);
$('#efficiency_ii').val('').attr('disabled',true);
$('#remarks').val('').css("border-color", "");	
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
$("#po_search_button").click();


///////////////////////////////////////////live table//////////////////////////////////
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#details").html(data);
	  
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

	$("#details td").click(function () 
		{                  
		
		var machine_no= $(this).closest('tr').find('td:eq(1)').text();	
		var constant_meter= $(this).closest('tr').find('td:eq(2)').text();
		var opening= $(this).closest('tr').find('td:eq(3)').text();	
		var spell_i_closing= $(this).closest('tr').find('td:eq(4)').text();
		var spell_ii_closing= $(this).closest('tr').find('td:eq(5)').text();
		var efficiency_i= $(this).closest('tr').find('td:eq(6)').text();	
		var efficiency_ii= $(this).closest('tr').find('td:eq(7)').text();
		var remarks= $(this).closest('tr').find('td:eq(8)').text();	
		var issue_date= $(this).closest('tr').find('td:eq(9)').text();	
		var shift= $(this).closest('tr').find('td:eq(10)').text();	
		var idle_hours= $(this).closest('tr').find('td:eq(12)').text();
		var rec_id= $(this).closest('tr').find('td:eq(13)').text();	 
    
	$("#machine_no").val(machine_no).attr('disabled',true);	
	$("#constant_meter").val(constant_meter);	
	$("#opening").val(opening);	
	$("#spell_i_closing").val(spell_i_closing);	
	$("#spell_ii_closing").val(spell_ii_closing);	
	$("#efficiency_i").val(efficiency_i);	
	$("#efficiency_ii").val(efficiency_ii);	
	$("#remarks").val(remarks);	
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#shift").val(shift).attr('disabled',true);	
	$('#shift').change();
	$("#idle_hours").val(idle_hours);	
	$("#rec_id").val(rec_id);	
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});		
 //////////////////////////////////////////live table end/////////////////////////
$('#shift').change();
return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
///////////////////////////////////////////eff cal//////////////////////////////
$('#spell_i_closing').bind('input', function()
{
var opening=$('#opening').val();
opening=parseFloat(opening);
var spell_i_closing=$('#spell_i_closing').val();
spell_i_closing=parseFloat(spell_i_closing);
var constant_meter=$('#constant_meter').val();
constant_meter=parseFloat(constant_meter);
var diff_i=((spell_i_closing)-(opening));
diff_i=parseFloat(diff_i);
var eff_i=(((diff_i)/(constant_meter))*100);
var eff_i=eff_i.toFixed(2);
if(isNaN(eff_i))
{
 eff_i='';

}
$('#efficiency_i').val(eff_i);

return false;
});

$('#spell_ii_closing').bind('input', function()
{
var spell_i_closing=$('#spell_i_closing').val();
spell_i_closing=parseFloat(spell_i_closing);

var spell_ii_closing=$('#spell_ii_closing').val();
spell_ii_closing=parseFloat(spell_ii_closing);
var constant_meter=$('#constant_meter').val();
constant_meter=parseFloat(constant_meter);
var diff_ii=((spell_ii_closing)-(spell_i_closing));
diff_ii=parseFloat(diff_ii);
var eff_ii=(((diff_ii)/(constant_meter))*100);
var eff_ii=eff_ii.toFixed(2);
if(isNaN(eff_ii))
{
 eff_ii='';

}
$('#efficiency_ii').val(eff_ii);

return false;
});
$('#constant_meter').bind('input', function()
{
var opening=$('#opening').val();
opening=parseFloat(opening);
var spell_i_closing=$('#spell_i_closing').val();
spell_i_closing=parseFloat(spell_i_closing);
var constant_meter=$('#constant_meter').val();
constant_meter=parseFloat(constant_meter);
var diff_i=((spell_i_closing)-(opening));
diff_i=parseFloat(diff_i);
var eff_i=(((diff_i)/(constant_meter))*100);
var eff_i=eff_i.toFixed(2);
if(isNaN(eff_i))
{
 eff_i='';

}
$('#efficiency_i').val(eff_i);

var spell_ii_closing=$('#spell_ii_closing').val();
spell_ii_closing=parseFloat(spell_ii_closing);

var diff_ii=((spell_ii_closing)-(spell_i_closing));
diff_ii=parseFloat(diff_ii);
var eff_ii=(((diff_ii)/(constant_meter))*100);
var eff_ii=eff_ii.toFixed(2);
if(isNaN(eff_ii))
{
 eff_ii='';

}
$('#efficiency_ii').val(eff_ii);
});
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////spell time and working hours//////////////
$('#shift').bind('change', function()
	{
	var shift=$('#shift option:selected').val();
	var datString='shift='+shift;
	
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_working_hours.php",
      data: datString,
      success: function(data) {  
		
				
		$('#working_hours').val(data);
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});
	return false;
	});
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
var issue_date=$('#issue_date').val();
var shift=$('#shift').val();
var working_hours=$('#working_hours').val();	
var idle_hours=$('#idle_hours').val();
var constant_meter=$('#constant_meter').val();
if(constant_meter=='')
	{
		alert("Please Enter constant_meter!");
		$('#constant_meter').focus().css("border-color", "red");
		return false;
	}
var machine_no=$('#machine_no').val();
if(machine_no=='')
	{
		alert("Please Enter Machine No !");
			$('#machine_no').focus().css("border-color", "red");
		return false;
	}
var opening=$('#opening').val();
var spell_i_closing=$('#spell_i_closing').val();
if(spell_i_closing=='')
	{
		alert("Please Enter Spell I Closing !");
		$('#spell_i_closing').focus().css("border-color", "red");
		return false;
	}

	var spell_ii_closing=$('#spell_ii_closing').val();
if(spell_ii_closing=='')
	{
		alert("Please Enter sSpell II Closing !");
		$('#spell_ii_closing').focus().css("border-color", "red");
		return false;
	}

	var efficiency_i=$('#efficiency_i').val();
	var efficiency_ii=$('#efficiency_ii').val();
	var remarks=$('#remarks').val();


	var datString='issue_date='+issue_date+'&shift='+shift+'&constant_meter='+constant_meter+'&machine_no='+machine_no+'&opening='+opening+'&spell_i_closing='+spell_i_closing+'&spell_ii_closing='+spell_ii_closing+'&idle_hours='+idle_hours+'&working_hours='+working_hours+'&efficiency_i='+efficiency_i+'&efficiency_ii='+efficiency_ii+'&remarks='+remarks;

	
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_data_save.php",
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
			return false;
			});

///////////////////////////////////////////save end//////////////////////////////////////////	
///////////////////////////////////////////edit start/////////////////////////////////////////
$("#jute_entry_edit").click(function(event){
	
var rec_id=$('#rec_id').val();	
if(rec_id =='')
{
alert("Please Select a Record!");
}
else
{
var working_hours=$('#working_hours').val();	
var idle_hours=$('#idle_hours').val();
var constant_meter=$('#constant_meter').val();
if(constant_meter=='')
	{
		alert("Please Enter constant_meter!");
		$('#constant_meter').focus().css("border-color", "red");
		return false;
	}

var opening=$('#opening').val();
var spell_i_closing=$('#spell_i_closing').val();
if(spell_i_closing=='')
	{
		alert("Please Enter Spell I Closing !");
		$('#spell_i_closing').focus().css("border-color", "red");
		return false;
	}

	var spell_ii_closing=$('#spell_ii_closing').val();
if(spell_ii_closing=='')
	{
		alert("Please Enter sSpell II Closing !");
		$('#spell_ii_closing').focus().css("border-color", "red");
		return false;
	}

	var efficiency_i=$('#efficiency_i').val();
	var efficiency_ii=$('#efficiency_ii').val();
	var remarks=$('#remarks').val();


	var datString='constant_meter='+constant_meter+'&opening='+opening+'&spell_i_closing='+spell_i_closing+'&spell_ii_closing='+spell_ii_closing+'&idle_hours='+idle_hours+'&working_hours='+working_hours+'&efficiency_i='+efficiency_i+'&efficiency_ii='+efficiency_ii+'&remarks='+remarks+'&rec_id='+rec_id;
	
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_edit.php",
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
			return false;
			});

///////////////////////////////////////////edit end//////////////////////////////////////////
///////////////////////////////////////////search start///////////////////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
			
			
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){
	//$("#resettab").click();	
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
	
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	 var issue_date= $(this).closest('tr').find('td:eq(0)').text();
    $("#issue_date").val(issue_date).attr('disabled',true);	
	var shift= $(this).closest('tr').find('td:eq(1)').text();
	$("#shift").val(shift).attr('disabled',true);	
	$('#shift').change();
	var datString = 'issue_date='+issue_date+'&shift='+shift; 
	 	 
					 
	  $.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
	
		$("#details").html(data);
		
		
		$("#details td").click(function () 
		{                  
		
		var machine_no= $(this).closest('tr').find('td:eq(1)').text();	
		var constant_meter= $(this).closest('tr').find('td:eq(2)').text();
		var opening= $(this).closest('tr').find('td:eq(3)').text();	
		var spell_i_closing= $(this).closest('tr').find('td:eq(4)').text();
		var spell_ii_closing= $(this).closest('tr').find('td:eq(5)').text();
		var efficiency_i= $(this).closest('tr').find('td:eq(6)').text();	
		var efficiency_ii= $(this).closest('tr').find('td:eq(7)').text();
		var remarks= $(this).closest('tr').find('td:eq(8)').text();	
		var issue_date= $(this).closest('tr').find('td:eq(9)').text();	
		var shift= $(this).closest('tr').find('td:eq(10)').text();	
		var idle_hours= $(this).closest('tr').find('td:eq(12)').text();
		var rec_id= $(this).closest('tr').find('td:eq(13)').text();	 
    
	$("#machine_no").val(machine_no).attr('disabled',true);	
	$("#constant_meter").val(constant_meter);	
	$("#opening").val(opening);	
	$("#spell_i_closing").val(spell_i_closing);	
	$("#spell_ii_closing").val(spell_ii_closing);	
	$("#efficiency_i").val(efficiency_i);	
	$("#efficiency_ii").val(efficiency_ii);	
	$("#remarks").val(remarks);	
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#shift").val(shift).attr('disabled',true);	
	$('#shift').change();
	$("#idle_hours").val(idle_hours);	
	$("#rec_id").val(rec_id);	
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
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

var rec_id=$("#rec_id").val();	
if(rec_id =='')
{
alert("Please Select a Record!");
}
else
{
	
if(confirm('Are you sure you want to delete?')){
var datString='rec_id='+rec_id;

$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_delete.php",
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

///////////////////////////////////////////live table//////////////////////////////////
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "drawing_efficiency_khata_live_table.php",
      data: datString,
      success: function(data) {        

	  $("#details").html(data);
	  
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

	$("#details td").click(function () 
		{                  
		
		var machine_no= $(this).closest('tr').find('td:eq(1)').text();	
		var constant_meter= $(this).closest('tr').find('td:eq(2)').text();
		var opening= $(this).closest('tr').find('td:eq(3)').text();	
		var spell_i_closing= $(this).closest('tr').find('td:eq(4)').text();
		var spell_ii_closing= $(this).closest('tr').find('td:eq(5)').text();
		var efficiency_i= $(this).closest('tr').find('td:eq(6)').text();	
		var efficiency_ii= $(this).closest('tr').find('td:eq(7)').text();
		var remarks= $(this).closest('tr').find('td:eq(8)').text();	
		var issue_date= $(this).closest('tr').find('td:eq(9)').text();	
		var shift= $(this).closest('tr').find('td:eq(10)').text();	
		var idle_hours= $(this).closest('tr').find('td:eq(12)').text();
		var rec_id= $(this).closest('tr').find('td:eq(13)').text();	 
    
	$("#machine_no").val(machine_no).attr('disabled',true);	
	$("#constant_meter").val(constant_meter);	
	$("#opening").val(opening);	
	$("#spell_i_closing").val(spell_i_closing);	
	$("#spell_ii_closing").val(spell_ii_closing);	
	$("#efficiency_i").val(efficiency_i);	
	$("#efficiency_ii").val(efficiency_ii);	
	$("#remarks").val(remarks);	
	$("#issue_date").val(issue_date).attr('disabled',true);		
	$("#shift").val(shift).attr('disabled',true);	
	$('#shift').change();
	$("#idle_hours").val(idle_hours);	
	$("#rec_id").val(rec_id);	
	$('#savetab').hide();
	$('#jute_entry_edit').show();	
	$("#details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
});	
	},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});		
 
 //////////////////////////////////////////live table end/////////////////////////
 });//total doc ready


