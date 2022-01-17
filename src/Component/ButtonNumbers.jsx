import React from 'react'
import PropTypes from 'prop-types'

const ButtonNumbers = props => {

    const HandleCLick = (e)=>{

        //console.log(props.password)
        
            if(props.password.length < 6){
                props.passFun( [...props.password,e]);
            }
        
    }
    
    return (
        <>
           { 
                props.numeros.map((e)=>{
                    return(
                        <button key={e} onClick={ ()=>{HandleCLick(e)}} className='numeros' >{e}</button>
                    )
                    
                })
            }
        </>
    )
}

ButtonNumbers.propTypes = {
    numeros: PropTypes.array,
    passFun: PropTypes.func,
    password: PropTypes.array
}

export default ButtonNumbers
