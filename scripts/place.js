// Get Elements
const tempElement = document.querySelector('#temperature');
const windElement = document.querySelector('#windspeed');
const chillElement = document.querySelector('#windchill');

// Parse Values
const temperature = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

// Metric Wind Chill Formula
function calculateWindChillMetric(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check Conditions (Temp <= 10°C AND Wind > 4.8 km/h)
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    const chillValue = calculateWindChillMetric(temperature, windSpeed);
    windChill = `${chillValue.toFixed(1)} &deg;C`;
}

// Display Result
chillElement.innerHTML = windChill;

// Footer Dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;