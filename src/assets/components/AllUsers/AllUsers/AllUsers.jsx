import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Loading/Loading";
import UsersRow from "../UsersRow/UsersRow";

const AllUsers = () => {
    const {
        isLoading,
        error,
        data: users,
        refetch,
    } = useQuery(["users"], () =>
        fetch("http://localhost:8000/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h1 className="text-2xl text-primary text-center my-5">
                Total {users?.length} Users/Admin
            </h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {error?.message}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Change Role</th>
                            <th>Remove User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <UsersRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UsersRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
