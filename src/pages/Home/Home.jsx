import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../services/weatherService";


function Home() {

    const [weather, setWeather] = useState(null);

    useEffect(() => {

        async function loadWeather() {

            const data = await getCurrentWeather("São Paulo");

            setWeather(data)

        }

        loadWeather();

    }, []);


    return (
        <>
            <Header />
            <SearchBar />
            {weather && <WeatherCard weather={weather} />}
            <RecommendationCard />
            <ForecastCard />
        </>
    );
}

export default Home;