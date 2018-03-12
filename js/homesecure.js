//Theme
var primaryColor;
var secondaryColor;
var backgroundColor;
var accentColor;


//JQuery 
$(document).ready(function(){

	//var url = "https://bzyiabry.p19.rt3.io/api/states";
	var url = "http://172.19.20.41:8123/api/states"

	var temp;
	var tempName;
	var humidity;
	var humidityName;



	window.setInterval(function() {

        $.get(url, function(data, status){

        	for(var i = 0; i <  data.length; i++) {

             if(data[i].attributes.friendly_name == 'Z-Uno Humidty')
             {
               humidityName = data[i].attributes.friendly_name;
               humidity = data[i].state;
             }
              if(data[i].attributes.friendly_name == 'Z-Uno Temp')
             {

               tempName = data[i].attributes.friendly_name;
               temp = data[i].state;
             }
            

         	}


        });

        $("#temperature").text(temp);
        $("#humidity").text(humidity);



          //1000 = 1 sec
        }, 1000);







});


function setStates(){

}

function load(v){
	var child = document.getElementById("stage");

	switch(v) {
		case 1:
			select(1);
			child.src = "sensor_info.html";
			break;
		case 2:
			select(2);
			child.src="livecam.html";
			break;
		case 3:
			select(3);
			child.src="recordings.html"
			break;
		case 4:
			select(4);
			child.src="lights.html"
			break;
		case 5:
			select(5);
			child.src="locks.html"
			break;
		case 6:
			select(6);
			child.src="settings.html"
			break;
	}
	

}

function select(op){

	var opString;
	for (i = 1; i < 7; i++) {
		opString = "op" + i;
		document.getElementById(opString).style.color = "";
		document.getElementById(opString).style.background = "";
	}

	opString = "op" + op;

	document.getElementById(opString).style.background = "linear-gradient(to right, #F0E100, #EEBA0B)";
	//document.getElementById(opString).style.color= "#4C212A";
	document.getElementById(opString).style.color= "#294859";	
}

function about(){

	alert("CSC 4990 Spring 2018\nClae Carlson, Bryce Renninger, Edward C Champion");
}