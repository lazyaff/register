import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Daftar Mahasiswa",
    description: "Daftar mahasiswa Universitas Jenderal Soedirman",
};

export default function Mahasiswa() {
    return (
        <main className=" min-h-screen p-10 bg-white">
            <p className="text-center font-bold text-lg mb-5">
                Daftar Mahasiswa
            </p>
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
            <div className="list">
                <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="/profile/profile.jpg"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $67
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="/profile/profile.jpg"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Thomas Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $2367
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="/profile/profile.jpg"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $367
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    );
}
