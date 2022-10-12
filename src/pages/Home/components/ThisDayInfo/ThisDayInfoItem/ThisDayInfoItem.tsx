import React from 'react'
import {Item} from "../ThisDayInfo";
import s from '../ThisDayInfo.module.scss'
import {IndicatorSvgSelect} from "../../../../../assests/icons/indicator/IndicatorSvgSelect";

interface Props {
    item: Item
}


export const ThisDayInfoItem = (props: Props) => {

    const {icon_id, name, value} = props.item

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelect id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    )
}