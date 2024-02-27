import { Attribute } from "@/Components";
import { MyButton } from "@/Components/buttons";
import { SearchForm } from "@/Components/forms";
import { RupiahIcon, SortIcon } from "@/Components/icons";
import { AmLayout } from "@/Layouts";
import {
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    BuildingOfficeIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    DocumentIcon,
    DocumentPlusIcon,
    EllipsisHorizontalCircleIcon,
    FireIcon,
    FunnelIcon,
    PauseCircleIcon,
    PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function AmLaporan({ auth, semua_laporan }) {
    console.log(semua_laporan);

    return (
        <AmLayout
            user={auth.user}
            active={"laporan"}
            breadcrumbItem={[
                { link: "/laporan", text: "Laporan", icon: "docs" },
            ]}
        >
            <div className="w-full flex justify-between items-start">
                <h1 className={`text-h1 mb-4`}>Laporan</h1>
                <button>
                    <EllipsisHorizontalCircleIcon className="w-10 h-10" />
                </button>
            </div>
            <div className="h-1 w-full bg-disable mb-4"></div>
            <div className="flex justify-between">
                <div className="flex">
                    <MyButton name="Laporan Baru" type="primary">
                        <DocumentPlusIcon className="w-5 h-5" />
                    </MyButton>
                    <MyButton className="ml-4" name="Filter" type="secondary">
                        <FunnelIcon className="w-5 h-5" />
                    </MyButton>
                </div>
                <SearchForm />
            </div>

            {/* Tables */}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-12">
                <table class="w-full text-sm text-left rtl:text-right text-tertiary">
                    <thead class="text-xs text-tertiary uppercase bg-white  ">
                        <tr>
                            <th scope="col" class="px-6 py-3 flex">
                                <Attribute name="Docs" >
                                    <DocumentIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                                </Attribute>
                                <button><SortIcon /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    <Attribute name="Client" >
                                        <BuildingOfficeIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                                    </Attribute>
                                    <button><SortIcon /></button>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    <Attribute name="Tanggal" >
                                        <CalendarDaysIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                                    </Attribute>
                                    <button><SortIcon /></button>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    <Attribute name="Activity" >
                                        <ChatBubbleLeftRightIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                                    </Attribute>
                                    <button><SortIcon /></button>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    <Attribute name="Ups/Sus" >
                                        <RupiahIcon className="w-4 h-4 mr-1 stroke-primary"/>
                                    </Attribute>
                                    <button><SortIcon /></button>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    <Attribute name="Progres" >
                                        <FireIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                                    </Attribute>
                                    <button><SortIcon /></button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {semua_laporan.map((laporan, index) => (
                            <tr key={index} class="bg-white hover:bg-secondary-100 border-b">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-body-sm text-tertiary whitespace-nowrap"
                                >
                                    <Link href={`/laporan/${laporan.slug}`}>{laporan.name}</Link>
                                </th>
                                <td class="px-6 py-4">
                                    <Link href={`/client/${laporan.visitel_client.slug}`}>{laporan.visitel_client.name}</Link>
                                </td>
                                <td class="px-6 py-4">15 January 2023</td>
                                <td class="px-6 py-4">
                                    <div className="border w-fit border-tertiary flex-center px-2 py-1 rounded-full">{laporan.activity}</div>
                                </td>
                                <td class="px-6 py-4 flex items-center">
                                    {laporan.ups_or_sus === "Upscale" && <ArrowTrendingUpIcon className="w-5 mr-2 text-primary" />}
                                    {laporan.ups_or_sus === "Sustain" && <ArrowTrendingDownIcon className="w-5 mr-2 text-primary" />}
                                    <p>{laporan.amount}</p>
                                </td>
                                <td class="px-6 py-4">
                                    <div className="border border-tertiary flex-center w-fit px-2 rounded-full">
                                        <Attribute name={laporan.status} >
                                            {laporan.status === "Terencana" && <PauseCircleIcon className="w-4 mr-2 text-primary" />}
                                            {laporan.status === "Proses" && <PlayCircleIcon className="w-4 mr-2 text-primary" />}
                                            {laporan.status === "Selesai" && <CheckCircleIcon className="w-4 mr-2 text-primary" />}
                                        </Attribute>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AmLayout>
    );
}
