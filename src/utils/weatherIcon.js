export function getWeatherIcon(rainProbability) {

    if (rainProbability >= 80) return "⛈️";

    if (rainProbability >= 50) return "🌧️";

    if (rainProbability >= 20) return "🌦️";

    return "☀️";
}