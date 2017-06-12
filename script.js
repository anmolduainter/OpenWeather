var APPID="53d7b6c5ae9a22f2a044a11865b41222";
var temp;
var icon;

function updateByZip(zip){

   var url="http://api.openweathermap.org/data/2.5/weather?q="+zip+"&APPID="+APPID;
   sendRequest(url);
}


function sendRequest(url){

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
              var data=JSON.parse(xmlhttp.responseText);
              var weather={};
              weather.temp=data.main.temp;
              weather.icon=data.weather[0].icon;
              console.log(weather.icon);
              update(weather);
		}
	}

    xmlhttp.open('GET',url,true);
    xmlhttp.send();

}

function update(weather){

   temp.innerHTML=weather.temp;
   icon.src="http://openweathermap.org/img/w/"+weather.icon+".png";
   console.log(icon.src);

}

window.onload=function(){

    temp=document.getElementById('temp');
    icon=document.getElementById('icon');
    updateByZip('Sydney');

}