import {AppDispatch} from "../store";
import {WeatherService} from "../../services/weatherService";
import {currentWeatherSlice} from "../slices/currentWeatherSlice";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload)
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    } catch (error) {
        console.log(error)
    }
}