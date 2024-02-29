import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function OptionButton({
    deleteLaporanOption = "",
    downloadTableOption = "",
    downloadDokumenOption = "",
    editLaporanOption = "",
    setIsLoading,
    setIsError,
    setIsSuccess
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = async () => {
        if (confirm("Yakin akan menghapus laporan ini?")) {
            setIsLoading(true);
            try {
                const response = await axios.post(
                    "/delete-laporan/" + deleteLaporanOption
                );
                setIsSuccess(true);
                setTimeout(() => {
                    window.location.href = "/laporan";
                }, 3000);
            } catch (error) {
                console.error("Failed to create post:", error);
                setIsError(true);
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="relative">
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center p-1 text-center text-tertiary border-2 hover:border-tertiary border-transparent bg-white rounded-full transition-all"
                type="button"
                onClick={toggleMenu}
            >
                <EllipsisVerticalIcon className="w-10" />
            </button>
            {/* Dropdown menu */}
            <div
                id="dropdownDots"
                className={`absolute z-10 right-0 ${
                    isOpen ? "" : "hidden"
                } bg-white divide-y divide-tertiary rounded-lg shadow w-44 overflow-hidden border border-tertiary`}
            >
                <ul
                    className="py-2 text-body-sm"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    {downloadTableOption != "" && (
                        <li>
                            <Link
                                href={downloadTableOption}
                                className="block px-4 py-2 hover:bg-secondary-100"
                            >
                                Download Table
                            </Link>
                        </li>
                    )}
                    {downloadDokumenOption != "" && (
                        <li>
                            <Link
                                href={downloadDokumenOption}
                                className="block px-4 py-2 hover:bg-secondary-100"
                            >
                                Download Dokumen
                            </Link>
                        </li>
                    )}
                    {editLaporanOption != "" && (
                        <li>
                            <Link
                                href={editLaporanOption}
                                className="block px-4 py-2 hover:bg-secondary-100"
                            >
                                Edit Laporan
                            </Link>
                        </li>
                    )}
                </ul>
                {deleteLaporanOption != "" && (
                    <div
                        onClick={handleDelete}
                        className="py-2 bg-primary cursor-pointer hover:bg-primary-500 active:bg-primary-600 group"
                    >
                        <p className="block px-4 py-2 text-body-sm text-tertiar text-white">
                            Hapus
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
