import { useState } from "react";

export default function SideOpen({className, isOpen, setIsOpen}) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(true);
    };

    return (
        <div
            className={`${className} ${
                isOpen ? 'rotate-180' : ''
            } hover:cursor-pointer`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={()=>setIsOpen(!isOpen)}
        >
            {isHovered ? (
                <svg width="17" height="54" viewBox="0 0 17 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 11.25L6.25 27L6.25 42.75" stroke="#4E5764" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            ) : (
                <svg width="17" height="54" viewBox="0 0 17 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 11.25L11 26L5.25 42.75" stroke="#4E5764" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
            )}
        </div>
    );
}