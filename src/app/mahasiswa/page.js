"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Mahasiswa() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

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

    data ? console.log(data.data) : "";

    return (
        <main className=" min-h-screen p-10 bg-white">
            <p className="text-center font-bold text-lg mb-5">
                Daftar Mahasiswa
            </p>
            {isLoading ? (
                <div className="loading">
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
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
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
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
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
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
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
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
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse animate-pulse">
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
                                <div className="inline-flex h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="list">
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
                        {data.data.length == 0 ? (
                            <p className="text-center">Tidak ada data</p>
                        ) : (
                            data.data.map((item) => (
                                <li className="py-3 sm:py-4" key={item.id}>
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="w-8 h-8 rounded-full"
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
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {item.id}
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </main>
    );
}
