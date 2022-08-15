import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AddDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const { data: services, isLoading } = useQuery(["services"], () =>
        fetch(`http://localhost:8000/service`).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }
    const imageStorageKey = "21b1ab41011f8fb9349069c6df59f07a";

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                if (result.success) {
                    const img = result.data?.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img,
                    };
                    fetch("http://localhost:8000/doctor", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then((response) => response.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Doctor Added Successfully");
                                reset();
                            } else {
                                toast.error("Doctor not Added");
                            }
                        });
                }
            });
    };
    return (
        <div className="flex justify-center items-center">
            <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="input input-bordered input-primary w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-600">
                            {errors.name?.type === "required" &&
                                "Full Name Required"}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select
                        type="text"
                        placeholder="Enter Speciality"
                        className="select select-bordered select-primary w-full max-w-xs"
                        {...register("speciality")}
                    >
                        {services?.map((service) => (
                            <option key={service._id} value={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <label className="label">
                        <span className="label-text-alt text-red-600">
                            {errors.name?.type === "required" &&
                                "Specilazion Required"}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">
                            What is your Email Address?
                        </span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="input input-bordered input-primary w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Required",
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide an valid Email",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-600">
                            {errors.email?.type === "required" && (
                                <span>{errors.email?.message} </span>
                            )}
                            {errors.email?.type === "pattern" && (
                                <span>{errors.email?.message} </span>
                            )}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered pt-1.5 input-primary w-full max-w-xs"
                        autoComplete="off"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required",
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt text-red-600">
                            {errors.image?.type === "required" && (
                                <span>{errors.image?.message} </span>
                            )}
                        </span>
                    </label>
                </div>
                <input
                    className="btn btn-active btn-primary w-full text-white"
                    type="submit"
                    value="Add Doctor"
                />
            </form>
        </div>
    );
};

export default AddDoctor;
