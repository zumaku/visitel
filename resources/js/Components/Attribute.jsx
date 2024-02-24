export default function Attribute({children, link, name}) {
    return (
        <a href={link} className="flex items-center py-1">
            {children}
            <p className={`text-body-sm pl-3`}>{name}</p>
        </a>
    )
}