import {React,useState} from 'react'
import PropTypes from 'prop-types'
import '../Component/Styles/Login.css'

const Login = (props) => {

    const  {hidden, value,numero} =  props;
    const [Show, setShow] = useState(false)

    const pass = ()=>{
        if(hidden){
            value(false);
        }else{
            value(true);
        }
    }

    return (
        <div className={`Container ${hidden? 'ContainerHidden' : 'Containershow' } `} >
            <div className='ContainerLogin'>
                <div className='ConatinerLoginTitulo'>
                    agora
                </div>
                <div className='ContainerLoginText'>
                    ingresa los datos de tu cuenta agora para continuar
                </div>
                <div className='ContainerLoginForm'>
                    <input className='ContainerLoginFormInput' placeholder='Celular'></input>
                    <input className='ContainerLoginFormInput' type={Show?'text':'password'} onClick={pass} placeholder='Clave (6 digitos)' value={numero.length>0?numero:''}></input>
                    <button className='ContainerLoginFormInputShow'  onClick={()=>{Show?setShow(false):setShow(true)}}>(._.)</button>
                </div>
                <div className='ContainerLoginRecuperar'>
                    ¿Olvidaste tu clave?
                </div>
                <button className='ContainerLoginIngresar'>Ingresar</button>
                <div className='ContainerLoginRegisto'>
                    ¿No tienes una cuenta Agora? <a className='ContainerLoginRegistroA'>Registrate</a>
                </div>
                <div className='ContainerLoginSeparador'>
                    <div className='ContainerLoginSeparadorLinea'></div>
                    <div className='ContainerLoginSeparadorCirculo'></div>
                    <div className='ContainerLoginSeparadorLinea'></div>
                </div>
                <div className='ContainerLoginInvitado'>
                    Continuar como invitado
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    hidden : PropTypes.bool,
    value: PropTypes.func,
    numero: PropTypes.array

}

export default Login

