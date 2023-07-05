function clearScreen() {
    document.getElementById("box").value = "";
}
 
function display(value) {
    document.getElementById("box").value += value;
}
function calculate() {
    var p = document.getElementById("box").value;
    var q = eval(p);
    document.getElementById("box").value = q;
}
