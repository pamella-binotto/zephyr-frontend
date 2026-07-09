import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ForecastCard from "../../components/ForecastCard/ForecastCard";



function Home() {
    return (
        <>
            <Header />
            <SearchBar />
            <WeatherCard />
            <RecommendationCard />
            <ForecastCard />
        </>
    );
}

export default Home;