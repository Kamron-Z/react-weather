import React from 'react'
import s from './Days.module.scss'

interface Props {

}

interface Tabs {
    value: string
}

export const Tabs = (props: Props) => {
    const tabs: Tabs[] = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ];

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab: Tabs) => (
                    <div className={s.tab__value + ' ' + s.active} key={tab.value}>{tab.value}</div>
                ))}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}