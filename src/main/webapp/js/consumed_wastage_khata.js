$(document).ready(function(){

$(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });	
var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
/////////////////////////////////////////////////////////////////////
$('#closeing').attr('disabled',true);

var wastage=$('#wastage option:selected').val();
 var datString='wastage='+wastage;
	$.ajax({
      type: "POST",
      url: "consumed_wastage_khata_opening_val.php",
      data: datString,
      success: function(data) {        

	  $('#opening').val(data);
	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
////////////////////////////////////////////RESET///////////////////////////////////////
$("#resettab").click(function(event){

$('#issue_date').val(strDate).attr('disabled',false);	
$('#wastage').attr('disabled',false);	
$('#form_date').val(strDate);
$('#to_date').val(strDate);
$('#opening').attr('disabled',false);	
$('#generation').val('').css("border-color", "");	
$('#consumption').val('').css("border-color", "");	
$('#generation').focus();
$('#closeing').val('').css("border-color", "");
$('#rec_id').val('');
$('#savetab').show();
$('#jute_entry_edit').hide();
$("#po_datewise td").css("background-color", "");
$("#details td").css("background-color", "");
$("#po_search_button").click();

$('#wastage').change();
///////////////////////////////////////////live table//////////////////////////////////
 var issue_date=$("#issue_date").val();
 var datString='issue_date='+issue_date;
	$.ajax({
      type: "POST",
      url: "consumed_wastage_khata_table.php",
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
		 
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();	
		var wastage= $(this).closest('tr').find('td:eq(2)').text();
		var opening= $(this).closest('tr').find('td:eq(3)').text();
		var generation= $(this).closest('tr').find('td:eq(4)').text();
		var consumption= $(this).closest('tr').find('td:eq(5)').text();	
		var closeing= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();		
	
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#wastage").val(wastage).attr('disabled',true);	
	$("#opening").val(opening).attr('disabled',true);	
	$("#generation").val(generation);	
	$("#consumption").val(consumption);	
	$("#closeing").val(closeing);	
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

return false;
});

///////////////////////////////////////////RESET END//////////////////////////////////////
$('#consumption').bind('input', function()
{
var opening=$('#opening').val();
opening=parseInt(opening);
var generation=$('#generation').val();
generation=parseInt(generation);
if(isNaN(generation))
{
 generation=0;

}
var consumption=$('#consumption').val();
consumption=parseInt(consumption);
if(isNaN(consumption))
{
 consumption=0;

}
var closeing=(((opening)+(generation))-(consumption));
if(isNaN(closeing))
{
 closeing='';

}
$('#closeing').val(closeing);
return false;
});
//////////////////////////////
$('#generation').bind('input', function()
{
var opening=$('#opening').val();
opening=parseInt(opening);
var generation=$('#generation').val();
generation=parseInt(generation);
if(isNaN(generation))
{
 generation=0;

}
var consumption=$('#consumption').val();
consumption=parseInt(consumption);
if(isNaN(consumption))
{
 consumption=0;

}
var closeing=(((opening)+(generation))-(consumption));
if(isNaN(closeing))
{
 closeing='';

}
$('#closeing').val(closeing);

return false;
});
/////////////////////////////wastage change//////////////////////
$('#wastage').bind('change', function()
	{
	var wastage=$('#wastage option:selected').val();
	var datString='wastage='+wastage;
	$.ajax({
      type: "POST",
      url: "consumed_wastage_khata_opening_val.php",
      data: datString,
      success: function(data) {        

	  $('#opening').val(data);
	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	  });
	return false;
	});
///////////////////////////////////////////save data////////////////////////////////////
$("#savetab").click(function(event){
var issue_date=$('#issue_date').val();
var wastage=$('#wastage').val();
var opening=$('#opening').val();
if(opening=='')
	{
		alert("Please Enter Opening !");
			$('#opening').focus().css("border-color", "red");
		return false;
	}	
var generation=$('#generation').val();
if(generation=='')
	{
		alert("Please Enter To Day's Generation !");
		$('#generation').focus().css("border-color", "red");
		return false;
	}
var consumption=$('#consumption').val();
if(consumption=='')
	{
		alert("Please Enter Today's Consumption !");
		$('#consumption').focus().css("border-color", "red");
		return false;
	}
var closeing=$('#closeing').val();

	
	var datString='issue_date='+issue_date+'&wastage='+wastage+'&opening='+opening+'&generation='+generation+'&consumption='+consumption+'&closeing='+closeing;

	$.ajax({
      type: "POST",
      url: "consumed_wastage_khata_data_save.php",
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
			$('#generation').focus();
		
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
var generation=$('#generation').val();
if(generation=='')
	{
		alert("Please Enter To Day's Generation !");
		$('#generation').focus().css("border-color", "red");
		return false;
	}
var consumption=$('#consumption').val();
if(consumption=='')
	{
		alert("Please Enter Today's Consumption !");
		$('#consumption').focus().css("border-color", "red");
		return false;
	}
var closeing=$('#closeing').val();

	
	var datString='generation='+generation+'&consumption='+consumption+'&closeing='+closeing+'&rec_id='+rec_id;
	
	$.ajax({
      type: "POST",
      url: "consumed_wastage_khata_edit.php",
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
			
		$('#generation').focus();

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

///////////////////////////////////////////edit end////////////////////////
//////////////////////////////search start/////////////////////////////////
 $("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "consumed_wastage_khata_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("po_datewise").innerHTML = data;
					
		
////////////////////on select each td from search///////////////////
$("#po_datewise td").click(function(event){

$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading		
		
            $("#po_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	 var issue_date= $(this).closest('tr').find('td:eq(0)').text();
    $("#issue_date").val(issue_date).attr('disabled',true);	
	var wastage= $(this).closest('tr').find('td:eq(1)').text();
	$("#wastage").val(wastage).attr('disabled',true);	
	$('#wastage').change();
	var datString = 'issue_date='+issue_date+'&wastage='+wastage; 
	 	 
					 
	  $.ajax({
      type: "POST",
      url: "consumed_wastage_khata_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		$("#load").hide();
		$("#details").html(data);
				
		$("#details td").click(function () 
		{                  
		 
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();	
		var wastage= $(this).closest('tr').find('td:eq(2)').text();
		var opening= $(this).closest('tr').find('td:eq(3)').text();
		var generation= $(this).closest('tr').find('td:eq(4)').text();
		var consumption= $(this).closest('tr').find('td:eq(5)').text();	
		var closeing= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();		
	
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#wastage").val(wastage).attr('disabled',true);	
	$("#opening").val(opening).attr('disabled',true);	
	$("#generation").val(generation);	
	$("#consumption").val(consumption);	
	$("#closeing").val(closeing);	
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
//alert("test");
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
      url: "consumed_wastage_khata_delete.php",
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
	$('#generation').focus();

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
      url: "consumed_wastage_khata_table.php",
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
		 
		var issue_date= $(this).closest('tr').find('td:eq(1)').text();	
		var wastage= $(this).closest('tr').find('td:eq(2)').text();
		var opening= $(this).closest('tr').find('td:eq(3)').text();
		var generation= $(this).closest('tr').find('td:eq(4)').text();
		var consumption= $(this).closest('tr').find('td:eq(5)').text();	
		var closeing= $(this).closest('tr').find('td:eq(6)').text();
		var rec_id= $(this).closest('tr').find('td:eq(7)').text();		
	
    $("#issue_date").val(issue_date).attr('disabled',true);		
	$("#wastage").val(wastage).attr('disabled',true);	
	$("#opening").val(opening).attr('disabled',true);	
	$("#generation").val(generation);	
	$("#consumption").val(consumption);	
	$("#closeing").val(closeing);	
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
 $('#generation').focus();
 //////////////////////////////////////////live table end/////////////////////////
 });//total doc ready


