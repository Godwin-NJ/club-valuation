import React,{useEffect} from 'react'
import {connect} from 'react-redux' 
import SingleClub from './singleClub'

const Club = ({clubNumber,clubsValuation,clubInfo=[],dispatch}) => {

    useEffect(() => {
        dispatch({type: "GET_TOTAL"})
    },[clubInfo,dispatch])

    const clubsValuationToString = clubsValuation.toLocaleString()

    if(clubInfo.length === 0){
        return(
            <div>
                <h2>Elite clubs are empty, Kindly refresh</h2>
            </div>
        )
    }

    return (
    <main>
            <p>CLUB SECTION</p>
            <h2>single-club [{clubNumber}] </h2>

            <article>
                {clubInfo.map((club) => {
                    return <SingleClub key={club.id} {...club}/>
                })}
            </article>
    
        <h2>Total Valuation [{clubsValuationToString}]</h2>
           
    </main>
    )
}


const mapStateToProps = (store) => {
    const{clubNumber,clubsValuation,clubInfo} = store
    return{clubNumber,clubsValuation,clubInfo}
}

export default connect(mapStateToProps)(Club)



