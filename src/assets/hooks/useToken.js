import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToken = (user="joni") => {
    console.log("user",user);
    const [token, setToken] = useState();
    useEffect(() => {
        const email = user?.user?.email;
        const displayName = user.user?.displayName;
        const photoURL = user?.user?.photoURL;
        const currentUser = {
            displayName,
            email,
            photoURL,
        };
        if (email) {
            fetch(`http://localhost:8000/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    const token = data.token;
                    localStorage.setItem("accessToken", token);
                    setToken(token);
                    if (data?.upsertedId) {
                        toast.success("New User Added Successfully!");
                    }
                });
        }
    }, [user]);
    return [token, setToken];
};

export default useToken;
