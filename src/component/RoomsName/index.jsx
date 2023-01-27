import React from 'react'
import style from './style.module.css'

function RoomsName({ name }) {
  return (
    <span className={style.roomsNameContainer}>
      {name}
    </span>
  )
}

export default RoomsName
