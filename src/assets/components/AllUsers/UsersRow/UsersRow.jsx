import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UsersRow = ({ user, refetch, index }) => {
    const { displayName, email, role, photoURL } = user;

    const makeAdmin = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `${
                role === "Admin"
                    ? `You Want to Make User ${email}?`
                    : `You Want to Make Admin ${email}?`
            }`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${
                role === "Admin" ? `Yes, Make User!` : `Yes, Make Admin!`
            }`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/user/admin/${email}`, {
                    method: "PUT",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                })
                    .then((res) => {
                        if (res.status === 403) {
                            toast.error("Access denied");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Success!",
                                `${
                                    role === "Admin"
                                        ? `Successfully Make User to ${email}!`
                                        : `Successfully Make Admin to ${email}!`
                                }`,
                                "success"
                            );
                        }
                    });
            }
        });
    };

    const deleteUser = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You Want to Delete User ${email}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/user/admin/${email}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                })
                    .then((res) => {
                        if (res.status === 403) {
                            toast.error("Access denied");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Success!",
                                `Successfully Deleted User ${email}`,
                                "success"
                            );
                        }
                    });
            }
        });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={
                                    photoURL
                                        ? photoURL
                                        : "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
                                }
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{displayName}</div>
                        <span
                            className={`badge badge-ghost ${
                                role === "Admin"
                                    ? "bg-green-500 text-white"
                                    : "text-balck"
                            }`}
                        >
                            {role && `${role}`}
                        </span>
                    </div>
                </div>
            </td>
            <td className="badge badge-ghost mt-7">{email}</td>
            <th>
                {role === "Admin" ? (
                    <button
                        onClick={makeAdmin}
                        className="btn btn-sm bg-green-500 text-white"
                    >
                        Make User
                    </button>
                ) : (
                    <button
                        onClick={makeAdmin}
                        className="btn btn-sm bg-green-500 text-white"
                    >
                        Make Admin
                    </button>
                )}
            </th>
            <th>
                <button
                    onClick={deleteUser}
                    className="btn btn-sm bg-red-500 text-white"
                >
                    Remove
                </button>
            </th>
        </tr>
    );
};

export default UsersRow;
