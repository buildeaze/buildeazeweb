"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
    // State to track scroll position for nav transparency
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { user, logout } = useAuth();
    
    // Check if current page should have a solid navbar
    const isSolidNavbar = pathname === '/login' || pathname === '/register';

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isSolidNavbar || scrolled ? 'bg-[#F9F6F2]/95 backdrop-blur-md shadow-md' : 'bg-transparent'
            }`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className={`text-2xl font-bold ${
                                isSolidNavbar || scrolled ? 'text-[#1A472A]' : 'text-white'
                            }`}>BuildEaze</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link 
                            href="/plots" 
                            className={`px-3 py-2 rounded-md font-medium transition-colors ${
                                isSolidNavbar || scrolled 
                                    ? 'text-[#2F2F2F] hover:text-[#1A472A]' 
                                    : 'text-white hover:text-[#F9F6F2]'
                            }`}
                        >
                            Find Plots
                        </Link>
                        <Link 
                            href="/projects" 
                            className={`px-3 py-2 rounded-md font-medium transition-colors ${
                                isSolidNavbar || scrolled 
                                    ? 'text-[#2F2F2F] hover:text-[#1A472A]' 
                                    : 'text-white hover:text-[#F9F6F2]'
                            }`}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/contractors" 
                            className={`px-3 py-2 rounded-md font-medium transition-colors ${
                                isSolidNavbar || scrolled 
                                    ? 'text-[#2F2F2F] hover:text-[#1A472A]' 
                                    : 'text-white hover:text-[#F9F6F2]'
                            }`}
                        >
                            Contractors
                        </Link>
                        <Link 
                            href="/about" 
                            className={`px-3 py-2 rounded-md font-medium transition-colors ${
                                isSolidNavbar || scrolled 
                                    ? 'text-[#2F2F2F] hover:text-[#1A472A]' 
                                    : 'text-white hover:text-[#F9F6F2]'
                            }`}
                        >
                            About
                        </Link>
                        {user ? (
                            <div className="flex items-center gap-4">
                                <div className={`flex items-center gap-2 ${
                                    isSolidNavbar || scrolled 
                                        ? 'text-[#2F2F2F]' 
                                        : 'text-white'
                                }`}>
                                    <User className="w-5 h-5" />
                                    <span>{user.name}</span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="flex items-center gap-2 bg-[#1A472A] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#1A472A]/90 transition-all duration-300"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link 
                                href="/login" 
                                className="bg-[#DAA520] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#C69320] transition-all duration-300 shadow-lg shadow-[#DAA520]/20 hover:shadow-[#DAA520]/30"
                            >
                                Get Started
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}