import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../../services/weatherService";


function Home() {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [city, setCity] = useState("Florianopolis")

    useEffect(() => {

        async function loadWeatherData() {

            const weatherData = await getCurrentWeather(city);
            setWeather(weatherData);

            const forecastData = await getForecast(city);
            setForecast(forecastData)
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
            <SearchBar  city={city} setCity={setCity}/>
            {weather && <WeatherCard weather={weather} />}
            <RecommendationCard />
            <ForecastCard /> 
        </>
    );
}

export default Home;