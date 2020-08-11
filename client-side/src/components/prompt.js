import React from 'react'

import {useSelector} from 'react-redux'
import {getPrompt} from './redux/selectors'

import prompts from "./res/prompts.json";

export default function Prompt(){
    const promptIndex = useSelector(getPrompt)
    return(
        <div className="Prompt">
        <div>{prompts[promptIndex].left}</div>
        <div>{prompts[promptIndex].center}</div>
        <div>{prompts[promptIndex].right}</div>
        </div>
    )
}