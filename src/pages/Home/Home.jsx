import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast, getHourlyForecast } from "../../services/weatherService";


function Home() {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [city, setCity] = useState("Florianopolis");
    const [hourlyForecast, setHourlyForecast] = useState([]);

    useEffect(() => {

        async function loadWeatherData() {

            const weatherData = await getCurrentWeather(city);
            setWeather(weatherData);

            const forecastData = await getForecast(city);
            setForecast(forecastData)

            const hourlyData = await getHourlyForecast(city);
            setHourlyForecast(hourlyData);
        }

        loadWeatherData();

    }, [city]);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(

            (position) => {

                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            },

            () => {

                console.log("O usuário negou o GPS");
            }
        );
    }, []);


    return (
        <>
            <Header />
            <SearchBar city={city} setCity={setCity} />
            {weather && (
                <WeatherCard
                    weather={weather}
                    hourlyForecast={hourlyForecast}
                />
            )}
            <RecommendationCard />
            {forecast && <ForecastCard forecast={forecast} />}
        </>
    );
}

export default Home;