$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'hover'
})
function calculate(){
    var x = parseInt(document.getElementById("num1").value)
    var y = parseInt(document.getElementById("num2").value)
    var op = document.getElementById("operation").value
    document.getElementById('result').innerHTML = eval(x + op + y)
}

    
