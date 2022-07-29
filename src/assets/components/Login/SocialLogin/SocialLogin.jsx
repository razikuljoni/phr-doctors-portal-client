import React from "react";
import {
    useSignInWithGoogle,
    useSignInWithFacebook,
    useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from 'react-toastify';
import Loading from "../../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookuser, facebookoading, facebookerror] =
        useSignInWithFacebook(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] =
        useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    if( googleloading || facebookoading || githubloading){
        return <Loading/>
    };
    if(googleuser || facebookuser || githubuser){
        navigate(from, {replace: true});
    };

    return (
        <>
            <div className="divider">OR</div>
            <p>{facebookerror || googleerror || githuberror}</p>
            <button
                className="btn btn-outline btn-primary"
                onClick={() => signInWithGoogle().then(() =>{
                    toast("Google SignIn Successfull!")
                })}
            >
                Sign In with Google
            </button>
            <button
                className="btn btn-outline btn-secondary"
                onClick={() => signInWithFacebook().then(() =>{
                    toast("Facebook SignIn Successfull!")
                })}
            >
                Sign In with Facebook
            </button>
            <button
                className="btn btn-outline btn-accent"
                onClick={() => signInWithGithub().then(() =>{
                    toast("Github SignIn Successfull!")
                })}
            >
                Sign In with Github
            </button>
        </>
    );
};

export default SocialLogin;
