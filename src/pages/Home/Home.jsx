import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast, getHourlyForecast, getAiRecommendation } from "../../services/weatherService";


function Home() {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [city, setCity] = useState("Florianópolis");
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [recommendation, setRecommendation] = useState("");

    useEffect(() => {

        async function loadWeatherData() {

            const weatherData = await getCurrentWeather(city);
            setWeather(weatherData);

            const forecastData = await getForecast(city);
            setForecast(forecastData)

            const hourlyData = await getHourlyForecast(city);
            setHourlyForecast(hourlyData);

            const recommendationData = await getAiRecommendation(city);
            setRecommendation(recommendationData);
        }

        loadWeatherData();

    }, [city]);


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
            <RecommendationCard recommendation={recommendation} />
            {forecast && <ForecastCard forecast={forecast} />}
        </>
    );
}

export default Home;