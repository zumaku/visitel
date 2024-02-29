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
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // Calon Data Baru
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [clientId, setClientId] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [date, setDate] = useState(getTodayDate());
    const [activity, setActivity] = useState('Opportunity');
    const [upsOrSus, setUpsOrSus] = useState("Upscale");
    const [amount, setAmount] = useState();
    const [progres, setProgres] = useState('Terencana');
    const [editorHtml, setEditorHtml] = useState("");
    const [tempImg, setTempImg] = useState([]);
    const [tagsLayanan, setTagsLayanan] = useState("");
    const [tagsKompetitor, setTagsKompetitor] = useState("");

    useEffect(() => {
        const deleteImageFromServer = async (imageName) => {
            if (!editorHtml.includes(imageName)) {
                try {
                    const response = await axios.post("/delete-image", {
                        imageName: imageName,
                    });
                    setTempImg((prevTempImg) =>
                        prevTempImg.filter((name) => name !== imageName)
                    );
                    return response.data;
                } catch (error) {
                    console.error("Failed to delete image:", error);
                    throw error;
                }
            }
        };

        if (tempImg.length > 0) {
            tempImg.forEach((imageName) => {
                deleteImageFromServer(imageName);
            });
        }
    }, [editorHtml]);

    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
    };

    // useEffect(() => console.log(clientId), [clientId])
    // useEffect(() => console.log(selectedClient), [selectedClient])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setSlug(slugify(e.target.value));
    };

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendNewReport = async (postData) => {
        try {
            console.log(postData);
            const response = await axios.post("/upload-laporan-baru", postData);
            console.log("Response from server:", response.data);
            setIsSuccess(true);
            setTimeout(() => {
                window.location.href = "/laporan/" + slug;
            }, 3000)
            // return response;
        } catch (error) {
            console.error("Failed to create post:", error);
            setIsError(true);
            // throw error;
        }
        setIsLoading(false);
    };

    const handleSubmit = () => {
        sendNewReport({
            name: title,
            slug: slug,
            date: date,
            visitel_clients_id: clientId,
            status: progres,
            ups_or_sus: upsOrSus,
            amount: amount,
            activity: activity,
            potential_product: tagsLayanan,
            info_competitor: tagsKompetitor,
            content: editorHtml,
        });
    };

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
                    onChange={handleTitleChange}
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
                        <select
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            className="py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full"
                        >
                            <option value="Opportunity" selected="selected">Opertunity</option>
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
                                <input
                                    type="number"
                                    className="placeholder:text-disable border-0 outline-none focus:ring-0"
                                    placeholder="100000"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
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
                        <select
                            value={progres}
                            onChange={(e) => setProgres(e.target.value)}
                            className="py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full"
                        >
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
                    <EditorText
                        setEditorHtml={setEditorHtml}
                        tempImg={tempImg}
                        setTempImg={setTempImg}
                    />
                </div>
                <div class="col-span-2">
                    <h2 className="text-h2">Layanan Potensial</h2>
                    <EditorTags
                        setTagsString={setTagsLayanan}
                        placeholder='Tag Layanan (Pisah dengan koma ",")'
                    />
                    <h2 className="text-h2 mt-5">Info Kompetitor</h2>
                    <EditorTags
                        setTagsString={setTagsKompetitor}
                        placeholder='Tag Kompetitor (Pisah dengan koma ",")'
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-36 mb-20 flex">
                <MyButton onClick={handleSubmit} name="Simpan" className="mr-4">
                    <DocumentArrowUpIcon
                        className="w-5 text-white"
                        stroke-width="2"
                    />
                </MyButton>
                <MyButton
                    onClick={() => window.history.back()}
                    name="Batal"
                    type="secondary"
                >
                    <TrashIcon className="w-5 text-tertiary" stroke-width="2" />
                </MyButton>
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
                            <p className="ml-2 text-h1 text-white">Gagal Upload</p>
                        </div>
                    )}
                    {isSuccess && (
                        <div className="flex">
                            <p className="ml-2 text-h1 text-white">Upload berhasil</p>
                        </div>
                    )}
                </div>
            )}
        </AmLayout>
    );
}
