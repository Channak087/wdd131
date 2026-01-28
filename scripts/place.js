// 1. Get Elements
const tempElement = document.querySelector('#temperature');
const windElement = document.querySelector('#windspeed');
const chillElement = document.querySelector('#windchill');

// 2. Parse Values (Metric: Celsius and km/h)
const temperature = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

// 3. Metric Wind Chill Formula
// Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
function calculateWindChillMetric(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// 4. Check Conditions (Metric)
// Metric Limits: Temp <= 10°C AND Wind > 4.8 km/h
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    const chillValue = calculateWindChillMetric(temperature, windSpeed);
    windChill = `${chillValue.toFixed(1)} &deg;C`;
} else {
    // Debugging log to see why it might fail
    console.log(`Conditions not met: Temp ${temperature} (must be <= 10), Wind ${windSpeed} (must be > 4.8)`);
}

// 5. Output Result
chillElement.innerHTML = windChill;


// --- FOOTER DATES (Bonus: Makes the footer work) ---

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').textContent = document.lastModified;