import {React, useState} from 'react';
import Login from './Login';
import Password from './Password';


export const Container = () => {

    const [Mostrar, setMostrar] = useState(false);
    const [numero, setpass] = useState([]);  


    return (
        <div>
            <Login hidden={Mostrar} value={setMostrar} numero={numero}></Login>
            <Password hidden={Mostrar} value={setMostrar} numero={numero} setpass={setpass} ></Password>
            {/*<button onClick={()=>{Mostrar?setMostrar(false):setMostrar(true)}} >value</button>*/} 
        </div>
    )
}
