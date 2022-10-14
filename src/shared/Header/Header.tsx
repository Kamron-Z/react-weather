import React from 'react'
import Select from 'react-select'
import s from './Header.module.scss'
import {GlobalSvgSelect} from "../../assests/icons/global/GlobalSvgSelect";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";
import {useCustomDispatch} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";

interface Props {
}

export const Header = (props: Props) => {
    const theme = useTheme()
    const dispatch = useCustomDispatch()

    const options = [
        {value: 'samarkand', label: 'Samarkand'},
        {value: 'tashkent', label: 'Tashkent'},
        {value: 'tokyo', label: 'Tokyo'},
        {value: 'moscow', label: 'Moscow'},
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            borderRadius: '10px',
            border: 'none',
            zIndex: '100'
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === 'dark' ? "#fff" : '#000'
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const changeCity = (e: any) => {
        dispatch(fetchCurrentWeather(e.value))
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelect id='header-logo'/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelect id='change-theme'/>
                </div>
                <Select defaultValue={options[0]}
                        styles={colourStyles}
                        options={options}
                        onChange={ e => changeCity(e)}/>
            </div>
        </header>
    )
}