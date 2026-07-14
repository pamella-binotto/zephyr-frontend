import weatherService from "../../services/weatherService"

function WeatherCard({weather}){
    return(
        <div>

            <h2>{weather.city}</h2>
            <h3>{weather.temperatura}</h3>
            <h3></h3>
        </div>

    );
}

export default WeatherCard;