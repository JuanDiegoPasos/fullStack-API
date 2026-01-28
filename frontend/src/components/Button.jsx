    import React from "react";

    const baseClasses = "font-medium px-8 py-2 transition duration-200 focus:outline-none";

    const variants = {
    lilac: "bg-[#9D7FF7] text-white rounded-full text-[18px] hover:bg-[#8a6df2] m-4",
    pink: "bg-[#FE3F8B] text-white rounded-xl hover:bg-[#e8377f]",
    outlined: "bg-transparent text-[#9D7FF7] border-2 border-[#9D7FF7] rounded-xl hover:bg-[#f3f0ff]",
    update: "bg-[#4CAF50] text-white rounded-lg px-4 py-1.5 hover:bg-[#45a049]",
    danger: "bg-[#e53935] text-white rounded-lg px-4 py-1.5 hover:bg-[#c62828]",
    logout: "bg-[#333] text-white rounded-lg px-4 py-1.5 hover:bg-black",
    };

    export default function Button({ variant, className, children, ...props }) {
    return (
        <button
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
        >
        {children}
        </button>
    );
    }