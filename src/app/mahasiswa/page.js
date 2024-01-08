"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Mahasiswa() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [date_birth, setDateBirth] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(null);
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/mahasiswa");
                const result = await response.json();
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        document.head.querySelector("title").innerText = "Daftar Mahasiswa";
        return () => {
            document.head.querySelector("title").innerText = "Register";
        };
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Konfirmasi",
            text: "Apakah Anda yakin ingin menghapus data ini?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
                const response = await fetch(`/api/mahasiswa/${id}`, {
                    method: "DELETE",
                });

                const responseData = await response.json();

                if (responseData.success) {
                    Swal.fire({
                        title: "Sukses",
                        text: responseData.message,
                        icon: "success",
                        showConfirmButton: true,
                    });
                    const fetchData = async () => {
                        try {
                            setIsLoading(true);
                            const response = await fetch("/api/mahasiswa");
                            const result = await response.json();
                            setData(result);
                            setIsLoading(false);
                        } catch (error) {
                            console.error("Error fetching data:", error);
                        }
                    };

                    fetchData();
                } else {
                    Swal.fire({
                        title: "Gagal",
                        text: responseData.message,
                        icon: "error",
                        showConfirmButton: true,
                    });
                }
            }
        });
    };

    const openModal = (item) => {
        setIsModalOpen(true);
        setId(item.id);
        setName(item.name);
        setDateBirth(item.date_birth);
        setEmail(item.email);
        setPhone(item.phone);
        setAddress(item.address);
        setPicture(null);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = async () => {
        Swal.fire({
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const formData = new FormData();
        formData.append("name", name);
        formData.append("date_birth", date_birth);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("picture", picture);
        formData.append("address", address);

        const response = await fetch(`/api/mahasiswa/${id}`, {
            method: "PUT",
            body: formData,
        });

        const responseData = await response.json();

        if (responseData.success) {
            Swal.fire({
                title: "Sukses",
                text: responseData.message,
                icon: "success",
                showConfirmButton: true,
            });
            const fetchData = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/mahasiswa");
                    const result = await response.json();
                    setData(result);
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
            closeModal();
        } else {
            Swal.fire({
                title: "Gagal",
                text: responseData.message,
                icon: "error",
                showConfirmButton: true,
            });
        }
    };

    return (
        <main className=" min-h-screen p-10 bg-white">
            <p className="text-center font-bold text-lg mb-3">
                Daftar Mahasiswa
            </p>
            {isLoading ? (
                <div className="loading">
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
                        <Link href={"/"}>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">
                                Register
                            </button>
                        </Link>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-8 h-8 text-gray-200 dark:text-gray-700"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24"></div>
                                </div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-8 h-8 text-gray-200 dark:text-gray-700"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24"></div>
                                </div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-8 h-8 text-gray-200 dark:text-gray-700"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24"></div>
                                </div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-8 h-8 text-gray-200 dark:text-gray-700"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24"></div>
                                </div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-8 h-8 text-gray-200 dark:text-gray-700"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24"></div>
                                </div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="list">
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
                        <Link href={"/"}>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">
                                Register
                            </button>
                        </Link>
                        {data.data.length == 0 ? (
                            <p className="text-center py-6">Tidak ada data</p>
                        ) : (
                            data.data.map((item) => (
                                <li className="py-3 sm:py-4" key={item.id}>
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {item.id}
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="w-8 h-8 rounded-full object-cover"
                                                src={"/profile/" + item.picture}
                                                alt={item.name}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {item.email}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-3 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    fill="currentColor"
                                                    className="bi bi-trash3"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => openModal(item)}
                                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-3 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    fill="currentColor"
                                                    className="bi bi-pencil-square"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
            {isModalOpen && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div
                        className="fixed inset-0 z-10 w-screen overflow-y-auto"
                        style={{
                            animation: `${
                                isModalOpen ? "fadeIn" : "fadeOut"
                            } 0.3s ease-in-out`,
                        }}
                    >
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <h3
                                        className="text-base font-semibold leading-6 text-gray-900"
                                        id="modal-title"
                                    >
                                        Edit Data
                                    </h3>
                                    <div className="mt-2">
                                        <form autoComplete="off">
                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Nama
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) =>
                                                            setName(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="date_birth"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Tanggal Lahir
                                                    </label>
                                                    <input
                                                        type="date"
                                                        value={date_birth}
                                                        onChange={(e) =>
                                                            setDateBirth(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Alamat Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="phone"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Nomor Telepon
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={phone}
                                                        onChange={(e) =>
                                                            setPhone(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    htmlFor="photo"
                                                >
                                                    Unggah Foto
                                                </label>
                                                <input
                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                                                    onChange={(e) =>
                                                        setPicture(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                    type="file"
                                                    accept=".jpg, .jpeg, .png"
                                                    required
                                                    id="picture"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label
                                                    htmlFor="address"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Alamat
                                                </label>
                                                <textarea
                                                    value={address}
                                                    onChange={(e) =>
                                                        setAddress(
                                                            e.target.value
                                                        )
                                                    }
                                                    rows={4}
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                ></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={handleUpdate}
                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                    >
                                        Simpan
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        </main>
    );
}
