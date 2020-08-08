import React from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {startGuessing} from '../redux/actions'
import { getClueGiver, getLocalName} from '../redux/selectors'

import PlayerScoreboard from './playerScoreboard'
import ClueGiverHintWord from '../clueGiverClueWord'
import ShowLevel from '../showLevel'
import DisplayGuesses from '../displayGuesses'
import AddPlayer from '../addPlayer'

export default function LevelRevealPage(){
    const clueGiver = useSelector(getClueGiver)
    const localName = useSelector(getLocalName)
    const dispatch = useDispatch()

    return(
        <div>
        <ClueGiverHintWord/>
        <ShowLevel/>
        <DisplayGuesses/>
        {localName===clueGiver ? (<button type='submit' onClick={(e)=>{dispatch(startGuessing())}}>Next Turn</button>):(<div></div>)}
        <PlayerScoreboard/>
        <AddPlayer/>
        </div>)
}