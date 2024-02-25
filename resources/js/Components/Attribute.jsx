export default function Attribute({children, slug, name}) {
    return (
        <a href={`/laporan/${slug}`} className="flex items-center py-1">
            {children}
            <p className={`text-body-sm pl-3 text-start`}>{name}</p>
        </a>
    )
}