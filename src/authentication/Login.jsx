/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Authcontext } from "../authcontext/Authprovider";
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";


const Login = () => {

    const { googlelogin, signin } = useContext(Authcontext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handlegoogle = () => {
        googlelogin()
            .then(result => {
                // console.log(result)
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                // console.log(error.message)
            })
    }

    const handlelogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        setError('')

        if (email, password) {
            signin(email, password)
                .then(result => {
                    console.log(result.user)
                    Swal.fire(
                        'Done!',
                        'You Logged in successfully',
                        'success'
                      )
                      e.target.reset()
                      navigate(location?.state ? location.
                    state : '/')

//                     npm run build
// cd dist
// cp index.html 200.html
// surge

                    // fetch('http://localhost:5000/jwt', {
                    //     method: 'POST',
                    //     credentials: "include",
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify({email: email})
                    //   })
                    //   .then(res => res.json())
                    //   .then(data => {
                    //     console.log(data)
                    //   })

                    // axios
                    //     .post("http://localhost:5000/jwt",
                    //         { email },
                    //         { withCredentials: true })
                    //     .then(res => console.log(res.data))
                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }

    return (
        <div className="dark:bg-black dark:text-white">
        <h1 className="text-center text-3xl font-semibold">Login here</h1>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div>
                    <img src="https://i.ibb.co/n36mBVQ/undraw-Authentication-re-svpt.png" alt="" />
                </div>
                <div className="hero min-h-screen dark:bg-black dark:text-white">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-52 md:w-96 lg:w-[600px] shadow-2xl ">
                        <form onSubmit={handlelogin} className="card-body dark:bg-black dark:text-white">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address"
                                    name="email"
                                    className="input input-bordered dark:bg-gray-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    name="password"
                                    className="input input-bordered dark:bg-gray-500" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover dark:text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    error && <p className="text-red-600 font-medium">{error}</p>
                                }
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Don't have an account? <Link className="text-emerald-500 font-bold" to='/register'>Please Register</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-2">
                                <Link>
                                    <button onClick={handlegoogle} className="btn btn-primary w-full"><FcGoogle></FcGoogle>Google Login</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;