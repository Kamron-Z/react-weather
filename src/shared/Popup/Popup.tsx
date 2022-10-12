import React from 'react'
import s from './Popup.module.scss'
import {ThisDayInfoItem} from "../../pages/Home/components/ThisDayInfo/ThisDayInfoItem/ThisDayInfoItem";
import {GlobalSvgSelect} from "../../assests/icons/global/GlobalSvgSelect";

interface Props {
}

export interface Item {
    icon_id: string,
    name: string,
    value: string,
}

export const Popup = (props: Props) => {

    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°',
    }, {
        icon_id: 'pressure',
        name: 'Давление',
        value: '765 мм ртутного столба - нормальное',
    }, {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
    }, {
        icon_id: 'wind',
        name: 'Ветер',
        value: '3 м/с юго-запад - легкий ветер',
    }]

  return (
    <>
        <div className={s.blur}></div>
        <div className={s.popup}>
            <div className={s.day}>
                <div className={s.day__temp}>12°</div>
                <div className={s.day__today}>Среда</div>
                <div className={s.day__img}>
                    <GlobalSvgSelect id='sun' />
                </div>
                <div className={s.day__time}>Время: <span>01:54</span></div>
                <div className={s.day__city}>Город: <span>Санкт-Петербург</span></div>
            </div>
            <div className={s.this__day_info}>
                <div className={s.this__day_info_item}>
                    {items.map((item: Item) => {
                        return <ThisDayInfoItem key={item.icon_id} item={item}/>
                    })
                    }
                </div>
                <div className={s.close}>
                    <GlobalSvgSelect id='close'/>
                </div>
            </div>
        </div>
    </>
  )
}