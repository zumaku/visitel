import Attribute from "./Attribute";
import { Link } from "@inertiajs/react";
import { CalendarDaysIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function AmReportCard ({link, title, activity, date}) {
    return (
        <Link href={`/laporan/${link}`} class="flex flex-col justify-between w-full h-full p-6 bg-white border border-tertiary rounded-lg shadow hover:bg-secondary-100">
            <h5 class={`text-h3 mb-2 font-bold tracking-tight`}>{title}</h5>
            <div>
                <Attribute name={activity} >
                    <ChatBubbleLeftRightIcon className='w-6 h-6 text-primary' />
                </Attribute>
                <Attribute name={date} >
                    <CalendarDaysIcon className='w-6 h-6 text-primary' />
                </Attribute>
            </div>
        </Link>
    )
}
