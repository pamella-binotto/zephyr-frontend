import { formatDate } from "../../utils/dateFormatter"
import { getWeatherIconEmoj } from "../../utils/weatherIcon";

function ForecastCard({ forecast }) {

    return (
        <div className="max-w-6xl mx-auto mt-8 px-4">

    <h2 className="text-2xl font-bold mb-6 text-black">
        Next 5 days
    </h2>

    
    <div className="flex gap-4 overflow-x-auto pb-2">

        {forecast.map((day) => (

            <div
                key={day.date}
                className="min-w-[170px] bg-blue-500/70 backdrop-blur-md 
                rounded-2xl p-5 shadow-lg text-white"
            >

                <h3 className="text-xl text-center font-semibold mb-4">
                    {formatDate(day.date)}
                </h3>

                <p className="text-center text-4xl mb-4">
                    {getWeatherIconEmoj(day.rainProbability)}
                </p>

                <div className="space-y-2">

                    <p>⬆️ {day.maxTemp.toFixed(1)}°C</p>

                    <p>⬇️ {day.minTemp.toFixed(1)}°C</p>

                    <p>🌧️ {day.rainProbability}%</p>

                    <p>💨 {day.windSpeed.toFixed(1)} km/h</p>

                </div>

            </div>

        ))}

    </div>

</div>
    );
}

export default ForecastCard;