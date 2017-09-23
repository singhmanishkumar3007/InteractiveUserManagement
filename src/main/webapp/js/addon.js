$(document).ready(function(){
    
    
    
    $("#login_button").click(function(e) {
        
        
        //alert('ok');
        var user_id = $("#user_id").val();
        var login_pass = $("#login_pass").val();
        if(user_id==""){
            $('.label_error').text('Invalid Employee User ID Or Password');
            return false;
            
        }else{}
        
        if(login_pass==""){
            $('.label_error').text('Invalid Employee User ID Or Password');
            return false;
            
        }else{}
        
var datString = 'user_id='+ user_id + '&user_pass=' + login_pass;


$.ajax({
      cache: false,
      type: "POST",
      url: "check_login.php",
      data: datString,
      success: function(data) {
          
      
        ///////reset inputs except button reset submit etc


        var url = "entry.php";    
            
            if(data == "Please Wait! forwarding!") {
                
                 window.location.href = url;
                 
            //setTimeout(function(){document.location.href = "page.html;"},500);
            //$(location).attr('href',url);
            
            }else{
                $('.label_error').text('Invalid Employee User ID Or Password');
                
            }

            
        
        
        
                /////////create div forajax hide    

        

        /////////create div forajax hide
    
        
         },
                error: function(obj) {

                                         console.log(JSON.stringify(obj));


                       
                    // alert('failur'+url);
                 //alert(JSON.stringify(obj));            
                alert("TimeOut error !");
                //console.log(JSON.stringify(obj));
               //var url_r = "index.php";    
                   //window.location.href = url_r;
           }
     });
     // Stop default behaviour until ajax request has been done
     e.preventDefault();
   
    });
    
    
    
    
        
        
    

/*$("#login_sbutton").click(function() {
    
    
/////////create div forajax loading    
$("<div></div>").attr('id','load').appendTo('body');   
$("#load:hidden").fadeIn("slow");
/////////create div forajax loading    





var datString;

$.ajax({
      type: "GET",
      url: "fetch_login.php",
      data: datString,
      success: function(data) {
        
        document.getElementById("content").innerHTML = data;
        
        /////////create div forajax hide    

        $('#load').fadeOut(100);

        /////////create div forajax hide    

        ////focus on field
        $("#user_id").focus();
        
        ////hide password dalay
        
        
        
        $("#login_show").hide("");
        
        $("#login_fhide").show("slide", { direction: "up" }, 500);
        
        //////////////////////////////////////////////////////////////////////////////--------------------------------------//////////////////////////
        
        
        
        //$("#login_button").click(function() {
        $('#login_button').live('click', function(){

//////////create div for ajax loading
     //$("<div></div>").attr('id','load').appendTo('body');   
    //$("#load:hidden").fadeIn("slow");
    //////////create div forajax loading    



        var user_id = $("#user_id").val();
        var login_pass = $("#login_pass").val();
        
var datString = 'user_id='+ user_id + '&user_pass=' + login_pass;


$.ajax({
      type: "POST",
      url: "check_login.php",
      data: datString,
      success: function(data) {


        ///////reset inputs except button reset submit etc

$(':input','#form1')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
///////reset inputs

///////redirect////////////
        var url = "entry.php";    
            
            if(data == "Please Wait! forwarding!") {
            
            $(location).attr('href',url);
            }
///////redirect////////////
            
        document.getElementById("return_msg").innerHTML = data;
        
        
                /////////create div forajax hide    

        $('#load').fadeOut(100);

        /////////create div forajax hide
    
        
 },
        error: function() {
        alert("TimeOut error !");
       var url_r = "index.php";    
window.location.href = url_r;
   }
     });
    return false;
    });
        
        
        
        ////////////------------------------------------------------------------///////////////////////
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
 //////////////////////////////////////////////////////////////////////////

 });


