window.addEventListener("load",start,false);
window.location.hash = '';
var text;
var averageText;
var minimumText;
var maximumText;
var Select1;
var listText;


function start() {
    text = document.getElementById("Number");
    averageText = document.getElementById("average");
    minimumText = document.getElementById("minimum");
    maximumText = document.getElementById("maximum");
    text.addEventListener("keydown", doOperation);
    //select1 = document.getElementById("sorted");
    //select1.addEventListener("change", getSelection);
    //listText = document.getElementById("secondBox");
}


function getSelection(e) {
    var textEntered = text.value;

    if (textEntered != null)
    {
        select1 = document.getElementById("sorted");
        if (select1.value == 'Original')
        {
            listText.value = text.value;
        }
        if (select1.value == 'Sorted')
        {
            var m = [];
            m = textEntered.split(":");
            var sum = 0;
            var lenght = m.length
            for (var i = 0; i < lenght; i++) {
                sum = sum + parseInt(m[i]);
            }
            m.sort(function (a, b) { return a - b });

            var sum1="";
            for (var i = 0; i < lenght; i++) {
                sum1 = sum1 + m[i] + ":";
            }
            
            listText.value = sum1;
        }
		
       

    }
}


function doOperation(e) {
    var sum = 0;
    var m = [];
    if (e.keyCode == 13) {
        var textEntered = text.value;
        m = textEntered.split(",");

        var length = m.length
        for (var i = 0; i < length; i++) {
            sum = sum + parseInt(m[i]);
        }
        averageText.value = (sum / length);

        m.sort(function (a, b) { return a - b });
        minimumText.value = m[0];
        maximumText.value = m[length - 1];
    }
    return
}