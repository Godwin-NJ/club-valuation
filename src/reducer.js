

function reducer(state,action) {

    if(action.type === 'DECREASE'){
        let tempClub = []

        if(action.payload.amount === 1){
            tempClub = state.clubInfo.filter((club) => {
                return club.id !== action.payload.id
            })
        }

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
        return {
            ...state,
            clubInfo : state.clubInfo.filter((club) => {
             return  club.id !== action.payload.id
            })
        }
    }

    if(action.type === 'GET_TOTAL'){
        let{clubNumber,clubsValuation} =  state.clubInfo.reduce((clubSum,clubCurrent)=>{
            // console.log(clubCurrent)
            const{value,amount} = clubCurrent
            const valueTotal = value * amount
            clubSum.clubsValuation += valueTotal 
            clubSum.clubNumber += amount

            return clubSum
        },
        {
            clubNumber : 0,
            clubsValuation : 0
        })

        

        return {...state,clubNumber,clubsValuation}
    }
    
    return state
}

export default reducer
