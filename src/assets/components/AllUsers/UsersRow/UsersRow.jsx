import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:8000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Access denied");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully Make Admin to ${email}`);
                }
            });
    };
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src="https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <span
                            className={`badge badge-ghost ${
                                role && "bg-green-500 text-white"
                            }`}
                        >
                            {role ? `${role}` : "User"}
                        </span>
                    </div>
                </div>
            </td>
            <td className="badge badge-ghost mt-7">{email}</td>
            <th>
                {role === "Admin" ? (
                    <button className="btn btn-sm bg-green-500 text-white">
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
                <button className="btn btn-sm bg-red-500 text-white">
                    Remove
                </button>
            </th>
        </tr>
    );
};

export default UsersRow;
