$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'hover'
})
function arrayify(){
    var number = document.getElementById("numInput").value;
    var arr = number.toString().split('');
    console.log(arr);
    document.getElementById("numPrint").innerHTML = "{" + arr + "}";
    
}
