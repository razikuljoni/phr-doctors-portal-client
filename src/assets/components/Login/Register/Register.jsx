import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title items-center">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">
                                    What is your name?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                class="input input-bordered input-primary w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required",
                                    },
                                })}
                            />
                            <label class="label">
                                <span class="label-text-alt text-red-600">
                                    {errors.name?.type === "required" &&
                                        "Full Name Required"}
                                </span>
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">
                                    What is your Email Address?
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                class="input input-bordered input-primary w-full max-w-xs"
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
                            <label class="label">
                                <span class="label-text-alt text-red-600">
                                    {errors.email?.type === "required" && (
                                        <span>{errors.email?.message} </span>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <span>{errors.email?.message} </span>
                                    )}
                                </span>
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">
                                    What is your Password?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Password"
                                class="input input-bordered input-primary w-full max-w-xs"
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
                            <label class="label">
                                <span class="label-text-alt text-red-600">
                                    {errors.password?.type === "required" && (
                                        <span>{errors.password?.message} </span>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <span>{errors.password?.message} </span>
                                    )}
                                </span>
                            </label>
                        </div>

                        <input
                            className="btn btn-active btn-primary w-full"
                            type="submit"
                            value="Register"
                        />
                    </form>
                    <label className="label">
                        Already Have an Account?
                        <Link
                            to="/login"
                            className="label-text-alt link link-hover text-secondary text-lg"
                        >
                            Please Log In
                        </Link>
                    </label>
                    <label className="label">
                        Forgot Password?
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

export default Register;
