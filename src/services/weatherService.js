import api from "./api";

export async function getCurrentWeather(city) {
    
    const response = await api.get(`/weather/current/${city}`);

    return response.data;

}

export async function getForecast(city) {

    const response = await api.get(`/weather/forecast/${city}`);

    return response.data;
    
}