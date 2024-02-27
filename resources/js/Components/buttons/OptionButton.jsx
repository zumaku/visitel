import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function OptionButton({ deleteLaporanOption, downloadTableOption, downloadDokumenOption, editLaporanOption }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                    {downloadTableOption && (
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-secondary-100"
                        >
                            Download Table
                        </a>
                    </li>
                    )}
                    {downloadDokumenOption && (
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-secondary-100"
                        >
                            Download Dokumen
                        </a>
                    </li>
                    )}
                    {editLaporanOption && (
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-secondary-100"
                        >
                            Edit Laporan
                        </a>
                    </li>
                    )}
                </ul>
                {deleteLaporanOption && (
                    <div className="py-2 bg-primary hover:bg-primary-500 active:bg-primary-600 group">
                    <a
                        href="#"
                        className="block px-4 py-2 text-body-sm text-tertiar text-white"
                    >
                        Hapus
                    </a>
                </div>
                )}
            </div>
        </div>
    );
}
