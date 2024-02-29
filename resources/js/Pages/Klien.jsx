import { OptionButton } from "@/Components/buttons";
import { AmLayout } from "@/Layouts";
import { useState } from "react";
import {
    BuildingOfficeIcon,
    MapPinIcon,
    TagIcon,
    UserIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { AmTableReport, Attribute } from "@/Components";

export default function Klien({ auth, client }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <AmLayout
            user={auth.user}
            active={"klien"}
            breadcrumbItem={[
                { link: "/klien", text: "Klien", icon: "building" },
                { link: client.slug, text: client.name, icon: "building" },
            ]}
        >
            <div className="w-full flex justify-between items-start">
                <h1 className={`text-h1 mb-4`}>{client.name}</h1>
                <OptionButton
                    downloadDokumenOption={"#"}
                    editOption={"/laporan-edit/" + client.slug}
                    deleteOption={client.id}
                    setIsLoading={setIsLoading}
                    setIsError={setIsError}
                    setIsSuccess={setIsSuccess}
                />
            </div>

            {/* Attributes */}
            <table>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Lokasi" type="bold">
                            <MapPinIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <p>{client.location}</p>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Tanggal" type="bold">
                            <TagIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <p className="text-body">{client.status}</p>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Visit By" type="bold">
                            <UsersIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <div className="flex">
                            {client.usersName.map((username, index) => (
                                <div key={index} className="border w-fit border-tertiary flex-center px-4 py-1 rounded-full mr-2">{username}</div>
                            ))}
                        </div>
                    </td>
                </tr>
            </table>

            <div className="h-1 w-full bg-disable my-6"></div>

            <div class="grid grid-cols-1 md:grid-cols-6 gap-8 w-full my-10">
                <div class="col-span-4">
                    <h3 className="text-h3">Deskripsi Singkat</h3>
                    <p>{client.description}</p>

                    <h3 className="text-h3 mt-10">Laporan Terkait</h3>
                    <AmTableReport data={client.visitel_reports} keySearch={''} defaultSlug={client.slug} defaultClientName={client.name} />
                </div>
            </div>
        </AmLayout>
    )
};
