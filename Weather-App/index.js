// const apiKey = "322998765f647c2838fc3659de6e55ef";
// https://api.openweathermap.org/data/2.5/weather?q=kerman&appid=322998765f647c2838fc3659de6e55ef

function GetE(id){return document.querySelector(id);}
function convertCel(value){
    return (value-273).toFixed(2);

}

   var cityInput = GetE("#cityInput");
   var  AddInput = GetE("#add");

   var cityOutput = GetE("#cityoutput");
   var description = GetE("#description");
   var temp = GetE("#temp");
   var wind = GetE("#wind");
   const apiKey = "322998765f647c2838fc3659de6e55ef";

   async function GetWeather() {
    var Weather = await(
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)
    ).json();
    setInfo(Weather);
   }


function setInfo(data){
    cityOutput.innerHTML = data["name"];
    description.innerHTML = data["weather"][0]["description"];
    temp.innerHTML = convertCel(data["main"]["temp"]);
    wind.innerHTML = `${data["wind"]["speed"]} km/hr`;
}

   AddInput.addEventListener("click", GetWeather);
