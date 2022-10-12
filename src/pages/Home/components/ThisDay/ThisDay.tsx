import React, {useEffect} from 'react'
import s from './ThisDay.module.scss'
import {GlobalSvgSelect} from "../../../../assests/icons/global/GlobalSvgSelect";

interface Props {
}

export const ThisDay = (props: Props) => {
    const today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>20°</div>
                    <div className={s.this_day_day}>Today</div>
                </div>
                <GlobalSvgSelect id='sun'/>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>Время: <span>{time}</span></div>
                <div className={s.this__city}>Город: <span>Санкт-Петербург</span></div>
            </div>
        </div>
    )
}