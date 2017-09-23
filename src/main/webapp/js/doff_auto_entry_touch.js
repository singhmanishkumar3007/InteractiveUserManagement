 
				var demoGauge3 = new jGauge(); // Create a new jGauge.
				demoGauge3.id = 'jGaugeDemo3'; // Link the new jGauge to the placeholder DIV.
				demoGauge3.autoPrefix = autoPrefix.si; // Use SI prefixing (i.e. 1k = 1000).
				demoGauge3.imagePath = 'img/jgauge_face_taco.png';
				demoGauge3.segmentStart = -225
				demoGauge3.segmentEnd = 45
				demoGauge3.width = 140;
				demoGauge3.height = 140;
				demoGauge3.needle.imagePath = 'img/jgauge_needle_taco.png';
				demoGauge3.needle.xOffset = 0;
				demoGauge3.needle.yOffset = 0;
                                demoGauge3.label.yOffset = 55;
                                demoGauge3.label.color = '#fff';
                                demoGauge3.label.precision = 0; // 0 decimals (whole numbers).
				demoGauge3.label.suffix = 'KG'; // Make the value label watts.
				demoGauge3.ticks.labelRadius = 35;
                                demoGauge3.ticks.labelColor = '#0ce';
                                demoGauge3.ticks.start = 50;
                                demoGauge3.ticks.end = 400;
                                demoGauge3.ticks.count = 7;
                                demoGauge3.ticks.color = 'rgba(0, 0, 0, 0)';
                                demoGauge3.range.color = 'rgba(0, 0, 0, 0)';
				
                                
				// This function is called by jQuery once the page has finished loading.

				// This is a test function that changes the gauge value.
				function setVal(value)
				{
					demoGauge1.setValue(value);
					demoGauge2.setValue(value);
				}
				
				// This is another test function that changes the gauge value.
				function bumpVal(value)
				{
					demoGauge1.setValue(demoGauge1.value + value);
					demoGauge2.setValue(demoGauge2.value + value);
				}
				
				// This is a test function that changes the number of ticks.
				function setTickCount(value)
				{
					demoGauge1.ticks.count = value;
					demoGauge1.updateTicks();
					
					demoGauge2.ticks.count = value;
					demoGauge2.updateTicks();
				}
				
				// This is a test function that changes the range styling.
				function setRange(radius, thickness, start, end, color)
				{
					demoGauge1.range.radius = radius;
					demoGauge1.range.thickness = thickness;
					demoGauge1.range.start = start;
					demoGauge1.range.end = end;
					demoGauge1.range.color = color;
					demoGauge1.updateRange();
					
					demoGauge2.range.radius = radius;
					demoGauge2.range.thickness = thickness;
					demoGauge2.range.start = start;
					demoGauge2.range.end = end;
					demoGauge2.range.color = color;
					demoGauge2.updateRange();
				}
function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

 function data_sel(wd)
 {
console.log(wd);
var res=wd.replace(/\s+/g,'');

//if(res.length > 12) {
//res = res.substring(res.indexOf('0A')+2);
//res = res.substring(0, res.indexOf('0A'));
	var wval=res.substr(4); 
	var data=(hex2a(wval));
   data = parseFloat(data).toFixed(2);
        
			//console.log(res);

		//$('#load').fadeOut(100);
 if(isNaN(data) || data <= 0) {
      data='';
    }
		document.getElementById('gross_weight').value = data;
		var tare_weight=$("#tare_weight").val();
		var net_weight=(data-tare_weight).toFixed(2);
		

    if(isNaN(net_weight) || net_weight <= 0) {
      net_weight='';
    }
		 $("#net_weight").val(net_weight);
		
	demoGauge3.setValue(data);
//}
	
 }
