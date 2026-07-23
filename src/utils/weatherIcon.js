export function getWeatherIconEmoj(rainProbability) {

    if (rainProbability >= 80) return "⛈️";

    if (rainProbability >= 50) return "🌧️";

    if (rainProbability >= 20) return "🌦️";

    return "☀️";
}

export function getWeatherIcon(icon) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}