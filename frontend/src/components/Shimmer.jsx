import React from "react";

const Shimmer = ({ count = 6 }) => {
    const shimmerArray = Array(count).fill(0);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {shimmerArray.map((_, idx) => (
                <div
                    key={idx}
                    className="bg-gray-200 animate-pulse h-56 rounded-lg flex flex-col items-center p-4"
                >
                    {/* Image placeholder */}
                    <div className="bg-gray-300 w-24 h-24 mb-4 rounded-full"></div>
                    {/* Title placeholder */}
                    <div className="bg-gray-300 h-6 w-32 mb-2 rounded"></div>
                    {/* Subtitle placeholder */}
                    <div className="bg-gray-300 h-4 w-20 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
