import React from 'react'
import Select from 'react-select'
import s from './Header.module.scss'
import {GlobalSvgSelect} from "../../assests/icons/global/GlobalSvgSelect";

interface Props {
}

export const Header = (props: Props) => {
    const options = [
        {value: 'city-1', label: 'Samarkand'},
        {value: 'city-2', label: 'Tashkent'},
        {value: 'city-3', label: 'Buxoro'}
    ]

    const colourStyles = {
        control: (styles:any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            borderRadius: '10px',
            border: 'none',
            zIndex: '100'
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelect id='header-logo'/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelect id='change-theme'/>
                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
            </div>
        </header>
    )
}