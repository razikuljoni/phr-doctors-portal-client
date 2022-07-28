import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title items-center">Log In</h2>
                    <input
                        type="email"
                        placeholder="Type Email here"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                    <input
                        type="password"
                        placeholder="Type Password here"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                    <p>{}</p>
                    <button className="btn btn-active btn-primary">
                        Log In
                    </button>
                    <label className="label">
                        Doesn't Have an Account?
                        <Link
                            to="/register"
                            className="label-text-alt link link-hover text-secondary text-lg"
                        >
                            Please Register
                        </Link>
                    </label>
                    <label className="label">
                        Forgot Password?
                        <a
                            className="label-text-alt link link-hover text-secondary text-lg"
                        >
                            Forgot password
                        </a>
                    </label>
                    <SocialLogin  />
                </div>
            </div>
        </div>
    );
};

export default Login;
