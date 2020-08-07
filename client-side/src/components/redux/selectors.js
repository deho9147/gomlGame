export function getRoomName(store){
    return(store.sharedState.roomName)
}
export function getGameState(store){
    return(store.sharedState.gameState)
}

export function getPlayerInfo(store){
    return(store.sharedState.players)
}
export function getClueWord(store){
    return(store.sharedState.clueWord)
}
export function getLevel(store){
    return(store.sharedState.level)
}

export function getLocalName(store){
    return(store.localState.localName)
}