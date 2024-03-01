import { Attribute } from "@/Components"
import { AmLayout } from "@/Layouts"
import { useEffect, useState } from "react"
import {
    MapPinIcon,
    HashtagIcon,
    DocumentArrowUpIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { MyButton } from "@/Components/buttons";

export default function KlienEdit({ auth, client, nama_klien }) {
    const [nameExist, setNameExist] = useState(false)

    const [name, setName] = useState(client.name)
    const [slug, setSlug] = useState(client.slug)
    const [location, setLocation] = useState(client.location)
    const [description, setDescription] = useState(client.description)
    const [status, setStatus] = useState(client.status)
    
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

    const handleNameChange = (e) => {
        setName(e.target.value);
        setSlug(slugify(e.target.value));
    };

    useEffect(() => nama_klien.includes(name.toLowerCase()) && name !== client.name ? setNameExist(true) : setNameExist(false), [name]);


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEditedData = async (postData) => {
        setIsLoading(true)
        console.log(postData);
        try {
            const response = await axios.post("/update-klien/" + client.id, postData);
            setIsSuccess(true);
            setTimeout(() => {
                window.location.href = "/klien/" + slug;
            }, 3000)
        } catch (error) {
            console.error("Failed to create post:", error);
            setIsError(true);
        }
        setIsLoading(false);
    };

    const handleSubmit = () => {
        sendEditedData({
            name: name,
            slug: slug,
            location: location,
            description: description,
            // visitel_witels_id: client.visitel_witels_id,
            status: status,
        })
    }

    return (
        <AmLayout
            user={auth.user}
            active={"klien"}
            breadcrumbItem={[
                { link: "/klien", text: "Klien", icon: "building" },
                { link: "/klien-edit", text: "Edit: " + client.name, icon: "building" },
            ]}
        >
            <div className="w-full flex flex-col justify-between items-start">
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="text-h1 mb-4 placeholder:text-disable border-0 outline-none focus:ring-0"
                    placeholder="Nama Klien"
                />
                {nameExist && <p className="-mt-4 mb-5 text-body"><span className="text-body-heavy text-primary">Maaf</span> - Client Sudah Ada!</p>}
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
                        <div className="flex start py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full">
                            <input
                                type="text"
                                className="placeholder:text-disable border-0 outline-none focus:ring-0"
                                placeholder="Jl. Dimana Aja"
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="pr-10 pb-1">
                        <Attribute name="Status" type="bold">
                            <HashtagIcon
                                className="w-6 h-6 mr-1 text-primary"
                                stroke-width="2"
                            />
                        </Attribute>
                    </td>
                    <td>
                        <select
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            className="py-1 px-2 rounded-md border-2 border-disable hover:border-tertiary-100 w-full"
                        >
                            <option value="Claon Client">Claon Client</option>
                            <option value="Client Baru">Client Baru</option>
                            <option value="Client Lama">Client Lama</option>
                        </select>
                    </td>
                </tr>
            </table>

            <div className="h-1 w-full bg-disable my-6"></div>

            <div class="grid grid-cols-1 md:grid-cols-6 gap-8 w-full my-10">
                <div class="col-span-4 min-h-12">
                    <h2 className="text-h2">Deskripsi</h2>
                    <textarea id="message" rows="5" class="block p-2.5 w-full text-body text-tertiary bg-gray-50 rounded-lg border border-secondary focus:ring-tertiary focus:border-tesrtiary" placeholder="Tulis disini..." value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 mb-20 flex">
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

            {(isLoading || isError || isSuccess) && (
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
                            <p className="ml-2 text-h1 text-white">Gagal Update Klien</p>
                        </div>
                    )}
                    {isSuccess && (
                        <div className="flex">
                            <p className="ml-2 text-h1 text-white">Update Klien Berhasil</p>
                        </div>
                    )}
                </div>
            )}
        </AmLayout>
    );
}