$(document).ready(function(){
//var app="<APPLET  name=\"sum_catch\" Publisher=\"Swarna_technology_com\" archive=\"mnc_data.jar\" code=\"mnc_data.sum_app\" width=\"0\" height=\"0\" MAYSCRIPT><param name=\"separate_jvm\" value=\"true\"/></APPLET>";
//$("body").append(app);

data_sel('11111');

$('#frame_number').focus();
higlightRow = function(row) {
	$(row).css({'background-color':'#EBF8A4','font-weight': 'Bold','color':''});
  setTimeout(function() {
    $(row).css({'background-color':'','font-weight': ''});
  }, 2000);

}
$('#frame_number').keydown( function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if(key == 13) {
            e.preventDefault();
            $("#trolly_number").focus();
        }
    });
$('#frame_number').bind("keypress input",function(e){
//reset values
  $("#trolly_number").val('');
 $("#doff_number").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
 if ( e.keyCode == 112 )
{
var frame_numb=$('#frame_number').val();
var datString = 'frame_num='+frame_numb;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
	  });
//////////////////////////////////////////////////////////////////



       return false;
	   
}



});

 $('#rec_date').bind("keypress",function(e){

 if ( e.keyCode == 112 )
{
var rec_date=$('#rec_date').val();
var datString = 'rec_date='+rec_date;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
	  });
//////////////////////////////////////////////////////////////////



       return false;
	   
}



});

/////
 $('.frame_select').bind("click",function(e){
 
 
 var sel_frame_value = $(this).data('frame');
// alert(sel_frame_value);
 
 $('#frame_number').val(sel_frame_value).blur();
$('#p3').hide();
$('#p4').show();
 return false;
   });
 $('#spell_name').bind("keypress",function(e){

 if ( e.keyCode == 112 )
{
var spell_name = $("#spell_name option:selected").val();;
var datString = 'spell_name='+spell_name;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
	  });
//////////////////////////////////////////////////////////////////



       return false;
	   
}



});

var datString;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
	  });
//////////////////////////////////////////////////////////////////

 function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
 
 
 function mn()
 {
// alert('ok');
document.sum_catch.setBackColor();

 //return false;
 }


			
					demoGauge3.init(); // Put the jGauge on the page by initializing it.
					
					// Configure demoGauge3 for random value updates.
					demoGauge3.setValue(0);
					//setInterval('randVal()', 10);
			






	////////////////////////////////////////////////////////////////++++++++++++++++++++++++===========================

////////////////////////////////////////////////////////////////////////////////++++++++++++++++++++++////////////table headar ends		



var elapsed_seconds = 0;
setInterval(function() {
  //set date
  var now = new Date();
  var toutStr = parseInt(((now.getHours()<10?'0':'') + now.getHours() )+((now.getMinutes()<10?'0':'') + now.getMinutes() )+((now.getSeconds()<10?'0':'') + now.getSeconds() ));
//console.log(toutStr);
 if(toutStr > 60001){
  $("#rec_date").datepicker('setDate',new Date());
 }
 else{
  $("#rec_date").datepicker('setDate','-1d');
 }
   var now = new Date();
   var outStr = ((now.getHours()<10?'0':'') + now.getHours() )+':'+((now.getMinutes()<10?'0':'') + now.getMinutes() )+':'+((now.getSeconds()<10?'0':'') + now.getSeconds() );
   $('#rec_time').val(outStr);
  
}, 1000);
////////////////////////////////////////////////////////////////++++++++++++++++++++++++===========================




//===================================================================================================================


		
			$( "#rec_date" ).datepicker({ dateFormat: 'dd-mm-yy',minDate: -366 ,maxDate: 0, changeYear: true });
			
			
