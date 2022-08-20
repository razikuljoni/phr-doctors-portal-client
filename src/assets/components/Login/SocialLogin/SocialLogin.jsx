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
import useToken from "../../../hooks/useToken";
import { useEffect } from "react";
const SocialLogin = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookuser, facebookoading, facebookerror] =
        useSignInWithFacebook(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] =
        useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token ] = useToken(googleuser || facebookuser || githubuser);

    useEffect(()=> {
        const from = location.state?.from?.pathname || "/";
        if(token){
            navigate(from, {replace: true});
        };
    },[location.state?.from?.pathname, navigate, token]);

    if( googleloading || facebookoading || githubloading){
        return <Loading/>
    };
    

    return (
        <>
            <div className="divider">OR</div>
            <p>{facebookerror || googleerror || githuberror}</p>
            <button
                className="btn btn-outline btn-primary"
                onClick={() => signInWithGoogle().then(() =>{
                    toast.success("Google SignIn Successfull!")
                })}
            >
                Sign In with Google
            </button>
            <button
                className="btn btn-outline btn-secondary"
                onClick={() => signInWithFacebook().then(() =>{
                    toast.success("Facebook SignIn Successfull!")
                })}
            >
                Sign In with Facebook
            </button>
            <button
                className="btn btn-outline btn-accent"
                onClick={() => signInWithGithub().then(() =>{
                    toast.success("Github SignIn Successfull!")
                })}
            >
                Sign In with Github
            </button>
        </>
    );
};

export default SocialLogin;
