import React,{useEffect} from 'react'
import {connect} from 'react-redux' 
import SingleClub from './singleClub'

const Club = ({clubNumber,clubsValuation,clubInfo,dispatch}) => {

    useEffect(() => {
        dispatch({type: "GET_TOTAL"})
    },[clubInfo,dispatch])

    return (
    <main>
            <p>CLUB SECTION</p>
            <h2>single-club [{clubNumber}] </h2>

            <article>
                {clubInfo.map((club) => {
                    return <SingleClub key={club.id} {...club}/>
                })}
            </article>
    
        <h2>Total Valuation [{clubsValuation}]</h2>
           
    </main>
    )
}


const mapStateToProps = (store) => {
    const{clubNumber,clubsValuation,clubInfo} = store
    return{clubNumber,clubsValuation,clubInfo}
}

export default connect(mapStateToProps)(Club)



