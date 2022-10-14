import React, {useEffect} from 'react'
import s from './ThisDay.module.scss'
import {GlobalSvgSelect} from "../../../../assests/icons/global/GlobalSvgSelect";
import {Weather} from '../../../../store/types/type';
import {MyLoading} from "../MyLoading/MyLoading";

interface Props {
    weather: Weather
    isLoading: boolean
}

export const ThisDay = ({weather, isLoading}: Props) => {
    const calcTime = (offset: number) => {
        const b = new Date()
        const utc = b.getTime() + (b.getTimezoneOffset() * 60000);
        const nd = new Date(utc + (3600000 * offset));
        return `${nd.getHours()}:${nd.getMinutes()}`;
    }
    const UTF = weather.timezone / 60 / 60
    const cityTime = calcTime(UTF)

    return (
        <div className={s.this__day}>
            {isLoading ? <MyLoading/> : <>
                <div className={s.top__block}>
                    <div className={s.top__block_wrapper}>
                        <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                        <div className={s.this_day_day}>Сегодня</div>
                    </div>
                    <div className={s.this__day_img}>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                    </div>
                </div>
                <div className={s.bottom__block}>
                    <div className={s.this__time}>Time: <span>{cityTime}</span></div>
                    <div className={s.this__city}>City: <span>{weather.name}</span></div>
                </div>
            </>}

        </div>
    )
}