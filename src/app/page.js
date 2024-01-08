"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [date_birth, setDateBirth] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(null);
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        formData.append("password", password);
        formData.append("confirm_password", confirm_password);

        const response = await fetch("/api/mahasiswa", {
            method: "POST",
            body: formData,
        });

        const responseData = await response.json();

        if (responseData.success) {
            Swal.fire({
                title: "Sukses",
                text: responseData.message,
                icon: "success",
                confirmButtonText: "OK",
            });
            setName("");
            setDateBirth("");
            setEmail("");
            setPhone("");
            setAddress("");
            setPassword("");
            setConfirmPassword("");
            setPicture(null);
            document.getElementById("picture").value = "";
        } else {
            Swal.fire({
                title: "Gagal",
                text: responseData.message,
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <main className="flex min-h-screen flex-row items-center justify-center p-10">
            <div className="w-full lg:w-2/5 md:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    className="mx-auto mb-6"
                    width={90}
                    height={90}
                />
                <p className="text-center font-bold text-lg">Selamat datang!</p>
                <p className="text-center mb-6">
                    Silahkan lengkapi data diri anda untuk mendaftar
                </p>
                <form autoComplete="off" onSubmit={handleSubmit}>
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
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setDateBirth(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPhone(e.target.value)}
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
                            onChange={(e) => setPicture(e.target.files[0])}
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
                            onChange={(e) => setAddress(e.target.value)}
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Kata Sandi
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirm_password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Konfirmasi Kata Sandi
                        </label>
                        <input
                            type="password"
                            value={confirm_password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
                <hr className="my-6" />
                <div className="flex justify-center">
                    <Link href={"/mahasiswa"}>
                        <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Daftar Mahasiswa
                        </button>
                    </Link>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        </main>
    );
}
