import {formatDate} from "../../utils/dateFormatter"

function ForecastCard({ forecast }) {

    return (
        <div>
            {forecast.map((day) => (

                <div key={day.date}>

                    <h3>{formatDate(day.date)}</h3>

                    <p>Max: {day.maxTemp.toFixed(1)}°C </p>
                    <p>Min: {day.minTemp.toFixed(1)}°C </p>
                    <p>Rain: {day.rainProbability}% </p>

                </div>

            ))}
        </div>
    );
}

export default ForecastCard;