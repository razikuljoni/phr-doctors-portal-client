import React from "react";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        if(user){
            navigate(from, {replace: true});
        };
    },[user, from, navigate]);
    
    if (loading) {
        return (
            <div className="mt-52">
                <Loading />
            </div>
        );
    };
    
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    What is your Email Address?
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered input-primary w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide an valid Email",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.email?.type === "required" && (
                                        <span>{errors.email?.message} </span>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <span>{errors.email?.message} </span>
                                    )}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    What is your Password?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Password"
                                className="input input-bordered input-primary w-full max-w-xs"
                                autoComplete="off"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                        message:
                                            "Password doesn't match requirments",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.password?.type === "required" && (
                                        <span>{errors.password?.message} </span>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <span>{errors.password?.message} </span>
                                    )}
                                </span>
                            </label>
                        </div>
                        <p className="text-red-600 mb-2">
                            {error && error.message}
                        </p>
                        <input
                            className="btn btn-active btn-primary w-full"
                            type="submit"
                            value="Log In"
                        />
                    </form>
                    <label className="label">
                        New on Doctors Portal?
                        <Link
                            to="/register"
                            className="label-text-alt link link-hover text-secondary text-lg"
                        >
                            Please Register
                        </Link>
                    </label>
                    <label className="label">
                        Forget Password?
                        <a className="label-text-alt link link-hover text-secondary text-lg">
                            Forgot password
                        </a>
                    </label>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
