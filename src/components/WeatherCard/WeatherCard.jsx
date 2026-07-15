function WeatherCard({ weather }) {
    return (
        <div>
            <h2>{weather.city}</h2>
            <h3>{weather.temperature}°C</h3>
            <p>Umidade: {weather.humidity}%</p>
            <p>Vento: {weather.windSpeed} km/h</p>
            <p>{weather.alert}</p>
        </div>
    );
}

export default WeatherCard;