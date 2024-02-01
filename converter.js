// JavaScript source code
var kiloM = document.getElementById("km");
var meter = document.getElementById("m");
var kiloG = document.getElementById("kg");
var gram = document.getElementById("g");
var celsius = document.getElementById("celsius");
var farenheit = document.getElementById("farenheit");
var celsiusinkelvin = document.getElementById("celsiusinkelvin");
var kelvin = document.getElementById("kelvin");

function convertkm() {
    var y = kiloM.value;
    var z = y * 1000;
    var x = meter.value = z;
    return x
}

function convertm() {
    var y = meter.value;
    var z = y / 1000;
    var x = kiloM.value = z;
    return x
}
function convertkg() {
    var y = kiloG.value;
    var z = y * 1000;
    var x = gram.value = z;
    return x
}
function convertg() {
    var y = gram.value;
    var z = y / 1000;
    var x = kiloG.value = z;
    return x
}

function convertcelsius() {
    var y = celsius.value;
    var z = y * (9 / 5) + 32;
    var x = farenheit.value = z;
    return x;
}
function convertfarenheit() {
    var y = farenheit.value;
    var z = (5 / 9) * (y - 32);
    var x = celsius.value = z;
    return x;
}

function convertcelsiustokelvin() {
    var y = celsiusinkelvin.value;
    var num = parseInt(y);
    var z = num + 273;
    var x = kelvin.value = z;
    return  x;
}
function convertkelvintocelsius() {
    var y = kelvin.value;
    var num = parseInt(y);
    var z = num - 273;
    var x = celsiusinkelvin.value = z;
    return  x;
}
