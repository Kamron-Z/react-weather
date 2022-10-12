import React from 'react'
import s from './Days.module.scss'
import {Day} from "./Days";
import {GlobalSvgSelect} from "../../../../assests/icons/global/GlobalSvgSelect";

interface Props {
    day: Day
}

export const Cards = ({day}: Props) => {
    return (
        <div className={s.card}>
            <div className={s.day}>{day.day}</div>
            <div className={s.day_info}>{day.day_info}</div>
            <div className={s.img}><GlobalSvgSelect  id={day.icon_id} /></div>
            <div className={s.temp_day}>{day.temp_day}</div>
            <div className={s.temp_night}>{day.temp_night}</div>
            <div className={s.info}>{day.info}</div>
        </div>
    )
}