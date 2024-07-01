import { Attribute } from "@/Components";
import { SortIcon } from "@/Components/icons";
import {
    BuildingOfficeIcon,
    MapPinIcon,
    TagIcon,
    UserIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function AmTableClient({ data, keySearch }) {
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(keySearch.toLowerCase())
    );

    return (
        <table class="w-full text-sm text-left rtl:text-right text-tertiary">
        {/* Header */}
        <thead class="text-xs text-tertiary uppercase bg-white  ">
            <tr>
                <th scope="col" class="px-6 py-3 flex">
                    <Attribute name="Nama Klien" >
                        <BuildingOfficeIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                    </Attribute>
                    <button><SortIcon /></button>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <Attribute name="Lokasi" >
                            <MapPinIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                        </Attribute>
                        <button><SortIcon /></button>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <Attribute name="Status Klien" >
                            <TagIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                        </Attribute>
                        <button><SortIcon /></button>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <Attribute name="Visited By" >
                            <UsersIcon className="w-4 h-4 mr-1 text-primary" stroke-width="2" />
                        </Attribute>
                        <button><SortIcon /></button>
                    </div>
                </th>
            </tr>
        </thead>

        {/* Body */}
        <tbody>
            {filteredData.map((klien, index) => (
                <tr key={index} class="bg-white hover:bg-secondary-100 border-b">
                    <th
                        scope="row"
                        class="px-6 py-4 font-body-sm text-tertiary whitespace-nowrap"
                    >
                        <Link href={`/klien/${klien.slug}`} className="hover:text-primary">{klien.name}</Link>
                    </th>
                    <td class="px-6 py-4">
                        <p className="">{klien.location}</p>
                    </td>
                    <td class="px-6 py-4">
                        <div className="border border-tertiary flex-center w-fit px-2 rounded-full">
                            <Attribute name={klien.status} />
                        </div>
                    </td>
                    <td class="px-6 py-4">

                        {klien.usersName && klien.usersName.length > 0 ? (
                            klien.usersName.map((userName, index2) => (
                                <div key={index2} className="border border-tertiary flex-center w-fit px-2 mb-2 rounded-full">
                                    <Attribute name={userName.split(" ").slice(0, 2).join(" ")} >
                                        <UserIcon className="text-primary w-4" />
                                    </Attribute>
                                </div>
                            ))
                        ) : (
                            <p>Belum Ada Kunjungan</p>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
};
