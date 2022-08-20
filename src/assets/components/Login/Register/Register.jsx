import React, { useEffect } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [createUserWithEmailAndPassword, user, loading, cerror] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();
    const [token] = useToken(user);
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    const imageStorageKey = "21b1ab41011f8fb9349069c6df59f07a";
    if (cerror || uerror) {
        return cerror || uerror;
    }
    if (loading || updating) {
        return (
            <div className="mt-52">
                <Loading />{" "}
            </div>
        );
    }

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                console.log(result);
                if (result.success) {
                    run().catch(console.dir);
                }
                async function run() {
                    await createUserWithEmailAndPassword(
                        data.email,
                        data.password
                    ).then(() => {
                        toast.success("User Created Successfully!");
                    });
                    await updateProfile({
                        displayName: data.name,
                        photoURL: result.data?.url,
                    });
                }
            });
    };
    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title items-center">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    What is your name?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="input input-bordered input-primary w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.name?.type === "required" &&
                                        "Full Name Required"}
                                </span>
                            </label>
                        </div>
                        {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Your Photo URL?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter photoURL"
                                className="input input-bordered input-primary w-full max-w-xs"
                                {...register("photoURL")}
                            />
                            {/* <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.name?.type === "required" &&
                                        "Full Name Required"}
                                </span>
                            </label> 
                        </div> */}
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Profile Picture
                                </span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered pt-1.5 input-primary w-full max-w-xs"
                                autoComplete="off"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.image?.type === "required" && (
                                        <span>{errors.image?.message} </span>
                                    )}
                                </span>
                            </label>
                        </div>
                        <p className="text-red-600">
                            {cerror && cerror?.message}
                            {uerror && uerror?.message}
                        </p>
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
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
