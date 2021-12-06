import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
const RegisterSceeen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);
    console.log(msgError);

    const [values, handleInputChange] = useForm({
        name: 'Fernando Duarte Rios',
        email: 'fduarte@gs1ni.org',
        password: '123456',
        password2: '123456'
    });


    const { name, email, password, password2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is requiered'));
            console.log('Name is requiered');
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email no is valid'));
            console.log('Email no is valid');
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password must be equals'));
            console.log('Password must be equals');
            return false
        }
        dispatch(removeError());
        return true
    }
    return (
        <div className="animate__animated animate__fadeIn animate__faster">
            <h3 className='auth__title'>Register</h3>

            {
                msgError &&
                (
                <div className="auth__alert-error">
                    {msgError}
                </div>
                )
            }

            <form onSubmit={handleRegister}>
                <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={handleInputChange} />
                <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange} />
                <button className="btn btn-primary btn-block mb-5" type="submit" >Register</button>


                <Link to='/auth/login' className="link">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}

export default RegisterSceeen
