import { Attribute, ChooseClient, EditorText } from "@/Components";
import { MyButton, OptionButton } from "@/Components/buttons";
import { RupiahIcon } from "@/Components/icons";
import { AmLayout } from "@/Layouts";
import {
    BuildingOfficeIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    FireIcon,
    PauseCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function LaporanBaru({ auth, clients }) {
    const [isOpen, setIsOpen] = useState(false);
    const openOverlay = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeOverlay = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Calon Data Baru
    const [title, setTitle] = useState();
    const [clientId, setClientId] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [date, setDate] = useState(getTodayDate());
    const [activity, setActivity] = useState()
    const [upsOrSus, setUpsOrSus] = useState("Upscale")
    const [amount, setAmount] = useState()
    const [progres, setProgres] = useState()
    const [editorHtml, setEditorHtml] = useState('')

    return (
        <AmLayout
            user={auth.user}
            active={"laporan"}
            breadcrumbItem={[
                {
                    link: "/laporan-baru",
                    text: "Laporan Baru",
                    icon: "add_doc",
                },
            ]}
        >
            <div className="w-full flex justify-between items-start">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-h1 mb-4 placeholder:text-disable border-0 outline-none focus:ring-0"
                    placeholder="Judul Laporan"
                />
            </div>

            {/* Attributes */}
            <table>
                <tr>
                    <td className="pr-10 pb-3">
                        <Attribute name="Client" type="bold">
                            <BuildingOfficeIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        {selectedClient === null ? (
                            <button
                                onClick={openOverlay}
                                className="w-full text-body flex items-center justify-start py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-500 group"
                            >
                                Pilih Client
                            </button>
                        ) : (
                            <div className="flex items-center justify-between w-full py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 group">
                                <p className="pr-5">{selectedClient.name}</p>
                                <button>
                                    <XMarkIcon
                                        className="w-5 text-tertiary opacity-0 group-hover:opacity-100 hover:text-primary"
                                        stroke-width="2"
                                        onClick={() => setSelectedClient(null)}
                                    />
                                </button>
                            </div>
                        )}
                        {isOpen && (
                            <ChooseClient
                                clients={clients}
                                closeOverlay={closeOverlay}
                                setClientId={setClientId}
                                setSelectedClient={setSelectedClient}
                            />
                        )}
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-3">
                        <Attribute name="Tanggal" type="bold">
                            <CalendarDaysIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <input
                            type="date"
                            className="py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-3">
                        <Attribute name="Aktivitas" type="bold">
                            <ChatBubbleLeftRightIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <select value={activity} onChange={(e) => setActivity(e.target.value)} className="py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full" >
                            <option value="Opertunity">Opertunity</option>
                            <option value="Dealing">Dealing</option>
                            <option value="Visid CC">Visid CC</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-3">
                        <Attribute name="Ups/Sus" type="bold">
                            <RupiahIcon
                                className="w-6 h-6 mr-1 stroke-primary"
                                stroke="16"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <div className="flex start py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full">
                            {upsOrSus == "Upscale" ? (
                                <button onClick={() => setUpsOrSus("Sustain")}>
                                    <ArrowTrendingUpIcon className="w-5 mr-2 text-primary" />
                                </button>
                            ) : (
                                <button onClick={() => setUpsOrSus("Upscale")}>
                                    <ArrowTrendingDownIcon className="w-5 mr-2 text-primary" />
                                </button>
                            )}
                            <div className="border-l-2 border-disable flex">
                                <p className="pl-2">Rp.</p>
                                <input type="number" className="placeholder:text-disable border-0 outline-none focus:ring-0" placeholder="100000" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-3">
                        <Attribute name="Proggress" type="bold">
                            <FireIcon
                                className="w-6 h-6 mr-1 stroke-primary"
                                stroke="16"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <select value={progres} onChange={(e) => setProgres(e.target.value)} className="py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full" >
                            <option value="Terencana">Terencana</option>
                            <option value="Proses">Proses</option>
                            <option value="Selesai">Selesai</option>
                        </select>
                    </td>
                </tr>
            </table>

            <div className="h-1 w-full bg-disable my-6"></div>

            {/* Content */}
            <div class="grid grid-cols-1 md:grid-cols-6 gap-8 w-full mt-10 mb-96">
                <div class="col-span-4">
                    <EditorText setEditorHtml={setEditorHtml} />
                </div>
                <div class="col-span-2"></div>
            </div>
        </AmLayout>
    );
}