////fetch table at start		
 $('.prev_select').bind("click",function(){

 var ph_sr=$(this).data('pr');
$('.frame_holder').hide();
 $('#fh_'+ph_sr).show();
 // alert(ph_sr);
	  	  return false;
  });	
  
  
  
  
 $('#cancel_button').bind("click",function(){
$('#save_button').attr('disabled', false);
$("#frame_number").val('');
$("#trolly_number").val('');
$("#gross_weight").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
$("#doff_number").val('');

$("#frame_number").focus();
$('#p3').show();
$('#p4').hide();
	  	  return false;
  });	
  
  
 $('#save_button').bind("click",function(){
 $('#save_button').attr('disabled', true);
var spell_name = $("#spell_name option:selected").val();
var rec_date=$("#rec_date").val();
var rec_time=$("#rec_time").val();
var frame_number=$("#frame_number").val();
var trolly_number=$("#trolly_number").val();
var gross_weight=$("#gross_weight").val();
var tare_weight=$("#tare_weight").val();
var net_weight=$("#net_weight").val();

    if(isNaN(net_weight) || net_weight <= 0) {
      alert('Invalid Net weight');
	  return false;
    }
	  if(isNaN(trolly_number) || trolly_number <= 0) {
      alert('Invalid Frame / Trolly Number');
	  return false;
    }
	
      	   var datString = 'spell_name='+ spell_name +'&frame_number='+ frame_number+'&rec_date='+ rec_date +'&rec_time='+ rec_time+'&trolly_number='+ trolly_number+'&gross_weight='+ gross_weight+'&tare_weight='+ tare_weight+'&net_weight='+ net_weight;

	 $.ajax({
      type: "POST",
      url: "auto_doff_create.php",
      data: datString,
      success: function(data){
	   $('#save_button').attr('disabled', false);
	  alert(data);
	  if(data=='Data Saved'){
$("#frame_number").val('');
$("#trolly_number").val('');
$("#gross_weight").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
$("#doff_number").val('');
$('#p3').hide();
$('#p4').show();
$("#frame_number").focus();

	  var datString;
 $.ajax({
      type: "POST",
      url: "fetch_doff_datewise_create.php",
      data: datString,
      success: function(data){

	  $("#podetails").html(data);
	  higlightRow("#podetails tr:nth-child(1) td");
 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
 
	  });
	  }


	  },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
	  });
	  return false;
  });	 

  
 $('#trolly_number').bind("input",function(){
 var spell_name = $("#spell_name option:selected").val();
var rec_date=$("#rec_date").val();
var frame_number=$("#frame_number").val();
 var trolly_number=$("#trolly_number").val();
//reset values

 $("#doff_number").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');
$("#gross_weight").val('');
      	   var datString = 'spell_name='+ spell_name +'&frame_number='+ frame_number+'&rec_date='+ rec_date+'&trolly_number='+ trolly_number;

	 $.ajax({
      type: "POST",
      url: "fetch_trolly_input_auto_doff_entry.php",
      data: datString,
      success: function(data){

	  var x = eval('(' + data + ')'); 
	 
	   $("#tare_weight").val(x.tarewt);
	    $("#doff_number").val(x.doff_no);
		$("#net_weight_total").val(x.total_netwt);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
});   
  return false;
});

	  
 $('#frame_number').bind("blur",function(){
 var spell_name = $("#spell_name option:selected").val();
var rec_date=$("#rec_date").val();
var frame_number=$("#frame_number").val();
//reset values
  $("#trolly_number").val('');
 $("#doff_number").val('');
$("#tare_weight").val('');
$("#net_weight").val('');
$("#net_weight_total").val('');

      	   var datString = 'spell_name='+ spell_name +'&frame_number='+ frame_number+'&rec_date='+ rec_date;

	 $.ajax({
      type: "POST",
      url: "fetch_trolly_auto_doff_entry.php",
      data: datString,
      success: function(data){

	  var x = eval('(' + data + ')'); 
	  $("#trolly_number").val(x.trollyno);
	   $("#tare_weight").val(x.tarewt);
	    $("#doff_number").val(x.doff_no);
		$("#net_weight_total").val(x.total_netwt);
},
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
});   
  return false;
});

 $('#update_button').bind("click",function(){
  
var fol_id = $("#fol_id option:selected").val();
 var from_date = $("#from_date").val();
  var to_date = $("#to_date").val();
			
		var url = 'daily_print.php?fol_id=' + fol_id +'&from_date='+from_date+'&to_date='+to_date;
		



window.open(url);

  return false;
});           

$("#close_terms_div").draggable({ handle: "#close_terms_div_handle" });

 $("#close_terms").live("click",function() {
 $("#close_terms_div").hide();
  $("#fetch_table").empty();
  $(".loadback").remove();
   return false;
}); 

 function doBlink() {
	var blink = document.all.tags("BLINK")
	for (var i=0; i<blink.length; i++)
		blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "" 
}

 setInterval(function() {
 
 
   //////////////////////////////////////////////////////////////////for closed trades
     //////////////////////////////////////////////////////////////////////////////////////////for open trades

var datString;
	 $.ajax({
      type: "POST",
      url: "fetch_spell_auto_doff_entry.php",
      data: datString,
      success: function(data) {
    $("#spell_name").html(data);
		},
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
});

   }, 5000);//setinterval
   

  
 $("#order_type").live("change",function(){

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	
 var sel_exchg = $("#sel_exchg option:selected").val();
 var order_type = $("#order_type option:selected").val();

 var datString = 'order_type='+ order_type+'&exchg='+ sel_exchg;
		//alert (dataString);return false;
	

$.ajax({
      type: "POST",
      url: "add_scrip_itemdata.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	
		
	$("#next2").html(data);
		$("#load").remove();


 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
     });
		return false;
	});
	
$("#sel_exchg ").live("change",function(){

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

 var sel_exchg = $("#sel_exchg option:selected").val();

 var datString = 'exchg='+ sel_exchg;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "add_scrip_itemdata.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	

		$("#load").remove();
	$("#next1").html(data);
		


 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
     });
		return false;
	});
	   
