export const createRoom = () => ({
    type:"CREATE_ROOM"
})
export const joinRoom = (value) => ({
    type:"JOIN_ROOM",
    payload:value
})

export const addPlayer = (value) => ({
    type:"ADD_PLAYER",
    payload: value,
})
export const removePlayer = (value) => ({
    type:"REMOVE_PLAYER",
    payload: value
})
export const addGuess = (playerName, value)=>({
    type:"ADD_GUESS",
    playerName:playerName,
    payload: value
})


export const startGuessing = ()=>({
    type: "START_GUESSING"
})