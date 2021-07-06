function weather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Swindon&appid=0de6fc00abc79dc9398e8181bd49765c")
    .then((temp) => temp.json())
    .then((temp) => {
       const desc = temp["main"]["temp"]
       const name = temp["weather"][0]["description"]
       const hum = temp["main"]["humidity"]
       const wind = temp["wind"]["speed"]
       const pre = temp["main"]["pressure"]
       const icon = temp["weather"][0]["main"]
       var tempCelsius = parseInt((desc-273.15))
       document.getElementById("temp").innerHTML=tempCelsius+"°C";
       document.getElementById("name").innerHTML=name;
       document.getElementById("hum").innerHTML=hum+"%";
       document.getElementById("wind").innerHTML=wind+"km/hr";
       document.getElementById("pre").innerHTML=pre;
       if(icon == "Clouds"){
        document.getElementById("icon").className="bi-cloud";
       }
       else if(icon == "Thunderstrom")
        {
            document.getElementById("icon").className="bi-cloud-lightning";
            
        }
       else if(icon == "Clear")
        {
            document.getElementById("icon").className="bi-brightness-high";
            
        }
       else if(icon == "Rainy")
        {
            document.getElementById("icon").className="bi-cloud-drizzle-fill";
            
        }
        console.log(icon)
        
       

    })
}
weather()