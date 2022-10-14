import React from 'react'
import s from './MyLoading.module.scss'
import loading from '../../../../assests/icons/global/loading.svg'

interface Props {

}

export const MyLoading =  (props: Props) => {
  return (
    <div className={s.loading}>
        <img src={loading}/>
    </div>
  )
}