import { Attribute, ChooseClient, EditorTags, EditorText } from "@/Components";
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
    DocumentArrowUpIcon,
    TrashIcon,
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
    const [title, setTitle] = useState();                           // Judul Baru
    const [clientId, setClientId] = useState(null);                 // Id Client
    const [selectedClient, setSelectedClient] = useState(null);
    const [date, setDate] = useState(getTodayDate());               // Tanggal Baru
    const [activity, setActivity] = useState()                      // Kegiatan Baru
    const [upsOrSus, setUpsOrSus] = useState("Upscale")             // Upscale atau Sustain Baru
    const [amount, setAmount] = useState()                          // Perkiraan Jumlah Baru
    const [progres, setProgres] = useState()                        // Proggress Baru
    const [editorHtml, setEditorHtml] = useState('')                // Isi Konten Baru
    const [tempImg, setTempImg] = useState([])
    const [tagsLayanan, setTagsLayanan] = useState('')              // Potensial Layanan Baru
    const [tagsKompetitor, setTagsKompetitor] = useState('')        // Info Kompetitor Baru


    // useeffect hook ini akan dijalankan jika terjadi perubahan pada state editorHtml
    useEffect(() => {
        // Fungsi untuk menghapus image yang terupload ke storage server
        const deleteImageFromServer = async (imageName) => {
            // Jika di dalam state editorHtml terdapat nama image ini
            if(!editorHtml.includes(imageName)){
                try {
                    // Kirim perintah untuk menghapus image tersebut
                    const response = await axios.post('/delete-image', {
                        imageName: imageName
                    });
                    // Hapus pula nama image dari state array tempImg
                    setTempImg(prevTempImg => prevTempImg.filter(name => name !== imageName))
                    return response.data;
                } catch (error) {
                    console.error('Failed to delete image:', error);
                    throw error;
                }
            }
        };

        // Selama tempImg tidak kosong
        if (tempImg.length > 0) {
            // untuk setiap nama image ditempImg
            tempImg.forEach((imageName) => {
                // Jalankan fungsi berikut
                deleteImageFromServer(imageName);
            });
        }
    }, [editorHtml]);


    useEffect(() => {
        console.log(tempImg);
        console.log(editorHtml);
    }, [tempImg, editorHtml])
    

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
            <div class="grid grid-cols-1 md:grid-cols-6 gap-8 w-full my-10">
                <div class="col-span-4 min-h-12">
                    <h2 className="text-h2">Laporan</h2>
                    <EditorText setEditorHtml={setEditorHtml} tempImg={tempImg} setTempImg={setTempImg} />
                </div>
                <div class="col-span-2">
                    <h2 className="text-h2">Layanan Potensial</h2>
                    <EditorTags setTagsString={setTagsLayanan} placeholder='Tag Layanan (Pisah dengan koma ",")' />
                    <h2 className="text-h2 mt-5">Info Kompetitor</h2>
                    <EditorTags setTagsString={setTagsKompetitor} placeholder='Tag Kompetitor (Pisah dengan koma ",")' />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-36 mb-20 flex">
                <MyButton name="Simpan" className="mr-4">
                    <DocumentArrowUpIcon className="w-5 text-white" stroke-width="2" />
                </MyButton>
                <MyButton onClick={() => window.history.back()} name="Batal" type="secondary">
                    <TrashIcon className="w-5 text-tertiary" stroke-width="2" />
                </MyButton>
            </div>
        </AmLayout>
    );
}
