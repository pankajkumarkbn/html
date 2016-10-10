// investment javascript

window.addEventListener("load", start, false);

var text1;
var text2;
var text3;
var text4;
var button1;
function start()
{
    text1 = document.getElementById("initialinvestment");
    text2 = document.getElementById("monthlydeposit");
    text3 = document.getElementById("rate");
    text4 = document.getElementById("investment");
    button1 = document.getElementById("button1");
    button1.addEventListener("click", calculateInvestment);

}

function calculateInvestment(e)
{
    var v0 = parseFloat(text1.value);
    var rate = parseFloat(text2.value);
    var months = parseFloat(text3.value);
    var monthlyDeposit = parseFloat(text4.value);
    var v1 = 0;
    document.writeln("<body bgcolor=' #778899'>");
    document.writeln("<table border='1px'>");
    document.writeln("<caption>Calculating Compound Interest</caption><br/>");
    document.writeln("<thead><tr><th>Month  </th>"); 
    document.writeln("<th>Investment Value ($)</th>"); 
    document.writeln("</tr></thead><tbody>");

    for(var i = 1; i<= months;i++)
    {       
        v1 = v0 + ((v0 * rate) / (100 * 12)) + monthlyDeposit;
        v0 = v1;
        if (i % 2 !== 0)
            document.writeln("<tr><td bgcolor=' white'>" + i +
               "</td><td bgcolor=' white'>" + v1.toFixed(2) + "</td></tr>");
        else
            document.writeln("<tr><td bgcolor=' lightblue'>" + i +
               "</td><td bgcolor='lightblue'>" + v1.toFixed(2) + "</td></tr>");
    }
    document.writeln("</tbody></table></body>");
    
}