$("#submit_button").live("click",function(){

/////////create div forajax loading	
$("<div></div>").attr('class','loadback').appendTo('body');   
$(".loadback:hidden").fadeIn("slow");
/////////create div forajax loading	

 var branch_id = $("#branch_id option:selected").val();

 var datString = 'branch_id='+ branch_id;
		//alert (dataString);return false;
		

$.ajax({
      type: "POST",
      url: "add_scrip_itemdata.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	

		
	$("#fetch_table").html(data);
	$("#close_terms_div").show(100);
	
$("#order_date").datepicker({ dateFormat: 'dd-mm-yy',maxDate: 0, changeYear: true});

 },
		error: function() {
		alert("TimeOut error !");
       var url_r = "auto_doff_entry_touch.php";    
window.location.href = url_r;
   }
     });
		return false;
	});
	
$("#save_row").live("click",function(){
$("#save_row").remove();
/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

 var sel_exchg = $("#sel_exchg option:selected").val();
 var order_type = $("#order_type option:selected").val();
 var expiry = $("#expiry option:selected").val();
 var series= $("#series option:selected").val();
  var option_type= $("#option_type option:selected").val();
  var strikeprice= $("#strikeprice option:selected").val();
  var scrip_name= $("#scrip_name").val();
  
  var broker= $("#broker option:selected").val();
  var qty_inp= $("#qty_inp").val();
  var rate_inp= $("#rate_inp").val();
  var tot_price= $("#tot_price").val();
  var brok_valinp= $("#brok_valinp").val();
  var stt_inp= $("#stt_inp").val();
  var srv_chg_inp= $("#srv_chg_inp").val();
  var othr_xp= $("#othr_xp").val();
  var contract_num= $("#contract_num").val();
  
  
    var order_date= $("#order_date").val();
	var account_sel_order= $("#account_sel_order option:selected").val();
	var buy_sel= $("#buy_sel option:selected").val();

	
 var datString = 'order_type='+ order_type+'&srv_chg_inp='+ srv_chg_inp+'&exchg='+ sel_exchg+'&expiry='+ expiry+'&series='+ series+'&option_type='+ option_type+'&scrip_name='+ scrip_name+'&strikeprice='+strikeprice+'&broker='+broker+'&qty_inp='+qty_inp+'&rate_inp='+rate_inp+'&tot_price='+tot_price+'&brok_valinp='+brok_valinp+'&stt_inp='+stt_inp+'&othr_xp='+othr_xp+'&contract_num='+contract_num+'&order_date='+order_date+'&account_sel_order='+account_sel_order+'&buy_sel='+buy_sel;
 

$.ajax({
      type: "POST",
      url: "order_create.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	
alert(data);
$("#load").remove();
if(data !='invalid data'){
		
	$("#close_terms").click();
		
var datString;
	  $.ajax({
      type: "POST",
      url: "live_scrip_table.php",
      data: datString,
      success: function(data) {
        
			/////////create div forajax hide	

	
	  $("#data_table").html(data);
	  
 $('.right_click').contextMenu('myMenu1', {

      bindings: {
	  


        'view_trades': function(t) {
/////////create div forajax loading	
$("<div></div>").attr('class','loadback').appendTo('body');   
$(".loadback:hidden").fadeIn("slow");
/////////create div forajax loading	

          	var pf_id=$("#fol_id option:selected").val();
		var scrip_name=$('#'+t.id).closest('tr').find('td:eq(1)').text();
		var type=$('#'+t.id).closest('tr').find('td:eq(2)').text();
		var strk_price=$('#'+t.id).closest('tr').find('td:eq(3)').text();
		var opt_type=$('#'+t.id).closest('tr').find('td:eq(4)').text();
		var expiry=$('#'+t.id).closest('tr').find('td:eq(5)').text();
		var exchng=$('#'+t.id).closest('tr').find('td:eq(11)').text();
		var series=$('#'+t.id).closest('tr').find('td:eq(13)').text();
		var ltp=$('#'+t.id).closest('tr').find('td:eq(9)').text();
		var datString = 'pf_id='+ pf_id +'&scrip_name='+scrip_name+'&type='+type+'&strk_price='+strk_price+'&opt_type='+opt_type+'&expiry='+expiry+'&exchng='+exchng+'&series='+series+'&view=view_trades'+'&ltp='+ltp;
		
	  $.ajax({
      type: "POST",
      url: "each_open_order_details.php",
      data: datString,
      success: function(data) {
         
		 $("#fetch_table").html(data);
	$("#close_terms_div").show(100);
		 
           }//sucess ends

    });//ajax end

        },

        'combined_trades': function(t) {

          		/////////create div forajax loading	
$("<div></div>").attr('class','loadback').appendTo('body');   
$(".loadback:hidden").fadeIn("slow");
/////////create div forajax loading	


		var pf_id=$("#fol_id option:selected").val();
		var scrip_name=$('#'+t.id).closest('tr').find('td:eq(1)').text();
		var type=$('#'+t.id).closest('tr').find('td:eq(2)').text();
		var strk_price=$('#'+t.id).closest('tr').find('td:eq(3)').text();
		var opt_type=$('#'+t.id).closest('tr').find('td:eq(4)').text();
		var expiry=$('#'+t.id).closest('tr').find('td:eq(5)').text();
		var exchng=$('#'+t.id).closest('tr').find('td:eq(11)').text();
		var series=$('#'+t.id).closest('tr').find('td:eq(13)').text();
		var ltp=$('#'+t.id).closest('tr').find('td:eq(9)').text();
		var datString = 'pf_id='+ pf_id +'&scrip_name='+scrip_name+'&type='+type+'&strk_price='+strk_price+'&opt_type='+opt_type+'&expiry='+expiry+'&exchng='+exchng+'&series='+series+'&view=combined_trades'+'&ltp='+ltp;
		
	  $.ajax({
      type: "POST",
      url: "each_open_order_details.php",
      data: datString,
      success: function(data) {
         
		 $("#fetch_table").html(data);
	$("#close_terms_div").show(100);
		 
		 

		 
           }//sucess ends

    });//ajax end

        },

      
      }

    });	  //////////////////////////////////////////////////////////////////////////////////////////++++++++++++++//table headar starts						 


	  }
	  // ajaxsuccess
	  });//ajax
}
 } /////////imp succsess
     });
		return false;
	});
