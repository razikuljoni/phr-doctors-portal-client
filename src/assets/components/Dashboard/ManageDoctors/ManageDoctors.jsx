import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";

const ManageDoctors = () => {
    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery(["doctors"], () =>
        fetch("http://localhost:8000/doctor", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    const handleDelete = (name, email) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You Want to Delete Doctor ${name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/doctor/${email}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                })
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                        if (result.deletedCount > 0) {
                            toast.success(
                                `Doctor ${name} Deleted Successfully`
                            );
                            refetch();
                        }
                    });
                Swal.fire(
                    "Deleted!",
                    `Doctor ${name} has been Deleted!`,
                    "success"
                );
            }
        });
    };

    if (isLoading) {
        return (
            <div className="mt-40">
                <Loading />
            </div>
        );
    }
    return (
        <div>
            <h1 className="text-2xl text-primary text-center my-5">
                Total {doctors?.length} Doctors
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name/Speciality</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, index) => (
                            <tr key={doctor._id}>
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={doctor.img}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {doctor.name}
                                            </div>
                                            <div className="badge badge-ghost bg-green-500 text-white">
                                                {doctor.speciality}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.email}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                doctor.name,
                                                doctor.email
                                            )
                                        }
                                        className="btn btn-sm btn-error"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;
