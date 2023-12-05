const API_KEY = "ce9df8ebbf3610b44b2fc03caafb8f4b";
const weatherMain = document.querySelector("#weather-wrap-main");
const weatherDetail = document.querySelector("#weather-detail");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("lang long test", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    //console.log(url);
    fetch(url)
    .then((resopnse) => resopnse.json())
    .then((data) => {
        const name = data.name;
        const weather = data.weather[0].main;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const temp_min = data.main.temp_min;
        const temp_max = data.main.temp_max;
        const windSpeed = data.wind.speed;
        const country = data.sys.country;
       // console.log("Name:", name, "Weather:", weather, "Description:", description, "Icon:", icon, "Temperature:", temp, "Feels Like:", feelsLike, "Country:", country);
        weatherMain.innerHTML = `<img src="icons/${icon}.png" style="width: 5rem; height:5rem">
                                <div id="temp-wrap">
                                    <span style="font-size:1.5rem;">${temp}°C</span>
                                    <span style="font-size:1.2rem;">${name}</span>
                                </div>`;

        weatherDetail.innerHTML = `<div style="font-size:1.5rem;">${name}, ${country}</div>
                                    <div style="font-size:1rem; color:gray">${description}</div>
                                    <div id="weather-info-wrap"> 
                                        <div id="weather-info-wrap-icon">
                                            <img src="icons/${icon}.png" style="width: 5rem; height:5rem">
                                            <span style="font-size:3rem;">${temp}°C</span>
                                        </div>
                                        <div id="weather-info-wrap-detail">
                                            <div>
                                                <span>체감 온도</span>
                                                <span>${feelsLike}°C</span>
                                            </div>
                                            <div>
                                                <span>최고 온도</span>
                                                <span>${temp_max}°C</span>
                                            </div>
                                            <div>
                                                <span>최저 온도</span>
                                                <span>${temp_min}°C</span>
                                            </div>
                                            <div>
                                                <span>풍속</span>
                                                <span>${windSpeed} m/s</span>
                                            </div>
                                        </div>
                                    </div>`;
    
    });
}
function onGeoError() {
    weatherMain.innerHTML = `<img src="icons/unknown.png" style="width: 5rem; height:5rem">
                            <div>위치 못찾음</div>`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function weatherDetailToggle() {
    weatherDetail.classList.toggle("hidden");
}

weatherMain.addEventListener("click", weatherDetailToggle);



// <div id="weather-detail" class="hidden">
                                //     <div style="font-size:1.5rem;">${name}, ${country}</div>
                                //     <div style="font-size:1rem; color:gray">${description}</div>
                                //     <div id="weather-info-wrap"> 
                                //         <div id="weather-info-wrap-icon">
                                //             <img src="icons/${icon}.png" style="width: 5rem; height:5rem">
                                //             <span style="font-size:3rem;">${temp}°C</span>
                                //         </div>
                                //         <div id="weather-info-wrap-detail">
                                //             <div>
                                //                 <span>체감 온도</span>
                                //                 <span>${feelsLike}°C</span>
                                //             </div>
                                //             <div>
                                //                 <span>최고 온도</span>
                                //                 <span>${temp_max}°C</span>
                                //             </div>
                                //             <div>
                                //                 <span>최저 온도</span>
                                //                 <span>${temp_min}°C</span>
                                //             </div>
                                //             <div>
                                //                 <span>풍속</span>
                                //                 <span>${windSpeed} m/s</span>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>