$("#sel_all_button").live("click",function(){

/////////create div forajax loading	
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading	

 var sel_exchg = $("#sel_exchg option:selected").val();
 var order_type = $("#order_type option:selected").val();
 var expiry = $("#expiry option:selected").val();
 var series= $("#series option:selected").val();
  var option_type= $("#option_type option:selected").val();
  var strikeprice= $("#strikeprice option:selected").val();
  var scrip_name= $("#scrip_name").val();

  
 var datString = 'order_type='+ order_type+'&exchg='+ sel_exchg+'&expiry='+ expiry+'&series='+ series+'&option_type='+ option_type+'&scrip_name='+ scrip_name+'&strikeprice='+strikeprice;
 

$.ajax({
      type: "POST",
      url: "add_scrip_itemdata.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	

		$("#load").remove();
	$("#search_table").html(data);
		


 } /////////imp succsess
     });
		return false;
	});

 $("#closed_tradeview").live('click', function() {
$("#inv_stock_list").hide(500);
$("#submit_button").hide(500);
 $("#closed_stock_list").show(500);
$("#closed_tradeview_option").show(500);
 $('#update_button').show(100);        
		 
		 return false;
   	});		
	
 $("#open_tradeview").live('click', function() {
  $("#closed_stock_list").hide(500);
$("#closed_tradeview_option").hide(500);
$("#inv_stock_list").show(500);
$("#submit_button").show(500);
$('#update_button').hide(100);
         return false;
   	});	
	
 $(".text_input").live('keypress', function(e) {

    // Calling procedure
    // onKeyPress=\"javascript:return IsNumeric(event);\" 
    //
    //alert(e);
    var KeyID = (window.event) ? event.keyCode : e.which;
	//alert(KeyID);
    if ((KeyID >= 66 && KeyID <= 90) || (KeyID >= 97 && KeyID <= 122) || (KeyID >= 33 && KeyID <= 47 && KeyID != 46) ||
	   (KeyID >= 58 && KeyID <= 64) || (KeyID >= 91 && KeyID <= 96) || (KeyID >= 123 && KeyID <= 126) || (KeyID == 32)) {
        return false;
    }
    	return true;
	});		

 $(".text_input").live('input', function(e) {

	var x= $("#qty_inp").val();
	var y= $("#rate_inp").val();
	var z= $("#brok_valper").val();
	x=parseFloat(x);
	y=parseFloat(y);
	z=parseFloat(z);
	
	if(isNaN(z)){
	z=0;
	}
	if(isNaN(x)){
	x=0;
	}
	if(isNaN(y)){
	y=0;
	}
	var b = (x*y);
	var b=b.toFixed(2);
	$("#tot_price").val(b);
	
	var c=((b*z)/100);
	var c=c.toFixed(2);
	$("#brok_valinp").val(c);
	});		
	
	
