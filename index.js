var num;
var num1;
var num2;
var act;
var ans;
var a;
var resultClear;
var actStatus;
var verse;
var moreBstatus;
var anChstatus;
var nav;

function side1() {
    document.getElementById("sidenav").style.display = "block";
    document.getElementById("title").style.visibility = "hidden";
    nav = true;
}

function side2() {
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("title").style.visibility = "visible";
}

function showSci() {
    document.getElementById("buttons").style.visibility = "hidden";
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("scientific").style.display = "block";
    document.querySelector("#title span").innerHTML = "Scientific";
    document.getElementById("title").style.visibility = "visible";
    document.getElementById("bigscreen").innerHTML = 0;
    document.getElementById("smallscreen").innerHTML = "";
}

function showStandard() {
    document.getElementById("scientific").style.display = "none";
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("buttons").style.visibility = "visible";
    document.querySelector("#title span").innerHTML = "Standard";
    document.getElementById("title").style.visibility = "visible";
    document.getElementById("bigscreen").innerHTML = 0;
    document.getElementById("smallscreen").innerHTML = "";
}

function opera(i) {
    act = i
    var sign
    if (act == "-") {
        sign = "<span>&minus;</span>";
    } else if (act == "*") {
        sign = "<span>&Cross;</spa>";
    } else if (act == "/") {
        sign = "<span>&divide;</spa>";
    } else if (act == "+") {
        sign = "<span>&plus;</spa>";
    } else if (act == "mod") {
        sign = " Mod "
    }
    actStatus = true;
    num1 = parseFloat(document.getElementById("bigscreen").innerHTML);
    document.querySelector("#smallscreen").innerHTML += (document.getElementById("bigscreen").innerHTML);
    document.querySelector("#smallscreen").innerHTML += sign;
    document.querySelector("#bigscreen").innerHTML = ""
}

function buttonShow(i) {
    var sc = document.querySelector("#bigscreen");
    if (verse == true) {
        document.querySelector("#smallscreen").innerHTML = "";
        verse = false;
    }
    if (resultClear == true || actStatus == false) {
        sc.innerHTML = "";
        resultClear = false;
    }
    if (sc.innerHTML === "0") {
        sc.innerHTML = "";
    }
    if (i === "." || i === "-") {
        num = i;
        var sign = document.querySelector("#bigscreen").innerHTML;
        if (i === "-") {
            var out = sign.search('-');
            if (sign.length = 1) {
                document.querySelector("#bigscreen").innerHTML = "";
                if (out != -1) {
                    document.querySelector("#bigscreen").innerHTML = sign.slice(0, -1);
                    num = '+';
                } else {
                    num = '-';
                }
            }
        }
        document.querySelector("#bigscreen").append(num);
    } else {
        num = parseInt(i)
        document.querySelector("#bigscreen").append(num)
    }
}

function result() {
    num2 = parseFloat(document.getElementById("bigscreen").innerHTML);
    console.log(num1);
    console.log(num2);
    console.log(act);
    if (num2 == "" || !num2) {
        ans = 0;
    } else if (num2) {
        ans = num2;
    }

    if (act === "-") {
        ans = num1 - num2;
    }
    else if (act === "+") {
        ans = num1 + num2;
    } else if (act === "*") {
        ans = num1 * num2;
    } else if (act === "/") {
        ans = num1 / num2;
    } else if (act === "**") {
        var but = document.getElementById("powy");
        console.log("working 1");
        console.log(but);
        // if (but.innerHTML == "<sup>y</sup>&Sqrt;<sub>x</sub>") {
        //     console.log("working");
        // } 
        // else {
        //     ans = num1 ** num2;
        // }
    } else if (act === "mod") {
        ans = num1 % num2;
    } else if (act === "**" && document.getElementById("powy").innerHTML == `<sup>y</sup>&Sqrt;<sub>x</sub>`) {
        console.log("working");
    }
    if (!num2) {
        ans = 0;
    }
    console.log(ans);
    document.querySelector("#smallscreen").innerHTML = "";
    document.getElementById("bigscreen").innerHTML = ans;
    resultClear = true;
}

function pow() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("pow2");
    if (but.innerHTML == "x<sup>3</sup>") {
        document.getElementById("bigscreen").innerHTML = num1 ** 3;
        var info = `cube(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
    } else {
        document.getElementById("bigscreen").innerHTML = num1 ** 2;
        var info = `sqr(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
    }
}

