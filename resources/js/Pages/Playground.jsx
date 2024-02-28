import { Attribute } from "@/Components";
import { MyButton } from "@/Components/buttons";
import { SearchForm } from "@/Components/forms";
import { BuildingOfficeIcon, HashtagIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Playground = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-full z-50 bg-black bg-opacity-40 flex-center">
            <div className=" w-4/5 h-4/5 rounded-xl p-10 bg-white text-tertiary overflow-hidden">
                <div className="flex justify-between w-full mb-5">
                    <SearchForm placeholder={"Cari klien"} />
                    <div className="flex">
                        <MyButton name="Klien Baru" >
                            <BuildingOfficeIcon className="w-6 text-white" />
                        </MyButton> 
                        <MyButton name="" type="secondary" className="ml-4" >
                            <XCircleIcon className="w-6" />
                        </MyButton>
                    </div>
                </div>
                <div className="h-fit w-full overflow-scroll scrollbar-hide grid grid-cols-4 gap-2">
                    <button className="px-3 py-3 border-2 h-fit w-full border-tertiary hover:bg-secondary-100 rounded-lg text-start">
                        <p className="text-body-heavy">PT Jomblo Indonesia</p>
                        <Attribute name="Client Lama" >
                            <HashtagIcon className="text-primary w-4" />
                        </Attribute>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Playground;
