
$( function() {
    $( ".datepickersh" ).datepicker({ dateFormat: 'dd-mm-yy' });
  } );

$(document).ready(function(){
    
	
	
	var elapsed_seconds = 0;
setInterval(function() {
  $("#entry_time").datepicker('setDate',new Date());
   var now = new Date();
   var outStr = ((now.getHours()<10?'0':'') + now.getHours() )+':'+((now.getMinutes()<10?'0':'') + now.getMinutes() )+':'+((now.getSeconds()<10?'0':'') + now.getSeconds() );
   $('#entry_time').val(outStr);
}, 1000);

var d = new Date();
var strDate =d.getDate().toString().replace(/(^.$)/,"0$1")+ "-" + (d.getMonth() + 1).toString().replace(/(^.$)/,"0$1") +"-"+ d.getFullYear();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
			

	


    $('#entry_type').bind('change', function()
	{
		var entry_type=$('#entry_type option:selected').val();
		//alert(entry_type);
		var datString='entry_type='+entry_type;	
		
		
		   if (entry_type=='finishing_dispatch_register') {
			   window.location = "finishingsaleregister.php";
			
			} else if (entry_type=='visitor_register') {
				window.location = "visitorregistor.php";
	        } else if (entry_type=='jute_entry_register') {
                   window.location = "jute_entry_register.php";
            } else if (entry_type=='store_entry_register') {			
			      window.location = "store_entry_register.php";
			} else {
			       
			}

    });
	
	$(document).on('click', '#shw_present_visitor', function(e) {	

	
	//$('#shw_present_visitor').click(function(){
		
		//alert('ok');
		
		var form_date = $("#visitorform_date").val();	
        var to_date = $("#visitorto_date").val();
	
		//var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
		$.ajax({
      type: "POST",
      url: "fetch_visitor_datewise.php",
      //data: datString,
      success: function(data) {        
        $('#myModaltwo').modal('show');
		
	   document.getElementById("shw_visitor").innerHTML = data;
	   
			//alert(data);
			},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
			});
		
		
	});
	
	
	$("#finish_savein").click(function(event){
	
	var entry_da=$('.entry_date').val();
	var entry_time=$('#entry_time').text();	
	var finish_vehicle_no=$('#finish_vehicle_no').val();
	if(finish_vehicle_no=='')
	{
		alert("Please Enter Vehicle No!");
		$("#finish_vehicle_no").focus();
		return false;
	}
	var driver_name=$('#finish_driver_name').val();
	if(driver_name=='')
	{
		alert("Please Enter Driver Name!");
		$("#driver_name").focus();
		return false;
	}
	var transporter=$('#transporter').val();
	if(transporter=='')
	{
		alert("Please Enter Transporter!");
		$("#transporter").focus();
		return false;
	}
	
	
	var datString='entry_date='+entry_da+'&entry_time='+entry_time+'&finish_vehicle_no='+finish_vehicle_no+'&transporter='+transporter+'&driver_name='+driver_name;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "finishing_dispatch_savein.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
//$("<div></div>").attr('id','load').appendTo('body');   
//$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
//$("#load").hide();
			//$("#finish_reset").click();
			//$("#finish_search_button").click();
	
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


   /*finisning gate register entrey*/


			
/*end*/

$("#finish_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "finishing_dispatch_datewise.php",
      data: datString,
      success: function(data) {
		
		//alert(data);
		$('#myModal').modal('hide');
		$('#show').css('display','block');
		$('#hrd').css('display','none');
		//$('.allheadingstyle').css('display','none');
		$('#dtl').css('display','none');
		
		$("#show").append(data);
		//document.getElementById("finish_datewise").innerHTML = data;
		
		////////////////////on select each td from search///////////////////
/*$("#finish_datewise td").click(function(event){
	$("#resett").click();
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
//
		
    $("#finish_datewise td").css("background-color", "");
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
   	var finish_vehicle_no= $(this).closest('tr').find('td:eq(0)').text();
	var fhdr_id= $(this).closest('tr').find('td:eq(2)').text();  
	var finish_challan_no= $(this).closest('tr').find('td:eq(3)').text();	
	var finish_challan_date= $(this).closest('tr').find('td:eq(4)').text();
	var finish_driver_name= $(this).closest('tr').find('td:eq(5)').text();
	var transporter= $(this).closest('tr').find('td:eq(6)').text();
	var whom_to_dispatch= $(this).closest('tr').find('td:eq(7)').text();	
		  $("#fhdr_id").val(fhdr_id);
	$("#finish_vehicle_no").val(finish_vehicle_no).attr('disabled',false);
	$("#finish_challan_no").val(finish_challan_no).attr('disabled',false);
	$("#finish_challan_date").val(finish_challan_date).attr('disabled',false);
	$("#finish_driver_name").val(finish_driver_name).attr('disabled',false);
	$("#transporter").val(transporter);
	$("#whom_to_dispatch").val(whom_to_dispatch).attr('disabled',false);
	$('#finish_savein').hide();
	$('#finish_saveout').show();
	$('#finish_edit').show();
	$("#lorry_pass_no").attr('disabled',false);
	$("#cloth_quality").attr('disabled',false);
	$("#finish_quantity").attr('disabled',false);
	$("#finish_uom").attr('disabled',false);
	$("#finish_weight").attr('disabled',false);
	$("#goods_desc").attr('disabled',false);
	
	var datString = 'fhdr_id='+fhdr_id; 
	 					 
	  $.ajax({
      type: "POST",
      url: "finishing_dispatch_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		$("#load").hide();
		document.getElementById("finish_details").innerHTML = data;
				
		$("#finish_details td").click(function () 
		{                  
		 var lorry_pass_no= $(this).closest('tr').find('td:eq(1)').text();
		var cloth_quality= $(this).closest('tr').find('td:eq(2)').text();	
		var goods_desc= $(this).closest('tr').find('td:eq(3)').text();
		var finish_quantity= $(this).closest('tr').find('td:eq(4)').text();
		var finish_uom= $(this).closest('tr').find('td:eq(5)').text();
		var finish_weight= $(this).closest('tr').find('td:eq(6)').text();		
		var fperm_id= $(this).closest('tr').find('td:eq(9)').text();
		var fdtl_id= $(this).closest('tr').find('td:eq(10)').text();
		var fhdr_id= $(this).closest('tr').find('td:eq(11)').text();
		
		//alert(selected_hdr_id);
	$("#lorry_pass_no").val(lorry_pass_no);
	$("#cloth_quality").val(cloth_quality);
	$("#finish_quantity").val(finish_quantity);
	$("#finish_uom").val(finish_uom);	
	$("#finish_weight").val(finish_weight);
	$("#goods_desc").val(goods_desc);	
	$("#fdtl_id").val(fdtl_id);
	$("#fhdr_id").val(fhdr_id);
	$("#fperm_id").val(fperm_id);
	$("#finish_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	
	$("#finish_challan_no").attr('disabled', false);	
	$("#finish_challan_date").attr('disabled', false);	
	$("#cloth_quality").attr('disabled', false);	
	$("#whom_to_dispatch").attr('disabled', false);	
	$("#goods_desc").attr('disabled', false);	
	$("#finish_quantity").attr('disabled', false);
});	

	var YtableEmulator = document.getElementById('finish_y-fake-scroll');
var XtableEmulator = document.getElementById('finish_x-table-emulator');
var table = document.getElementById('table_bd');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('finish_scroll');
var headerContainer = document.getElementById('finish_header-container');
var YfakeScrollablePanel = document.getElementById('finish_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('finish_x-fake-scroll');

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

});*/		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		});
		//return false;
		});	

/*end*/

$("#savet").bind("click",function(event){

var lorry_pass_no=((($('#lorry_pass_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 	
	if(lorry_pass_no=='')
	{
		alert("Please Enter Lorry Pass !");
		$('#lorry_pass_no').focus();
		return false;
	}	
	var cloth_quality=((($('#cloth_quality').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));	
	if(cloth_quality=='')
	{
		alert("Please Enter Quality !");
		$('#cloth_quality').focus();
		return false;
	}	
	var finish_quantity=((($('#finish_quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
	var finish_uom=((($('#finish_uom').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
		if(finish_quantity !='')
	{
		if(finish_uom==0)
		{
		alert("Please Select Quality Unit !");
		$('#finish_uom').focus();
		return false;
		}
	}	
	var finish_weight=((($('#finish_weight').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));	
	var goods_desc=((($('#goods_desc').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));		
	var fnish_sl_no=$.trim(((($('#fnish_sl_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"))); 
	var store_uom=$("#store_uom").val();
	var fdtl_id=$.trim(((($('#fdtl_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	var fhdr_id=$.trim(((($('#fhdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	var fperm_id = $.trim(((($('#fperm_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")));
	//alert(perm_id);
	 if(fnish_sl_no==''){
	 
	 var lst_td= $("#table_bd tr:last").find('td:eq(0)').text();
	
	 if(lst_td ==''){
	 fnish_sl_no=1;
	 }
	 else{
	 fnish_sl_no=(parseInt(lst_td)+1);
	 }
	 
	 var tab_data = '<tr id=\"ftr_'+fnish_sl_no+'\"><th width=\"8px\"><pre></th><td width=\"22px\">'+fnish_sl_no+'</td><td width=\"45px\" >'+lorry_pass_no+'</td><td width=\"80px\" >'+cloth_quality+'</td><td width=\"120px\" >'+goods_desc+'</td><td width=\"45px\">'+finish_quantity+'</td><td width=\"38px\">'+finish_uom+'</td><td width=\"42px\">'+finish_weight+'</td><td width=\"50px\"></td><td width=\"50px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th></tr>';
	 
	 $('#table_bd >tbody:last').append(tab_data)
$("#lorry_pass_no").focus();
	  }
	else{
	 if(fperm_id !=''){
	 
	 var tab_data = '<th width=\"8px\"><pre></th><td width=\"22px\">'+fnish_sl_no+'</td><td width=\"45px\" >'+lorry_pass_no+'</td><td width=\"80px\" >'+cloth_quality+'</td><td width=\"120px\" >'+goods_desc+'</td><td width=\"45px\">'+finish_quantity+'</td><td width=\"38px\">'+finish_uom+'</td><td width=\"42px\">'+finish_weight+'</td><td width=\"50px\"></td><td width=\"50px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">m</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+fdtl_id+'</span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\">'+fhdr_id+'</span></td><th width=\"8px\"><pre></th>';
		 	 	 	 

 $("#lorry_pass_no").focus(); 
	 } 
	 	  else{
		 
	 	  var tab_data = '<th width=\"8px\"><pre></th><td width=\"22px\">'+fnish_sl_no+'</td><td width=\"45px\" >'+lorry_pass_no+'</td><td width=\"80px\" >'+cloth_quality+'</td><td width=\"120px\" >'+goods_desc+'</td><td width=\"45px\">'+finish_quantity+'</td><td width=\"38px\">'+finish_uom+'</td><td width=\"42px\">'+finish_weight+'</td><td width=\"50px\"></td><td width=\"50px\"></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><td style=\"display:none;\" width=\"0px\"><span class=\"hideFromScreen\"></span></td><th width=\"8px\"><pre></th>';
	$("#lorry_pass_no").focus();
	 }	 			 
		
	$('#ftr_'+fnish_sl_no+'').html(tab_data);		

	}
	$("#resett").click();
	 
	var YtableEmulator = document.getElementById('finish_y-fake-scroll');
var XtableEmulator = document.getElementById('finish_x-table-emulator');
var table = document.getElementById('table_bd');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('finish_scroll');
var headerContainer = document.getElementById('finish_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('finish_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('finish_x-fake-scroll');

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
//return false;
});	

	
/*---end-----*/
$("#cap_imag").click(function(event){
	
	take_snapshot();
	return false;
	
});



$("#savein").click(function(event){
	//take_snapshot();
	var entry_date=$('.entry_date').val();
	var entry_time=$('#entry_time').val();	
	
	if(entry_date=='')
	{
		alert("Please Entery Date!");
		return false;
	}
	
	var department=$('#deparment').val();
	if(department=='')
	{
		alert("Please Enter Department Name!");
		return false;
	}
	var visitor_name=$('#visitor_name').val();
	if(visitor_name=='')
	{
		alert("Please Enter Visitor Name!");
		return false;
	}
	var whom_to_meet=$('#whom_to_meet').val();
	if(whom_to_meet=='')
	{
		alert("Please Enter Whom To Meet!");
		return false;
	}
	var purpose=$('#purpose').val();
	if(purpose=='')
	{
		alert("Please Enter Purpose!");
		return false;
	}
	var address=$('#address').val();
	if(address=='')
	{
		alert("Please Enter Address!");
		return false;
	}
	var phone_no=$('#phone_no').val();
		if(phone_no.length<10)
		{
		alert("Invalid Phone No!");
		return false;
		}
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&visitor_name='+visitor_name+'&whom_to_meet='+whom_to_meet+'&purpose='+purpose+'&address='+address+'&phone_no='+phone_no+'&department='+department;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "visitor_data_save.php",
      data: datString,
      success: function(data) {
        		  
       
		/////////create div forajax loading	

/////////create div forajax loading	
			
			
			//$("#visitor_search_button").click();



	//alert(data);
	
	 var dd=JSON.parse(data);
	  //alert(dd['qrcode']);
	 //console.log(data);
     $('#barcode_scan').attr('src',dd['qrcode']);
	 	
          $('#entry_date').val('');
		$('#visitor_name').val('');
		$('#whom_to_meet').val('');
		$('#purpose').val('');
		$('#address').val('');
		$('#phone_no').val('');
		$('#results').css('display','none');
	 $('#my_camera').css('display','block');
     $('#barcode_scan').attr('src','images/bercode.png');
	 
	 /*
	 var  mywindow = window.open('', 'my div', 'width=500');
	 mywindow.document.write('<html>');
                             mywindow.document.write('<head>'
                                 +'<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">'
+'<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">'
+'<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">'
+'<link href="css/sb-admin.css" rel="stylesheet" type="text/css">'
+'<link rel="stylesheet" type="text/css" href="css/style.css">'
+'<link rel="stylesheet" type="text/css" href="css/sb-admin.css">'
                                 +'</head>');
                            mywindow.document.write('<body>');
                            
                            mywindow.document.write('<div class="border-style" style="width:30%;margin-left:5%;margin-right:10%;float:left;font-size:0.9em">');
                           //mywindow.document.write(document.getElementById("results").innerHTML);
						   var im=document.getElementById("results").innerHTML;
						   mywindow.document.write('<div>visitor name</div><div>'+visitor_name+'</div><div>'+im+'</div><div>Company Name:The Empire Jute Co. Ltd</div>');
                            mywindow.document.write('</div>'); 
                             
                           
                             mywindow.document.write('</body>');
                             mywindow.document.write('</html>');
                             mywindow.document.close(); // necessary for IE >= 10
                             mywindow.focus(); 
       
                             mywindow.print();*/
							 
			

    				

    	 
  	
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});	
	
return false;	
	});	
	
/*--end--*/	

$(document).on('click', '.saveout', function(e) {
//$("#saveout").click(function(event){
	
	//var entry_date=$('#entry_date').val();
	//var entry_time=$('#entry_time').val();	
	
	var rec_id=$(this).parent().siblings(".visitor_rec_id").text();
	var id=$(this).parent().siblings(".visitor_rec_id");
	var visitor_name=$(this).parent().siblings('.visitor_name').text();
	if(visitor_name=='')
	{
		alert("Please Enter Visitor Name!");
		return false;
	}
	
	var datString='visitor_name='+visitor_name+'&rec_id='+rec_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "visitor_data_save_out.php",
      data: datString,
      success: function(data) {        
      id.parent().css('display','none');
	


	//alert(data);	
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});	
	
return false;	
	});



$("#visitor_search_button").click(function() {

 var form_date = $("#visitorform_date").val();	
 var to_date = $("#visitorto_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "fetch_visitor_datewise.php",
      data: datString,
      success: function(data) {
		
		
		document.getElementById("visitor_datewise").innerHTML = data;
					
$("#visitor_datewise td").click(function(event){
	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
		
            $("#visitor_datewise td").css("background-color", "");
			$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' });   //change select tr background color
	
    var select_rec_id= $(this).closest('tr').find('td:eq(2)').text();
    $("#visitor_rec_id").val(select_rec_id);
	
	var datString = 'select_rec_id='+select_rec_id; 
						 
	  $.ajax({
      type: "POST",
      url: "fetch_visitor_datewise_onselect.php",
      data: datString,
      success: function(data) { 
		
		document.getElementById("visitor_details").innerHTML = data;
		$("#load").hide();		
		$("#visitor_details td").click(function () 
		{  
                      		
		var selected_visitor_name= $(this).closest('tr').find('td:eq(1)').text();
		var selected_whom_to_meet= $(this).closest('tr').find('td:eq(2)').text();	
		var selected_purpose= $(this).closest('tr').find('td:eq(3)').text();
		var selected_address= $(this).closest('tr').find('td:eq(4)').text();
		var selected_phone_no= $(this).closest('tr').find('td:eq(5)').text();
		var selected_rec_id= $(this).closest('tr').find('td:eq(8)').text();				
	$("#visitor_name").val(selected_visitor_name);
	$("#whom_to_meet").val(selected_whom_to_meet);
	$("#purpose").val(selected_purpose);
	$("#address").val(selected_address);
	$("#phone_no").val(selected_phone_no);
	$("#visitor_rec_id").val(selected_rec_id);
	$("#visitor_details td").css("background-color", "");	
	$(this).closest('tr').children('td').css({ 'background-color' : '#d0b173','font-weight' : 'bolder' }); 
	$('#savein').hide();
	$('#saveout').show();

});	

	var YtableEmulator = document.getElementById('visitor_y-table-emulator');
var XtableEmulator = document.getElementById('visitor_x-table-emulator');
var table = document.getElementById('visitor_table_body');

YtableEmulator.style.height = table.clientHeight == 0 ? "0px" : table.clientHeight + "px";
XtableEmulator.style.width = table.clientWidth + "px";

var scrollablePanel = document.getElementById('visitor_scroll');
var headerContainer = document.getElementById('visitor_header-container');
//var footerContainer = document.getElementById('footer-container');
var YfakeScrollablePanel = document.getElementById('visitor_y-fake-scroll');
var XfakeScrollablePanel = document.getElementById('visitor_x-fake-scroll');


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

/*--end--*/

$("#reset_visitor").click(function() {
$('#visitorform_date').val(strDate);
$('#visitorto_date').val(strDate);
$("#visitor_rec_id").val('');
$("#visitor_name").val('');
$("#visitor_name").focus();
$("#whom_to_meet").val('');
$("#purpose").val('');
$("#address").val('');
$("#phone_no").val('');
$('#savein').show();
$('#saveout').hide();
$("#visitor_search_button").click();
$("#visitor_details td").css("background-color", "");
$("#visitor_datewise td").css("background-color", "");

});

/*---end---*/


$("#jute_entry_savein").click(function(event){
//alert("test");

var entry_date=$('#entry_date').val();
var entry_time=$('#entry_time').val();	
var challan_no_wr=((($('#challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(challan_no_wr==''){ alert("Please Enter Challan No!"); return false;}
var challan_date_wr=((($('#challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var broker_wr=((($('#broker').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(broker_wr==''){ alert("Please Enter Broker Name!"); return false;}
var broker_address_wr=((($('#broker_address').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(broker_address_wr==''){ alert("Please EnterBroker Address_wr!"); return false;}
var transporter_wr=((($('#transporter').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(transporter_wr==''){ alert("Please Enter Transporter Name!"); return false;}
var vehicle_no_wr=((($('#vehicle_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(vehicle_no_wr==''){ alert("Please Enter Vehicle No!"); return false;}
var driver_name_wr=((($('#driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(driver_name_wr==''){ alert("Please Enter Driver Name!"); return false;}
var fin_year_wr=((($('#fin_year').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var mukam_wr=((($('#mukam').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 


		var datString = '&entry_date=' +entry_date+ '&entry_time=' +entry_time+'&challan_no_wr='+challan_no_wr+'&challan_date_wr=' + challan_date_wr+'&broker_wr=' + broker_wr+'&broker_address_wr='+broker_address_wr+'&transporter_wr='+transporter_wr+'&vehicle_no_wr='+vehicle_no_wr+'&driver_name_wr='+driver_name_wr+'&fin_year_wr='+fin_year_wr+'&mukam_wr='+mukam_wr;
		
		
$.ajax({
      type: "POST",
      url: "jute_entry_register_data_save.php",
	  data: datString,
      success: function(data) {
	  //$("#load").hide();	
		
	//$("#reset_jute_entry").click();
	//$("#jute_entry_search_button").click();
//alert(data);
      },
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});

return false;
});

/*---end---*/
/*--jute entry--search--*/

$("#jute_entry_search_button").click(function() {

 var form_date = $("#jute_entry_form_date").val();	
 var to_date = $("#jute_entry_to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "fetch_jute_entry_datewise.php",
      data: datString,
      success: function(data) {
		$('#myModal').modal('hide');
		$('table').css('display','block'); 
		//$('.allheadingstyle').css('display','none');
		$('#hrd').css('display','none');
		$('#dtl').css('display','none');
		
		//alert(data);
		document.getElementById("shwidth").innerHTML = data;
		
		////////////////////on select each td from search///////////////////


		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
       window.location.href = url_r;
        }
		});
		return false;
		});
		
/*--end--*/

/*---jute entry save out---*/

$(document).on('click', '.jute_entry_saveout', function(e) {
	alert('got');
	var entry_date=$(this).parent().siblings().children('#entry_date').val();
	var entry_time=$(this).parent().siblings().children('#entry_time').val();	
	var rec_id=$(this).parent().siblings().children("#hdr_id").val();
	var d = new Date(entry_date);
var str = $.datepicker.formatDate('yy-mm-dd', d);
//alert(str);
var time=entry_time.slice(0,-3);	
	var datString='entry_date='+str+'&entry_time='+time+'&rec_id='+rec_id;
	alert(datString);
	$.ajax({
      type: "POST",
      url: "jute_entry_register_data_save_out.php",
      data: datString,
      success: function(data) {   
           var today = new Date();	  
         $(this).parent().siblings().children('#out_date').val();
		/////////create div forajax loading	

/////////create div forajax loading	
			//$("#reset_jute_entry").click();
			//$("#jute_entry_search_button").click();
			
	
//$("#load").hide();
		
		//alert(data);	
		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});
	

	
return false;	
	});
	
	
$(document).on('click', '#finish_saveout', function(e) {	

	var data=[];
	$(".update").each(function(){
        


       if($(this).is(':checked')){
		 
		 
		 
		
	
var entry_date=((($(this).parent().siblings().children('#entry_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var entry_time=((($(this).parent().siblings().children('#entry_time').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));

var finish_challan_no=((($(this).parent().siblings().children('#finish_challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_challan_no=='')
{
 alert("Please Enter Challan No!");
 $('#finish_challan_no').focus();
 return false;
 }
var finish_challan_date=((($(this).parent().siblings().children('#finish_challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_challan_date=='')
{
 alert("Please Select Challan Date !");
 $('#finish_challan_date').focus();
 return false;
 }
var finish_vehicle_no=((($(this).parent().siblings().children('#finish_vehicle_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_vehicle_no=='')
{ 
alert("Please Enter Vehicle No !");
 $('#finish_vehicle_no').focus();
 return false;
 }
var finish_driver_name=((($(this).parent().siblings().children('#finish_driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(finish_driver_name=='')
{ 
alert("Please Enter Driver Name !");
$('#finish_driver_name').focus(); 
return false;
}
var transporter=((($(this).parent().siblings().children('#transporter').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(transporter=='')
{ 
alert("Please Enter Transporter Name !");
$('#transporter').focus();
 return false;
 }
var whom_to_dispatch=((($(this).parent().siblings().children('#whom_to_dispatch').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
if(whom_to_dispatch=='')
{ 
alert("Please Enter Whom To Dispatch !");
$('#whom_to_dispatch').focus();
 return false;
 }
var fhdr_id=((($(this).parent().siblings().children('#fhdr_id').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|")); 
var dtl = [entry_date, entry_time, finish_challan_no, finish_challan_date,finish_vehicle_no,finish_driver_name,transporter,whom_to_dispatch,fhdr_id];
  data.push(dtl);
  
      console.log(data);
 
	    }else{}
 });
		//var datString = 'entry_date=' +entry_date+ '&entry_time=' +entry_time+'&finish_challan_no='+finish_challan_no+'&finish_challan_date=' + finish_challan_date+'&finish_vehicle_no=' + finish_vehicle_no+'&finish_driver_name='+finish_driver_name+'&transporter='+transporter+'&wr_arrf='+wr_arrf+'&fhdr_id='+fhdr_id+'&whom_to_dispatch='+whom_to_dispatch;
		var datString = 'jsondata=' +data;
$.ajax({
      type: "POST",
      url: "finishing_dispatch_saveout.php",
	  data: datString,
      success: function(data) {
	  //$("#load").hide();	
		
	//$("#finish_reset").click();
	//$("#finish_search_button").click();
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

$("#store_savein").click(function(event){

var entry_date=$('.entry_date').val();
var entry_time=$('#entry_time').val();

var item_name=((($('#item_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(item_name=='')
{
 alert("Please Enter Item  Name!");
 $('#item_name').focus();
 return false;
 }
 
 
 
 var store_quantity=((($('#store_quantity').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_quantity=='')
{
 alert("Please Enter Store Quantity!");
 $('#store_quantity').focus();
 return false;
 }

 
 var store_dept=((($('#store_dept').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_dept=='')
{
 alert("Please Enter Store Department!");
 $('#store_dept').focus();
 return false;
 }
 
 var store_uom=$('#store_uom').val();
 
var store_challan_no_wr=((($('#store_challan_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_challan_no_wr=='')
{
 alert("Please Enter Challan No!");
 $('#store_challan_no').focus();
 return false;
 }
var store_challan_date_wr=((($('#store_challan_date').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
var store_vehicle_no_wr=((($('#store_vehicle_no').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_vehicle_no_wr=='')
{ 
alert("Please Enter Vehicle No !");
 $('#store_vehicle_no').focus();
 return false;
 }
var store_driver_name_wr=((($('#store_driver_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_driver_name_wr=='')
{ 
alert("Please Enter Driver Name !");
$('#store_driver_name').focus(); 
return false;
}
var store_supp_name_wr=((($('#store_supp_name').val()).replace(/~\|~/gi, "~!~")).replace(/\|\|/gi, "!|"));
if(store_supp_name_wr=='')
{ 
alert("Please Enter Supplier Name !");
$('#store_supp_name').focus();
 return false;
 }
var remarks_wr=$('#remarks').val(); 

var hdr_id=$('#hdr_id').val(); 


		

		var datString ='entry_date=' +entry_date+ '&entry_time=' +entry_time+'&store_challan_no_wr='+store_challan_no_wr+'&store_challan_date_wr=' + store_challan_date_wr+'&store_vehicle_no_wr=' + store_vehicle_no_wr+'&store_driver_name_wr='+store_driver_name_wr+'&remarks_wr='+remarks_wr+'&hdr_id='+hdr_id+'&store_supp_name_wr='+store_supp_name_wr+'&item_name='+item_name+'&store_quantity='+store_quantity+'&store_dept='+store_dept+'&store_uom='+store_uom;
		
		
$.ajax({
      type: "POST",
      url: "store_entry_register_savein.php",
	  data: datString,
      success: function(data) {
	  //$("#load").hide();	
		store_reset();
	
	//$("#po_search_button").click();
//alert(data);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
});


return false;
});


function store_reset() {
$('.entry_date').val('');
$('#item_name').val('');
$('#store_quantity').val('');
$('#store_dept').val('');
$('#store_uom').val('');
$("#store_challan_no").val('');
$('#store_challan_date').val('');
$('#store_vehicle_no').val('');
$('#store_driver_name').val('');
$('#store_supp_name').val('');
$('#remarks').val('');


$("#dtl_id").val('');
$("#hdr_id").val('');
$("#perm_id").val('');



 return false;
	}


/*$("#store_saveout").click(function(event){
	
	var entry_date=$('#entry_date').val();
	var entry_time=$('#entry_time').val();	
	var rec_id=$("#hdr_id").val();
		
	var datString='entry_date='+entry_date+'&entry_time='+entry_time+'&rec_id='+rec_id;
	//alert(datString);
	$.ajax({
      type: "POST",
      url: "store_entry_register_saveout.php",
      data: datString,
      success: function(data) {        

		/////////create div forajax loading	
//$("<div></div>").attr('id','load').appendTo('body');   
//$//("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
		    //$("#store_reset").click();
			//$("#po_search_button").click();		
	
//$("#load").hide();		
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
	
	/*--end--*/

	
	
$("#po_search_button").click(function() {

 var form_date = $("#form_date").val();	
 var to_date = $("#to_date").val();
	
		var datString = 'form_date='+ form_date + '&to_date=' + to_date;
		
$.ajax({
      type: "POST",
      url: "store_entry_register_datewise.php",
      data: datString,
      success: function(data) {
		  
		  alert(data);
		
		$('#myModal').modal('hide');
		$('table').css('display','block'); 
		//$('.allheadingstyle').css('display','none');
		//$('#hrd').css('display','none');
		//$('#dtl').css('display','none');
		document.getElementById("show").innerHTML = data;
		$('.dt_pic').datepicker();
		$('.form-group').css('display','none');
		$('h3').css('display','none');
		$('.border-style').css('border','none');
		$('.allbtnstyle').css('border','none');
		
	  },
	  
	  error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
		
	});

});	

/*--end---*/
/*$(document).on('click', '#store_saveout', function(e) {	


	
	//var entry_date=$(this).parent().siblings().children('#entry_date_td').val();
	var entry_time=$('#entry_time').val();	
	var rec_id=$(this).parent().siblings("#hdr_id").text();
		
	var datString='entry_time='+entry_time+'&rec_id='+rec_id;
	alert(datString);
	$.ajax({
      type: "POST",
      url: "store_entry_register_saveout.php",
      data: datString,
      success: function(data) {        

		    //$("#store_reset").click();
			//$("#po_search_button").click();		
	
		
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
	
	*/
	
	$(document).on('click', '#store_saveout', function(e) {	

    var data=[];
	$(".update").each(function(){
        


       if($(this).is(':checked')){
	
	//var entry_date=$(this).parent().siblings().children('#entry_date_td').val();
	  var entry_time=$('#entry_time').val();	
	  var rec_id=$(this).parent().siblings("#hdr_id").text();
	  var dtl = [entry_time, rec_id];
      data.push(dtl);
  
      //console.log(data);
	   }else{}
	  }); 
		
	//var datString='entry_time='+entry_time+'&rec_id='+rec_id;
	var datString = 'jsondata=' +data;
	alert(datString);
	$.ajax({
      type: "POST",
      url: "store_entry_register_saveout.php",
      data: datString,
      success: function(data) {        

		    //$("#store_reset").click();
			//$("#po_search_button").click();		
	
		
		//alert(data);		
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
	});	
return false;	
	});

	
/*end of document ready*/	
	
});