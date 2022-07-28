import React from "react";
import { Link } from "react-router-dom";
import {
    useSignInWithGoogle,
    useSignInWithFacebook,
    useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
const Login = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookuser, facebookoading, facebookerror] =
        useSignInWithFacebook(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] =
        useSignInWithGithub(auth);
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
                        Already Have an Account?
                        <a
                            as={Link}
                            to="/register"
                            className="label-text-alt link link-hover text-secondary text-lg"
                        >
                            Please Register
                        </a>
                    </label>
                    <label className="label">
                        Forgot Password?
                        <a
                            href="#"
                            className="label-text-alt link link-hover text-secondary text-lg"
                        >
                            Forgot password
                        </a>
                    </label>
                    <div className="divider">OR</div>
                    <p>{facebookerror || googleerror || githuberror}</p>
                    <button
                        className="btn btn-outline btn-primary"
                        onClick={() => signInWithGoogle()}
                    >
                        Sign In with Google
                    </button>
                    <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => signInWithFacebook()}
                    >
                        Sign In with Facebook
                    </button>
                    <button
                        className="btn btn-outline btn-accent"
                        onClick={() => signInWithGithub()}
                    >
                        Sign In with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