$(".scrip_sel_id").live("click",function(){
$("#search_table").hide(200);
$("#sel_all_button").remove();
$("#man_inp").show(200);
var script_name = $(this).closest('tr').find('td:eq(0)').text();




 var sel_exchg = $("#sel_exchg option:selected").val();
 var order_type = $("#order_type option:selected").val();
  var expiry = $("#expiry option:selected").val();
 var series= $("#series option:selected").val();
  var option_type= $("#option_type option:selected").val();
  var strikeprice= $("#strikeprice option:selected").val();
  var scrip_name= $("#scrip_name").val();

   if(sel_exchg=="BSE"){
  $("#scrip_name").val(script_name);
  $('#scrip_name').attr('disabled', true);
  }else{
  if(order_type=="CASH"){
  $("#scrip_name").val(script_name);
  var series = $(this).closest('tr').find('td:eq(1)').text();
  $("#series").val(series).attr('selected',true);
  $('#series').attr('disabled', true);
  $('#scrip_name').attr('disabled', true);
    }
    if(order_type=="FUTURE"){
  $("#scrip_name").val(script_name);
  $('#scrip_name').attr('disabled', true);
    var expiry = $(this).closest('tr').find('td:eq(2)').text();
  $("#expiry").val(expiry).attr('selected',true);
  $('#expiry').attr('disabled', true);
  }
    if(order_type=="OPTION"){
  $("#scrip_name").val(script_name);
  $('#scrip_name').attr('disabled', true);
  var expiry = $(this).closest('tr').find('td:eq(1)').text();
   $("#expiry").val(expiry).attr('selected',true);
  $('#expiry').attr('disabled', true);
  var option_type = $(this).closest('tr').find('td:eq(3)').text();
     $("#option_type").val(option_type).attr('selected',true);
  $('#option_type').attr('disabled', true);
    var strikeprice = $(this).closest('tr').find('td:eq(2)').text();
     $("#strikeprice").val(strikeprice).attr('selected',true);
  $('#strikeprice').attr('disabled', true);
  
  }
  }
  
 var datString = 'order_type='+ order_type+'&exchg='+ sel_exchg+'&expiry='+ expiry+'&series='+ series+'&option_type='+ option_type+'&scrip_name='+ scrip_name+'&strikeprice='+strikeprice;
 

$.ajax({
      type: "POST",
      url: "add_scrip_itemdata.php",
      data: datString,
      success: function(data) {
        	/////////create div forajax hide	

		$("#load").remove();
	$("#search_table").html(data);
		


 } /////////imp succsess
     });
		return false;
	});
	
////////////////////
	$("#update_button").live("click",function(){
$(".reply").live('click', function () {
    $(this).toggle(
            function () {
                x1();
            },
            function () {
                x2();
            }
        );
    $(this).trigger('click');
});
		return false;
	});

});
