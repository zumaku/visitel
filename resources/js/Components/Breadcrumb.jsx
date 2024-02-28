import { HomeIcon, DocumentDuplicateIcon, BuildingOfficeIcon, DocumentTextIcon, UserGroupIcon, UserIcon, DocumentPlusIcon } from "@heroicons/react/24/outline" 
import { Link } from "@inertiajs/react"

const returnIcon = (icon) => {
    if(icon === "home") return <HomeIcon className='text-primary w-5 h-5' />
    else if (icon === "docs") return <DocumentDuplicateIcon className='text-primary w-5 h-5' />
    else if (icon === "doc") return <DocumentTextIcon className='text-primary w-5 h-5' />
    else if (icon === "add_doc") return <DocumentPlusIcon className='text-primary w-5 h-5' />
    else if (icon === "building") return <BuildingOfficeIcon className='text-primary w-5 h-5' />
    else if (icon === "users") return <UserGroupIcon className='text-primary w-5 h-5' />
    else if (icon === "user") return <UserIcon className='text-primary w-5 h-5' />
    else return <DocumentTextIcon className='text-primary w-5 h-5' />
}

const Breadcrumb = ({ items }) => {
    return (
        <ul className="flex">
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.link} className='flex items-center'>
                        {returnIcon(item.icon)}
                        <p className={`text-body-sm-heavy pl-1`}>{item.text}</p>
                        {index < items.length - 1 && (
                            <p className={`text-body-sm-heavy px-1`}>/</p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumb;