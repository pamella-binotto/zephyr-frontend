import api from "./api";
import axios from "axios";

export async function getCurrentWeather(city) {

    const response = await api.get(`/weather/current/${city}`);

    return response.data;

}

export async function getForecast(city) {

    const response = await api.get(`/weather/forecast/${city}`);

    return response.data;

}

export async function getHourlyForecast(city) {

    const response = await api.get(`/weather/forecast/hourly/${city}`);
    return response.data;
}

export async function getCityByCoordinates(lat, lon) {

    try {
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );

        const data = response.data;

        return (
            data.address.city ||
            data.address.town ||
            data.address.village
        );
    } catch (error) {
        console.error(error);
        return null;
    }

}

export async function getAiRecommendation(city) {

        const response = await api.get(`/ai/recommendation/${city}`);
        return response.data.recommendation;

    }
