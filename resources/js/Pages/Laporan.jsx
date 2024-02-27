import { Attribute } from "@/Components";
import OptionButton from "@/Components/buttons/OptionButton";
import { RupiahIcon } from "@/Components/icons";
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
import { useEffect } from "react";

export default function Laporan({ auth, laporan }) {
    const pemisahKoma = (obj) => {
        return obj.split(", ");
    };

    useEffect(() => {}, []);

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
                <OptionButton downloadDokumenOption={true} editLaporanOption={true} deleteLaporanOption={true} />
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
                            href={`/klien/ ${laporan.visitel_client.slug}`}
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
                    <h3 className="text-h3">Laporan</h3>
                    <div dangerouslySetInnerHTML={{ __html: laporan.content }} />
                </div>
                <div class="col-span-2">
                    <h3 className="text-h3 mb-3">Layanan Potensial</h3>
                    <div className="flex flex-wrap mb-10">
                        {pemisahKoma(laporan.potential_product).map((service, index) => (
                            <div className="border w-fit border-tertiary flex-center px-4 py-1 mr-2 rounded-full">
                                <p key={index} className="text-body">{service}</p>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-h3 mb-3">Info Kompetitor</h3>
                    <div className="flex flex-wrap mb-10">
                        {pemisahKoma(laporan.info_competitor).map((service, index) => (
                            <div className="border w-fit border-tertiary flex-center px-4 py-1 mr-2 rounded-full">
                                <p key={index} className="text-body">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AmLayout>
    );
}
