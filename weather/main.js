var ID = '18640571d895ecc35388e2ac95f3639c';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'city.json', true);
xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    buildLoyaut(xhr.responseText);
  }
  else{
    console.log('in progress, '+ xhr.readyState);
  }
}

function buildLoyaut(data){
  var response = JSON.parse(data);
  var select = document.querySelector('select');
  select.addEventListener('change', function(){
    for (var i = 0; i < select.options.length; i++) {
      var option = select.options[i];
      if(option.selected) {
        var selected = option.value;
      }
    }
    for(var key in response){
      if(response[key].name==selected){
        var id = response[key].id;
        var weatherButton = document.querySelector('.get-weather');
        weatherButton.onclick = function(){
          requestWeather(id)};
        
      }
    }
  })

}

function requestWeather(cityId){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      showWeather(this.responseText);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&units=metric&appid="+ ID, true);
  xhttp.send();
}
function showWeather(data){
  data = JSON.parse(data);
  var div = document.getElementById('weather');
  var out ='';
  out += 'Погода: <b>'+ data.weather[0].main+'</b><br>';
  out+='<p><img src="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></p>';
  out+='Температура: <b>' + Math.round(data.main.temp)+'&#176; C</b><br>';
  out+='Влажность: <b>'+data.main.humidity+'%</b><br>';
  out+='Давление: <b>'+data.main.pressure+' гектопаскаль</b><br>';
  out+='Видимость: <b>'+(data.visibility/1000)+'км</b><br>';
  console.log(data.main);
  div.innerHTML = out;
}