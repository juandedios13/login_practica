import {React,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import ButtonNumbers from './ButtonNumbers';
import './Styles/Password.css';

const Password = props => {

    const n = [1,2,3,4,5,6,7,8,9,0];

    const {numero ,setpass} = props;

    useEffect(() => {

        console.log(numero);
        if(numero.length == 6){
            props.value(false);
        }

        return () => {
        }
    }, [numero])

    const handleDelete = () =>{

        let a = [];

        numero.forEach((element,index) => {
            //console.log(index);
            if(index != (numero.length-1)){
                a.push(element);
            }
        });
        //console.log(a)
        setpass(a);
 
    }

    return (

        <div className={` ContainerPassword ${props.hidden? 'ContainerPasswordShow':'ContainerPasswordHidden'} `} >
            <div className='ContainerX' >
                <button onClick={()=>{props.value(false)}} className='ContainerXa'>x</button>
            </div>
            <div className='ContainerText'>
                <p>Ingresar clave agora</p>
            </div>
            <div className='ContainerPunto'>
                <div className={`ConatinerPuntos ${numero.length>=1?'ConatinerPuntosBlue':''}`}></div>
                <div className={`ConatinerPuntos ${numero.length>=2?'ConatinerPuntosBlue':''}`}></div>
                <div className={`ConatinerPuntos ${numero.length>=3?'ConatinerPuntosBlue':''}`}></div>
                <div className={`ConatinerPuntos ${numero.length>=4?'ConatinerPuntosBlue':''}`}></div>
                <div className={`ConatinerPuntos ${numero.length>=5?'ConatinerPuntosBlue':''}`}></div>
                <div className={`ConatinerPuntos ${numero.length>=6?'ConatinerPuntosBlue':''}`}></div>
            </div>
            <div className='ContainerNumeros'>
                <ButtonNumbers numeros={n} password={numero} passFun={setpass} />
            </div>
            <div onClick={ handleDelete } className='ConatinerEliminar'>
                x
            </div>
            <div className='ContainerTextOlv'>
                ¿Olvidaste tu clave?
            </div>
        </div>
    )
}

Password.propTypes = {
    hidden : PropTypes.bool,
    value: PropTypes.func,
    numero: PropTypes.array,
    setpass: PropTypes.func
}

export default Password
