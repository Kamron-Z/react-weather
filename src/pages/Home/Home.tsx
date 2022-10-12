import React from 'react'
import s from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import cloud from "../../assests/images/cloud.png";

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>

            <Days/>
        </div>
    )
}