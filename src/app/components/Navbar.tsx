"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    // State to track scroll position for nav transparency
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    return (
        // <nav className="bg-white shadow-md">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex justify-between h-16">
        //             <div className="flex items-center">
        //                 <Link href="/" className="flex-shrink-0 flex items-center">
        //                     <span className="text-2xl font-bold text-blue-600">BuildEaze</span>
        //                 </Link>
        //             </div>
        //             <div className="hidden md:flex items-center space-x-4">
        //                 <Link href="/plots" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Find Plots</Link>
        //                 <Link href="/designs" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">House Plans</Link>
        //                 <Link href="/contractors" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Contractors</Link>
        //                 <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">About</Link>
        //             </div>
        //             <div className="flex items-center space-x-2">
        //                 <Link href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Login</Link>
        //                 <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">Sign Up</Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>BuildEaze</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/plots" className={`px-3 py-2 rounded-md font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Find Plots</Link>
                        <Link href="/designs" className={`px-3 py-2 rounded-md font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>House Plans</Link>
                        <Link href="/contractors" className={`px-3 py-2 rounded-md font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Contractors</Link>
                        <Link href="/about" className={`px-3 py-2 rounded-md font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>About</Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Link href="/login" className={`px-3 py-2 rounded-md font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Login</Link>
                        <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
}
