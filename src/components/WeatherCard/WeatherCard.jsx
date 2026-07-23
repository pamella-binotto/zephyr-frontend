import { formatHour } from "../../utils/formatHour";
import { getWeatherIcon } from "../../utils/weatherIcon";


function WeatherCard({ weather, hourlyForecast }) {

    const nextHour = hourlyForecast?.[0];
    const nextFewHours = hourlyForecast?.slice(0, 5) || [];

    return (

        <div className="max-w-md mx-auto mt-6 p-6 rounded-3xl 
        bg-blue-600 backdrop-blur-md border border-white/20
         text-white shadow-2xl">

            <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="text-2xl mt-2 font-semibold">
                    📍 {weather.city}
                </h2>
            </div>

            <h1 className="text-6xl font-bold text-center tracking-tight">
                {weather.temperature.toFixed(1)}°C
            </h1>

            <p className="text-center text-blue-100 mb-8">
                {weather.alert}
            </p>

            <hr className="mb-6 opacity-40" />

            <div className="flex justify-between items-center bg-white/10
             rounded-xl px-4 py-3 mb-3">
                <span>💧 Humidity</span>
                <span>{weather.humidity}%</span>
            </div>

            <div className="flex justify-between items-center bg-white/10 
            rounded-xl px-4 py-3 mb-3">
                <span>💨 Wind</span>
                <span>{weather.windSpeed} km/h</span>
            </div>

            <div className="mt-6">

                <h3 className="text-sm text-blue-100 mb-3">
                    Next hours
                </h3>

                <div className="flex justify-between">

                    {nextFewHours.map((hour) => (

                        <div key={hour.dateTime} className="flex flex-col items-center">
                            <img
                                src={getWeatherIcon(hour.icon)}
                                alt="weather icon"
                                className="w-10 h-10"
                            />

                            <span className="text-sm">
                                {formatHour(hour.dateTime)}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>

    );
}

export default WeatherCard;