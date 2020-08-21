import React from 'react'

import { useSelector } from 'react-redux'

import {getRoomName} from './redux/selectors'
import RoomName from './roomName'

export default function Header(){
    const roomName = useSelector(getRoomName)
    return (
        <div className="Header">
        <div style={{minWidth:"10%", maxWidth:"10%", justifyContent:"left"}}></div>
        <div className="Title">
        <span style = {{fontSize:"40px",fontWeight:"bolder", textAlign:"center"}}>
        GET ON MY LEVEL
        </span>
        </div>
        {roomName ? (<RoomName/>):(<div style={{minWidth:"10%", maxWidth:"10%", justifyContent:"right"}}></div>)}
        </div>
    )
}