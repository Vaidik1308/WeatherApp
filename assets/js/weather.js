const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '345235cc3fmshcb9f728f7bd1c74p132690jsn6b9132063243',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const displayCity = document.querySelector('.location_name');
function getWeather(){
	// const mycity = 'sunnyvale';
	const city = document.querySelector('.placeName').value
	fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
	.then(response => response.json())
	.then(data => {
		// console.log(data);
		// console.log(data.location.city);
		// console.log(data.current_observation.condition.text)
		// console.log(data.forecasts[0].low)
		// console.log(data.forecasts[0].high)
		displayCity.innerHTML = `<h3><span>${city}</span></h3>`
		setTemp(data.current_observation.condition.text, data.current_observation.condition.temperature,data.forecasts[0].low, data.forecasts[0].high)
	})
	.catch(err => console.error(err));
}
// const searchCity = () => {
// 	const city = document.querySelector('.location_name')
// }

function setTemp(weatherInfo,tempInfo,minTempInfo,maxTempInfo)
{
	const weatherType = document.querySelector('.weather_type');
	const temp = document.querySelector('.temp');
	const minTemp = document.querySelector('.min_temp');
	const maxTemp = document.querySelector('.max_temp');

	weatherType.innerHTML = `<h2>${weatherInfo}</h2>`;
	temp.innerHTML = `<h3>Temperature: ${tempInfo} &#8457;</h3>`;
	minTemp.innerHTML = `<h3>Minimum: ${minTempInfo} &#8457;</h3>`;
	maxTemp.innerHTML = `<h3>Maximum: ${maxTempInfo} &#8457;</h3>`;
}
// const locationName = document.querySelector('.location_name');
const btn = document.querySelector('.btn');
btn.onclick = () => {
	getWeather();
}
document.querySelector('.placeName').addEventListener('keypress', (e) => {
	if(e.code === 'Enter'){
		getWeather();
	}
})