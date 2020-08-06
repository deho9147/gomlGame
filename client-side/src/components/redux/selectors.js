export function getPlayerInfo(store){
    return(store.sharedState.players)
}



export function getLocalName(store){
    return(store.localState.localName)
}