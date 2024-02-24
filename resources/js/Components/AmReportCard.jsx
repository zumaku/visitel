import Attribute from "./Attribute";
import { BuildingOfficeIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function AmReportCard ({link, title, client, date}) {
    return (
        <a href={link} class="block w-80 p-6 bg-white border border-tertiary rounded-lg shadow hover:bg-secondary-100 h-fit">
            <h5 class={`text-h3 mb-2 font-bold tracking-tight`}>{title}</h5>
            <Attribute name={client} >
                <BuildingOfficeIcon className='w-6 h-6 text-primary' />
            </Attribute>
            <Attribute name={date} >
                <CalendarDaysIcon className='w-6 h-6 text-primary' />
            </Attribute>
        </a>
    )
}
