import React from 'react'
import {connect} from 'react-redux' 
import { AiOutlineCaretUp,AiOutlineCaretDown } from "react-icons/ai";


const Club = ({increase,decrease,remove,clubNumber,clubsValuation,clubInfo}) => {


    return (
    <main>
            <p>CLUB SECTION</p>
            <h2>single-club [{clubNumber}] </h2>
    
        <div>
            {clubInfo.map((club) => {
                const{id,name,value,img,founded,legends,amount} = club
                const legend = legends.map((legend) => legend)
                const legendArr = legend.join(',')
               
                return(
                    <section key={id} className='club'>
                        <div>
                            <p>{name}</p>
                            <p>${value} Billion</p>
                            <p>{legendArr}</p>
                            <p>{img}</p>
                            <p>{founded}</p>
                            <button onClick={() => remove()}>remove</button>
                        </div>
                        <div>
                            <span onClick={() => increase()}><AiOutlineCaretUp /></span>
                               <h2>{amount}</h2> <br/>
                            <span onClick={() => decrease()}><AiOutlineCaretDown /></span>
                        </div>
                    </section>
                )
            })}
        </div>

        <h2>Total Valuation [{clubsValuation}]</h2>
           
    </main>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
        const{id,amount} = ownProps
        console.log(ownProps)
    return {
        increase : () => dispatch({type:'INCREASE', payload:{id}}),
        decrease : () => dispatch({type:'DECREASE' , payload:{id,amount}}),
        remove : () => dispatch({type:'REMOVE', payload:{id}})
    }
}

const mapStateToProps = (store) => {
    const{clubNumber,clubsValuation,clubInfo} = store
    return{clubNumber,clubsValuation,clubInfo}
}

export default connect(mapStateToProps, mapDispatchToProps)(Club)



