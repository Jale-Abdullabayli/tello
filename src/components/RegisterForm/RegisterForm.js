import React, { useEffect,useState } from 'react'
import facebook from '../../images/facebook.svg';
import google from '../../images/google.svg';
import './RegisterForm.scss';
import { useDispatch } from 'react-redux';
import { registerActionAsync, loginActionAsync } from '../../redux/actions/user';
import Toastify from '../../components/Toastify/Toastify';
import { toast } from 'react-toastify';

function RegisterForm({ setIsSubmit,setIsLoggedIn, isSubmit, title, children, errors, userInfo }) {
    const dispatch = useDispatch();
    const notify = (message) => toast.success(message);
    const [firstRender, setFirstRender] = useState(true);


    useEffect(() => {
        if (!firstRender && isSubmit) {
            if (Object.keys(errors).length === 0) {
                if (title === 'Qeydiyyat') {
                    notify('Qeydiyyat uğurla tamamlandı');
                    dispatch(registerActionAsync(userInfo));
                }
                else {
                    notify('Email hesabınızı yoxlayın');
                    dispatch(loginActionAsync(userInfo));
                }
            }
        }
        setFirstRender(false);

    }, [errors,isSubmit]);

    function submit(e) {
        console.log(errors)
        e.preventDefault();
        setIsSubmit(true);

    }


    return (
        <div className='registerForm'>
            <h3 className='title'>{title}</h3>
            <div className="registerWith">
                <div className="facebook">
                    <div className="imgContainer">
                        <img src={facebook} alt='facebook' />
                    </div>
                    <span>Facebook ilə</span>
                </div>
                <div className="google">
                    <div className="imgContainer">
                        <img src={google} alt='google' />
                    </div>
                    <span>Google ilə</span>
                </div>
            </div>
            <div className="or">
                və ya
            </div>
            <form onSubmit={(e) => { submit(e) }}>
                {children}
                <button className='submitBtn' type='submit'>{title}</button>
                <Toastify />
            </form>

        </div>
    )
}

export default RegisterForm