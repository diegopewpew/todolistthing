$(function () {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'hover'
})
function insertComma(){
    var number = document.getElementById("numInput").value;
    var locale = document.getElementById("locale").value;
    console.log(locale);
    number = parseFloat(number).toLocaleString(locale);
    document.getElementById("numPrint").innerHTML = number;
}