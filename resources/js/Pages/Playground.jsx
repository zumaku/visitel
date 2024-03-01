import { Attribute } from "@/Components";
import { MyButton } from "@/Components/buttons";
import { SearchForm } from "@/Components/forms";
import {
    BuildingOfficeIcon,
    HashtagIcon,
    XCircleIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function Playground() {
    return (
        <div className="fixed top-0 left-0 h-screen w-full z-50 flex-center">
            <div className=" w-4/5 h-4/5 rounded-xl p-10 bg-white text-tertiary overflow-hidden">
                <div className="flex justify-between w-full mb-5">
                    <SearchForm keySearch={""} placeholder={"Cari Klien"} />
                    <MyButton name="Klien Baru">
                        <BuildingOfficeIcon className="w-6 text-white" />
                    </MyButton>
                </div>



                <div className="h-1/2 md:h-4/5 pb-20 w-full overflow-scroll scrollbar-hide border-2 border-tertiary rounded-lg mb-5 p-3">
                    <div className="w-full flex flex-col justify-between items-start">
                        <input
                            type="text"
                            value={""}
                            className="text-h2 mb-4 placeholder:text-disable border-0 outline-none focus:ring-0"
                            placeholder="Nama Klien"
                        />
                        {/* {nameExist && <p className="-mt-4 mb-5 text-body"><span className="text-body-heavy text-primary">Maaf</span> - Client Sudah Ada!</p>} */}
                    
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
                                            // value={location}
                                            // onChange={e => setLocation(e.target.value)}
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
                                        // value={status}
                                        // onChange={e => setStatus(e.target.value)}
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

                        <div class="min-h-12 w-full">
                            <h2 className="text-h2">Deskripsi</h2>
                            <textarea id="message" rows="5" class="block p-2.5 w-full text-body text-tertiary bg-gray-50 rounded-lg border border-secondary focus:ring-tertiary focus:border-tesrtiary" placeholder="Tulis disini..."></textarea>
                        </div>
                    </div>
                </div>



                {/* <div className="h-full pb-20 w-full overflow-scroll scrollbar-hide grid grid-cols-4 gap-2">
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                    <button className="px-3 py-3 border-2 h-full w-full border-tertiary hover:bg-secondary-100 rounded-lg flex flex-col text-start" >
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name={"PT Jomblo Indonesia"}>
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                </div> */}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10" ></div>
        </div>
    );
}
