export function getRoomName(store) {
  return store.sharedState.roomName;
}
export function getGameState(store) {
  return store.sharedState.gameState;
}

export function getClueGiver(store) {
    return store.sharedState.clueGiver;
  }
  export function getClueWord(store) {
    return store.sharedState.clueWord;
  }
export function getPrompt(store){
  return store.sharedState.prompt
}
export function getLevel(store) {
  return store.sharedState.level;
}
export function getPlayerInfo(store) {
  return store.sharedState.players;
}
export function getTimer(store){
  return store.sharedState.timer
}

export function getRoomNameHidden(store){
    return store.localState.roomNameHidden
}
export function getLocalName(store) {
  return store.localState.localName;
}

export function getSharedState(store){
  return store.sharedState;
}
