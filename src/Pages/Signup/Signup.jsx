import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import background from '../../assets/others/authentication.png'
import auth from '../../assets/others/authentication2.png'


const Signup = () => {
    const { githubSignIn, facebookSignIn, googleSignIn, createUser } = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        // console.log(email, password);
        createUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
            }).catch(error => {
                console.log('error', error.message);
            })
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
            }).catch(error => {
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
                <div className='lg:w-1/2'>
                    <p className='text-3xl font-black text-gray-900 mb-8'>Sign Up</p>
                    <form onSubmit={handleSignup} className='text-gray-900'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" name='name' className="input input-bordered" />
                        </div>
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
                        <input className='btn w-full bg-[#DAB884] border-none mt-4' type="submit" value="Sign up" />
                    </form>
                    <p className='text-[#D1A054] my-4'>Already registered? <Link to='/login' className='font-bold hover:underline underline-offset-2'>Go to log in</Link></p>
                    <p className='text-gray-900 text-base mb-2'>Or sign up with</p>
                    <div className='flex gap-10 justify-center'>
                        <FaFacebookF onClick={handleFacebook} className='border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-full px-2 text-3xl'></FaFacebookF>
                        <IoLogoGoogle onClick={handleGoogle} className='border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-full px-2 text-3xl'></IoLogoGoogle>
                        <GoMarkGithub onClick={handleGithub} className='border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-full px-2 text-3xl'></GoMarkGithub>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={auth} alt="" className=' w-[650px] ' />
                </div>
            </div>
        </div>
    );
};

export default Signup;