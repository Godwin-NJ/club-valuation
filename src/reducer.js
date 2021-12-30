

function reducer(state,action) {

    if(action.type === 'DECREASE'){
        let tempClub = []

        tempClub = state.clubInfo.map((club) => {
            // console.log(club)
            if(club.id === action.payload.id){
                club = {...club , amount : club.amount - 1}
            }
            return club
        })

        return{...state, clubInfo:tempClub}
    }

    if(action.type === 'INCREASE'){
       let tempClub = state.clubInfo.map((club) => {
            if(club.id === action.payload.id){
                club = {...club , amount : club.amount + 1}
            }
            return club
        })

        return{ ...state, clubInfo : tempClub}
    }

    if(action.type === 'REMOVE'){
        console.log('remove')
    }
    
    return state
}

export default reducer
