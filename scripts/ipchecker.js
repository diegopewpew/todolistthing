$(function () {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'hover'
})
function validateIP(){
    var number = document.getElementById("numInput").value;
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(number.match(ipformat)){
        document.getElementById("numPrint").innerHTML = "Valid";
    }
    else{
        document.getElementById("numPrint").innerHTML = "Invalid";
    }
    return false;
  
    
}