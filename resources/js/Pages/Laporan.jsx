import { Attribute } from "@/Components";
import { OptionButton } from "@/Components/buttons";
import { RupiahIcon } from "@/Components/icons";
import { useStyledHTMLHook } from "@/Hooks";
import { AmLayout } from "@/Layouts";
import {
    BuildingOfficeIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    EllipsisVerticalIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    FireIcon,
    PauseCircleIcon,
    PlayCircleIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useState } from "react";
export default function Laporan({ auth, laporan }) {
    const { parseStyledHTML  } = useStyledHTMLHook(laporan.content)

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const pemisahKoma = (obj) => {
        return obj.split(",");
    };

    return (
        <AmLayout
            user={auth.user}
            active={"laporan"}
            breadcrumbItem={[
                { link: "/laporan", text: "Laporan", icon: "docs" },
                { link: laporan.slug, text: laporan.name, icon: "doc" },
            ]}
        >
            <div className="w-full flex justify-between items-start">
                <h1 className={`text-h1 mb-4`}>{laporan.name}</h1>
                <OptionButton
                    downloadDokumenOption={"#"}
                    editOption={"/laporan-edit/" + laporan.slug}
                    deleteOption={laporan.id}
                    setIsLoading={setIsLoading}
                    setIsError={setIsError}
                    setIsSuccess={setIsSuccess}
                />
            </div>

            {/* Attributes */}
            <table>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Client" type="bold">
                            <BuildingOfficeIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <Link
                            href={`/klien/${laporan.visitel_client.slug}`}
                            className="text-body"
                        >
                            {laporan.visitel_client.name}
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Tanggal" type="bold">
                            <CalendarDaysIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <p className="text-body">{laporan.date}</p>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Aktivitas" type="bold">
                            <ChatBubbleLeftRightIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <div className="border w-fit border-tertiary flex-center px-4 py-1 rounded-full">
                            {laporan.activity}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Ups/Sus" type="bold">
                            <RupiahIcon
                                className="w-6 h-6 mr-1 stroke-primary"
                                stroke="16"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <div className="flex">
                            {laporan.ups_or_sus === "Upscale" && (
                                <ArrowTrendingUpIcon className="w-5 mr-2 text-primary" />
                            )}
                            {laporan.ups_or_sus === "Sustain" && (
                                <ArrowTrendingDownIcon className="w-5 mr-2 text-primary" />
                            )}
                            <p>{laporan.amount}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Proggress" type="bold">
                            <FireIcon
                                className="w-6 h-6 mr-1 stroke-primary"
                                stroke="16"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <div className="border border-tertiary flex-center w-fit px-2 rounded-full">
                            <Attribute name={laporan.status}>
                                {laporan.status === "Terencana" && (
                                    <PauseCircleIcon className="w-4 mr-2 text-primary" />
                                )}
                                {laporan.status === "Proses" && (
                                    <PlayCircleIcon className="w-4 mr-2 text-primary" />
                                )}
                                {laporan.status === "Selesai" && (
                                    <CheckCircleIcon className="w-4 mr-2 text-primary" />
                                )}
                            </Attribute>
                        </div>
                    </td>
                </tr>
            </table>

            <div className="h-1 w-full bg-disable my-6"></div>

            {/* Content */}
            <div class="grid grid-cols-1 md:grid-cols-6 gap-8 w-full my-10">
                <div class="col-span-4">
                    <div>
                        {parseStyledHTML()}
                    </div>
                </div>
                <div class="col-span-2">
                    <h3 className="text-h3 mb-3">Layanan Potensial</h3>
                    <div className="flex flex-wrap mb-10">
                        {pemisahKoma(laporan.potential_product).map(
                            (service, index) => (
                                <div className="border w-fit border-tertiary flex-center px-4 py-1 mr-2 mb-1 rounded-full">
                                    <p key={index} className="text-body">
                                        {service}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                    <h3 className="text-h3 mb-3">Info Kompetitor</h3>
                    <div className="flex flex-wrap mb-10">
                        {pemisahKoma(laporan.info_competitor).map(
                            (service, index) => (
                                <div className="border w-fit border-tertiary flex-center px-4 py-1 mr-2 mb-1 rounded-full">
                                    <p key={index} className="text-body">
                                        {service}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Alert */}
            {isLoading || isError || isSuccess && (
                <div className="w-full h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex-center">
                    {isLoading && (
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                class="w-8 h-8 text-gray-200 animate-spin  fill-primary"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    )}
                    {isError && (
                        <div className="flex">
                            <p className="ml-2 text-h1 text-white">Gagal Menghapus Laporan!</p>
                        </div>
                    )}
                    {isSuccess && (
                        <div className="flex">
                            <p className="ml-2 text-h1 text-white">Laporan Berhasil Dihapus!</p>
                        </div>
                    )}
                </div>
            )}
        </AmLayout>
    );
}
