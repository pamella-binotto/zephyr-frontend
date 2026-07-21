function WeatherCard({ weather, hourlyForecast }) {

    const nextHour = hourlyForecast?.[0];

    return (

        <div className="max-w-md mx-auto mt-6 p-6 rounded-2xl 
        bg-blue-600 text-white shadow-xl">

            <div className="flex items-center justify-center gap-2 mb-4">
                <span>📍</span>
                <h2 className="text-2xl font-semibold">
                    {weather.city}
                </h2>
            </div>

            <h1 className="text-6xl font-bold text-center">
                {weather.temperature.toFixed(1)}°C
            </h1>

            <p className="text-center mt-2 mb-6">
                {weather.alert}
            </p>

            <hr className="mb-6 opacity-40" />

            <div className="flex justify-between items-center mb-3">
                <span>💧 Humidity</span>
                <span>{weather.humidity}%</span>
            </div>

            <div className="flex justify-between items-center mb-3">
                <span>💨 Wind</span>
                <span>{weather.windSpeed} km/h</span>
            </div>

            <div className="flex justify-between items-center mb-3">
                <span>🌦️ Next Hour</span>
                <span>{nextHour
                    ? `${nextHour.rainProbability}%`
                    : "--"}</span>
            </div>

        </div>

    );
}

export default WeatherCard;