import { Link } from 'react-router-dom';
import background from '../../assets/others/authentication.png'
import auth from '../../assets/others/authentication2.png'
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {githubSignIn, facebookSignIn, googleSignIn, logIn} = useContext(AuthContext)
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logIn(email, password)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
        }).catch(error => {
            console.log('error', error.message);
        })
    }
    const validatereCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }
    const handleGoogle = () => {
        googleSignIn()
        .then(res => {
            const googlelog = res.user;
            console.log(googlelog);
        }).catch(error => {
            console.log('error', error.message);
        })
    }
    const handleFacebook = () => {
        facebookSignIn()
        .then(res => {
            const facebooklog = res.user;
            console.log(facebooklog);
        }).catch(error =>{
            console.log('error', error.message);
        })
    }
    const handleGithub = () => {
        githubSignIn()
        .then(res => {
            const githublog = res.user;
            console.log(githublog);
        }).catch(error => {
            console.log('error', error.message);
        })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${background}")` }}>
            <div className="bg-opacity-60"></div>
            <div className="text-center text-neutral-content lg:flex justify-between items-center p-5 lg:gap-10 lg:px-28 lg:py-10 drop-shadow-2xl" style={{ backgroundImage: `url("${background}")` }}>
                <div className="lg:w-1/2">
                    <img src={auth} alt="" className=' w-[650px] ' />
                </div>
                <div className='lg:w-1/2'>
                    <p className='text-3xl font-black text-gray-900 mb-8'>Login</p>
                    <form onSubmit={handleLogin} className='text-gray-900'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-5">
                            < LoadCanvasTemplate />
                            <div className='text-center'>
                                <button onClick={validatereCaptcha} className='text-blue-900 text-sm font-bold mt-3'>Validate Captcha</button>
                            </div>
                        </div>
                        <div className="form-control mt-5">
                            <input ref={captchaRef} type="text" placeholder="Type here" name='recaptcha' className="input input-bordered" />
                        </div>
                        <input disabled={disabled} className='btn w-full bg-[#DAB884] border-none mt-4' type="submit" value="Sign In" />
                    </form>
                    <p className='text-[#D1A054] my-4'>New here? <Link to='/signup' className='font-bold hover:underline underline-offset-2'>Create a New Account</Link></p>
                    <p className='text-gray-900 text-base mb-2'>Or sign in with</p>
                    <div className='flex gap-10 justify-center'>
                        <FaFacebookF onClick={handleFacebook} className='border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-full px-2 text-3xl'></FaFacebookF>
                        <IoLogoGoogle onClick={handleGoogle} className='border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-full px-2 text-3xl'></IoLogoGoogle>
                        <GoMarkGithub onClick={handleGithub} className='border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-full px-2 text-3xl'></GoMarkGithub>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;