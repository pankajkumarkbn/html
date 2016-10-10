// Conversion javascript

var num1Text;
var select2;
var select1;
var buttonChangeSelections;
var num2Value;
var num3Value;

function Convert()
{
    select2 = document.getElementById("Select2");
    num1Text = document.getElementById("Num1");
    var num1Value = parseFloat(num1Text.value);
    num2Text = document.getElementById("Num2");
    num3Text = document.getElementById("Num3");
    var out1 = document.getElementById("Output1");
    var out2 = document.getElementById("Output2");

   switch(select2.value)
   {
       case 'Feet':
           {
               num2Text.value = num1Value * 0.000189394;
               out1.innerHTML = " Miles";
               num3Text.value = num1Value * 0.3048;
               out2.innerHTML = " Meters";
           }
           break;
       case 'Meters':
           {
               num2Text.value = num1Value * 0.000621371;
               out1.innerHTML = " Miles";
               num3Text.value = num1Value * 3.28084;
               out2.innerHTML = " Feet";
           }
           break;
       case 'Miles':
           {
               num2Text.value = num1Value * 1609.34;
               out1.innerHTML = " Meters";
               num3Text.value = num1Value * 5280;
               out2.innerHTML = " Feet";
           }
           break;
       case 'Ounces':
           {
               num2Text.value = num1Value * 0.03125;
               out1.innerHTML = " Quarts";
               num3Text.value = num1Value * 0.0295735;
               out2.innerHTML = " Liters";
           }
           break;
       case 'Quarts':
           {
               num2Text.value = num1Value * 32;
               out1.innerHTML = " Ounces";
               num3Text.value = num1Value * 0.946353;
               out2.innerHTML = " Liters";
           }
           break;
       case 'Liters':
           {
               num2Text.value = num1Value * 33.814;
               out1.innerHTML = " Ounces";
               num3Text.value = num1Value * 1.05669;
               out2.innerHTML = " Quarts";
           }
           break;
       case 'Squarefeet':
           {
               num2Text.value = num1Value * 3.587*(0.00000001);
               out1.innerHTML = " Squaremile";
               num3Text.value = num1Value * 2.2957*(0.00001);
               out2.innerHTML = " Acre";
           }
           break;
       case 'Squaremile':
           {
               num2Text.value = num1Value * 2.788 * (10000000);
               out1.innerHTML = " Squarefeet";
               num3Text.value = num1Value * 640;
               out2.innerHTML = " Acre";
           }
           break;
       case 'Acre':
           {
               num2Text.value = num1Value * 43560;
               out1.innerHTML = " Squarefeet";
               num3Text.value = num1Value * 0.0015625;
               out2.innerHTML = " Squaremile";
           }
           break;

   }
      
   
} 


function populate(e) 
{
    select1 = document.getElementById("Select1");
    
    if (select1.value == 'Length')
        changeSelection0();
    
    if (select1.value == 'Volume')
        changeSelection1();

    if (select1.value == 'Area')
        changeSelection2();
}

function changeSelection0() {
   var option4 = document.getElementById("option4");
   option4.setAttribute("value", "Feet");
   option4.innerHTML = "Feet";
   var option5 = document.getElementById("option5");
   option5.setAttribute("value", "Meters");
   option5.innerHTML = "Meters";
   var option6 = document.getElementById("option6");
   option6.setAttribute("value", "Miles");
   option6.innerHTML = "Miles";
}
function changeSelection1()
{
    var option4 = document.getElementById("option4");
    option4.setAttribute("value", "Ounces");
    option4.innerHTML = "Ounces";
    var option5 = document.getElementById("option5");
    option5.setAttribute("value", "Quarts");
    option5.innerHTML = "Quarts";
    var option6 = document.getElementById("option6");
    option6.setAttribute("value", "Liters");
    option6.innerHTML = "Liters";
}
function changeSelection2()
{
    var option4 = document.getElementById("option4");
    option4.setAttribute("value", "Squarefeet");
    option4.innerHTML = "Squarefeet";
    var option5 = document.getElementById("option5");
    option5.setAttribute("value", "Squaremile");
    option5.innerHTML = "Squaremile";
    var option6 = document.getElementById("option6");
    option6.setAttribute("value", "Acre");
    option6.innerHTML = "Acre";
}