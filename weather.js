const apikey = "b346477d00ea0c866e776f9854b29039";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".Weather-icon")


async function checkweather(city){
    const response = await fetch(apiurl + city +`&apiid=${apikey}`);



    if(response.status == "404"){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    }else{
        
    var data = await response.json() ;
    
 
    document.querySelector(".city").innerHTML= data.city;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
          weathericon.src="clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weathericon.src="clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src="drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weathericon.src="mist.png"
    }else if(data.weather[0].main == "Rain"){
        weathericon.src="rain.png"
    }else if(data.weather[0].main == "Snow"){
        weathericon.src="snow.png"
    }

    document.querySelector(".Weather").computedStyleMap.display="block";
    document.querySelector(".error").style.display="none";

    }

}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

