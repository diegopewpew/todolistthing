$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'hover'
})
function validateCC(){
    var number = document.getElementById("numInput").value;
    if((number.length === 13 || number.length === 16 || number.length === 19) && number[0] == 4){
        document.getElementById("numPrint").innerHTML = "Valid";
    }
    else{
        document.getElementById("numPrint").innerHTML = "Invalid";
    }

    
}