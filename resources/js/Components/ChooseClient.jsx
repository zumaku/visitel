import { Attribute } from "@/Components";
import { MyButton } from "@/Components/buttons";
import { SearchForm } from "@/Components/forms";
import {
    BuildingOfficeIcon,
    HashtagIcon,
    XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function ChooseClient({ clients, closeOverlay, setClientId, setSelectedClient }) {
    const [keySearch, setKeySearch] = useState("")
    const handleChange = (event) => {
        setKeySearch(event.target.value);
    };

    const handleClicked = (client) => {
        setSelectedClient(client)
        setClientId(client.id);
        closeOverlay();
    };

    const filteredData = clients.filter((item) =>
        item.name.toLowerCase().includes(keySearch.toLowerCase())
    );

    return (
        <div className="fixed top-0 left-0 h-screen w-full z-50 flex-center">
            <div className=" w-4/5 h-4/5 rounded-xl p-10 bg-white text-tertiary overflow-hidden">
                <div className="flex justify-between w-full mb-5">
                    <SearchForm keySearch={keySearch} handleChange={handleChange} placeholder={"Cari Klien"} />
                    <MyButton name="Klien Baru">
                        <BuildingOfficeIcon className="w-6 text-white" />
                    </MyButton>
                </div>
                <div className="h-fit w-full overflow-scroll scrollbar-hide grid grid-cols-4 gap-2">
                    {filteredData.map((client, index) => (
                        <button
                            key={index}
                            className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start"
                            onClick={() => handleClicked(client)}
                        >
                            <p className="text-body-heavy">{client.name}</p>
                            <Attribute name={client.status}>
                                <HashtagIcon className="text-primary w-4" />
                            </Attribute>
                        </button>
                    ))}
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10" onClick={closeOverlay}></div>
        </div>
    );
}
