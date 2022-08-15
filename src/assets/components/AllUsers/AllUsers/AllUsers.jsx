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
        fetch("https://phr-doctors-portal.herokuapp.com/user", {
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
                Total {users?.length} Users
            </h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {error?.message}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Change Role</th>
                            <th>Remove User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <UsersRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UsersRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
