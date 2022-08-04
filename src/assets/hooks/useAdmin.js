import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    // console.log(adminLoading);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:8000/admin/${email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data.admin);
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin,  adminLoading];
};
export default useAdmin;