function sq() {
    num1 = parseFloat(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("sqr")
    if (but.innerHTML == "<sup>1</sup>/<sub>x</sub>") {
        inverse()
    } else {
        if (document.querySelector('#bigscreen').innerHTML[0] == '-') {
            document.getElementById("bigscreen").innerHTML = 'Invalid input';
            document.getElementById("smallscreen").innerHTML = "&Sqrt;(" + num1 + ")";
        } else {
            document.getElementById("bigscreen").innerHTML = Math.sqrt(num1);
            document.getElementById("smallscreen").innerHTML = "&Sqrt;(" + num1 + ")";
        }
    }
}

function inverse() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    if (num1 == 0) {
        document.getElementById("bigscreen").style.fontSize = "300%";
        document.getElementById("bigscreen").innerHTML = "can't be divide by zero";
    } else {
        var info = `1/(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
        document.getElementById("bigscreen").innerHTML = (1 / num1);
        verse = true;
    }
    resultClear = true;
    actStatus = false;
}

function screenClear() {
    document.querySelector("#bigscreen").innerHTML = "";
    document.querySelector("#bigscreen").innerHTML = 0;
}

function allClear() {
    document.querySelector("#bigscreen").innerHTML = "";
    document.querySelector("#bigscreen").innerHTML = 0;
    document.querySelector("#smallscreen").innerHTML = "";
}

function del() {
    var go = document.getElementById("bigscreen").innerHTML;
    var so;
    if (resultClear == true) {
        so = go;
        // resultClear = false;
    } else {
        so = go.slice(0, -1)
        if (so === "") {
            so = 0;
        }
    }
    document.getElementById("bigscreen").innerHTML = so;
}

// scientific functions

function anCh() {
    if (document.getElementById("sin").innerHTML == "sin" || document.getElementById("sin").innerHTML == "sin<sup>-1</sup>" && moreBstatus == false) {
        document.getElementById("sin").innerHTML = "sinh";
        document.getElementById("cos").innerHTML = "cosh";
        document.getElementById("tan").innerHTML = "tanh";
        document.getElementById("hyp").style.borderBottom = "2px solid blue";
        anChstatus = true;
    } else {
        document.getElementById("sin").innerHTML = "sin";
        document.getElementById("cos").innerHTML = "cos";
        document.getElementById("tan").innerHTML = "tan";
        document.getElementById("hyp").style.borderBottom = "0px solid blue";
        anChstatus = false;
    }
    // if (document.getElementById("sin").innerHTML == "sin" || document.getElementById("sin").innerHTML == "sin<sup>-1</sup>" && moreBstatus == true) {
    //     document.getElementById("sin").innerHTML = "sinh<sup>-1</sup>";
    //     document.getElementById("cos").innerHTML = "cosh<sup>-1</sup>";
    //     document.getElementById("tan").innerHTML = "tanh<sup>-1</sup>";
    //     document.getElementById("hyp").style.borderBottom = "2px solid blue";
    //     anChstatus = true;
    // } else {
    //     document.getElementById("sin").innerHTML = "sinh";
    //     document.getElementById("cos").innerHTML = "cosh";
    //     document.getElementById("tan").innerHTML = "tanh";
    //     document.getElementById("hyp").style.borderBottom = "0px solid blue";
    //     anChstatus = false;
    // }
}

function moreB() {
    if (document.getElementById("pow2").innerHTML == "x<sup>2</sup>") {
        document.getElementById("pow2").innerHTML = "x<sup>3</sup>";
        document.getElementById("powy").style.paddingTop = "0.3rem";
        document.getElementById("powy").innerHTML = "<sup>y</sup>&Sqrt;<sub>x</sub>";
        if (anChstatus == true) {
            document.getElementById("sin").style.paddingBottom = "0.3rem";
            document.getElementById("sin").innerHTML = "sinh<sup>-1</sup>";
            document.getElementById("cos").style.paddingBottom = "0.3rem";
            document.getElementById("cos").innerHTML = "cosh<sup>-1</sup>";
            document.getElementById("tan").style.paddingBottom = "0.3rem";
            document.getElementById("tan").innerHTML = "tanh<sup>-1</sup>";
        } else {
            document.getElementById("sin").style.paddingBottom = "0.3rem";
            document.getElementById("sin").innerHTML = "sin<sup>-1</sup>";
            document.getElementById("cos").style.paddingBottom = "0.3rem";
            document.getElementById("cos").innerHTML = "cos<sup>-1</sup>";
            document.getElementById("tan").style.paddingBottom = "0.3rem";
            document.getElementById("tan").innerHTML = "tan<sup>-1</sup>";
        }
        document.getElementById("sqr").innerHTML = "<sup>1</sup>/<sub>x</sub>";
        document.getElementById("tenx").innerHTML = "e<sup>x</sup>";
        document.getElementById("log").innerHTML = "ln";
        document.getElementById("exp").innerHTML = "dms";
        document.getElementById("mod").innerHTML = "deg";
        document.getElementById("more").style.borderBottom = "2px solid blue";
        moreBstatus = true;
    } else {
        document.getElementById("more").style.borderBottom = "0px solid blue";
        document.getElementById("pow2").innerHTML = "x<sup>2</sup>";
        document.getElementById("powy").style.paddingTop = "0rem";
        document.getElementById("powy").innerHTML = "x<sup>y</sup>";
        if (anChstatus == true) {
            document.getElementById("sin").style.paddingBottom = "0rem";
            document.getElementById("sin").innerHTML = "sinh";
            document.getElementById("cos").style.paddingBottom = "0rem";
            document.getElementById("cos").innerHTML = "cosh";
            document.getElementById("tan").style.paddingBottom = "0rem";
            document.getElementById("tan").innerHTML = "tanh";
        } else {
            document.getElementById("sin").style.paddingBottom = "0rem";
            document.getElementById("sin").innerHTML = "sin";
            document.getElementById("cos").style.paddingBottom = "0rem";
            document.getElementById("cos").innerHTML = "cos";
            document.getElementById("tan").style.paddingBottom = "0rem";
            document.getElementById("tan").innerHTML = "tan";
        }
        document.getElementById("sqr").innerHTML = "&Sqrt;";
        document.getElementById("tenx").innerHTML = "10<sup>x</sup>";
        document.getElementById("log").innerHTML = "log";
        document.getElementById("exp").innerHTML = "Exp";
        document.getElementById("mod").innerHTML = "Mod";
        moreBstatus = false;
    }
}

function aSin() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("sin");
    var out;
    if (but.innerHTML == "sin") {
        out = Math.sin(num1 * Math.PI / 180);
        document.getElementById("bigscreen").innerHTML = out;
        var info = `sin<sub>0</sub>(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
    }
    else if (but.innerHTML == "sinh") {
        out = Math.sinh(num1);
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
        }
        document.getElementById("bigscreen").innerHTML = out;
        var info = `sinh(${num1})`
        document.getElementById("smallscreen").innerHTML = info;
    }
    else if (but.innerHTML == "sin<sup>-1</sup>") {
        out = Math.asin(num1);
        document.getElementById("bigscreen").innerHTML = out;
        var info = `sin<sub>0</sub><sup>-1</sup>(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
    }
    // else {

    // }
}

function aCos() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("cos");
    var out;
    if (but.innerHTML == "cos") {
        out = Math.sin((90 - num1) * Math.PI / 180);
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
        }
        document.getElementById("bigscreen").innerHTML = out;
        var info = `cos<sub>0</sub>(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
    } else if (but.innerHTML == "cosh") {
        out = Math.cosh(num1);
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
        }
        document.getElementById("bigscreen").innerHTML = out;
        var info = `cosh(${num1})`
        document.getElementById("smallscreen").innerHTML = info;
    }
}

