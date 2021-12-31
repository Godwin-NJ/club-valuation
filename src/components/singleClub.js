import React from 'react'
import {connect} from 'react-redux'
import { AiOutlineCaretUp,AiOutlineCaretDown } from "react-icons/ai";


const singleClub = ({increase,decrease,remove,name,value,img,founded,legends,amount}) => {
    const legend = legends.map((legend) => legend)
    const legendArr = legend.join(',')

    const valueString = value.toLocaleString()

    return (
        <section className='club'>
            <div>
                <p>{name}</p>
                <p>${valueString} </p>
                <p>{legendArr}</p>
                <p>{img}</p>
                <p>{founded}</p>
                <button onClick={() => remove()}>remove</button>
            </div>
            <div>
                <span onClick={() => increase()}><AiOutlineCaretUp /></span>
                    <h2>{amount}</h2> <br/>
                <span onClick={() => {
                    if(amount === 1){
                      return  remove()
                    }else{
                        return decrease()
                    }
                }}><AiOutlineCaretDown /></span>
                {/* <span onClick={() => decrease()}><AiOutlineCaretDown /></span> */}
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
        const{id,amount} = ownProps
        // console.log(ownProps)
    return {
        increase : () => dispatch({type:'INCREASE', payload:{id}}),
        decrease : () => dispatch({type:'DECREASE' , payload:{id,amount}}),
        remove : () => dispatch({type:'REMOVE', payload:{id}})
    }
}

export default connect(null, mapDispatchToProps)(singleClub)
