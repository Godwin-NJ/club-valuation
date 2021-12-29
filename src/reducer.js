

function reducer(state,action) {

    if(action.type === 'DECREASE'){
        console.log('decrease')
    }

    if(action.type === 'INCREASE'){
        console.log('increase')
    }

    if(action.type === 'REMOVE'){
        console.log('remove')
    }
    
    return state
}

export default reducer