function aTan() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("tan");
    var out;
    if (but.innerHTML == "tan") {
        out = Math.ceil(Math.tan(num1 * Math.PI / 180));
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
            out = "Invalid input";
        }
        document.getElementById("bigscreen").innerHTML = out;
        var info = `tan<sub>0</sub>(${num1})`;
        document.getElementById("smallscreen").innerHTML = info;
    } else if (but.innerHTML == "tanh") {
        out = Math.tanh(num1);
        // if (out.length == undefined) {
        //     document.getElementById("bigscreen").style.fontSize = "280%"
        // }
        document.getElementById("bigscreen").innerHTML = out;
        var info = `tanh(${num1})`
        document.getElementById("smallscreen").innerHTML = info;
    }
}

function tenP() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("tenx")
    if (but.innerHTML == "e<sup>x</sup>") {
        var out = Math.exp(num1);
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
        }
        var info = `e^(${num1})`;
        document.getElementById("bigscreen").innerHTML = out;
        document.getElementById("smallscreen").innerHTML = info;
    } else {
        var out = 10 ** num1;
        var info = `10^(${num1})`;
        document.getElementById("bigscreen").innerHTML = out;
        document.getElementById("smallscreen").innerHTML = info;
    }
}

function myLog() {
    num1 = parseInt(document.getElementById("bigscreen").innerHTML);
    var but = document.getElementById("log");
    if (but.innerHTML == "ln") {
        var out = Math.log(num1);
        if (out == "-Infinity") {
            out = "Invalid input";
        }
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
        }
        var info = `ln(${num1})`;
        document.getElementById("bigscreen").innerHTML = out;
        document.getElementById("smallscreen").innerHTML = info;
    } else {
        var out = Math.log10(num1);
        if (out == "-Infinity") {
            out = "Invalid input";
        }
        if (out.length == undefined) {
            document.getElementById("bigscreen").style.fontSize = "280%"
        }
        var info = `log(${num1})`;
        document.getElementById("bigscreen").innerHTML = out;
        document.getElementById("smallscreen").innerHTML = info;
    }
}

function myPi() {
    var out = Math.PI;
    document.getElementById("bigscreen").innerHTML = out;
}

function fac() {
    var a = 1;
    num1 = parseFloat(document.getElementById("bigscreen").innerHTML);
    for (let index = num1; index > 0; index--) {
        a *= index;
    }
    var out = a;
    var info = `fact(${num1})`;
    document.getElementById("bigscreen").innerHTML = out;
    document.getElementById("smallscreen").innerHTML = info;
}