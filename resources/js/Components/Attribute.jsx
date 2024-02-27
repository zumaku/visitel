import { Link } from "@inertiajs/react";

export default function Attribute({children, name = "name", className="", type=""}) {
    return (
        <div className={`flex items-center py-1 ${className}`}>
            {children}
            <p className={`pl-1 text-start ${type == "bold" && 'text-body-heavy'}`}>{name}</p>
        </div>
    )
}