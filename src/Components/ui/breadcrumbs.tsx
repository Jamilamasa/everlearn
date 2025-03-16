import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
    const location = useLocation();

    // Extract the path segments from the URL
    const pathSegments: string[] = location.pathname.split("/").filter((segment) => segment);

    return (
        <div className="bg-gray-200 p-5 mt-20">
            <nav className="text-sm text-gray-600 mx-4 md:mx-16 lg:mx-64">
                <ul className="flex flex-wrap gap-2 md:space-x-2">
                    <li>
                        <Link to="/" className="hover:underline font-bold">
                            Homepage
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        // Construct the URL for each breadcrumb
                        const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
                        const isLast: boolean = index === pathSegments.length - 1;

                        return (
                            <li key={url} className="flex items-center">
                                <span className="">&gt; </span>
                                {isLast ? (
                                    <span className="text-gray-500">
                                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                    </span>
                                ) : (
                                    <Link to={url} className="hover:underline font-bold">
                                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
