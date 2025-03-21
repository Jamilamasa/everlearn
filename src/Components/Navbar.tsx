import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState("/");

    useEffect(() => {
        // Set the active page based on the current URL path
        setActivePage(window.location.pathname);
    }, []);

    const menuItems = [
        { name: "Home", path: "/home" },
        { name: "Courses", path: "/courses" },
        { name: "Program", path: "/program" },
    ];

    const isActive = (path: string): string => activePage === path ? "border-b-4 px-5 py-1 border-blue-800" : "";

    return (
        <div className="relative">
            {/* Navbar container */}
            <div className="flex justify-between items-center my-5 mx-5 md:mx-20">
                <Logo />
                <div className="md:hidden">
                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
                {/* Desktop Navigation */}
                <ul className="hidden md:flex md:space-x-28 ">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                className={`hover:text-blue-600 ${isActive(item.path)}`}
                                onClick={() => setActivePage(item.path)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <button className="text-lg bg-[#00599B] py-4 px-10 text-white rounded-full">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 bg-white z-10 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 md:hidden`}
            >
                <div className="flex justify-between items-center p-5">
                    <Logo />
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl focus:outline-none"
                    >
                        ✕
                    </button>
                </div>
                <ul className="space-y-5 text-center mt-10">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                className={`hover:text-blue-600 ${isActive(item.path)}`}
                                onClick={() => {
                                    setActivePage(item.path);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-10 w-full text-center">
                    <button className="bg-[#00599B] py-4 px-10 text-white rounded-full">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
