import { MyButton, MyButtonLink, OptionButton } from "@/Components/buttons";
import { AmLayout } from "@/Layouts";
import { useEffect, useState } from "react";
import {
    ArrowUturnLeftIcon,
    MapPinIcon,
    TagIcon,
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
                    editOption={"/klien-edit/" + client.slug}
                    deleteOption={"/delete-klien/" + client.id}
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

            {/* Alert */}
            {(isLoading || isError || isSuccess) && (
                <div className="w-full h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex-center">
                    {isLoading && (
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                class="w-10 h-10 text-gray-200 animate-spin  fill-primary"
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
                        <div className="flex-center flex-col">
                            <div className="flex mb-2">
                                <p className="ml-2 text-h1 text-white">Gagal Menghapus Laporan!</p>
                            </div>
                            <MyButton name="Tutup" onClick={() => setIsError(false)} >
                                <ArrowUturnLeftIcon className="w-5 h-5 mr-1 text-white" stroke-width="2" />
                            </MyButton>
                        </div>
                    )}
                    {isSuccess && (
                        <div className="flex-center flex-col">
                            <div className="flex mb-2">
                                <p className="ml-2 text-h1 text-white">Laporan Berhasil Dihapus!</p>
                            </div>
                            <MyButtonLink name="Tutup" link ="/klien">
                                <ArrowUturnLeftIcon className="w-5 h-5 mr-1 text-white" stroke-width="2" />
                            </MyButtonLink>
                        </div>
                    )}
                </div>
            )}
        </AmLayout>
    )
};
