const weatherKey = "04a40ae72b9bcee7272841f1cccb0cd9"

const DOM_Elements = {
    weather: '.weatherornot'
}

const getWeather = async(getCity)=>{
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=imperial&appid=${weatherKey}`)
    console.log(response.data)
    return response.data
}
const weatherReport = (temp_max, temp_min, main, humidity) =>{
    const html = `<div class="container" style="color:white">
    <h1 class="display-1">${temp_max}</h1>
    <strong>High</strong>
    <h1 class="display-2">${temp_min}</h1>
    <strong>Low</strong>
    <h1 class="display-3">${main}</h1>
    <strong>Forecast</strong>
    <h1 class="display-4">${humidity}</h1>
    <strong>Humidity</strong>
    </div>`
    

    document.querySelector(DOM_Elements.weather).insertAdjacentHTML("beforeend", html)
}



const weatherORnotThisLoads = async(getCity) =>{
    clearData()
    const weatherRep = await getWeather(getCity);
    
    weatherReport(weatherRep.main.temp_max, weatherRep.main.temp_min, weatherRep.weather[0].main, weatherRep.main.humidity)
}

const form = document.querySelector('#weather')

form.addEventListener('submit', ( event ) =>{
    event.preventDefault()
    let getCity = event.path[0][0].value
    console.log(getCity)
    weatherORnotThisLoads(getCity)
})

const clearData = ()=>{
    document.querySelector(DOM_Elements.weather).innerHTML = ''
}