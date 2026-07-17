import {formatDate} from "../../utils/dateFormatter"

function ForecastCard({ forecast }) {

    return (
        <div>
            {forecast.map((day) => (

                <div key={day.date}>

                    <h3>{formatDate(day.date)}</h3>

                    <p>Humidity: {day.humidity}</p>
                    <p>Max: {day.maxTemp.toFixed(1)}°C </p>
                    <p>Min: {day.minTemp.toFixed(1)}°C </p>
                    <p>Rain: {day.rainProbability}% </p>
                    <p>Rain Alert: {day.rainAlert}</p>
                    <p>Wind: {day.windSpeed.toFixed(1)} km/h</p>
                    <p>Wind Alert: {day.windAlert}</p>

                    <br />

                </div>

            ))}
        </div>
    );
}

export default ForecastCard;