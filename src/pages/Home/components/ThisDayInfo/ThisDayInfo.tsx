import React from 'react'
import s from './ThisDayInfo.module.scss'
import {ThisDayInfoItem} from "./ThisDayInfoItem/ThisDayInfoItem";
import cloud from '../../../../assests/images/cloud.png'
import {Weather} from "../../../../store/types/type";
import {MyLoading} from "../MyLoading/MyLoading";

interface Props {
    weather: Weather,
    isLoading: boolean
}

export interface Item {
    icon_id: string,
    name: string,
    value: string,
}

export const ThisDayInfo = ({weather, isLoading}: Props) => {

    const items = [{
        icon_id: 'temp',
        name: 'Temperature',
        value: `${Math.floor(weather.main.temp)}° - feels like ${Math.floor(weather.main.feels_like)}°`,
    }, {
        icon_id: 'pressure',
        name: 'Pressure',
        value: `${weather.main.pressure} мм ртутного столба - нормальное`,
    }, {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
    }, {
        icon_id: 'wind',
        name: 'Wind',
        value: `${weather.wind.speed} м/с юго-запад - легкий ветер`,
    }]

    return (
        <div className={s.this__day_info}>
            {
                isLoading ? <MyLoading/> :
                    <>
                        <div className={s.this__day_info_item}>
                            {items.map((item: Item) => {
                                return <ThisDayInfoItem key={item.icon_id} item={item}/>
                            })
                            }
                        </div>
                        <img className={s.this__day_info_bg} src={cloud}/>
                    </>
            }
        </div>
    )
}